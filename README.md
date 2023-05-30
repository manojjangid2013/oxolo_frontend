# Oxolo frontend application

- Created by ReactJs ( ``TypeScript`` )
- Using Mui/material librbary for UI tools
- Using tanStack library for query and mutations
- Using .env for configuration

# Project description

This page implementation focuses on fulfilling the following requirements: implementing an undo/redo (memento) functionality, saving user progress locally, and storing visual information (text and position) in a flexible JSON format. The chosen technologies for this implementation are Typescript, React, and the Remotion library, along with any additional libraries deemed necessary.

The page features a WYSIWYG (What You See Is What You Get) interface where users can enter and modify text. The entered text is an essential part of the user's progress and will be saved and tracked for future actions.

Additionally, the page allows users to position the text on a video player. The position information, including coordinates or any other relevant data, will be captured and stored alongside the text.

To provide an undo/redo functionality, the page incorporates the memento pattern. This pattern enables users to undo previous actions and redo them if needed, facilitating a seamless editing experience.

To ensure continuity and persistence, user progress is saved locally. This is achieved using local storage or a similar mechanism provided by the chosen technologies. Even if the user refreshes the browser or closes and reopens the page, their progress, including text content and position, will be restored.

The visual information, such as text and position, is stored in a JSON format. The JSON schema is designed to be flexible, allowing easy adaptation to future changes. This ensures that the page can evolve and incorporate additional features without major modifications to the existing data structure.

By leveraging Typescript, React, and the Remotion library, along with other relevant libraries, this page provides a powerful and user-friendly environment for text editing, position manipulation, and a robust undo/redo functionality. The combination of local storage and a flexible JSON schema guarantees a seamless experience, preserving user progress and allowing for future enhancements.

### Folder structure

```
|-README.md
|-public
| |-favicon.ico
| |-index.html
| |-logo512.png
| |-manifest.json
| |-robots.txt
| |-logo192.png
|-.gitignore
|-package-lock.json
|-package.json
|-tsconfig.json
|-src
| |-index.tsx
| |-App.tsx
| |-general
| | |-interface.ts
| | |-serviceAddress.ts
| |-App.css
| |-component
| | |-AppBar
| | | |-AppBar.css
| | | |-AppBar.component.tsx
| | |-PageBody.component.tsx
| | |-UserAlert.component.tsx
| | |-PlayerContent.component.tsx
| | |-PageLayout.component.tsx
| | |-DraggableText
| | | |-DraggableText.component.tsx
| | | |-DraggableText.css
| | |-Header.component.tsx
| |-utils
| | |-updateWork.ts
| | |-lsFunctions.ts
| |-setupTests.ts
| |-reportWebVitals.ts
| |-react-app-env.d.ts
| |-assets
| | |-images
| | | |-404.png
| |-pages
| | |-History
| | | |-History.grid.ts
| | | |-History.component.tsx
| | | |-History.css
| | |-Error
| | | |-Error.component.tsx
| | | |-Error.css
| | |-Player
| | | |-Player.component.tsx
| |-logo.svg
| |-router
| | |-router.tsx
```

# How to

## Install Packages

```bash
npm i # to install modules/packages
```

## Build

```bash
npm run build # to install modules/packages
```

## Start

```bash
npm run start
```
