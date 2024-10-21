import React from "react";
import { FaSearch } from "react-icons/fa";
import { useListCategoriesQuery } from "../../redux/services/categories";

function SearchBar({ filteredEvents }) {
  const { data, err, isLoading } = useListCategoriesQuery([1, 7]);

  async function searchEvents(e) {
    e.preventDefault();
    const search = e.target.search.value;
    filteredEvents(search);
  }

  return (
    <form onSubmit={searchEvents} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <label htmlFor="search" className="font-semibold text-xl">
          Search Event
        </label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search here"
            className="input input-bordered w-full p-2 rounded-lg max-w-xs"
          />
          <button type="submit" className="btn btn-outline">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="form-control md:flex md:flex-col gap-2 hidden">
        <div className="font-semibold text-xl">Categories</div>
        {data?.results.map((item) => {
          return (
            <label
              key={item.id}
              className="label flex text-black justify-between cursor-pointer"
            >
              <span className="label-text">{item.categories}</span>
              <input type="checkbox" className="checkbox" />
            </label>
          );
        })}
      </div>
    </form>
  );
}

export default SearchBar;
