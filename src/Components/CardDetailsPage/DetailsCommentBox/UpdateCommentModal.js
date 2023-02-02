import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import PrimaryButton from "../../Button/PrimaryButton";
import SmallSpinner from "../../Spinner/SmallSpinner";

const UpdateCommentModal = ({ handleUpdateComment, message }) => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleUpdateComment}
            className="space-y-1 ng-untouched ng-pristine ng-valid "
          >
            <div className="text-center">
              <h1 className="text-xl"> Update Your Comment</h1>
            </div>

            <div className="space-y-3 text-sm">
              <input
                type="text"
                name="message"
                placeholder="Enter Since Year"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
                defaultValue={message}
              />
            </div>

            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-5 font-semibold rounded-lg text-white bg-[#3BB77E] "
              >
                {loading ? <SmallSpinner /> : "Submit & Update"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCommentModal;
