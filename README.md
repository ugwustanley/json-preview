<div align="center">
 <img width="100px" src="https://raw.githubusercontent.com/frankiefab100/json-preview/main/public/logo.png" alt="json-preview logo" />

 <h1>JSON Preview</h1>
 <p>Convert JSON files to downloadable diagrams</p>
</div>

<div align="center">
<a href="https://github.com/ugwustanley/json-preview/issues?q=is%3Aopen+is%3Aissue">
<img src="https://img.shields.io/github/issues-raw/ugwustanley/json-preview?color=green">
</a>

<a href="https://github.com/ugwustanley/json-preview/issues">
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat">
</a>
<img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat">
</a>
</div>

## Overview

A  web application which allows a user to easily visualize any JSON file and generate diagrams from it.


Live Preview: <https://json-preview.vercel.app>

### Tools and Packages Used

- React
- prismjs
- react-component-export-image
- react-simple-code-editor
- reactflow
- sass

## Features

- Tabs
- Preview Board
- Code editor
- Zoom In/out
- Focus control
- Lock
- Download Button

## Why I started this project

I came across a code editor that helps you visualize JSON file, so I thought about build something similar as a web app with additional features.

I had a challenges with generating the diagram, but `Reactflow` gave me insight on how to connect the different nodes and edges together. 

## How It Works

Users can easily interact with the code editor and type in JSON structured code.

The code editor has a *debugging feature* - red indicator that shows error exist in the code. Thus, It can't be previewed until it is fixed.

At the bottom-left, it has features which allows:

- **Zoom in or out** from the workspace.
- **Fit to view** for easy switching on the vertical or horizontal direction.
- **Lock** to restrict the diagram generated from further edit or distortion.

At the top-right, there is:

- **Download** to the diagrams
- **Orientation adjustment** button for custom view.


The left side menu consists of:

- **Eraser** to delete the contents in the code editor.
- **Social media handles** (Linkedin, Twitter)
- **Github repository**

## Installation

1. Clone the repository

```bash
git clone https://github.com/ugwustanley/json-preview.git
```

2. Change the working directory

```bash
cd json-preview
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

You can now see it at `http://localhost:3000` in your browser.

## Contributing

If you face any problems while using the application, please open an issue or submit a pull request.

## Support

Please give this project a star⭐, if you like it.

## License

This project is built under the [MIT License](./License).
