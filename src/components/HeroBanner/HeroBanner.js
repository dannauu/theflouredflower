import heroBanner from '../../assets/img/heroBanner.jpg'

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-purple-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 rounded">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-fuchsia-800">Custom Cakes</span>{' '}
                <span className="block text-fuchsia-200 xl:inline">and Cupcakes</span>
              </h1>
              <p className="mt-3 font-bold text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I specialize in cakes and cupcakes. I make my own fondant out of marshmallow (so it actually tastes good!) I also offer gluten-free and sugar-free cake options.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/order-online"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-800 shadow hover:bg-fuchsia-200 md:py-4 md:text-lg md:px-10"
                  >
                    Order Online
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-fuchsia-200 hover:bg-fuchsia-800 md:py-4 md:text-lg md:px-10"
                  >
                    Have a question?
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={heroBanner}
          alt=""
        />
      </div>
    </div>
  )
}