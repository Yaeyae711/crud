import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Navbar } from './components/layout/Navbar';
import AddUsers from './components/users/AddUsers';
import { Routes, Route } from "react-router-dom";
import EditUser from './components/users/EditUser';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={ <Contact/>}></Route>
      <Route path="/add/users" element={ <AddUsers/>}></Route>
      <Route path="/edit/user/:id" element={ <EditUser/>}></Route>
    </Routes>
    
   
   
    
    </div>
  );
}

export default App;
