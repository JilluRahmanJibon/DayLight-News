import React from "react";
const DistricModal = ({
  uniqueDistrict,
  handleUpdateDistrict,
  city,
  setCity,
  dis,
  setDis,
}) => {
  //after confirm button click then close the modal
  const closeModal = () => {
    document.getElementById("update-modal").checked = false;
  };

  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black border border-red-300 bg-white  w-10/12 max-w-5xl">
          <form onSubmit={handleUpdateDistrict} className="">
            <div className="text-center">
              <h1 className="text-xl font-bold mb-5">CHANGE DEFAULT CITY</h1>
              <hr className="h-1 bg-red-50 rounded-full mb-5 w-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
              {uniqueDistrict?.map((district, uxi) => (
                <div
                  className="flex items-center bg-red-50 p-2 rounded-md"
                  key={uxi}
                  district={district}
                >
                  <input
                    type="radio"
                    name="radio-5"
                    id={district}
                    className="radio radio-secondary w-4 h-4 mr-2"
                    required
                    onClick={() => {
                      setCity({ district: district });
                    }}
                  />
                  <label
                    className="font-semibold sm:text-xl "
                    htmlFor={district}
                  >
                    {district}
                  </label>
                </div>
              ))}
            </div>

            {city?.district && (
              <div className="flex items-center justify-center  py-5">
                <input
                  type="radio"
                  name="rad"
                  id={city?.district}
                  onClick={() => {
                    setDis("on");
                  }}
                  className="radio radio-secondary h-4 w-4 mr-2"
                  required
                />
                <label htmlFor="" className="font-semibold text-xl">
                  Click to make {city?.district} default city.
                </label>
              </div>
            )}
            <div className="text-center ">
              <button
                type="submit"
                className="btn btn-success text-white mx-2"
                disabled={dis === "off"}
                onClick={closeModal}
              >
                CONFIRM
              </button>

              <label
                htmlFor="update-modal"
                className="btn btn-error text-white mx-2"
              >
                CANCEL
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistricModal;
