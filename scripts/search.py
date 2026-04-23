#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cake Design System - CLI search tool.

Usage:
  python search.py "button success"
  python search.py "button success" --domain component
  python search.py "primary blue" --domain color
  python search.py "heading bold 20" --domain typography
  python search.py "card padding shadow" --domain spacing
  python search.py "modal" -n 10
  python search.py "button success" --json
"""

import argparse
import json
import sys
from core import search, CSV_CONFIG

def main():
    parser = argparse.ArgumentParser(description="Cake Design System Token Search")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--domain", "-d", choices=list(CSV_CONFIG.keys()), help="Search domain")
    parser.add_argument("-n", type=int, default=5, help="Max results (default: 5)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    args = parser.parse_args()

    result = search(args.query, domain=args.domain, max_results=args.n)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
        return

    if "error" in result:
        print(f"Error: {result['error']}", file=sys.stderr)
        sys.exit(1)

    print(f"\n🔍 Domain: {result['domain']}  |  Query: \"{result['query']}\"  |  Results: {result['count']}\n")

    for i, r in enumerate(result["results"], 1):
        print(f"--- Result {i} ---")
        for k, v in r.items():
            if v:
                print(f"  {k}: {v}")
        print()

if __name__ == "__main__":
    main()
