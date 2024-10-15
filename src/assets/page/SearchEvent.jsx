import React from "react";
import Navbar from "../component/Navbar";
import SearchBar from "../component/SearchBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { events } from "../../redux/reducers/event";
import { useNavigate } from "react-router-dom";
import { useListEventsQuery } from "../../redux/services/events";
import { FaForward, FaBackward } from "react-icons/fa";

function SearchEvent() {
  const [eventSearch, setEvent] = useState([]);
  const dispatch = useDispatch();
  const { data, err, isLoading } = useListEventsQuery([1, 5]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  async function clickEvent(id) {
    navigate("/detail/" + id);
  }
  async function filterEvents(search = "") {
    const filtered = await fetch(
      `http://103.93.58.89:21213/events?search=${search}`
    );
    const listFiltered = await filtered.json();
    setEvent(listFiltered.results);
  }
  async function eventPagination(event) {
    event.preventDefault();
    const pagination = await fetch(
      `http://103.93.58.89:21213/events?page=${page}`
    );
    const listPage = await pagination.json();
    setEvent(listPage.results);
  }

  useEffect(() => {
    setEvent(data?.results || []);
  }, [isLoading]);
  useEffect(() => {
    eventPagination();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-5 md:p-[50px] bg-[#27005D]">
        <div className="md:flex bg- hidden md:w-[242px] bg-[#AED2FF] rounded-xl p-4 h-[508px]">
          <SearchBar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[20px] md:p-[40px] bg-[#AED2FF] md:rounded-[20px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-[20px]">List Events</div>
          </div>
          <div className="flex">
            {eventSearch.length > 0 ? (
              eventSearch.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-[250px] h-[125px] items-center justify-center relative shrink-0"
                  >
                    <img
                      className="rounded-xl absolute overflow-hidden w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                    <div className="absolute bottom-0 p-4 text-white flex flex-col justify-start font-bold bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.5)] to-[rgba(16,20,38,1)] w-full">
                      <p onClick={() => clickEvent(item.id)}>{item.title}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-full w-full flex flex-col justify-center items-center gap-6">
                <div className="text-2xl font-semibold">Events not found</div>
              </div>
            )}
          </div>
          <form onSubmit={eventPagination}>
            <div className="flex items-center gap-5 justify-center">
              <button
                onClick={() => setPage(page - 1)}
                className="p-3 rounded-lg shadow-xl bg-violet-500 text-white hover:text-yellow-200 hover:brightness-90"
              >
                <FaBackward />
              </button>

              <h1>{page}</h1>
              <button
                onClick={() => setPage(page + 1)}
                className="p-3 rounded-lg shadow-xl bg-violet-500 text-white hover:text-yellow-200 hover:brightness-90"
              >
                <FaForward />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SearchEvent;
