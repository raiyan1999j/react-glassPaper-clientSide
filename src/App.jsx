import { useContext, useEffect, useState } from "react";
import { IoFlower } from "react-icons/io5";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { InfoProvider } from "./ContextProvider/ContextProvider";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Fade, Flip } from "react-awesome-reveal";
import { FaHome } from "react-icons/fa";
import "animate.css";
import Footer from "./Component/Footer/Footer";
import { IoIosColorPalette, IoMdOptions } from "react-icons/io";
import { GrClearOption } from "react-icons/gr";
import { IoLogIn } from "react-icons/io5";
import { MdRememberMe } from "react-icons/md";

export default function App() {
  const { changeTheme, themeMode, userData, logoutUser, loading } =
    useContext(InfoProvider);

    console.log({userData})
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(true);

  const loginPage = () => {
    navigate("/login");
  };

  const logoutPage = () => {
    logoutUser();
  };
  const registerPage = () => {
    navigate("/registration");
  };

  useEffect(() => {
    const array = location.pathname.split("/");
    const string = array.join("-");

    document.title = `glassPaper ${string}`;
  }, [location]);

  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
      <section
        className={`h-[80px] w-full ${
          themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"
        }  flex justify-center items-center`}
      >
        <nav className="w-[1200px] mx-auto text-white flex flex-row items-center mobileS:hidden mobileM:hidden mobileL:hidden tablet:w-[768px] laptop:w-[1024px]">
          <div className="w-[10%] flex flex-row">
            <div>
              <IoFlower />
            </div>
            <div>
              <img src="https://i.postimg.cc/3RcVWFsz/logo.png" alt="logoImg" />
            </div>
          </div> 
          <div className="w-[70%] tablet:w-[60%] laptop:w-[65%]">
            <ul className="flex flex-row justify-around font-mono capitalize">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/artCraft">art & crafts</NavLink>
              </li>
              <li>
                <NavLink to="/addItem">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/myItem">My items</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-[20%] tablet:w-[35%] flex flex-row justify-between tablet:justify-normal">
            <div className="flex flex-row justify-between">
              {loading ? (
                <div>
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              ) : (
                <>
                  {userData?.uid ? (
                    <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className="m-1">
                        <img
                          src={userData?.photoURL}
                          alt="userImage"
                          className="h-[45px] w-[45px] rounded-full object-cover"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className={`dropdown-content z-20 menu p-2 shadow ${
                          themeMode
                            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
                            : "bg-gradient-to-tr from-slate-900 to-slate-500"
                        } rounded-box w-52`}
                      >
                        <li className="text-base font-serif font-semibold tracking-[0.2rem]">
                          {userData.displayName}
                        </li>
                        <li className="mt-4">
                          <button
                            className="btn btn-outline btn-warning"
                            onClick={logoutPage}
                          >
                            Log out
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <>
                      <button className="mr-4 btn" onClick={loginPage}>
                        Login
                      </button>
                      <button className="btn" onClick={registerPage}>
                        Register
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
            <div>
              <label className="swap swap-rotate w-[10px] tablet:ml-[26px]">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onClick={() => {
                    changeTheme(!themeMode);
                  }}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </nav>

        <nav className="hidden mobileS:flex mobileS:flex-row mobileS:justify-around mobileS:items-center mobileS:h-full mobileS:w-full
        mobileM:flex mobileM:flex-row mobileM:justify-around mobileM:items-center mobileM:h-full mobileM:w-full
        mobileL:flex mobileL:flex-row mobileL:justify-around mobileL:items-center mobileL:h-full mobileL:w-full
        ">
          <div
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <ImCross className="animate__animated animate__fadeIn text-xl text-white" />
            ) : (
              <IoMenu className="animate__animated animate__fadeIn text-xl text-white" />
            )}
          </div>
          <div className="flex flex-row h-full items-center justify-between">
            <div>
              <IoFlower
                className={`${themeMode ? "text-black" : "text-white"}`}
              />
            </div>
            <div className="w-[100px] h-[50px]">
              <img src="https://i.postimg.cc/3RcVWFsz/logo.png" alt="logoImg" />
            </div>
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={() => {
                  changeTheme(!themeMode);
                }}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </nav>
      </section>

      <section className="hidden mobileS:w-[50%] mobileS:block mobileS:fixed mobileS:top-[80px] mobileS:z-40
      mobileM:w-[50%] mobileM:block mobileM:fixed mobileM:top-[80px] mobileM:z-40
      mobileL:w-[50%] mobileL:block mobileL:fixed mobileL:top-[80px] mobileL:z-40
      ">
      {
        menu?
        <Fade cascade direction="left">
        <ul className="text-center text-bg font-medium font-serif capitalize tracking-widest text-white">
          <li className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}>
            <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
              <FaHome className="text-blue-950" />
            </span>
            <NavLink to="/home">Home</NavLink>
          </li>

          <li className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}>
            <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
              <IoIosColorPalette className="text-blue-950" />
            </span>
            <NavLink to="/artCraft">art & crafts</NavLink>
          </li>

          <li className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}>
            <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
              <IoMdOptions className="text-blue-950" />
            </span>
            <NavLink to="/addItem">add items</NavLink>
          </li>

          <li className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}>
            <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
              <GrClearOption className="text-blue-950" />
            </span>
            <NavLink to="/myItem">my items</NavLink>
          </li>

          {userData ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  src={userData?.photoURL}
                  alt="userImage"
                  className="h-[45px] w-[45px] rounded-full object-cover"
                />
              </div>
              <ul
                tabIndex={0}
                className={`dropdown-content z-20 menu p-2 shadow ${
                  themeMode
                    ? "bg-gradient-to-tr from-purple-600 to-purple-300"
                    : "bg-gradient-to-tr from-slate-900 to-slate-500"
                } rounded-box w-52`}
              >
                <li className="text-base font-serif font-semibold tracking-[0.2rem]">
                  {userData.displayName}
                </li>
                <li className="mt-4">
                  <button
                    className="btn btn-outline btn-warning"
                    onClick={logoutPage}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
            <Fade cascade direction="left">
              <li
                className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}
                onClick={loginPage}
              >
                <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
                  <IoLogIn className="text-blue-950" />
                </span>
                Login
              </li>
              <li
                className={`bg-gradient-to-tr from-purple-600 to-purple-300 py-3 relative ${themeMode
            ? "bg-gradient-to-tr from-purple-600 to-purple-300"
            : "bg-gradient-to-tr from-slate-900 to-slate-500"}`}
                onClick={registerPage}
              >
              <span className="absolute h-[30px] w-[30px] rounded-full bg-white top-2 right-[-15px] shadow-xl shadow-slate-900 flex justify-center items-center">
                  <MdRememberMe className="text-blue-950" />
                </span>
                Register
              </li>
              </Fade>
            </>
          )}
        </ul>
        </Fade>:""
      }
      
      </section>

      <section
        className={`w-full mx-auto pb-[100px] ${
          themeMode
            ? "bg-transparent"
            : "bg-gradient-to-b from-blue-950 to-slate-600"
        }`}
      >
        <Outlet />
      </section>

      <section className="bg-footerImg bg-no-repeat bg-cover">
        <Footer />
      </section>
    </>
  );
}
