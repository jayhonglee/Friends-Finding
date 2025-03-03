import React from 'react';

import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const { sections } = product;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex flex-wrap items-center ${
              index !== 0 ? 'mt-20' : ''
            }`}
          >
            {/* Single image section */}
            {section.img && (
              <>
                <div
                  className={`w-full lg:w-1/2 p-4 ${
                    section.imagePosition === 'right' ? '' : 'lg:order-2'
                  }`}
                >
                  <h2 className="text-3xl tracking-tight font-black text-gray-900 sm:text-4xl md:text-5xl leading-tight mb-8">
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-500 sm:text-2xl md:text-3xl leading-relaxed max-w-2xl">
                    {section.description}
                  </p>
                </div>
                <div
                  className={`w-full lg:w-1/2 p-4 ${
                    section.imagePosition === 'right'
                      ? 'lg:pl-12'
                      : 'lg:order-1'
                  }`}
                >
                  <img
                    className="rounded-lg shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                    src={section.img}
                    alt={section.title}
                  />
                </div>
              </>
            )}

            {/* Multiple images section */}
            {section.images && (
              <>
                <div className="w-full lg:w-1/2 p-4">
                  <h2 className="text-3xl tracking-tight font-black text-gray-900 sm:text-4xl md:text-5xl leading-tight mb-8">
                    {section.title}
                  </h2>
                  <p className="text-xl text-gray-500 sm:text-2xl md:text-3xl leading-relaxed max-w-2xl">
                    {section.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {section.images.map((img, imgIndex) => (
                      <div
                        key={img}
                        className={`${imgIndex === 2 ? 'col-span-2' : ''}`}
                      >
                        <img
                          className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                          src={img}
                          alt={`Activity ${imgIndex + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
