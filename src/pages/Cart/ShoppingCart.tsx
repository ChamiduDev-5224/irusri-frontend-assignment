import React from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getSizeById, numberFormat } from "../../utility/commonScript.js";
import { removeItem } from "../../redux/Slices/CartSlice.js";
const ShoppingCart: React.FC = () => {
  const cartInfo = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  let subTotal = 0;
  let deliveryCost = 400;

  //cart item remove
  const deleteCartItem = (val: number) => {
    dispatch(removeItem(val));
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row gap-5 min-h-screen">
        <div className=" mx-4 sm:mx-10 md:mx-16 lg:mx-24 my-12 border-2 rounded-xl w-fit px-2 py-6 h-[400px]">
          <table
            style={{
              display: "block",
              maxHeight: "370px",
              overflowY: "auto",
            }}
          >
            <thead className="text-left">
              <tr className="border-b-2 border-gray-100">
                <th className="w-72">Products</th>
                <th>Price</th>
                <th className="px-12 py-2">Quantity</th>
                <th>SubTotal</th>
                <th className="px-6"> </th>
              </tr>
            </thead>
            <tbody>
              {cartInfo?.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-2xl text-center py-2 bg-red-200 text-red-600">
                    Cart Empty
                  </td>
                </tr>
              )}{" "}
              {cartInfo?.map((val, index) => {
                subTotal = subTotal + val.product.price * val.qty;
                return (
                  <tr key={index} className="border-b-2 border-gray-100">
                    <td className="flxr gap-2  items-center">
                      <img
                        src={val.product.url}
                        alt={val.product.url}
                        height={32}
                        width={32}
                        className="my-4"
                      />
                      <div>
                        <p className="text-sm font-semibold">
                          {val.product.name}
                        </p>
                        <p>Size: {getSizeById(val.size)}</p>
                      </div>
                    </td>
                    <td className="text-right">
                      {numberFormat(val.product.price)} LKR
                    </td>
                    <td className="px-12">
                      <div className="flxr border-[1px] border-black gap-2 rounded-lg items-baseline">
                        <button
                          className="px-3 py-2 hover:bg-slate-100 rounded-l-lg active:bg-slate-200"
                          onClick={() => {
                            setQtyCount(qtyCount > 0 ? qtyCount - 1 : 0);
                          }}
                        >
                          -
                        </button>
                        <span className="w-3 text-center">{val.qty}</span>
                        <button
                          className="px-3 py-2 hover:bg-slate-100 rounded-r-lg active:bg-slate-200"
                          onClick={() => {
                            setQtyCount(qtyCount + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-right px-4">
                      {numberFormat(val.product.price * val.qty)} LKR
                    </td>
                    <td>
                      <img
                        src="/icons/delete.svg"
                        className="cursor-pointer w-5 h-5"
                        alt="delete"
                        onClick={() => {
                          deleteCartItem(val.cartId);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className=" my-12 self-center lg:self-start border-2 rounded-xl  w-[400px] lg:w-fit px-2 py-6 h-[400px]">
          <div className="flxr gap-10 justify-between border-b-2 font-extrabold px-10 py-3 mb-4">
            <h3>Sub Total</h3>
            <h3>{numberFormat(subTotal)} LKR</h3>
          </div>
          <span className="text-sm py-4">Enter Discount Code</span>
          <div className="flxr border-[1px] border-black rounded-lg -z-20 items-baseline ">
            <input type="text" className="w-full py-2 rounded-lg pl-4" />
            <button
              className=" py-2 bg-black text-white w-1/5 rounded-r-lg active:bg-slate-900"
              onClick={() => {
                setQtyCount(qtyCount + 1);
              }}
            >
              +
            </button>
          </div>
          <div className={`flex flex-row justify-between my-4 mx-6 border-b-2 ${subTotal==0?'hidden':''}`}>
            <span className="py-4">Delivery Charge</span>
            <span className="py-4">{numberFormat(deliveryCost)} LKR</span>
          </div>

          <div className="flex flex-row justify-between my-5 mx-6">
            <p className=" text-lg font-bold py-4">Grand Total</p>
            <p className="text-lg font-bold py-4">
              {numberFormat(subTotal==0?0:deliveryCost + subTotal)} LKR
            </p>
          </div>
          <button className="text-center w-full rounded-lg py-2 px-10 bg-black active:opacity-90 text-white">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
