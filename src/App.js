import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import initializationApp from './pages/Login/Login/Firebase/Firebase.init';
import Login from './pages/Login/Login';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NavBar from './pages/Shared/Header/NavBar';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Classes from './pages/Classes/Classes';
import YogaShop from './pages/YogaShop/YogaShop';
initializationApp()
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/classes">
        <Classes></Classes>
        </Route>
        <Route  path="/yogashop">
        <YogaShop></YogaShop>
        </Route>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/register">
        <Register></Register>
        </Route>
     
    
      </Switch>
      </BrowserRouter>
      </AuthProvider>
   
    </div>
  );
}

export default App;
