import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { urls } from "../../utility/Url.js";
import { ProductInterface } from "../../utility/interface.js";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { numberFormat } from "../../utility/commonScript.js";
import Rates from "../../components/Rates/Rates.js";
import { Footer } from "../../components/Footer/Footer.js";
import ProductsMapper from "../../components/Products/ProductsMapper.js";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb.js";
import { ToastContainer, toast } from "react-toastify";
import { cartInfo } from "../../redux/Slices/CartSlice.js";
import { useDispatch } from "react-redux";
import { checkProduct } from "../../utility/Validate.js";
export const NewArrivalProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductInterface>({});
  const [color, setColor] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [qtyCount, setQtyCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  let { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    let proObj = urls.arrivalInfo.find((val:any) => val.id == parseInt(id));
    setProduct(proObj);
  }, [urls.arrivalInfo, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // product adding to cart
  const addCart = () => {
    let res = checkProduct(color, size, qtyCount);
    if (res.sts == 1) {
      dispatch(cartInfo({ id, product: product, color, size, qty: qtyCount }));
      toast.success("Product added to cart!");
    } else {
      toast.error(res.msg);
    }
  };
  return (
    <div>
      {!product && (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={false}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Header />
      <ToastContainer theme="dark" />

      <div className="flxr mx-3 lg:mx-16 font-semibold text-gray-400">
        <Breadcrumb array={["Home", "Products", "New Arrivals"]} />
      </div>
      <div className="min-h-screen bg-slate-50 mt-4">
        <div className=" flxc md:flxr mx-3 lg:mx-16 gap-6">
          <div>
            <img
              className="bg-transparent w-[400px] place-self-center"
              src={product?.url}
              alt="product preview"
            />
            <div className="flxr mt-2  place-self-center">
              {Array.from({ length: 3 }, (_, index) => (
                <img
                  className="bg-transparent  w-[100px]  hover:border-2 border-gray-400 cursor-pointer"
                  src={product?.url}
                  alt={`product preview ${index}`}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl mt-3">
                {product?.name}
              </h1>
              <h4 className="text-sm py-1 px-3 bg-green-100 text-center text-green-500 rounded-md">
                In Stock
              </h4>
            </div>
            <div className="flxr gap-3">
              <h1 className="text-xl my-1">{numberFormat(product.price)}LKR</h1>
              {product.isDiscount && (
                <h1 className="text-lg my-1 text-zinc-400 line-through">
                  {numberFormat(product.oldPrice)}LKR
                </h1>
              )}
            </div>
            <div className="flxr gap-5">
              <Rates rate={product.rate} />
              <span className="text-zinc-400">
                {product.rate?.toFixed(2)} (300 Reviews)
              </span>
            </div>
            <p>{product.description}</p>
            <h3 className="font-extrabold mt-2">Color</h3>
            <div className="flxr gap-2">
              {urls.colors.map((val:any, index:number) => (
                <div
                  className={`${
                    val?.color
                  } w-10 h-10 rounded-lg border-2 hover:opacity-70 cursor-pointer  ${
                    color == val.id && "border-gray-400"
                  }`}
                  key={index}
                  onClick={() => {
                    setColor(val.id);
                  }}
                ></div>
              ))}
            </div>

            <h3 className="font-extrabold mt-3">Size</h3>
            <div className="flxr gap-2 mt-1">
              {urls.sizes.map((val, index) => (
                <div
                  className={`w-10 h-10 rounded-md border-[1px] hover:opacity-70 text-center flxr justify-center items-center border-black font-thin cursor-pointer ${
                    size == val.id
                      ? "bg-black text-white"
                      : "bg-transparent text-black"
                  }`}
                  key={index}
                  onClick={() => {
                    setSize(val.id);
                  }}
                >
                  {val?.size}
                </div>
              ))}
            </div>
            {/* adding card button */}
            <div className="flxr mt-8 gap-4 sm:gap-6 md:gap-10 lg:gap-12">
              <div className="flxr border-[1px] border-black gap-2 rounded-lg items-baseline">
                <button
                  className="px-3 py-2 hover:bg-slate-100 rounded-l-lg active:bg-slate-200"
                  onClick={() => {
                    setQtyCount(qtyCount > 0 ? qtyCount - 1 : 0);
                  }}
                >
                  -
                </button>
                <span className="w-3 text-center">{qtyCount}</span>
                <button
                  className="px-3 py-2 hover:bg-slate-100 rounded-r-lg active:bg-slate-200"
                  onClick={() => {
                    setQtyCount(qtyCount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="bg-black hover:hover:drop-shadow-2xl active:opacity-90 rounded-lg py-3 px-10 sm:px-16 md:px-24 lg:px-32 text-white text-sm"
                onClick={addCart}
              >
                Add to Cart
              </button>
              <span
                className={`self-center border-black px-3 py-3 border-[1px] rounded-lg border-opacity-65 cursor-pointer ${
                  isLiked ? "bg-slate-200" : "bg-transparent"
                }`}
                onClick={() => {
                  setIsLiked(!isLiked);
                }}
              >
                <img src="/icons/like.svg" alt="like" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Relative Products */}
      <section className="mb-12">
        <h1 className="uppercase font-extrabold text-5xl text-center my-10">
          Relative Products
        </h1>
        <ProductsMapper array={urls.arrivalInfo} type="newArrival" />
      </section>
      {/*End Relative Products */}

      <Footer />
    </div>
  );
};
