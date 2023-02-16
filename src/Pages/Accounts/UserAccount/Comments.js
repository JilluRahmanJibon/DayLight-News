import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteComment, getComments } from "../../../api/services";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}comments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
        setLoading(false);
      });
  }, [user, loading]);
  // console.log(allComments);

  const handleDeteteComment = (id) => {
    deleteComment(id).then((data) => {
      if (data.acknowledged === true) {
        toast.success("Comment Deleted !");
        setLoading(!loading);
      }
    });
  };

  return (
    <>
      {allComments && Array.isArray(allComments) && allComments.length > 0 ? (
        <>
          <div className=" px-10 py-5 sm:px-8 ">
            <div className="text-center">
              <h1 className="text-3xl text-black font-bold">
                All Comments Information
              </h1>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>comment</th>
                    <th className="hidden md:block">Date & Time</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {allComments?.map((comment) => (
                    <tr key={comment?._id} comment={comment}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <a
                              href={`/detail/${comment._id}`}
                              className=" sm:w-12 w-6 h-6 sm:h-12"
                            >
                              <img
                                src={comment?.comment?.picture}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div>{comment?.comment?.message?.slice(0, 20)}</div>
                      </td>
                      <td className="hidden md:block">
                        {comment?.comment?.date}, {comment?.comment?.time}
                      </td>

                      <th>
                        <button
                          onClick={() => handleDeteteComment(comment?._id)}
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
            There's no Comment data available right now.
          </div>
        </>
      )}
    </>
  );
};

export default Comments;
