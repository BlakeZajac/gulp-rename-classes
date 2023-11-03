# Gulp HTML Class Replacement

This project uses Gulp to automate the replacement of classes in HTML files and provides live-reloading using BrowserSync. It's a convenient way to update class names in your HTML files and see the changes in real-time.

## Getting Started

Follow these steps to set up and run the project:

1. **Prerequisites**: Make sure you have Node.js and npm installed on your system.

2. **Installation**: Install the required dependencies by running the following command in your project directory:

   ```bash
   npm install
   ```

## Project Structure

Ensure your project directory is as follows.

```bash
├── src/         # Source HTML files
│   ├── index.html
│   ├── other.html
│   └── ...
├── output/      # Output folder for modified HTML files
├── gulpfile.js  # Gulp task configuration
├── package.json  # Project dependencies
└── README.md    # This README file
```

## Gulp Task

The Gulp task is configured in the gulpfile.js. The task replaces classes "text_index" and "image_index" in your HTML files with "text_X" and "image_X," incrementing the number for each occurrence.

## Usage

Run the Gulp task by executing the following command in your project directory:

```bash
gulp
```

This will start watching for changes in your source HTML files in the src folder and apply replacements. Modified files will be saved in the output folder, and your browser will automatically reload to show the changes in real-time.

## Live-Reloading

The project uses BrowserSync to provide live-reloading. It serves files from the output directory and automatically reloads your browser when changes are made to the HTML files.
