import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import PrimaryButton from "../Button/PrimaryButton";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";
import WriterMenu from "./WriterMenu";

const Menubar = ({ role }) => {
  // console.log(role);
  const { logout } = useContext(AuthContext);
  return (
    <div className="px-2 h-full sticky top-12">
      <div className="flex flex-col justify-between flex-1 w-[230px] mt-6">
        <nav>
          {role === "admin" && <AdminMenu />}
          {role === "writer" && <WriterMenu />}
          {role === "reader" && <UserMenu />}
        </nav>
      </div>

      <div>
        <PrimaryButton
          handler={logout}
          classes="flex block w-full  items-center pl-6 py-4 border rounded-lg mt-5 text-xl font-bold"
        >
          <ArrowRightOnRectangleIcon className="w-6 h-6" />

          <span className="mx-4 font-medium">Logout</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Menubar;
