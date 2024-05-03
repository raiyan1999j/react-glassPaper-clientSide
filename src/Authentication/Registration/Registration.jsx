import { useContext, useEffect, useRef, useState } from "react";
import { IoFlower } from "react-icons/io5";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { InfoProvider } from "../../ContextProvider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
  const navigate = useNavigate();
  const [txtOrPass,setTxtOrPass] = useState(false);
  const formRef = useRef(null);
  const { themeMode, registerUser, loading, routePage } = useContext(InfoProvider);

  const formHandler =async (event) => {
    event.preventDefault();
    const imageFormate = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i;
    const checkItems = {
      name: false,
      mail: false,
      photo: false,
      pass: false,
    };
    const form = event.target;
    if (
      form.name.value == "" ||
      form.email.value == "" ||
      form.photo.value == "" ||
      form.password.value == ""
    ) {
      toast("ALl input should be fill up");
    }

    if (
      !form.email.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      toast("please input valid email");
    } else {
      checkItems.mail = true;
    }

    if (
      form.password.value.length < 6 ||
        !form.password.value
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ) {
      toast("password must be at least 6 characters long and include numbers, uppercase, and lowercase letters");
      console.log('not okay')
    } else {
      checkItems.pass = true;
    }

    if (form.name.value.length < 3) {
      toast("user name should at least 3 character");
    } else {
      checkItems.name = true;
    }

    if (!imageFormate.test(form.photo.value)) {
      toast("please upload valid image");
    } else {
      checkItems.photo = true;
    }

    if(checkItems.name && checkItems.mail && checkItems.photo && checkItems.pass){
      const wrap ={
        name : form.name.value,
        mail : form.email.value,
        photo: form.photo.files[0],
        pass : form.password.value
      }

      registerUser(wrap);
      formRef.current.reset();
      toast('successfully created');
    }
  };

  const loginPage = () => {
    navigate("/login");
  };

  useEffect(()=>{
    if(routePage){
      navigate('/home')
    }
  },[routePage])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {
        loading?
        <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
        </div>:
        <section>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div
            className={`sm:mx-auto sm:w-full sm:max-w-md  flex flex-row py-4 justify-center items-center rounded-t-lg ${
              themeMode
                ? "bg-gradient-to-tr from-purple-600 to-purple-300"
                : "bg-gradient-to-tr from-slate-900 to-slate-500"
            }`}
          >
            <IoFlower className="text-white text-5xl" />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              <img
                src="https://i.postimg.cc/BvTpFcdX/login.png"
                alt="logoImg"
              />
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form className="space-y-6" onSubmit={formHandler} ref={formRef}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2">
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2 relative w-full">
                    <input
                      id="password"
                      name="password"
                      type={txtOrPass?"text":"password"}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className="absolute right-4 top-2" onClick={()=>{setTxtOrPass(!txtOrPass)}}>
                    {
                      txtOrPass?<FaEye />: <FaEyeSlash/>
                    }
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500 ">
              <button
                onClick={loginPage}
                className={`font-semibold leading-6  capitalize ${themeMode?"text-indigo-600 hover:text-indigo-500":"text-gray-950 hover:text-gray-500"}`}
              >
                Go back to log in
              </button>
            </p>
          </div>
        </div>
      </section>
      }
      
    </>
  );
}
