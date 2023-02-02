import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getComment, updateComment } from "../../../api/services";
import DeleteModal from "./DeleteModal";
import UpdateCommentModal from "./UpdateCommentModal";

function AllComment({ comment }) {
  const { name, userImage, message, date, time, _id, id } = comment.comment;
  const [loading, setLoading] = React.useState(false);

  const handleUpdateComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const commentData = {
      _id,
      userImage,
      name,
      message,
      time,
      date,
    };
    console.log(commentData);
    updateComment(commentData).then((data) => {
      toast.success("Comment Updated Successfuly !");

      e.target.reset();
      setLoading(!loading);
    });
  };

  useEffect(() => {
    getComment().then((data) => {
      setLoading(!loading);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between border border-gray-300 rounded-md mt-2 mb-2">
        <div className="flex space-x-4 ">
          <img
            alt=""
            src={userImage}
            className="object-cover w-12 h-12 md:w-20 md:h-20 rounded-md shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <div rel="noopener noreferrer" className="text-sm font-semibold">
              <h1 className="text-gray-500"> {name}</h1>
            </div>
            <span className="text-xs text-gray-700 font-bold text-start">
              {message}
            </span>
            <span className="text-xs dark:text-gray-400">
              {date} {time}
            </span>
          </div>
        </div>
        <div>
          <div className="dropdown dropdown-left dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <button title="Open options" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                  <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                  <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                </svg>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <label htmlFor="update-modal">Update</label>
              </li>
              <li>
                <label htmlFor="delete-modal">Delete</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <UpdateCommentModal
        handleUpdateComment={handleUpdateComment}
        message={message}
      />
      <DeleteModal id={id} />
    </div>
  );
}

export default AllComment;
