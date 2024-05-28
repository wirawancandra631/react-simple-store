import React from "react";
import { Link } from "react-router-dom";
function CardProduct({ img, name_product, price, id = "" }) {
  return (
    <div className="md:w-[18%] w-[47%] md:min-h-[300px] min-h-[250px] bg-slate-100 shadow-lg overflow-hidden rounded-md mr-2 mb-2 hover:bg-slate-200">
      <img
        src={`${img}`}
        alt=""
        className="w-full md:h-[250px] h-[200px]"
      />
      <div className="w-full  p-4">
        <p className="md:font-semibold mb-2 md:text-md ">{name_product}</p>
        <p className="text-gray-800 mb-2 md:text-md text-sm">Rp {price}</p>
        <Link
          to={`/product/detail/${id}`}
          className="md:w-[100px] w-[100px] p-2 bg-[#D08731] md:text-sm text-[10px]  text-white block ml-auto text-center rounded-xl hover:shadow-xl"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
