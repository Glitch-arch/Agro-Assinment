import React, { useEffect, useState, useRef } from "react";
import { fetchData } from "../services/api";
import ProductCard from "../components/ListingPage/ProductCard";
import Modal from "../components/ListingPage/Modal";
import { filterHelper } from "../utils/filterHelper";
import endpoints from "../configs/apiConfig";

const ListingPage = () => {
  console.log("Listing Page");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();
  const [filteredData, setFilteredData] = useState([]);

  console.log("Products:", products);

  console.log("Filtered Data:", filteredData);

  const updateProducts = async (formData) => {
    console.log("Form Data in Listing ", formData);
    let url = endpoints.PRODUCTS;
    url = new URL(url);

    console.log(
      "FOrm Data in UpdateProdcuts function logging priceRaNGE ",
      formData.priceRange
    );
    if (formData.priceRange && formData.priceRange.length === 2) {
      const minPrice = formData.priceRange[0].trim().substring(1); // Remove $ and trim whitespace
      const maxPrice = formData.priceRange[1].trim().substring(1); // Remove $ and trim whitespace
      url.searchParams.append("minPrice", minPrice);
      url.searchParams.append("maxPrice", maxPrice);
    }

    Object.keys(formData).forEach((key) => {
      if (key !== "priceRange") {
        url.searchParams.append(key, formData[key]);
      }
    });

    await fetchData(url).then((data) => {
      setProducts(data);
    });
  };

  const isInitialProductSet = useRef(false);

  useEffect(() => {
    console.log("Fetching Products...");
    setIsLoading(true);
    fetchData(endpoints.PRODUCTS)
      .then((data) => {
        console.log("Fetched Products:", data);
        setProducts(data);
        setIsLoading(false);

        if (!isInitialProductSet.current) {
          setFilteredData(filterHelper(data));
          isInitialProductSet.current = true;
        }
      })
      .catch((error) => console.error("Error while fetching Products:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && !isFilterOpen) {
        setIsFilterOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isFilterOpen]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      className={`${isFilterOpen} ? ( overflow-hidden  ) : ("mt-10 w-11/12 flex flex-col gap-20 mx-auto")`}
    >
      <div className="flex justify-between items-end">
        <h1 className="text-black text-3xl font-mono font-extrabold">
          LISTING PAGE
        </h1>
        <div className="flex flex-row justify-center items-center gap-5">
          <span
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-7 lg:hidden"
          >
            <img src="https://img.icons8.com/ios/452/filter.png" alt="filter" />
          </span>
        </div>
      </div>
      <div className="mt-10 w-11/12 flex gap-6 mx-auto">
        {/* Modal for Filtring And Sorting */}
        <div className=" ">
          <Modal
            updateProducts={updateProducts}
            data={filteredData}
            isModal={isFilterOpen}
            setModal={setIsFilterOpen}
          />
        </div>
        <div className="flex flex-col gap-7 ">
          {/* Product Cards  */}
          <div className="grid gap-4 sm:grid-cols-2  xl:grid-cols-3  ">
            {products.length > 0 ? (
              products.map((product, key) => {
                return <ProductCard key={key} product={product} />;
              })
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
