import stars from "../../assets/icons/Stars.png";
import rocket from "../../assets/icons/big-blue-flying-rocket.png";
import useNavigateForms from "../../hooks/useNavigateForms";
import { TNewUserFields } from "../../types/type";
import SubmitStatus from "./SubmitStatus";
import { useState } from "react";
import useAxiosAuth from "../../hooks/useAxiosAuth";

export type Status = "onsubmit" | "success" | "error" | "progress";

export let NEW_USER_DATA: TNewUserFields = {
  first_name: "",
  last_name: "",
  password: "",
  password_confirmation: "",
  email: "",
  phone_number: "",
  portfolio: "",
  stack: "",
  years_of_experience: null,
  bio: "",
  twitter_profile: "",
  linkedin_profile: "",
  github_profile: "",
  portfolio_url: "",
  is_active: false,
  profile_pic_url: "",
};

function NewSignUp() {
  const [status, setStatus] = useState<Status>("progress");
  const authAxios = useAxiosAuth();
  const { handleSubmit, next, previous, currentForm, currentFormIndex } =
    useNavigateForms();

  const onSubmit = (data: Partial<TNewUserFields>) => {
    NEW_USER_DATA = { ...NEW_USER_DATA, ...data };
    if (currentFormIndex === 3) {
      const { years_of_experience, password, password_confirmation } =
        NEW_USER_DATA;
      if (password !== password_confirmation) return;
      NEW_USER_DATA = {
        ...NEW_USER_DATA,
        years_of_experience: Number(years_of_experience),
      };
      setStatus("onsubmit");
      authAxios
        .post("/api/v1/users/register", NEW_USER_DATA)
        .then((res) => {
          setStatus("success");
        })
        .catch((err) => {
          if (err.response.data.detail) {
            alert(err.response.data.detail);
            setStatus("progress");
            return;
          }
        });
    }
    next();
  };

  return (
    <div className="w-full  bg-white dark:bg-[#111111] overflow-x-hidden">
      <div className="w-screen min-h-screen grid lg:grid-cols-2 bg-[#fff] dark:bg-[#111111] max-w-[1440px] mx-auto">
        <div className="new-sign-upbg  lg:block  ">
          <div className="flex flex-col gap-4 justify-center p-0 lg:p-8 w-4/5 mx-auto  h-full">
            <img
              src={stars}
              className="hidden lg:block w-36 object-contain h-8 "
              alt="stars"
            />
            <h1 className=" text-[2rem] text-center lg:text-left md:text-[3.5rem] text-white font-bold ">
              Welcome to{" "}
              <mark className="text-[#ffffffd8]">Slightly Techie Network</mark>
            </h1>
            <img
              className=" hidden lg:block aspect-square w-20 object-contain "
              src={rocket}
              alt="rocket"
            />
          </div>
        </div>
        {status !== "progress" ? (
          <SubmitStatus status={status} />
        ) : (
          <div className=" p-8 md:w-[30rem] lg:w-5/6 mx-auto my-auto flex flex-col gap-4 justify-center h-fit">
            <section className="flex text-[#000] dark:text-[#f1f3f7]  mx-auto text-[1.5rem] font-medium justify-between">
              <h3>{currentForm.category}</h3>
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
              {currentForm.element}
              <section className="flex gap-4 justify-end">
                {currentFormIndex !== 0 && (
                  <button
                    onClick={previous}
                    type="button"
                    className=" px-8 py-2 bg-[#001] hover:bg-[#333] dark:bg-[#F1F3F7] dark:hover:bg-[#ffffff] text-[#f1f3f7]  dark:text-[#000] rounded-sm"
                  >
                    Back
                  </button>
                )}
                {currentFormIndex <= 3 && (
                  <button className="px-8 py-2 bg-[#001] hover:bg-[#333] dark:bg-[#F1F3F7] dark:hover:bg-[#ffffff] text-[#f1f3f7] dark:text-[#000] rounded-sm">
                    {currentFormIndex === 3 ? "Submit" : "Next"}
                  </button>
                )}
              </section>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewSignUp;
