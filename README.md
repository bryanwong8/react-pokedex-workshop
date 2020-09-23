# Requirements

- git v2 or higher (https://git-scm.com/downloads)
- Node.js v10 or higher (https://nodejs.org/en/download/)
- npm v6 or higher (comes with Node.js)

If you think you have the above requirements you can verify if you have them by running:

```
git --version
node --version
npm --version
```

If no error pops up then you are good to go!

# Setup

After getting the proper tools installed, you can setup your application with the following commands:

```
git clone https://github.com/wongband/react-pokedex-workshop.git
cd react-pokedex-workshop
npm i
```

This will likely take a few minutes to run. It will clone the repo, install all of the JavaScript dependencies needed to build our app.

# Running the App

We will be building a Pokedex in this workshop. To get started and verify that everything has been installed correctly, run:

```
npm start
```

The app should pop up in your default browser running at http://localhost:3000/. The app should be completely blank because we haven't built anything yet! But you can check out the app deployed online to see what the final state will look like.

# Workshop Outline

## Schedule

Each step in the workshop builds on top of the previous one. If at any point you get stuck, you can find the answers in the source code of the current step. Any step can be used as a starting point to continue on to the remaining steps. Each step will be in a different branch.

- Setup/Intro
- JSX syntax and Ant design
- Styled Components
- Writing readable, reusable and composable components
- API calls with `useEffect` and `useState` for state management
- Integrating API data with components
- Conditionally rendering components
