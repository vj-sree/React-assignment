import logo from './logo.svg';
import './App.css';
import UserListComponent from './UserList';
import UserDetailComponent from './userDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { createBrowserHistory } from 'history';
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";


function App() {

 //const history = createBrowserHistory();

 


  return (
    
    <div className="App">
      <h2>Axios demo</h2>
      
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<UserListComponent />} />
            <Route path="/user/:id" element={<UserDetailComponent />} />
          </Routes>
        </BrowserRouter>
     


    </div>
  );
}

export default App;
