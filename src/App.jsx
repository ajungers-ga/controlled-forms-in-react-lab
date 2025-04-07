// File Purpose: // src/App.jsx
// this file is the main entry component of the app.
// it renders the heading and imports the Bookshelf COMPONENT, 
// which contains all the logic and UI for adding/displaying books.


// 4 steps to build COMPONENT (1-4)
// 1. importing stylesheets and components
import './App.css'; // importing the main stylesheet for the app styling
import Bookshelf from './components/Bookshelf/Bookshelf.jsx'; // importing the Bookshelf COMPONENT from its folder


// 2. defining the app COMPONENT
const App = () => {
  //3. returning JSX
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};
// 4. exporting the app component so it can be used elsewhere 
export default App;
