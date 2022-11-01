import './App.css';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 navbar navColor">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/theflouredflower" className="flex items-center">
            <span className="self-center text-4xl font-semibold whitespace-nowrap logo text-rose-900 hover:text-rose-400 logo image">The Floured Flower</span>
          </a>
          <div className="w-full md:block md:w-auto centerContent" id="mobile-menu">
            <ul className="flex navbar flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <a href="#menu" className="block text-2xl py-2 pr-4 pl-33 border-gray-100 md:p-0 text-rose-900 ffLobsterTwo hover:text-rose-400">Menu</a>
              <a href="#order-online" className="block text-2xl py-2 pr-3 pl-33 border-gray-100 md:p-0 text-rose-900 ffLobsterTwo hover:text-rose-400">Order Online</a>
              <a href="#gallery" className="block text-2xl py-2 pr-4 pl-3 border-gray-100 md:p-0 text-rose-900 ffLobsterTwo hover:text-rose-400">Gallery</a>

            </ul>
          </div>
        </div>
      </nav>

      <Home />
    </>
  );
}

export default App;
