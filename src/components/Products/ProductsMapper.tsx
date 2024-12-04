import React from "react";
import { ProductMapperInterface } from "../../utility/interface";
import { numberFormat } from "../../utility/commonScript.js";
import { useNavigate } from "react-router-dom";

const ProductsMapper: React.FC<ProductMapperInterface> = ({ array, type }) => {
  const nav = useNavigate();
  return (
    <div id="card-row" className="flxc gap-5 md:flxr justify-between px-16">
      {array?.map((val:any, index:number) => {
        return (
          <div
            key={index}
            onClick={() => {
              nav(`../product/${type}/${val.id}`);
            }}
          >
            <div className="arivl-card">
              <img
                src={`${val.url}`}
                className={
                  index == 1 ? "w-52 my-auto mx-auto" : "w-60 my-auto mx-auto"
                }
                width={100}
                height={30}
                alt={val.alt}
              />
            </div>
            <p className="text-sm font-semibold my-1">{val.name}</p>
            <div>
              <span className="font-bold my-1">
                {numberFormat(val.price)}LKR
              </span>
              {val.isDiscount && (
                <>
                  <span className="font-bold my-1 mx-2 text-brand-bg-main line-through">
                    {numberFormat(val.oldPrice)}LKR
                  </span>
                  <span className="bg-brand-bg-lightRed bg-opacity-40 text-brand-font-discount py-1 px-4 rounded-xl text-[10px]">
                    -{val.discount}%
                  </span>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsMapper;
