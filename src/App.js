
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './LeatherWearHouse/AddProduct/AddProduct';
import Footer from './LeatherWearHouse/Footer/Footer';
import Header from './LeatherWearHouse/Header/Header';
import Home from './LeatherWearHouse/Home/Home';
import Inventory from './LeatherWearHouse/Inventory/Inventory';
import ManageInventory from './LeatherWearHouse/ManageInventory/ManageInventory';




function App() {

  return (
    <div className="App">
            

<Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
 <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
 <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
 <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
 
</Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
