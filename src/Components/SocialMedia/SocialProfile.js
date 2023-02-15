import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SocialProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="md:w-[400px] border shadow-sm mx-auto">
        <div className="relative">
          <p className="h-40 bg-blue-900 w-full"></p>
          <div className="py-3 top-1/2 left-1/3 absolute">
            <img
              className=" w-[150px] mx-auto bg-black h-[150px] object-cover border rounded-full"
              src={
                user?.photo_URL ? (
                  user?.photo_URL
                ) : (
                  <div className="relative flex-shrink-0">
                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-700  "></span>
                    <img
                      src="https://source.unsplash.com/50x50/?portrait"
                      alt=""
                      className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700  "
                    />
                  </div>
                )
              }
              alt=""
            />
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl text-center font-bold">
            {user?.display_name}
            {/* <span>({profile?.role})</span> */}
          </h1>
          <div className="flex items-center justify-center gap-1">
            <p className=" font-semibold">
              <HiOutlineMail></HiOutlineMail>
            </p>
            <p className=" my-2 font-semibold text-gray-600">{user?.email}</p>
          </div>

          <p className="text-gray-600 text-center py-2 font-semibold block sm:hidden">
            (35 reviews)
          </p>

          <div className="text-center mt-3 mb-6 font-bold ">
            <label
              htmlFor="update-modal"
              className="p-2  bg-gray-300 rounded-sm"
            >
              Update Profile
            </label>
          </div>

          {/* <WriterProfileUpdateModal handelUpdateProfile={handelUpdateProfile} /> */}
          <hr className="w-[80%] h-1 bg-gray-300 rounded-2xl mb-3 mx-auto" />
          <div>
            <div className=" text-center">
              <h1 className="font-bold">Connect With Me</h1>
            </div>
            <div className="flex items-center gap-5 justify-center my-3">
              <a
                href="https://www.facebook.com/profile.php?id=100073434090411"
                className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100"
              >
                <FaFacebook className="w-7 h-7 "></FaFacebook>
              </a>
              <a
                href="https://www.linkedin.com/in/md-abdul-quayum/"
                className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100"
              >
                <FaLinkedin className="w-7 h-7 "></FaLinkedin>
              </a>
              <a
                href="https://www.instagram.com/quayumhp/"
                className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100"
              >
                <FaInstagram className="w-7 h-7 "></FaInstagram>
              </a>
              <a
                href="https://twitter.com/AbdulQu19463442"
                className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100"
              >
                <FaTwitter className="w-7 h-7 "></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;
