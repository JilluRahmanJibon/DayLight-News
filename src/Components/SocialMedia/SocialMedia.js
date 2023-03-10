import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { getRole } from "../../api/auth";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const SocialMedia = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data);
    });
  }, [user]);
  const { data: allSocialNews, refetch } = useQuery({
    queryKey: ["stories", user?.email],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}socialNews`).then((res) =>
        res.json()
      ),
  });
  const handelDelete = (e) => {
    console.log(e);
    fetch(`${process.env.REACT_APP_API_URL}socialNews/${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="">
        <Link to="/addSocialPost" className="text-center pb-6">
          <h1 className="text-xl font-bold border max-w-lg mx-auto py-2 hover:bg-gray-100">
            CREATE NEW POST
          </h1>
        </Link>
      </div>
      {allSocialNews?.map((news) => (
        <div
          key={news._id}
          className="w-full  max-w-lg mx-auto rounded overflow-hidden border shadow-sm m-4"
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <img
                  className="w-12 h-12 object-cover rounded-full mr-4"
                  src="https://i.ibb.co/N2NPBn1/photo-1633332755192-727a05c4013d.jpg"
                  alt=""
                />
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold leading-none">
                    {news.name}
                  </p>
                  <p className="text-gray-600">Date</p>
                </div>
              </div>

              <>
                {role === "admin" ? (
                  <button onClick={() => handelDelete(news._id)} className="">
                    <MdDelete className="w-5 h-5"></MdDelete>
                  </button>
                ) : (
                  <></>
                )}
              </>
            </div>
            <img className="w-full h-64 mt-4" src={news?.image} alt="" />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">{news.title}</div>
              <p className="text-gray-700 text-base">
                {news?.description.slice(0, 200)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
