# JavaScript Calculator

A simple browser calculator built with HTML, Bootstrap 5 and vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)

## Features

- Digits `0-9` and a decimal point
- Addition, subtraction, multiplication and division (`+ - * /`)
- Chained operations: picking a new operator evaluates the pending one first
- `AC` button to clear the display and reset state
- Division by zero shows `Error`
- Card-style layout using the Bootstrap 5 grid, with hover and active button states

## Tech stack

- **HTML5** for markup
- **CSS3** with **Bootstrap 5.3** (loaded from cdnjs) for layout and styling
- **Vanilla JavaScript** for the calculator logic (no build step, no dependencies)

## Getting started

No installation is needed.

```bash
git clone https://github.com/sharky412/Javascript-Calculator.git
cd Javascript-Calculator/CalculatorJavaScript
```

Then open `index.html` in your browser. If you prefer a local server:

```bash
npx serve .
```

## Project structure

```
CalculatorJavaScript/
├── index.html   # Calculator markup and styles
├── index.css    # Stylesheet
└── index.js     # Calculator logic (input, operators, evaluation)
```
