import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteWriter } from "../../../api/auth";

const AllWriters = () => {
  const [writers, setWriters] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}writers`)
      .then((res) => res.json())
      .then((data) => setWriters(data));
  }, []);

  // console.log(writers);
  const handleDelete = (id) => {
    deleteWriter(id);
    toast.success("delete writer Successfully");
    setLoading(!loading);
  };
  return (
    <>
      {writers && Array.isArray(writers) && writers.length > 0 ? (
        <>
          <div className=" px-10 py-1 sm:px-8 ">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold">
                All Writers Information
              </h1>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="hidden lg:block">Email</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {writers?.map((writer) => (
                    <tr key={writer?._id} writer={writer}>
                      <td>
                        <div className="flex items-center gap-1">
                          <div className="avatar">
                            <div className=" sm:w-12 w-6 h-6 sm:h-12 rounded-full">
                              <img
                                src={writer?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div className="w-10 lg:w-full">
                            <div className="text-xs sm:text-md font-bold">
                              {writer?.name?.slice(0, 15)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className=" hidden lg:block text-sm sm:text-xl ">
                        {writer?.email}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDelete(writer?._id)}
                          className=" px-3 py-2 bg-red-50 text-red-500 rounded flex hover:text-white hover:bg-red-500 text-[14px] font-bold"
                        >
                          <TrashIcon className="sm:w-6 w-3 h-3 sm:h-6" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" text-gray-600 gap-5 flex flex-col justify-center items-center py-16 text-xl lg:text-3xl px-10">
            There's no Writer data available right now.
          </div>
        </>
      )}
    </>
  );
};

export default AllWriters;
