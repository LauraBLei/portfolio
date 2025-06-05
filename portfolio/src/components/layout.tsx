import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className=" flex flex-col items-center">
      <header className=" max-w-[1440px] font-primary py-5 flex  w-full text-leiDevBlue text-3xlpx-5 ">
        <Link className="hover-effect" to="/">
          <img className="w-30" src="./other/Logo.png" alt="Logo" />
        </Link>
      </header>
      <Outlet />
    </div>
  );
};
