import React from "react";

import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import CardTestimoni from "../components/CardTestimoni";
import HomeHeader from "../components/HomeHeader";
import testimoni from "../assets/testimoni-buyer.json";
import CardProductSkeleton from "../components/CardProductSkeleton";
import { useState } from "react";
import { useEffect } from "react";
function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(res => res.json()).then(r => setProducts(r.products.splice(0,10)))
  console.log(products)
  }, []);
  return (
    <>
      <HomeHeader />
      <section className="md:w-[80%] w-full mx-auto p-4 my-6">
        {/* best product */}
        <div className="flex justify-between items-center my-4">
          <p className="md:text-xl font-bold">Best Produk</p>
          <Link to={"/product"}>Lihat semua </Link>
        </div>
        <div className="w-full mt-6 flex flex-wrap ">
          {products.length > 0 ? (
            products.map((p) => {
              return (
                <CardProduct
                  id={p.id}
                  key={p.id}
                  img={p.thumbnail}
                  name_product={p.title}
                  price={p.price}
                />
              );
            })
          ) : (
            <>
              <CardProductSkeleton />
              <CardProductSkeleton />
              <CardProductSkeleton />
              <CardProductSkeleton />
            </>
          )}
        </div>
        {/* testimoni */}
        <div className="w-full my-4">
          <p className="text-center md:text-3xl text-xl font-bold mb-3">
            Testimoni
          </p>
          <div className="w-full mt-6 flex flex-wrap ">
            {testimoni.map((e) => {
              return (
                <CardTestimoni
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  text={Array.from(e.text).splice(0, 200).join("")}
                />
              );
            })}
          </div>
        </div>

        {/* brand */}
        <div className="w-full my-4">
          <p className="text-center md:text-3xl font-bold mb-3">Daftar Brand</p>

          <div className="w-full mt-6 flex flex-wrap justify-center  p-2">
            <img
              src="img/vans.jpg"
              alt=""
              className="md:w-[120px] md:h-[120px] w-[80px]  h-[80px] md:mr-8 mr-2 mb-2 "
            />
            <img
              src="img/nike.jpg"
              alt=""
              className="md:w-[120px] md:h-[120px]  w-[80px]  h-[80px]  md:mr-8  mr-2 mb-2"
            />{" "}
            <img
              src="img/guci.jpg"
              alt=""
              className="md:w-[120px] md:h-[120px]  w-[80px] h-[80px]  md:mr-8  mr-2 mb-2"
            />{" "}
            <img
              src="img/adidas.jpg"
              alt=""
              className="md:w-[120px] md:h-[120px]  w-[80px] h-[80px]  md:mr-8  mr-2 mb-2 "
            />
          </div>
          <div className="w-full p-8 border-l-8 border-blue-500 mt-8">
            <p>
              React Store situs belanja online yang sesuai untuk anda , dengan beragam paket pilihan dan tentunya dengan harga yang terjangkau.Berbelanja di situs kami merupakan sebuah keuntungan bagi anda  
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
