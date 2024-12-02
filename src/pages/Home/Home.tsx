import React from "react";
import Header from "../../components/Header/Header";
import { urls } from "../../utility/Url.js";
import Rates from "../../components/Rates/Rates.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="top-offer bg-black text-center text-white py-1">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline cursor-pointer hover:text-gray-300">
          Sign Up Now
        </span>
      </div>
      <Header />
      <section className="bg-brand-bg-sub h-[80.5vh] flxc lg:flxr block">
        <div className="mt-16 px-10 lg:px-0">
          <p className="section-span">FIND CLOTHES</p>
          <p className="section-span">THAT MATCHES</p>
          <p className="section-span">YOUR STYLE</p>
          <p className="font-thin relative mt-4 lg:pl-16 opacity-80">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white text-center py-2 px-10 w-full lg:w-fit rounded-3xl relative lg:ml-16 mt-4  hover:drop-shadow-2xl">
            Shop Now
          </button>
          <div className="text-black flxr justify-center lg:pl-16 gap-8 md:gap-16 lg:gap-20 my-10">
            <div className="w-28">
              <h2 className="font-bold text-3xl lg:text-4xl">200+</h2>
              <h4 className="font-thin text-xs">International Brands</h4>
            </div>

            <div>
              <h2 className="font-bold text-3xl lg:text-4xl">2,000+</h2>
              <h4 className="font-thin text-xs">High-Quality Products</h4>
            </div>

            <div>
              <h2 className="font-bold text-3xl lg:text-4xl">30,000+</h2>
              <h4 className="font-thin text-xs">Happy Customers</h4>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/icons/start-s.svg"
            className="pointer absolute top-28 left-40"
            width={30}
            height={30}
            alt="start small-icon"
          />
          <img
            src="/icons/sectionOne.webp"
            className="pointer object-cover relative h-full object-center"
            width={1000}
            height={1000}
            alt="section-background"
          />
          <img
            src="/icons/start-l.svg"
            className="pointer absolute top-4 left-3/4"
            width={60}
            height={40}
            alt="start large-icon"
          />
        </div>
      </section>
      {/* brands */}
      <div className=" hidden h-[10vh] bg-black flxr justify-between px-4 lg:px-16 z-50">
        <img
          src="/icons/brands/b2.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 2"
        />
        <img
          src="/icons/brands/b5.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 5"
        />
        <img
          src="/icons/brands/b1.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 1"
        />
        <img
          src="/icons/brands/b3.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 3"
        />
        <img
          src="/icons/brands/b4.svg"
          className="w-10 lg:w-24"
          width={100}
          height={30}
          alt="brand 4"
        />
      </div>
      {/*End brands */}

      {/* products */}
      <section className="mb-12 mt-72 md:mt-96 lg:mt-0 block">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          New Arrivals
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
          {urls.arrivalInfo.map((val, index) => {
            return (
              <div key={index}>
                <div className="arivl-card">
                  <img
                    src={`${val.url}`}
                    className={
                      index == 1
                        ? "w-56 my-auto mx-auto"
                        : "w-60 my-auto mx-auto"
                    }
                    width={100}
                    height={30}
                    alt={val.alt}
                  />
                </div>
                <p className="text-sm font-semibold my-1">{val.name}</p>
                <div>
                  <span className="font-bold my-1">{val.price}</span>
                  {val.isDiscount && (
                    <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">
                        {val.oldPrice}
                      </span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">
                        {val.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">
          View All
        </button>
      </section>
      {/* End products */}

      <div className="bg-brand-bg-main opacity-25 h-[2px] rounded-full mx-24 block" />

      {/* products */}
      <section className="mb-12 block">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          top selling
        </h1>
        <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
          {urls.topSaleInfo.map((val, index) => {
            return (
              <div key={index}>
                <div className="arivl-card">
                  <img
                    src={`${val.url}`}
                    className={
                      index == 1
                        ? "w-52 my-auto mx-auto"
                        : "w-60 my-auto mx-auto"
                    }
                    width={100}
                    height={30}
                    alt={val.alt}
                  />
                </div>
                <p className="text-sm font-semibold my-1">{val.name}</p>
                <div>
                  <span className="font-bold my-1">{val.price}</span>
                  {val.isDiscount && (
                    <>
                      <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">
                        {val.oldPrice}
                      </span>
                      <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">
                        {val.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-transparent rounded-full py-2 px-10 my-auto mx-auto border-2 mt-6 flxr justify-center hover:border-blue-100 hover:drop-shadow-2xl">
          View All
        </button>
      </section>
      {/* End products */}

      {/* Browse By products */}
      <div className="rounded-xl bg-brand-bg-main my-20 mx-12 lg:mx-24 bg-opacity-30 block">
        <h1 className="uppercase font-extrabold text-center pt-12  text-4xl lg:text-5xl">
          BROWSE BY dress STYLE
        </h1>

        <div className="flxc lg:flxr gap-3 px-10 pt-10">
          <img
            src={`${urls.browseDress[0].url}`}
            className="rounded-xl w-full lg:w-[50%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[0].alt}
          />
          <img
            src={`${urls.browseDress[2].url}`}
            className="rounded-xl w-full lg:w-[60%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[2].alt}
          />
        </div>

        <div className="flxc lg:flxr gap-3 px-10 pt-3 pb-10">
          <img
            src={`${urls.browseDress[1].url}`}
            className="rounded-xl w-full lg:w-[60%] object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            title="ad"
            alt={urls.browseDress[1].alt}
          />
          <img
            src={`${urls.browseDress[3].url}`}
            className="rounded-xl w-full object-cover hover:scale-105 cursor-pointer duration-1000"
            width={100}
            height={30}
            alt={urls.browseDress[3].alt}
          />
        </div>
      </div>
      {/* End Browse By products */}

      {/* Happy Customers */}
      <section className="block">
        <div className="flxc md:flxr justify-between px-10 md:px-14 lg:px-20">
          <p className="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</p>
          <div id="arrowIcons" className="flxr gap-2">
            <img
              src="/icons/arrow-l.svg"
              className="cursor-pointer hidden md:block active:border-2"
              width={24}
              height={24}
              alt="Arrow Left"
            />
            <img
              src="/icons/arrow-r.svg"
              className="cursor-pointer hidden md:block active:border-2"
              width={24}
              height={24}
              alt="Arrow Right"
            />
          </div>
        </div>
        <div className="flxc lg:flxr gap-4 m-10">
          {urls.cutomerFeedback.map((val, index) => {
            return (
              <div
                key={index}
                className={`border-2 rounded-lg px-2 py-5 translate-effect`}
                id={`${index}cursel`}
              >
                <Rates rate={val.rate} />
                <div className="flxr gap-2 mt-2">
                  <span className="font-extrabold">{val.name}</span>
                  <img
                    src="/icons/correct.svg"
                    className="cursor-pointer"
                    width={16}
                    height={16}
                    alt="correct"
                  />
                </div>
                <p className="opacity-50">{val.feedback}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* End Happy Customers */}

      <div className="bg-gray-100 pt-10 block">
        {/* Newsletter Section */}
        <div className="bg-black text-white py-10 px-6 text-center">
          <h2 className="text-3xl font-bold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-1/2 max-w-md px-4 py-2 rounded-l-full text-gray-700 focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-2 rounded-r-full font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
