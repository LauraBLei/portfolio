import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="bg-MatteBlack h-screen flex justify-center">
      <Outlet />
    </div>
  );
};
