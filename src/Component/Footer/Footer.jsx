import { FaFacebookSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-[1200px] mx-auto smallest:w-[493px] small:w-[658px] medium:w-[850px] large:px-16">
        <div className="grid grid-cols-[50%_25%_25%] gap-x-5 py-[50px] smallest:grid-cols-1 small:grid-cols-1 large:grid-cols-[45%_25%_20%]">
          <div>
            <h3 className="font-mono font-bold text-gray-800 text-2xl underline underline-offset-8 decoration-blue-500">About us</h3>
            <p className="capitalize font-mono text-xl text-slate-950 font-medium mt-6">what we provide</p>

            <ul className="mt-6 text-bg text-slate-800 font-serif font-medium list-disc">
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                We offer suitable homes at affordable prices for single
                families.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                We prioritize students' needs by offering residences with
                affordable rent.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                Our senior citizens are our pride; therefore, we provide
                communities where they can lead healthy lives.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                Discover our vacation destinations for unforgettable moments.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">We specialize in both selling and renting apartments.</li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                Enjoy townhouse living away from busy roads with our exclusive
                offerings.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-gray-800 text-2xl underline underline-offset-8 decoration-blue-500">
                Address
            </h3>
            <ul className="mt-6 text-bg text-slate-800 font-serif font-medium">
                <li className="w-[90%] mb-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                    371/1,Milk-vita road,Mirpur,Dhaka-1216
                </li>
                <li className="w-[90%] mb-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                    Mail: <span>raiyank317@gmail.com</span>
                </li>
                <li className="w-[90%] mb-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                    contact no: <span>01735433906</span>
                </li>
                <li className="w-[90%] mb-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
                    (available:sat-thu,10:00-7:00)
                </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-gray-800 text-2xl underline underline-offset-8 decoration-blue-500">Follow us</h3>
            <div className="flex flex-row justify-start mt-3">
                <div className="hover:cursor-pointer">
                <a href="https://www.facebook.com/raiyan.raiyan.31/" target="blank">
                <FaFacebookSquare className="text-4xl text-blue-600"/>
                </a>
                </div>
                <div className="mx-3 hover:cursor-pointer">
                <a href="https://www.linkedin.com/in/raiyan-khan-36ab501a4/" target="blank">
                <FaLinkedin className="text-4xl text-sky-950"/>
                </a>
                </div>
                <div className="hover:cursor-pointer">
                <a href="https://github.com/raiyan1999j" target="blank">
                <FaGithubSquare className="text-4xl text-purple-600"/>
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
