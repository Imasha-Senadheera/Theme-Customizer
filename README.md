# Theme Customizer 🎨

Welcome to the Theme Customizer project! This React application allows users to customize the theme of a text block by changing the background color, text color, and font size. Users can also view a history of their color customizations.

## Preview of the app

<img width="800" alt="1" src="https://github.com/user-attachments/assets/403535f6-a106-4492-bd29-8cd9debb6bf0" > <br> <br>

## Getting Started

To get started with the Theme Customizer project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/theme-customizer.git
   cd theme-customizer


 2. **Install dependencies:**
    ```sh
    npm install

  3. **Start the development server:**
     ```sh
      npm start

This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes, and you may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run the following scripts:

* **npm start :** Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.You may also see any lint errors in the console.

* **'npm test :** Launches the test runner in the interactive watch mode. See the section about running tests for more information.

* **'npm run build :'** Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. "Your app is ready to be deployed!" See the section about deployment for more information.

* **'npm run eject :'** Note: this is a one-way operation. Once you "eject", you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except "eject" will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. 
You don't have to ever use "eject". The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Customization Features

* Background Color: Change the background color of the text block using a color picker.
* Text Color: Change the text color of the text block using a color picker.
* Font Size: Increase or decrease the font size of the text block using buttons.
* Color History: View the last five color combinations used.

## Project Structure
The project structure is as follows:

 ```sh
    my-app/
    ├── node_modules/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── components/
    │   │   └── ThemeCustomizer.js
    │   ├── App.js
    |   ├── App.css
    │   ├── index.css
    │   ├── index.js
    │   └── ...
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
