function Social({ register }: any) {
  return (
    <>
      <div className=" my-4">
        <label className=" text-[#000] dark:text-white" htmlFor="">
          What's your Twitter handle?
        </label>
        <input
          {...register("twitter_handle")}
          className="w-full border-b-[1px] text-[#000] dark:text-white  border-b-[#33333380] input__transparent py-2 focus:outline-none focus:border-b-[1px] focus:border-b-[#333]"
          type="text"
        />
      </div>
      <div className="my-4">
        <label className=" text-[#000] dark:text-white" htmlFor="">
          What's your linkedIn profile?
        </label>
        <input
          {...register("linkedin_profile")}
          className="w-full text-[#000] dark:text-white border-b-[1px] border-b-[#33333380] input__transparent py-2 focus:outline-none focus:border-b-[1px] focus:border-b-[#333]"
          type="text"
        />
      </div>
      <div className="my-4">
        <label className=" text-[#000] dark:text-white" htmlFor="">
          Are you currently working?
        </label>
        <section className="flex text-[#000] dark:text-white gap-4 my-4 ">
          <div className="">
            <input type="checkbox" className=" rounded-full" />
            <label className="mx-2 text-[#000] dark:text-white" htmlFor=" ">
              Yes
            </label>
          </div>
          <div className="">
            <input type="checkbox" />
            <label className="mx-2 text-[#000] dark:text-white" htmlFor="">
              No
            </label>
          </div>
        </section>
      </div>
    </>
  );
}

export default Social;
