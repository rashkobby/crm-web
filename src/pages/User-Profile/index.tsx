import React from "react";
import { Colors } from "../constants";

const UserProfile = () => {
  const UserFields = [
    // { title: "First Name:", value: "John K." },
    // { title: "Last Name:", value: "Doe" },
    { title: "Email:", value: "Johndoe@slightlytechie.com" },
    { title: "Username:", value: "JohnKDoe" },
  ];

  const BasicFields = [
    { title: "Github Url", value: "https://www.github.com/johnkdoe" },
    { title: "Portfolio Url", value: "https://www.jkDoe.tech" },
    { title: "Bio:", value: "I perform computer magic everyday for a living" },
    {
      title: "Location",
      value: "I live in every one who has a little techie in them",
    },
  ];

  const SocialFields = [
    { title: "Twitter", value: "https://www.twitter.com/johnkdoe" },
    { title: "LinkedIn", value: "https://www.linkedin.com/in/johnkdoe" },
  ];
  return (
    <div
      className={`flex justify-center min-h-screen bg-[${Colors.background}]`}
    >
      <div className="xl:mx-96 flex min-h-full w-full flex-col pt-6">
        <h1 className="text-3xl text-slate-50">User Profile</h1>
        <div className="flex h-full w-full">
          <div className="hidden md:flex w-[350px] justify-center p-4">
            <div className="flex flex-col items-center">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <img
                  src={"https://avatars.dicebear.com/api/initials/Johnkdoe.svg"}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="my-4 w-full">
                <button
                  className={`bg-[${Colors.Gray[200]}] p-1 w-full text-slate-50 rounded-sm border border-[${Colors.Gray[100]}]`}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col p-4 gap-4 text-slate-100">
            <div className="w-full bg-[#282828] border border-[#3A3A3A] rounded-md p-4">
              <h2 className="text-2xl font-bold">User</h2>
              <div className="flex flex-col gap-5 my-7">
                <div className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    First Name
                    <input
                      disabled
                      readOnly
                      value="John K."
                      className="w-full p-2 rounded-md bg-transparent border-2 border-[#3A3A3A]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    Last Name
                    <input
                      disabled
                      readOnly
                      value="Doe"
                      className="w-full p-2 rounded-md bg-transparent border-2 border-[#3A3A3A]"
                    />
                  </div>
                </div>
                {UserFields.map((field) => (
                  <div className="flex flex-col gap-2">
                    {field.title}
                    <input
                      disabled
                      readOnly
                      value={field.value}
                      className="w-full p-2 rounded-md bg-transparent border-2 border-[#3A3A3A]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-[#282828] border border-[#3A3A3A] rounded-md p-4">
              <h2 className="text-2xl font-bold">Basic</h2>
              <div className="flex flex-col gap-5 my-7">
                {BasicFields.map((field) => (
                  <div className="flex flex-col gap-2">
                    {field.title}
                    <input
                      disabled
                      readOnly
                      value={field.value}
                      className="w-full p-2 rounded-md text-opacity-30 bg-transparent border-2 border-[#3A3A3A]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-[#282828] border border-[#3A3A3A] rounded-md p-4">
              <h2 className="text-2xl font-bold">Socials</h2>
              <div className="flex flex-col gap-5 my-7">
                {SocialFields.map((field) => (
                  <div className="flex flex-col gap-2">
                    {field.title}
                    <input
                      disabled
                      readOnly
                      value={field.value}
                      className="w-full p-2 rounded-md text-opacity-30 bg-transparent border-2 border-[#3A3A3A]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
