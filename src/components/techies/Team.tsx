/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Search from "@/assets/icons/search.png";
import Member from "./Member";
import { ITechie } from "@/types";
import { useQuery } from "@tanstack/react-query";
import useEndpoints from "@/services";
import LoadingSpinner from "../loadingSpinner";
import ReactPaginate from "react-paginate";

function Team() {
  const { getTechiesList } = useEndpoints();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 9; // Number of items to display per page

  const { isLoading, isError, data: TechiesList } = useQuery({
    queryKey: ["techies", { page: currentPage + 1 }],
    keepPreviousData: true,
    queryFn: getTechiesList,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  console.log(TechiesList?.data)


  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <section className="w-4/5 py-12 bg-white dark:bg-[#232323] rounded-sm border border-st-edge dark:border-st-edgeDark">
      <div className="flex items-center gap-4 pb-4 px-8 border-b border-b-st-edge dark:border-st-edgeDark">
        <h3 className="font-medium text-secondary dark:text-[#F1F3F7] flex gap-1 items-center text-base">
          Team Memebers
          <span className="text-[9px] px-3 font-medium bg-[#F1F3F7] dark:bg-[#444444] rounded-3xl">
            {TechiesList && TechiesList.data.users.length} techies
          </span>
        </h3>
        <h3 className="font-medium text-secondary dark:text-[#F1F3F7] flex gap-1 items-center text-base">
          Community Projects
          <span className="text-[9px] px-3 font-medium bg-[#F1F3F7] dark:bg-[#444444] rounded-3xl">
            2 Active
          </span>
        </h3>
        <h3 className="font-medium text-secondary dark:text-[#F1F3F7] flex gap-1 items-center text-base">
          Paid Projects
          <span className="text-[9px] px-3 font-medium bg-[#F1F3F7] dark:bg-[#444444] rounded-3xl">
            1 Active
          </span>
        </h3>
      </div>

      {/* Form Section */}
      <div className=" border-b-st-edge dark:border-st-edgeDark border-b py-4 px-8">
        <form
          action=""
          className="bg-white dark:bg-[#444444] w-full border flex justify-between p-2 dark:border-st-edgeDark border-st-edge rounded"
        >
          <div className="w-full flex items-center py-2 px-3 gap-2">
            <img src={Search.src} alt="search icon" />
            <input
              type="text"
              className="w-full dark:bg-[#444444] border-none placeholder-st-gray-500 text-black focus:outline-none"
              placeholder="Search by keyword"
            />
          </div>

          <button className="bg-[#3D4450] dark:bg-st-edgeDark text-white py-2 px-6 rounded-sm">
            Search
          </button>
        </form>
      </div>

      {/* User Info */}
      <div className="w-full h-[calc(100%-148px)] overflow-y-scroll">
        {isError && (
          <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-2xl font-medium text-center text-secondary dark:text-[#F1F3F7]">
              Something went wrong
            </h1>
          </div>
        )}
        {isLoading && (
          <div className="flex items-center justify-center w-full h-full">
            <LoadingSpinner />
          </div>
        )}
        {TechiesList && (
          <div className="grid mt-8 px-8 grid-cols-3 gap-4">
            {TechiesList.data.users
              .slice(
                currentPage * itemsPerPage,
                currentPage * itemsPerPage + itemsPerPage
              )
              .map((user) => (
                <Member key={user.id} data={user} />
              ))}
          </div>
        )}

{TechiesList && TechiesList.data.users.length > 0 && (
        <div className="flex justify-center border-4 py-8">
          <ReactPaginate 
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={Math.ceil(
              TechiesList.data.users.length / itemsPerPage
            )}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      )}

      </div>

    






    </section>
  );
}

export default Team;
