# Copilot-Project01

## Setup and Run the React App

1. Clone the repository:
   ```sh
   git clone https://github.com/patelyahya/Copilot-Project01.git
   cd Copilot-Project01
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Folder Structure

The project structure is as follows:

```
Copilot-Project01/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

### `public/`

This folder contains the public assets for the React app. The `index.html` file is the entry point for the app.

### `src/`

This folder contains the React app boilerplate code. The `App.js` file contains the main `App` component, and the `index.js` file is the entry point for the React app.

## Dev Container

The `.devcontainer` folder contains the configuration files for the development container. This allows you to develop the project in a consistent environment, regardless of the host machine's setup.

### Contents

- `devcontainer.json`: This file defines the configuration for the development container, including the extensions to be installed and the post-start command.

### Extensions

The `devcontainer.json` file includes the following extensions:

- `GitHub.copilot`
- `esbenp.prettier-vscode`
- `dsznajder.es7-react-js-snippets`

### Post Start Command

The `postStartCommand` in the `devcontainer.json` file is executed after the container is built and started. It navigates to the `copilot-project01` directory and installs the necessary npm dependencies:
   ```json
   "postStartCommand": "cd copilot-project01 && npm install"
   ```

### Using the Dev Container

To use the development container, follow these steps:

1. Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for Visual Studio Code.

2. Open the project in Visual Studio Code.

3. Press `F1` to open the command palette, then type and select `Remote-Containers: Open Folder in Container...`.

4. Select the project folder. Visual Studio Code will build and open the development container.
