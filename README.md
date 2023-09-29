# react-cognito-authentication
Implement Authentication in React Single Page Application using AWS Cognito

This template provides 
- a minimal setup to get React working in Vite with HMR and some ESLint rules.
- authentication with AWS Cognito using Amplify library
- sample components and pages demonstrating protected and public access

Currently, two official plugins are available for the vite template:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run this project on your local
- clone this repo, and run the below commands
- `cd react-cognito-authentication`
- `npm install`
- update `aws-exports.js` file with your `cognito user pool id` and `client id`.
- `npm run dev`
- test your application in browser, `http://localhost:5173`
