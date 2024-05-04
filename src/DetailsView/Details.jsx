import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { InfoProvider } from "../ContextProvider/ContextProvider";

export default function Details(){
    const {item,subItem,description,custom,email,imgURL,name,price,rating,stock} = useLoaderData();
    const {themeMode} = useContext(InfoProvider)
    return(
        <>
        <section className="w-[1200px] mx-auto py-[50px] mobileS:w-[320px] mobileM:w-[375px]">
            <div className="w-full grid grid-cols-[40%_60%] gap-x-8 items-center mobileS:grid-cols-1 mobileM:grid-cols-1">
                <div className="w-full">
                    <div className="h-[350px] w-full">
                        <img src={imgURL} alt="coverImg" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div>
                    <h2 className={`capitalize text-3xl font-bold font-serif ${themeMode?"text-blue-950":"text-white"}`}>{item}</h2>
                    <span className="badge badge-neutral text-lg my-6">
                        {subItem}
                    </span>
                    <div className="flex flex-row justify-between w-[80%] mobileS:flex-col mobileS:items-center mobileM:flex-col mobileM:items-center">
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>Rating:
                            <span className="badge badge-secondary ml-2">{rating}</span>
                            </p>
                        </div>
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>
                                price:
                            
                            <span className="badge badge-secondary ml-2">
                                {price}$
                            </span>
                            </p>
                        </div>
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>Customization:
                            <span className={`badge ${custom=="Yes"?"badge-secondary":"badge-error"} ml-2`}>{custom}</span>
                            </p>
                        </div>
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>Stock:
                            <span className={`badge ${stock=="In stock"?"badge-secondary":"badge-error"} ml-2`}>{stock}</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-[80%] text-lg font-serif font-medium text-justify my-[25px] mobileS:mx-auto mobileM:mx-auto">
                        <p className={`${themeMode?"text-blue-950":"text-white"}`}>
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between w-[80%] mobileS:mx-auto mobileS:text-center mobileM:mx-auto mobileM:text-center">
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>
                                name: <span className="badge badge-secondary ml-4">{name}</span>
                            </p>
                        </div>
                        <div>
                            <p className={`font-medium text-base text-gray-600/50 capitalize ${themeMode?"text-blue-950":"text-white"}`}>email: 
                            <span className="badge badge-secondary ml-4">{email}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}