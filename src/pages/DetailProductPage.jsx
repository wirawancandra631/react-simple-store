import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import { FaWhatsapp, FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewProductSkeleton from "../components/ReviewProductSkeleton";
import DetailProductSkeleton from "../components/DetailProductSkeleton";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
function DetailProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [messageCart, setMessageCart] = useState("");

  const changeMainImage = (src) => {
    setMainImage(src);
  };
  const fetchData = async () => {
    try {
      let data = await fetch("https://dummyjson.com/products/" + id);
      if (data.status == 404) {
        navigate("/page-not-found");
      } else {
        data = await data.json();
        setProduct(data);
        setMainImage(data.thumbnail);
        setPageLoading(false);
      }
    } catch (m) {}
  };
  const addCart = () => {
    if (window.localStorage.getItem("products")) {
      let dataOld = JSON.parse(window.localStorage.getItem("products"));
      console.log(dataOld)
      if(dataOld.length > 0){
        dataOld.forEach((element) => {
          if (element.id == id) {
            setShowModal(false);
            setMessageCart("Produk di tambahkan");
          } else {
            dataOld.push(product);
            window.localStorage.setItem("products", JSON.stringify(dataOld));
            setShowModal(false);
            setMessageCart("Produk di tambahkan");
          }
        
        });
      } 
      else {
        dataOld.push(product);
        window.localStorage.setItem("products", JSON.stringify(dataOld));
        setShowModal(false);
        setMessageCart("Produk di tambahkan");

      }
     
    } else {
      let data = [];
      data.push(product);
      window.localStorage.setItem("products", JSON.stringify(data));
      setShowModal(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (pageLoading) {
    return (
      <section className="md:w-[80%] w-full mx-auto md:py-8 md:mt-10">
        <DetailProductSkeleton />
        <div className="w-full md:mt-8 mt-4 md:p-0 p-4"></div>
        <ReviewProductSkeleton /> <ReviewProductSkeleton />{" "}
      </section>
    );
  } else {
    return (
      <section className="md:w-[80%] w-full mx-auto md:py-8 md:mt-10 ">
        <div className="w-full  md:min-h-[500px] min-h-[400px] pb-5 bg-slate-100 shadow-md flex md:flex-nowrap flex-wrap">
          <div className="md:w-[40%] w-full md:p-8 ">
            <img
              src={`${mainImage}`}
              alt=""
              className="md:w-[80%] md:h-[350px] w-full h-[200px] md:mx-auto md:block md:rounded-md shadow-md"
            />
            <div className="md:w-[80%] w-full md:mx-auto flex md:mt-4 md:justify-between md:p-0 p-2 md:space-x-0 space-x-2">
              {product.images.map((e) => {
                return (
                  <img
                    key={e}
                    src={e}
                    alt=""
                    className="md:h-[120px] md:w-[120px] w-[80px] h-[80px] shadow-md hover:cursor-pointer"
                    onClick={() => changeMainImage(e)}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:w-[60%] w-full md:p-8 px-2 ">
            <p className="md:text-3xl text-xl mb-4 font-semibold">
              {product.title}
            </p>
            {messageCart != "" ? (
              <div className="w-full border-l-4 border-blue-500 p-2 my-2">
                {messageCart}
              </div>
            ) : (
              <></>
            )}
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setShowModal(true)}
                className="px-2 py-1.5 bg-purple-500 text-white rounded-md shadow-xl text-sm flex items-center space-x-2"
              >
                <FaRegPlusSquare />
                <span> Add to cart</span>
              </button>
              <button className="px-2 py-1.5 bg-green-500 text-white rounded-md shadow-xl text-sm flex  items-center space-x-2">
                <FaWhatsapp />
                <span>Chat Whatsapp</span>
              </button>
            </div>
            <div className="w-full md:text-md text-sm">
              <p className="mb-2">Price Rp {product.price}</p>
              <p className="mb-2">Brand {product.brand}</p>

              <p className="mb-4">Deskripsi</p>
              <p className="border-l-4 border-blue-500 p-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-8 mt-4 md:p-0 p-4">
          <p className="md:text-2xl font-semibold">Ulasan Produk</p>
          {product.reviews.map((r) => {
            return (
              <div
                key={r.reviewerName}
                className="md:w-full w-[95%] p-4 mt-4 bg-slate-100 min-h-[120px]"
              >
                <p className="mb-2 font-bold flex items-center">
                  <FaRegUserCircle />
                  <span className="ml-2">{r.reviewerName}</span>
                </p>
                <p className="text-sm mb-2 ml-6">{r.date}</p>
                <p className="ml-6">{r.comment}</p>
              </div>
            );
          })}
        </div>
        {showModal ? (
          <Modal>
            <div className="w-full p-4 flex justify-center ">
              <button
                type="button"
                className="px-2 py-1.5 bg-blue-500 mr-2 text-white"
                onClick={() => addCart(product.id)}
              >
                Tambahkan Ke Cart
              </button>
              <button
                type="button"
                className="px-2 py-1.5 bg-red-500 text-white"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </Modal>
        ) : (
          <></>
        )}
      </section>
    );
  }
}

export default DetailProductPage;
