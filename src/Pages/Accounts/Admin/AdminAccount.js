import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { getUser } from "../../../api/auth";
import { imageUpload } from "../../../api/imageUpload";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import WriterProfileUpdateModal from "../Writers/WriterProfileUpdateModal";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const AdminAccount = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfile = () =>
    getUser(user?.email).then((data) => {
      setProfile(data);
      setLoading(!loading);
    });

  useEffect(() => {
    fetchProfile();
  }, [user, loading]);
  const handelUpdateProfile = (event) => {
    event.preventDefault();
    const shopname = event.target.shopname.value;
    const since = event.target.since.value;
    const description = event.target.description.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const twitter = event.target.twitter.value;
    const facebook = event.target.facebook.value;
    const instagram = event.target.instagram.value;
    const pinterest = event.target.pinterest.value;

    // Image Upload
    const shopimage = event.target.image.files[0];
    if (!shopimage) {
      const UpdateWriter = {
        shopname,
        since,
        address,
        phone,
        twitter,
        facebook,
        instagram,
        twitter,
        pinterest,
        email: user?.email,
        description,
      };
      // console.log(UpdateWriter);
      // updateWriter(UpdateWriter).then((data) => {
      //   console.log(data);
      // });
      fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateWriter),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          toast.success("Update Successfuly !");
        });
      return;
    }
    imageUpload(shopimage)
      .then((res) => {
        const UpdateWriter = {
          shopname,
          since,
          address,
          phone,
          twitter,
          facebook,
          instagram,
          twitter,
          pinterest,
          shopimage: res.data.display_url,
          email: user?.email,
          description,
        };
        // console.log(UpdateWriter);
        // updateWriter(UpdateWriter).then((data) => {
        //   console.log(data);
        // });

        fetch(`${process.env.REACT_APP_API_URL}user/${user?.email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UpdateWriter),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast.success("Update Successfuly !");
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="shadow-lg border text-gray-600 md:my-0 my-10">
      <div className="md:w-[400px]  mx-auto">
        <div className="relative">
          <p className="h-40 bg-blue-900 w-full"></p>
          <div className="py-3 top-1/2 left-1/3 absolute">
            <img
              className=" w-[150px] mx-auto bg-black h-[150px] object-cover border rounded-full"
              src={
                user.photoURL ? (
                  user.photoURL
                ) : (
                  <div className="relative flex-shrink-0">
                    <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                    <img
                      src="https://source.unsplash.com/50x50/?portrait"
                      alt=""
                      className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
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
            {user?.displayName}
            <span>({profile.role})</span>
          </h1>
          <h2 className="font-bold text-center my-2">FrontEnd Developer</h2>
          <div className="text-center mt-3 mb-6 font-bold ">
            <button className="p-2  bg-gray-300 rounded-sm">
              Update Profile
            </button>
          </div>

          <hr className="w-[80%] h-1 bg-gray-300 rounded-2xl mb-3 mx-auto" />
        </div>
      </div>
      <WriterProfileUpdateModal handelUpdateProfile={handelUpdateProfile} />
    </div>
  );
};

export default AdminAccount;
