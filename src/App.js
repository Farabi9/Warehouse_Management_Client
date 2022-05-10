
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './LeatherWearHouse/AddProduct/AddProduct';
import AuthRequire from './LeatherWearHouse/AuthRequire/AuthRequire';
import Blog from './LeatherWearHouse/Blog/Blog';
import Footer from './LeatherWearHouse/Footer/Footer';
import Header from './LeatherWearHouse/Header/Header';
import Home from './LeatherWearHouse/Home/Home';
import Inventory from './LeatherWearHouse/Inventory/Inventory';
import ManageInventory from './LeatherWearHouse/ManageInventory/ManageInventory';
import Login from './LeatherWearHouse/Registration/Login/Login';
import Signup from './LeatherWearHouse/Registration/Signup/Signup';





function App() {

  return (
    <div className="App">
            

<Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
 <Route path='/inventory/:id' element={<AuthRequire>
  <Inventory></Inventory>
 </AuthRequire>}></Route>
 <Route path='/blog' element={<Blog></Blog>}></Route>
 
 <Route path='/signup' element={<Signup></Signup>}></Route>
 <Route path='/manageInventory' element={<AuthRequire>
  <ManageInventory></ManageInventory>
 </AuthRequire>}></Route>
 <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
 
</Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
