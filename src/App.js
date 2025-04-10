import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  return (
    <main>
      <Events/>
    </main>
  )
}

export default App;
