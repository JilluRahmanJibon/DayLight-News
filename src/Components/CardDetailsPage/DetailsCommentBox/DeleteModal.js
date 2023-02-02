import React from "react";
import { toast } from "react-hot-toast";
import { deleteComment } from "../../../api/services";

const DeleteModal = (id) => {
  const handleDeteteComment = (id) => {
    console.log(id?.id);
    deleteComment(id?.id);
    toast.success("delet Succussfuly");
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  ">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="text-center pb-10">
            <h1 className="text-xl"> Confirm Your Comment delete</h1>
          </div>
          <div className=" flex justify-center ">
            <button
              onClick={() => handleDeteteComment(id)}
              className="btn btn-success mx-10 text-white"
            >
              Yes
            </button>
            <button className="btn btn-error text-white">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
