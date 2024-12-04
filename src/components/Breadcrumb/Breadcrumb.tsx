import React from "react";
import { breadcrumbInterface } from "../../utility/interface";

export const Breadcrumb: React.FC<breadcrumbInterface> = ({ array }) => {
  let arrayLength: number = array.length;
  return (
    <div className="flxr gap-2">
      {array?.map((val, index) => {
        return (
          <div key={index}>
            <span className="cursor-pointer">{val}</span>
            {index !== arrayLength - 1 && <span>˃</span>}
          </div>
        );
      })}
    </div>
  );
};
