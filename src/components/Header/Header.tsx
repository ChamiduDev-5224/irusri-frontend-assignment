import React from "react";
const Header: React.FC = () => {
  return (
    <>
         <div className="flxr p-6 justify-between block">
        <div className="flxr gap-3 place-items-center">
          <img
            src="/icons/menu.svg"
            className="pointer lg:hidden"
            width={20}
            height={20}
            alt="mobile-menuIcon"
            onClick={()=>{setShowMobilMenu(!showMobileMenu)}}
          />
     
          <p className="text-black font-extrabold uppercase text-2xl ml-4">
            ECOM.CO
          </p>
          <span className="pointer ml-10 hidden lg:block">Shop</span>
          <img
            src="/icons/arrowDown.svg"
            onMouseEnter={() => setIsHovered(true)}
            className="pointer hidden lg:block"
            width={16}
            height={16}
            alt="mobile-menuIcon"
          />
     
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            On Sale
          </span>
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            New Arrivals
          </span>
          <span className="pointer hover:text-violet-300 hidden lg:block ml-2">
            Brands
          </span>
        </div>

        <div className="flxr gap-2 lg:pr-4">
          <div className="hidden lg:flxr bg-brand-bg-serbg text-brand-bg-sub rounded-2xl pl-4">
            <img
              src="/icons/search.svg"
              className="pointer text-brand-bg-sub"
              width={20}
              height={20}
              alt="search-icon"
            />
            <input
              className="bg-transparent text-black border-0 pl-4 mr-5 place-items-center focus:shadow-2xl md:w-[150px] lg:w-[340px] xl:lg:w-[500px] text-sm"
              placeholder="Search For Products"
            />
          </div>
          <img
            src="/icons/search.svg"
            className="pointer lg:hidden"
            width={20}
            height={20}
            alt="search-icon"
          />
          <img
            src="/icons/cart.svg"
            className="pointer"
            width={20}
            height={20}
            alt="cart-icon"
          />
          <img
            src="/icons/user.svg"
            className="pointer"
            width={20}
            height={20}
            alt="user-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
