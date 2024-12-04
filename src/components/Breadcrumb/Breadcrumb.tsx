import React from "react";
import { BreadcrumbInterface } from "../../utility/interface";

export const Breadcrumb: React.FC<BreadcrumbInterface> = ({ array }) => {
  let arrayLength: number = array.length;
  
  return (
    <div className="flxr gap-2">
      {array?.map((val: string, index: number) => { 
        return (
          <div key={index}>
            <span className="cursor-pointer">{val}</span>
            {index !== arrayLength - 1 && <span> ˃ </span>}
          </div>
        );
      })}
    </div>
  );
};
