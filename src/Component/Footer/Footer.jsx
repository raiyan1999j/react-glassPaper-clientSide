import { Flip } from "react-awesome-reveal";
import { FaFacebookSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-[1200px] mx-auto mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
        <div className="grid grid-cols-[50%_25%_25%] gap-x-5 py-[50px] mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:gap-x-0 laptop:gap-x-0">
          <div>
            <h3 className="font-mono font-bold text-gray-800 text-2xl underline underline-offset-8 decoration-blue-500">About us</h3>
            <p className="capitalize font-mono text-xl text-slate-950 font-medium mt-6">what we provide</p>

            <ul className="mt-6 text-bg text-slate-800 font-serif font-medium list-disc">
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
              Discover our incredibly generous product line, unlike anything else on the market.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
              Be your own boss! Sell your products with our program.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
              Your profile is your shopping hub. Discover new products and reorder with a single click.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">
              Unleash your creativity! Customize your existing products directly from your profile.
              </li>
              <li className="w-[80%] mb-3 ml-3 hover:underline underline-offset-4 decoration-blue-500 hover:cursor-pointer">Refine your vision! Access and personalize your product directly in your profile.</li>
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
                <Flip>
                <div className="hover:cursor-pointer">
                <a href="https://www.facebook.com/raiyan.raiyan.31/" target="blank">
                <FaFacebookSquare className="text-4xl text-blue-600"/>
                </a>
                </div>
                </Flip>
                <Flip>
                <div className="mx-3 hover:cursor-pointer">
                <a href="https://www.linkedin.com/in/raiyan-khan-36ab501a4/" target="blank">
                <FaLinkedin className="text-4xl text-sky-950"/>
                </a>
                </div>
                </Flip>
                <Flip>
                <div className="hover:cursor-pointer">
                <a href="https://github.com/raiyan1999j" target="blank">
                <FaGithubSquare className="text-4xl text-purple-600"/>
                </a>
                </div>
                </Flip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
