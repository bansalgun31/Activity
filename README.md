# Activity

A small client-side web activity/demo built with plain HTML, CSS and JavaScript.

This repository contains a single interactive page (`activity.html`) with its
styles and behavior split into `activity.css` and `activity.js` respectively.

**Purpose:** Provide a minimal, easy-to-run example that can be opened in any
modern browser or served locally for development.

**Preview:** Open `activity.html` in your browser to see the activity.

**Files:**

- `activity.html` : Main HTML page for the activity.
- `activity.css`  : Styles used by the page.
- `activity.js`   : JavaScript logic and interactivity for the page.
- `README.md`     : This file.

**Requirements:**

- A modern web browser (Chrome, Edge, Firefox, Safari).
- Optional: Python or Node.js to run a local static server for easier development.

**Run locally (simple):**

1. Double-click `activity.html` or open it from your browser (`File -> Open`).

**Run locally (recommended - using a static server):**

Windows PowerShell example (Python 3):

```powershell
cd <path-to-repo>
python -m http.server 8000

# Then open http://localhost:8000/activity.html in your browser
```

Or using `npx` with a Node.js environment:

```powershell
cd <path-to-repo>
npx serve -s . -l 8000

# Then open http://localhost:8000/activity.html
```

**Development tips:**

- Use the VS Code Live Server extension for live reload while editing.
- Edit `activity.css` to change styling, and `activity.js` to modify behavior.

**Contributing:**

Small fixes, improvements, or feature suggestions are welcome. Open an issue
or a pull request with a short description of the change.

**License:**

This project is provided under the MIT License. See `LICENSE` file for more detail
