import React from "react";
import CardProduct from "../components/CardProduct";
import CardProductSkeleton from "../components/CardProductSkeleton"

import { useState } from "react";
import { useEffect } from "react";
import ListSkeleton from "../components/ListSkeleton";
function ProductPage() {
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingProduct,setLaodingProduct]=useState(true)
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [listCategoryStatus, setListCategoryStatus] = useState("short");
  const [query, setQuery] = useState("");

  const fetchCategory = async (status) => {
    try {
      if (status == "short") {
        let data = await fetch("https://dummyjson.com/products/categories");
        data = await data.json();
        setCategoryProducts(data.splice(0, 6));
      } else {
        let data = await fetch("https://dummyjson.com/products/categories");
        data = await data.json();
        setCategoryProducts(data);
      }
    } finally {
      setLoadingCategory(false);
    }
  };
  const changeRenderCategory = () => {
    if (listCategoryStatus == "short") {
      setListCategoryStatus("long");
      fetchCategory("long");
    } else {
      setListCategoryStatus("short");
      fetchCategory("short");
    }
  };
  const fetchData = async () => {
    let data=await  fetch("https://dummyjson.com/products");
    data=await data.json();
    setProducts(data.products)
    setLaodingProduct(false)
  }
   
  const searchProduct = async (event) => {
    event.preventDefault();
    let data=await fetch(`https://dummyjson.com/products/search?q=${query}`)
    data=await data.json();
     setProducts(data.products)
     setQuery("")
  };
  const filterProduct = async (category) => {
    let data=await fetch("https://dummyjson.com/products/category/" + category);
    data=await data.json();
    setProducts(data.products)
    
     
  };
  useEffect(() => {
    fetchCategory("short");

    fetchData();
  }, []);
  return (
    <>
      <section className="md:w-[80%] w-full mx-auto md:py-8 p-4 md:mt-12">
        <form
          action=""
          className="w-full flex justify-center space-x-4"
          onSubmit={searchProduct}
        >
          <input
            type="search"
            className="md:w-[60%] w-[80%] p-2 border border-slate-900 rounded-md focus:outline-0 focus:border-blue-500 focus:border-2"
            id=""
            placeholder="Search Produk"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="px-4 py-1.5 bg-blue-500 text-white">
            Search
          </button>
        </form>
        <div className="w-full mt-6">
          <p className="mb-4 font-semibold">Kategori produk</p>
          <ul className="">
            <li
              className="p-3 border border-blue-400 bg-blue-600 text-white text-sm hover:cursor-pointer"
              onClick={fetchData}
            >
              Semua
            </li>
            {loadingCategory ? (
              <>
                {" "}
                <ListSkeleton /> <ListSkeleton /> <ListSkeleton />
              </>
            ) : (
              categoryProducts.map((e) => {
                return (
                  <li
                    key={e.slug}
                    onClick={() => filterProduct(e.slug)}
                    className="p-3 border border-slate-900 text-sm hover:cursor-pointer hover:bg-slate-100"
                  >
                    {e.name}
                  </li>
                );
              })
            )}
          </ul>
          <span
            className="mt-2 text-right block hover:cursor-pointer"
            onClick={changeRenderCategory}
          >
            {listCategoryStatus == "short" ? (
              <>Lihat semua kategori</>
            ) : (
              <>Lihat sebagian</>
            )}
          </span>
        </div>
        <div className="w-full mt-6 flex flex-wrap ">
          {
            (loadingProduct) ? (
              <>
              <CardProductSkeleton></CardProductSkeleton>
              <CardProductSkeleton></CardProductSkeleton>
              <CardProductSkeleton></CardProductSkeleton>
              </>
            ): (
              products.length > 0 ? (
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
                <div className="w-full">
                  <p className="text-center text-red-500 mt-10">
                    Produk tidak ditemukan
                  </p>
                </div>
              )            )
          }
        
        </div>
      </section>
    </>
  );
}

export default ProductPage;
