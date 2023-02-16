import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../../api/auth";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  console.log(role);
  return (
    <div className=" text-gray-700  mx-auto flex flex-col justify-center items-center py-32  px-32">
      <div className="flex  justify-center items-center">
        <p className="md:text-7xl sm:text-5xl text-2xl font-bold">Welc</p>
        <div className="md:w-12 sm:w-6 w-5  h-5 md:h-12 border-8 border-dashed rounded-full animate-spin md:mt-6 sm:mt-4 mt-2 border-green-400"></div>
        <p className="md:text-7xl sm:text-5xl text-2xl font-bold mr-2">me</p>
        <p className="md:text-7xl sm:text-5xl text-2xl font-bold">To</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        {!loading && role ? (
          <>
            {role === "admin" ? (
              <p className="sm:text-3xl text-xl font-medium">Admin Dashboard</p>
            ) : (
              <p className="sm:text-3xl text-xl font-medium">
                Writer Dashboard
              </p>
            )}
          </>
        ) : (
          <p className="sm:text-3xl text-xl font-medium">User Dashboard</p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
