import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import RadioBtn from "./RadioBtn";

const Modal = ({ updateProducts, data, isModal, setModal }) => {
  const [formData, setFormData] = useState({
    sort: "",
    priceRange: [],
    category: [],
    brand: [],
  });

  const checkBoxHandler = (event) => {
    const { name, value, checked, type } = event.target;
    // console.log("Logging event in CheckBox handler", event.target);
    // console.log("Name: =>", name);
    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
      }
    } else if (type === "radio" || type === "select-one") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (type === "radio" && name === "priceRange") {
      const [minPrice, maxPrice] = value.split("-").map(String);
      setFormData({
        ...formData,
        priceRange: [minPrice, maxPrice],
      });
    }
  };

  useEffect(() => {
    updateProducts(formData);
  }, [formData]);

  const closeModal = () => {
    setModal(false);
  };

  if (!isModal) return null;

  return (
    <div className=" flex flex-col overflow-y-auto gap-5 lg:relative  lg:w-auto lg:h-auto fixed top-0 left-0 w-full h-full bg-white lg:bg-inherit mx-auto px-5 pt-10  z-50 first-letter: ">
      <div className="flex justify-between sm:w-2/3 sm:mx-auto">
        <h3 className="font-mono font-extrabold text-lg ">Filter</h3>
        <span className="lg:hidden" onClick={closeModal}>
          <img
            className="w-7 h-7"
            src="https://img.icons8.com/?size=100&id=7703&format=png&color=000000"
            alt=""
          />
        </span>
      </div>

      {/* Sort BY */}
      <div className="flex flex-col gap-2 sm:w-2/3 sm:mx-auto">
        <h2 className="font-mono font-extrabold text-xl">Sort By</h2>
        <div className="flex flex-col gap-3 font text-lg font-sans font-semibold">
          <label className="flex gap-2 leading-10">
            <input
              name="sort"
              type="radio"
              checked={formData.sort === "Desc"}
              value="Desc"
              onChange={checkBoxHandler}
            />
            Price: High to Low
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              checked={formData.sort === "Aesc"}
              name="sort"
              value="Aesc"
              onChange={checkBoxHandler}
            />
            Price: Low to High
          </label>
        </div>
      </div>

      {/* Shop by Price */}
      <div className="flex flex-col gap-3 sm:w-2/3 sm:mx-auto">
        <h2 className="font-mono font-extrabold text-xl">Shop by Price</h2>

        <div className="flex flex-col gap-3  text-lg font-sans font-semibold">
          {data.priceRange?.map((priceRange, key) => (
            <RadioBtn
              name="priceRange"
              key={key}
              data={"$" + priceRange.min + " - " + "$" + priceRange.max}
              checkBoxHandler={checkBoxHandler}
              formData={formData?.priceRange[0] + "-" + formData?.priceRange[1]}
            />
          ))}
        </div>
      </div>

      {/* Category  */}

      <div className="flex flex-col gap-3 sm:w-2/3 sm:mx-auto">
        <h2 className="font-mono font-extrabold text-xl">Category</h2>
        <div className="flex flex-col gap-3  text-lg font-sans font-semibold">
          {data.category?.map((category, key) => (
            <CheckBox
              key={key}
              name="category"
              data={category}
              checkBoxHandler={checkBoxHandler}
            />
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="flex flex-col gap-3 sm:w-2/3 sm:mx-auto">
        <h2 className="font-mono font-extrabold text-xl">Brand</h2>
        <div className="flex flex-col gap-3  text-lg font-sans font-semibold">
          {data.brand?.map((brand, key) => (
            <CheckBox
              key={key}
              data={brand}
              name="brand"
              checkBoxHandler={checkBoxHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
