import './App.css';
import { Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery/Gallery'
import Menu from './components/Menu/Menu'
import OrderOnline from './components/OrderOnline/OrderOnline';
import { Link } from 'react-router-dom'
import { BiHomeHeart } from 'react-icons/bi'
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <nav className="bg-white border-purple-400 px-2 sm:px-4 py-2.5 border-b-4 navbar">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/theflouredflower" className="flex items-center">
            <span className="self-center text-4xl font-semibold whitespace-nowrap logo text-purple-600 hover:text-purple-400 logo image">The Floured Flour</span>
          </Link>
          <div className="w-full md:block md:w-auto centerContent" id="mobile-menu">
            <ul className="flex navbar flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/theflouredflower" className="block text-3xl py-2 mr-6 pl-33 md:p-0 text-purple-800 homeButton"><BiHomeHeart /></Link>
              </li>
              <li>
                <Link to="/menu" className="block text-2xl py-2 pr-4 pl-33 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Menu</Link>
              </li>
              <li>
                <Link to="/order-online" className="block text-2xl py-2 pr-4 pl-33 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Order Online</Link>
              </li>
              <li>
                <Link to="/gallery" className="block text-2xl py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:p-0 text-purple-800 ffLobsterTwo hover:text-purple-400">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/theflouredflower" element={<Home/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
    </>
  );
}

export default App;
