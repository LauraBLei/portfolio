import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className=" flex flex-col items-center">
      <header className=" max-w-[1440px] w-full font-primary py-5 flex   text-leiDevBlue text-3xl px-5 ">
        <Link className="hover-effect" to="/">
          <img className="w-16 md:w-30" src="./other/Logo.png" alt="Logo" />
        </Link>
      </header>
      <Outlet />
    </div>
  );
};
