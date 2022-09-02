import React, { useState } from "react";

const SearchBar = (props) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(data);
  };

  return (
    <div className="  pt-10 bg-[#FF0000]">
      <form className="  shadow-lg py-6 text-center" onSubmit={handleSubmit}>
        <label
          className="text-3xl  text-white font-semibold mr-5 "
          htmlFor="name"
        >
          Search Videos :
        </label>

        <input
          className="h-12 w-1/2 border border-black rounded-md pl-2 focus:outline-none "
          type="text"
          placeholder="Search any Video"
          value={data}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
