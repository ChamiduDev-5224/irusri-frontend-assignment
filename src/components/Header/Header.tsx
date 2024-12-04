import { Fade, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberFormat, getSizeById } from "../../utility/commonScript.js";
import { removeItem } from "../../redux/Slices/CartSlice.js";
import { Link } from "react-router-dom";
import { MenuList } from "../MenuList/MenuList.js";
import { loggedInfo } from "../../redux/Slices/AuthSlice.js";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<"cart" | "profile" | null>(null);
  const open = Boolean(anchorEl);
  const cartInfo = useSelector((state: any) => state.cart.cart);
  const authInfo = useSelector((state: any) => state);

  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState<number>(cartInfo?.length);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  useEffect(() => {
    setIsUserLogged(authInfo.auth.userInfo.id > 0 ? true : false);
  }, [authInfo]);

  useEffect(() => {
    // Update cartCount whenever cartInfo changes
    setCartCount(cartInfo?.length);
  }, [cartInfo]);

  const openMenu =
    (type: "cart" | "profile") => (event: React.MouseEvent<HTMLElement>) => {
      setMenuType(type);
      setAnchorEl(event.currentTarget);
    };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType(null); // Reset menu type
  };

  //cart item remove
  const deleteCartItem = (val: number) => {
    dispatch(removeItem(val));
  };

  //logout
  const onLogOut=()=>{
    dispatch(loggedInfo({}))

  }
  return (
    <div>
      <div className="flxr p-6 justify-between bg-animate">
        <div className="flxr gap-3 place-items-center">
          <img
            src="/icons/menu.svg"
            className="pointer lg:hidden"
            width={20}
            height={20}
            alt="mobile-menuIcon"
          />

          <p className="text-black font-extrabold uppercase text-2xl ml-4">
            ECOM.CO
          </p>
            <span className="pointer ml-10 hidden lg:block">Shop</span>
          <img
            src="/icons/arrowDown.svg"
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
            onClick={openMenu("cart")}
          />
          {cartCount}

          {/* User Icon */}
          <img
            src="/icons/user.svg"
            className="pointer"
            width={20}
            height={20}
            alt="user-icon"
            onClick={openMenu("profile")}
          />

          {/* Shared Menu Component */}
          <MenuList anchorEl={anchorEl} open={open} handleClose={handleClose}>
            {menuType === "cart" && (
              <div className="flxc p-3 gap-3">
                <span className="text-slate-600">
                  You have {cartCount} items in your cart
                </span>
                <div className="flxc justify-between gap-2">
                  <table className="w-full">
                    <tbody
                      style={{
                        display: "block",
                        maxHeight: "300px",
                        overflowY: "auto",
                        width: "260px",
                        overflowX: "hidden",
                        marginLeft: "12px",
                      }}
                    >
                      {cartInfo.map((val, index) => (
                        <tr key={val.id} className="flxr gap-5 border-b-2 py-4">
                          <td>
                            <img
                              src={val.product.url}
                              alt={`image ${index}`}
                              height={50}
                              width={50}
                            />
                          </td>
                          <td className="w-60">
                            <p className="text-sm">{val.product.name}</p>
                            <p className="font-bold text-sm">
                              {val.qty} x {numberFormat(val.product.price)} LKR
                            </p>
                            <div>
                              <p>Size: {getSizeById(val.size)}</p>
                            </div>
                          </td>
                          <td className="mx-3">
                            <img
                              src="/icons/delete.svg"
                              className="cursor-pointer w-8 h-8"
                              alt="delete"
                              onClick={() => deleteCartItem(val.cartId)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link to={"../shop-cart"}>
                  <button className="bg-transparent text-black border-[2px] my-auto mx-auto p-3 w-full rounded-md">
                    View Cart
                  </button>
                </Link>
                <button className="bg-black text-white my-auto mx-auto p-3 w-full rounded-md">
                  Checkout
                </button>
              </div>
            )}
            {menuType === "profile" && (
              <div className="flxc p-3 gap-3">
                <p className="text-slate-600">
                  {isUserLogged
                    ? `Hi, ${authInfo.auth.userInfo.name}`
                    : "Login there"}
                </p>
                {isUserLogged ? (
                    <button className="bg-black text-white my-auto mx-auto p-3 w-full rounded-md" onClick={onLogOut}>
                      Logout
                    </button>
                ) : (
                  <Link to="/login">
                    <button className="bg-black text-white my-auto mx-auto p-3 w-full rounded-md">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            )}
          </MenuList>
        </div>
      </div>
    </div>
  );
};

export default Header;
