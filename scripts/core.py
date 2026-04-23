#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cake Design System - BM25 search engine for Lenovo Cake tokens & components.
Derived from ui-ux-pro-max-skill core.py (MIT License).
"""

import csv
import re
from pathlib import Path
from math import log
from collections import defaultdict

DATA_DIR = Path(__file__).parent.parent / "data"
MAX_RESULTS = 5

CSV_CONFIG = {
    "color": {
        "file": "cake-colors.csv",
        "search_cols": ["Token Key", "Hex Value", "Semantic Role", "Keywords"],
        "output_cols": ["Token Key", "Hex Value", "Usage Count", "Semantic Role", "CSS Variable", "Keywords"],
    },
    "component": {
        "file": "cake-components.csv",
        "search_cols": ["Component", "Category", "Variant", "State", "Keywords"],
        "output_cols": [
            "Component", "Category", "Variant", "State", "Size",
            "BG Token", "Text Token", "Border Token", "Radius Token",
            "Padding Token", "Shadow Token", "Font Token", "Keywords",
        ],
    },
    "typography": {
        "file": "cake-typography.csv",
        "search_cols": ["Style ID", "Semantic Role", "Keywords", "Font Size", "Font Weight"],
        "output_cols": [
            "Style ID", "Font Family", "Font Size", "Font Weight",
            "Line Height", "Letter Spacing", "CSS Variable Prefix",
            "Semantic Role", "Keywords",
        ],
    },
    "spacing": {
        "file": "cake-spacing.csv",
        "search_cols": ["Category", "Token Key", "Value", "Keywords"],
        "output_cols": ["Category", "Token Key", "Value", "CSS Variable", "Keywords"],
    },
}


# ============ BM25 ============
class BM25:
    def __init__(self, k1=1.5, b=0.75):
        self.k1 = k1
        self.b = b
        self.corpus = []
        self.doc_lengths = []
        self.avgdl = 0
        self.idf = {}
        self.doc_freqs = defaultdict(int)
        self.N = 0

    def tokenize(self, text):
        text = re.sub(r"[^\w\s]", " ", str(text).lower())
        return [w for w in text.split() if len(w) > 1]

    def fit(self, documents):
        self.corpus = [self.tokenize(doc) for doc in documents]
        self.N = len(self.corpus)
        if self.N == 0:
            return
        self.doc_lengths = [len(doc) for doc in self.corpus]
        self.avgdl = sum(self.doc_lengths) / self.N
        for doc in self.corpus:
            seen = set()
            for word in doc:
                if word not in seen:
                    self.doc_freqs[word] += 1
                    seen.add(word)
        for word, freq in self.doc_freqs.items():
            self.idf[word] = log((self.N - freq + 0.5) / (freq + 0.5) + 1)

    def score(self, query):
        query_tokens = self.tokenize(query)
        scores = []
        for idx, doc in enumerate(self.corpus):
            s = 0
            doc_len = self.doc_lengths[idx]
            tf_map = defaultdict(int)
            for w in doc:
                tf_map[w] += 1
            for token in query_tokens:
                if token in self.idf:
                    tf = tf_map[token]
                    idf = self.idf[token]
                    num = tf * (self.k1 + 1)
                    den = tf + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl)
                    s += idf * num / den
            scores.append((idx, s))
        return sorted(scores, key=lambda x: x[1], reverse=True)


# ============ helpers ============
def _load_csv(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def _search_csv(filepath, search_cols, output_cols, query, max_results):
    if not filepath.exists():
        return []
    data = _load_csv(filepath)
    documents = [" ".join(str(row.get(c, "")) for c in search_cols) for row in data]
    bm25 = BM25()
    bm25.fit(documents)
    ranked = bm25.score(query)
    results = []
    for idx, score in ranked[:max_results]:
        if score > 0:
            row = data[idx]
            results.append({c: row.get(c, "") for c in output_cols if c in row})
    return results


def detect_domain(query):
    q = query.lower()
    kw = {
        "color": ["color", "palette", "hex", "rgb", "accent", "destructive", "muted", "foreground", "background", "primary", "secondary"],
        "component": ["button", "checkbox", "radio", "switch", "toggle", "card", "drawer", "label", "loading", "table", "calendar", "dropdown", "select", "qty", "search", "slider", "textfield", "input", "tree", "uploader", "badge", "modal", "toast", "tooltip", "accordion", "breadcrumb", "footer", "navbar", "pagination", "stepper", "tabs"],
        "typography": ["font", "typography", "heading", "body", "caption", "text", "weight", "size", "semibold", "bold"],
        "spacing": ["spacing", "padding", "margin", "gap", "radius", "shadow", "border-radius", "round"],
    }
    scores = {d: sum(1 for k in ws if re.search(r"\b" + re.escape(k) + r"\b", q)) for d, ws in kw.items()}
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else "component"


def search(query, domain=None, max_results=MAX_RESULTS):
    if domain is None:
        domain = detect_domain(query)
    config = CSV_CONFIG.get(domain, CSV_CONFIG["component"])
    filepath = DATA_DIR / config["file"]
    if not filepath.exists():
        return {"error": f"File not found: {filepath}", "domain": domain}
    results = _search_csv(filepath, config["search_cols"], config["output_cols"], query, max_results)
    return {"domain": domain, "query": query, "count": len(results), "results": results}
