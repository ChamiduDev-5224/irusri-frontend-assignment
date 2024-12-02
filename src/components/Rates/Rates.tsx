import React from "react";
interface RateInterface {
  rate: number;
}

const Rates: React.FC<RateInterface> = ({ rate }) => {
  return (
    <div className="flxr">
       {Array.from({ length: rate }, (_, index) => (
         <img
         src="/icons/star-icon.svg"
         className="cursor-pointer"
         width={24}
         height={24}
         alt={`Rate-${index}`}
         key={index}
       />
      ))}
     
    </div>
  );
};

export default Rates;
