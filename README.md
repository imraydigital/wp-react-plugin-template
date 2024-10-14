# WordPress React Plugin Template

A boilerplate template for creating WordPress plugins using React, TypeScript, and CSS Modules. This template sets up everything you need to get started with building a React-based WordPress plugin efficiently.

## Features

- **React 18**: Build modern, reactive UIs with the latest version of React.
- **TypeScript**: Type-safe JavaScript with TypeScript integration.
- **CSS Modules**: Write modular and scoped CSS to avoid global style conflicts.
- **Webpack**: Bundle your assets with Webpack for development and production environments.
- **Babel**: ES6+ and JSX transpiling with Babel.
- **Loader Support**: Includes support for TypeScript, CSS Modules, and more.
- **No Unit Tests**: Currently, no testing framework is configured, but you can add your own.

## Requirements

- WordPress 5.0 or higher
- Node.js (version 12.x or later)
- npm (Node package manager)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/imraydigital/wordpress-react-plugin-template.git
   
2. **Navigate into the repository**:
3. 
   ```bash
   cd wordpress-react-plugin-template

3. **Install dependencies**:

   ```bash
   npm install

To build your plugin for production, run:

```bash
npm run build

This will create a production-ready version of your plugin in the dist folder, which you can then upload to your WordPress installation.

Displaying the Plugin in WordPress
To display the React plugin on the frontend of your WordPress theme, you need to use a shortcode. By default, the shortcode is set in the react-plugin-template.php file as:

```bash
[react_plugin_template]
