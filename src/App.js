import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomepageCardImg1 from './assets/img/HomepageCardImg1.jpg'
import HomepageCardImg2 from './assets/img/HomepageCardImg2.jpg'
import HomepageCardImg3 from './assets/img/HomepageCardImg3.jpg'

function App() {
  return (
    <>
      <Navigation />
      <HeroBanner />
      <div className='flex justify-evenly mt-20 mb-20'>
        <a href="#" class="flex flex-col items-center bg-purple-100 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
          <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={HomepageCardImg1} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-rose-500 flex justify-center ffLobsterTwo">Red Velvet</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">What Flavor Is Red Velvet Cake? Red velvet cake tastes like very mild cocoa with a slightly tart edge. The cream cheese frosting is the most forward flavor. Perhaps even more important than the taste is the texture: smooth, soft, tender and light with creamy icing.</p>
          </div>
        </a>
        <a href="#" class="flex flex-col items-center bg-purple-100 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={HomepageCardImg2} alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-purple-900 flex justify-center ffLobsterTwo">Birthday Cupcakes</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </a>
      <a href="#" class="flex flex-col items-center bg-purple-100 rounded-lg border-purple-400 shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-amber-900 flex justify-center ffLobsterTwo">Special Cupcakes</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
          <img class="object-cover w-full h-96 rounded-r-lg md:h-auto md:w-48" src={HomepageCardImg3} alt=""/>
      </a>
      </div>

      <Footer />
    </>
  );
}

export default App;
