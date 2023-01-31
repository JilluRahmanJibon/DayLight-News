import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiCommentCheck, BiMessageRoundedDots } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineAddReaction } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getUser } from "../../../api/auth";
import { imageUpload } from "../../../api/imageUpload";
import { updateWriter } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import WriterProfileUpdateModal from "./WriterProfileUpdateModal";

const WriterProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [profileViews, setProfileViews] = useState([]);

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
        pinterest,
        email: user?.email,
        description,
      };
      console.log(UpdateWriter);
      updateWriter(UpdateWriter).then((data) => {
        console.log(data);
      });
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
        updateWriter(UpdateWriter).then((data) => {
          console.log(data);
        });

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
  // profile views
  const data = [
    {
      name: "Day 3",
      uv: 4000,
      pv: 400,
      amt: 2400,
    },
    {
      name: "Day 3",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Day 7",
      uv: 2000,
      pv: 3800,
      amt: 2290,
    },
    {
      name: "Day 10",
      uv: 2780,
      pv: 4008,
      amt: 2000,
    },
    {
      name: "Day 15",
      uv: 1890,
      pv: 7800,
      amt: 2181,
    },
    {
      name: "Day 20",
      uv: 2390,
      pv: 2800,
      amt: 2500,
    },
    {
      name: "Day 30",
      uv: 3490,
      pv: 300,
      amt: 2100,
    },
  ];
  return (
    <div className="">
      <div className=" text-gray-600 md:mt-0 mb-16 my-10">
        <div className="md:w-[400px] border  mx-auto">
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
            <div className="flex items-center justify-center gap-1">
              <p className=" font-semibold">
                <HiOutlineMail></HiOutlineMail>
              </p>
              <p className=" my-2 font-semibold text-gray-600">
                {profile.email}
              </p>
            </div>
            <p className="flex text-yellow-400 my-3 items-center justify-center gap-2">
              <span className="text-gray-600 font-semibold">Rating : </span>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
              <span className="text-gray-600 hidden sm:block font-semibold">
                (35 reviews)
              </span>
            </p>
            <p className="text-gray-600 text-center py-2 font-semibold block sm:hidden">
              (35 reviews)
            </p>

            <div className="text-center mt-3 mb-6 font-bold ">
              <button className="p-2  bg-gray-300 rounded-sm">
                Update Profile
              </button>
            </div>

            <hr className="w-[80%] h-1 bg-gray-300 rounded-2xl mb-3 mx-auto" />
            <div>
              <div className=" text-center">
                <h1 className="font-bold">Connect With Me</h1>
              </div>
              <div className="flex items-center gap-5 justify-center my-3">
                <button className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100">
                  <FaFacebook className="w-7 h-7 "></FaFacebook>
                </button>
                <button className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100">
                  <FaLinkedin className="w-7 h-7 "></FaLinkedin>
                </button>
                <button className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100">
                  <FaInstagram className="w-7 h-7 "></FaInstagram>
                </button>
                <button className="border p-1 rounded-sm hover:bg-gray-500 hover:text-white transition-all bg-gray-100">
                  <FaTwitter className="w-7 h-7 "></FaTwitter>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div style={{ width: "100%" }}>
            <div className="text-center font-bold text-xl">
              <h1>Your Last Profile views</h1>
            </div>
            <ResponsiveContainer width="100%" height={370}>
              <LineChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                {/* <Brush /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 font-bold text-xl mb-2">
              <h1>Notifications</h1>
              <div className="w-2 h-2 mt-1 bg-green-500 animate-pulse rounded-full"></div>
            </div>
            <div className="text-gray-700 font-semibold">
              <div className="flex hover:ml-4 transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-green-200  rounded-md ">
                    <BiMessageRoundedDots className="w-6 h-6 "></BiMessageRoundedDots>
                  </p>
                  <p className="">Abdul sent you a message </p>
                </div>
                <p className="p-1 bg-lime-200  rounded-md ">
                  <RiDeleteBin6Line className="w-6 h-6 "></RiDeleteBin6Line>
                </p>
              </div>
              <div className="flex hover:ml-4 transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-pink-200  rounded-md">
                    <IoMdPersonAdd className="w-6 h-6 "></IoMdPersonAdd>
                  </p>
                  <p className="">Afia Nasrin followed you </p>
                </div>
                <p className="p-1 bg-lime-200  rounded-md ">
                  <RiDeleteBin6Line className="w-6 h-6 "></RiDeleteBin6Line>
                </p>
              </div>
              <div className="flex hover:ml-4 transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-yellow-200  rounded-md">
                    <MdOutlineAddReaction className="w-6 h-6 "></MdOutlineAddReaction>
                  </p>
                  <p className="">Sojib react your article </p>
                </div>
                <p className="p-1 bg-lime-200  rounded-md ">
                  <RiDeleteBin6Line className="w-6 h-6 "></RiDeleteBin6Line>
                </p>
              </div>
              <div className="flex hover:ml-4 transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-orange-200  rounded-md">
                    <BiCommentCheck className="w-6 h-6 "></BiCommentCheck>
                  </p>
                  <p className="">Elon Mask comment on your post </p>
                </div>
                <p className="p-1 bg-lime-200  rounded-md ">
                  <RiDeleteBin6Line className="w-6 h-6 "></RiDeleteBin6Line>
                </p>
              </div>
              <div className="flex hover:ml-4 transition-all items-center justify-between  py-3 px-2 border ">
                <div className="flex items-center gap-4">
                  <p className="p-2 bg-violet-200  rounded-md">
                    <AiFillEye className="w-6 h-6 "></AiFillEye>
                  </p>
                  <p className="">Hacker Views your profile </p>
                </div>
                <p className="p-1 bg-lime-200  rounded-md ">
                  <RiDeleteBin6Line className="w-6 h-6 "></RiDeleteBin6Line>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
