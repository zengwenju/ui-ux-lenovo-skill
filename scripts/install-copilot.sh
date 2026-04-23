#!/usr/bin/env bash
# Cake Design System Skill — Copilot Installer (macOS/Linux)
# Usage: curl -sL https://raw.githubusercontent.com/zengwenju/ui-ux-lenovo-skill/main/scripts/install-copilot.sh | bash
# Or:    bash scripts/install-copilot.sh [target-dir]

set -e
TARGET_DIR="${1:-.}"
REPO_URL="https://github.com/zengwenju/ui-ux-lenovo-skill"

echo ""
echo "  🍰 Cake Design System Skill — Copilot Installer"
echo "  ================================================"
echo ""

# Determine source
SCRIPT_DIR="$(cd "$(dirname "$0")" 2>/dev/null && pwd)" || SCRIPT_DIR=""
IS_LOCAL=false

if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/../SKILL.md" ]; then
    SOURCE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
    IS_LOCAL=true
    echo "  [Source] Local: $SOURCE_DIR"
else
    echo "  [Source] GitHub: $REPO_URL"
    TEMP_DIR=$(mktemp -d)
    git clone --depth 1 "$REPO_URL" "$TEMP_DIR" 2>/dev/null
    SOURCE_DIR="$TEMP_DIR"
fi

echo "  [Target] $TARGET_DIR"
echo ""

# 1. Install skill
echo "  [1/4] Installing skill definition..."
mkdir -p "$TARGET_DIR/.github/skills/cake-design-system"
cp "$SOURCE_DIR/SKILL.md" "$TARGET_DIR/.github/skills/cake-design-system/"
[ -d "$SOURCE_DIR/data" ] && cp -r "$SOURCE_DIR/data" "$TARGET_DIR/.github/skills/cake-design-system/"
[ -d "$SOURCE_DIR/scripts" ] && {
    mkdir -p "$TARGET_DIR/.github/skills/cake-design-system/scripts"
    cp "$SOURCE_DIR/scripts/core.py" "$SOURCE_DIR/scripts/search.py" "$TARGET_DIR/.github/skills/cake-design-system/scripts/"
}
[ -d "$SOURCE_DIR/templates" ] && cp -r "$SOURCE_DIR/templates" "$TARGET_DIR/.github/skills/cake-design-system/"
[ -d "$SOURCE_DIR/references" ] && cp -r "$SOURCE_DIR/references" "$TARGET_DIR/.github/skills/cake-design-system/"

# 2. Install prompts
echo "  [2/4] Installing prompt commands..."
mkdir -p "$TARGET_DIR/.github/prompts"
if [ -d "$SOURCE_DIR/prompts" ]; then
    cp "$SOURCE_DIR/prompts/"*.prompt.md "$TARGET_DIR/.github/prompts/" 2>/dev/null || true
fi

# 3. Install copilot-instructions
echo "  [3/4] Installing copilot instructions..."
mkdir -p "$TARGET_DIR/.github"
if [ -f "$TARGET_DIR/.github/copilot-instructions.md" ]; then
    if ! grep -q "Cake Design System" "$TARGET_DIR/.github/copilot-instructions.md"; then
        echo -e "\n\n# --- Cake Design System ---\n" >> "$TARGET_DIR/.github/copilot-instructions.md"
        cat "$SOURCE_DIR/.github/copilot-instructions.md" >> "$TARGET_DIR/.github/copilot-instructions.md"
    fi
else
    cp "$SOURCE_DIR/.github/copilot-instructions.md" "$TARGET_DIR/.github/"
fi

# 4. Copy tokens CSS
echo "  [4/4] Copying cake-tokens.css..."
if [ -d "$TARGET_DIR/src/styles" ]; then
    cp "$SOURCE_DIR/templates/cake-tokens.css" "$TARGET_DIR/src/styles/"
else
    cp "$SOURCE_DIR/templates/cake-tokens.css" "$TARGET_DIR/"
fi

# Cleanup
if [ "$IS_LOCAL" = false ] && [ -n "$TEMP_DIR" ]; then
    rm -rf "$TEMP_DIR"
fi

echo ""
echo "  ✅ Installation complete!"
echo ""
echo "  Slash commands in Copilot Chat:"
echo "    /cake-component   Generate a Cake component"
echo "    /cake-review      Review code for compliance"
echo "    /cake-tokens      Look up token values"
echo ""
