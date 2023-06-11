import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "Redux/actions/productsActions";
import { Search } from "api/api";
import { BsSearch } from "react-icons/bs";
import { LineWave } from "react-loader-spinner";

const SearchBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const [searchedData, setSearchedData] = React.useState([]);

  let timeOut;

  const handleSearch = (e) => {
    clearTimeout(timeOut);

    let searchedItem = e.target.value;

    searchedItem.length === 0 ? setLoading(false) : setLoading(true);

    let filteredData;

    timeOut = setTimeout(() => {
      if (searchedItem.length > 0) {
        Search("products", searchedItem)
          .then((data) => {
            filteredData = data;
            setSearchedData(filteredData);
          })
          .then(() => setLoading(false));
      } else {
        setSearchedData([]);
      }
    }, 2000);
  };

  return (
    <>
      <div className="relative  gap-2 mx-auto flex justify-center items-center">
        <BsSearch className="text-xl text-salmon absolute inset-y-0 right-1 top-2 pointer-events-none  cursor-pointer" />
        <div className="absolute left-5 -top-4">
          <LineWave
            height="50"
            width="50"
            color="#ff084e"
            ariaLabel="line-wave"
            visible={loading}
          />
        </div>
        <input
          onChange={(e) => handleSearch(e)}
          type="search"
          id="default-search"
          className="cursor-pointer block py-1 md:py-2 pr-8 pl-2 w-full text-sm placeholder:text-white focus:placeholder:text-carbon text-carbon bg-transparent border-b-2 border-transparent focus:ring-salmon focus:border-salmon focus:bg-white focus:placeholder-carbon dark:focus:border-salmon outline-none duration-500"
          placeholder="جستجو"
          required
        />
        {searchedData.length > 0 ? (
          <div className="absolute top-10 w-full text-carbon bg-red max-h-96 overflow-y-auto border-2  z-10">
            {searchedData.map((item) => {
              return (
                <div
                  onClick={() => {
                    dispatch(selectedProduct(item));
                    document.getElementById("default-search").value = "";
                    navigate(
                      `/productDetails/${item.gender}/${item.title}/${item.category}+${item.brand}+مدل+${item.model}/${item.id}`,
                      {
                        replace: true,
                      }
                    );
                    setSearchedData([]);
                  }}
                  key={item.id}
                  className="bg-zinc-100 text-sm md:text-base py-2 border-b overflow-clip w-full cursor-pointer hover:bg-zinc-200"
                >
                  {item.title} {item.model} مدل {item.brand} در دسته{" "}
                  {item.category} {item.gender}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SearchBar;
