
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './LeatherWearHouse/Footer/Footer';
import Header from './LeatherWearHouse/Header/Header';
import Home from './LeatherWearHouse/Home/Home';



function App() {

  return (
    <div className="App">
            

<Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
</Routes>
<Footer></Footer>

    </div>
  );
}

export default App;
