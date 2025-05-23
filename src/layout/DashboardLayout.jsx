import React, { useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { useAppKitAccount } from "@reown/appkit/react";

const DashboardLayout = () => {
  const { isConnected } = useAppKitAccount();
  const navigate = useNavigate();

  const handleRedirect = useCallback(async () => {
    if (isConnected) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isConnected, navigate]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect, isConnected]);

  return (
    <div>
      <div className="flex bg-white">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
          <MobileSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
