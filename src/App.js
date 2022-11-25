import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router';
import Login from "./screens/login/login";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/"  element ={<Login/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
