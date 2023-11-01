/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MJFF9c7UDoG
 */
export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <img
            alt="Nike Logo"
            className="h-8 w-auto"
            height={50}
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              <li>
                <a className="text-gray-800 dark:text-gray-200" href="#">
                  Men
                </a>
              </li>
              <li>
                <a className="text-gray-800 dark:text-gray-200" href="#">
                  Women
                </a>
              </li>
              <li>
                <a className="text-gray-800 dark:text-gray-200" href="#">
                  Kids
                </a>
              </li>
              <li>
                <a className="text-gray-800 dark:text-gray-200" href="#">
                  Sale
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative w-64">
          <input
            className="pl-10 pr-5 w-full h-10 rounded-md border border-gray-300 dark:border-gray-700"
            placeholder="Search products"
            type="text"
          />
          <div className="absolute left-3 top-2">
            <svg
              className=" w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </header>
      <main className="flex-grow flex p-4">
        <aside className="w-64 flex-shrink-0 pr-6 space-y-6">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Categories</h2>
            <ul className="space-y-1">
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  Running
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  Training & Gym
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  Basketball
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  Football
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  Skateboarding
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Sizes</h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-700"
                  href="#"
                >
                  S
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-700"
                  href="#"
                >
                  M
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-700"
                  href="#"
                >
                  L
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-700"
                  href="#"
                >
                  XL
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Price Range</h2>
            <ul className="space-y-1">
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  $0 - $50
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  $50 - $100
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  $100 - $150
                </a>
              </li>
              <li>
                <a className="block text-gray-800 dark:text-gray-200" href="#">
                  $150+
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="w-full py-2 text-center text-white bg-red-600 hover:bg-red-500 rounded-md">
              Clear Filters
            </button>
          </div>
        </aside>
        <div className="flex-grow grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="space-y-2">
            <img
              alt="Product Image"
              className="object-cover w-full h-48"
              height={200}
              src="/https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pyyixbczj6u5kiwhpjik/air-max-270-womens-shoes-Pgb94t.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width={200}
            />
            <h3 className="font-semibold text-lg">Nike Air Max 270</h3>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">$150</span>
              <div className="flex items-center space-x-1 text-yellow-500">
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <button className="w-full py-2 text-center text-white bg-blue-600 hover:bg-blue-500 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-800 dark:text-gray-200">© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <nav>
            <ul className="flex space-x-2">
              <li>
                <a className="text-sm text-gray-800 dark:text-gray-200" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-800 dark:text-gray-200" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-800 dark:text-gray-200" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

