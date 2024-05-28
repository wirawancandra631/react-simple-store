import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CiTrash } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";

import CartProductSkeleton from "../components/CartProductSkeleton";
import Modal from "../components/Modal";
function CartProductPage() {
    const [id,setId]=useState(null)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const fetchData = () => {
    let data = window.localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
      setLoading(false);
    } else {
      setProducts([]);
      setLoading(false);
    }
  };
  const openModal=(id)=>{
    setId(id);
    setShowModal(true)
  }
  const deleteCart=()=>{
    let removedData=products.filter(p => p.id!=id);
    window.localStorage.setItem("products",JSON.stringify(removedData));
    setShowModal(false)
    fetchData()
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="md:w-[80%] w-full mx-auto md:py-8 md:mt-10 p-2">
        <div className="w-full p-4 bg-slate-50 border-l-4 border-slate-900 mb-4">
          <p>Daftar Produk anda</p>
        </div>
        {loading ? (
          <>
            <CartProductSkeleton />
            <CartProductSkeleton />
            <CartProductSkeleton />
          </>
        ) : (
          <div className="w-full mt-4 md:p-0 ">
            {products.length > 0 ? (
              products.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="w-full h-[150px] bg-slate-200 flex mb-4 overflow-hidden rounded-md"
                  >
                    <img
                      src={p.thumbnail}
                      alt=""
                      className="h-full md:w-[10%] w-[30%]"
                    />
                    <div className="md:w-[90%] w-[70%] p-4 flex flex-col justify-between">
                      <p className="mb-2 font-bold">{p.title}</p>
                      <p>Rp {p.price}</p>
                      <div className="w-full flex">
                        <button className="md:px-4 md:py-1.5 p-1 bg-red-500 text-white text-sm mr-2 rounded-md flex items-center text-sm" onClick={()=>openModal(p.id)}>
                          <CiTrash />
                          <span className="ml-2" >Hapus dari cart</span>
                        </button>
                        <button className="md:px-4 md:py-1.5 p-1 bg-blue-500 text-white text-sm rounded-md flex items-center text-sm">
                          <FaChevronRight />
                          <span className="ml-2">Lihat Produk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center">Belum ada produk yang ditambahkan</p>
            )}
          </div>
        )}
        {
            (showModal) ? <Modal><div className="w-full p-4 flex justify-center "><button type="button" className="px-2 py-1.5 bg-blue-500 mr-2 text-white" onClick={()=>deleteCart()}>Hapus dari cart</button><button type="button" className="px-2 py-1.5 bg-red-500 text-white" onClick={()=>setShowModal(false)}>Cancel</button></div></Modal> : <></>
        }
      </div>
    </>
  );
}

export default CartProductPage;
