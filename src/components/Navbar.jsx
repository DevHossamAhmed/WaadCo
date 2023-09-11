import Image from 'next/image'
import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex bg-white z-50 mb-[90px]'>
      {/* <!-- Main navigation container --> */}
      <nav
        class=" flex fixed w-full  m-auto z-40  flex-nowrap items-center justify-around
         bg-white py-2
           lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div class="ml-2 mr-6">
            <a class="text-xl text-violet-700 dark:text-neutral-200" href="#">
              <Image src={Logo} alt="logo" width={60} />
            </a>
          </div>
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navbar container --> */}
          <div
            class="!visible mt-2 hidden flex-grow basis-[100%] items-center
            pl-[120px]
            lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-te-collapse-item
          >
            {/* <!-- Left links --> */}
            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {/* <!-- Home link --> */}
              <li
                class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
              >
                <a
                  class="active text-violet-700 lg:px-2 [&.active]:text-violet-700"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref
                >
                  الرئيسية
                </a>
              </li>
              {/* <!-- Features link --> */}
              <li
                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref
              >
                <a
                  class="p-0 text-violet-700 transition duration-200 hover:ease-in-out focus:text-violet-700 disabled:text-black/30 motion-reduce:transition-none "
                  href="#"
                  data-te-nav-link-ref
                >
                  من نحن
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar