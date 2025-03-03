import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-5xl tracking-tight font-black text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-500 sm:mt-10 sm:text-2xl max-w-2xl sm:mx-auto md:mt-10 lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-10 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent !text-white font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10 cursor-pointer"
            >
              {mainHero.primaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
