# Odin Project Todo List

A dynamic todo list application built with vanilla JavaScript, Webpack, and CSS. This project allows users to organize their tasks by projects and manage individual todo items with descriptions, due dates, and completion status.

## Features

- **Project Management**: Create, view, and delete projects to organize your todos
- **Todo Items**: Add detailed todo items to projects with:
  - Title
  - Description
  - Due date
  - Completion status
- **Search Functionality**: Search through projects quickly
- **Responsive UI**: Clean and intuitive user interface with custom styling
- **Modular Architecture**: Organized code structure with separate modules for projects, items, and UI

## Project Structure

```
├── src/
│   ├── index.js              # Main entry point and UI rendering
│   ├── projects.js           # Project management module
│   ├── items.js              # Todo items/activities module
│   ├── style.css             # Styling
│   ├── template.html         # HTML template
│   └── images/               # SVG icons for the UI
│       ├── plus.svg
│       ├── search.svg
│       ├── search-web.svg
│       ├── list-box-outline.svg
│       └── TodoList_icon.png
├── webpack.config.js         # Webpack configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sammorad/Odin_Project_Todo_List.git
cd Odin_Project_Todo_List
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Build

Build the project for production:
```bash
npm run build
```

This will generate a `dist` folder with the compiled application.

## Usage

1. **Create a Project**: Click the plus icon in the Menu section to add a new project
2. **View Project**: Select a project from the list to view its items
3. **Add Todo Items**: Add detailed todo items to your projects with title, description, date, and status
4. **Search Projects**: Use the search bar to quickly find projects
5. **Delete Project**: Remove projects you no longer need

## Core Modules

### projects.js
Handles project management with the `Projects` class and functions for:
- Creating new projects
- Retrieving the todo list
- Viewing specific projects
- Deleting projects

### items.js
Manages todo items with the `Todos` class and functions for:
- Creating new todo items with details
- Adding items to projects
- Viewing specific todo items

### index.js
Renders the user interface and handles:
- DOM element creation
- Menu navigation
- Search functionality
- Event listeners for user interactions

## Technologies Used

- **JavaScript (ES6+)**: Core application logic
- **Webpack 5**: Module bundling and asset management
- **CSS 3**: Styling and layout
- **HTML5**: Template structure
- **Webpack Dev Server**: Development environment with hot reload

## Dependencies

### Dev Dependencies
- `webpack`: Module bundler
- `webpack-cli`: Command line interface for webpack
- `webpack-dev-server`: Development server with hot reload
- `css-loader`: CSS module loader
- `style-loader`: Injects CSS into the DOM
- `html-loader`: HTML module loader
- `html-webpack-plugin`: Generates HTML file

## License

ISC

## Author

[Sammorad](https://github.com/Sammorad)

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.
