import { useLoaderData, useParams } from "react-router-dom"

export default function Details(){
    const {item,subItem,description,custom,email,imgURL,name,price,rating,stock} = useLoaderData();
    return(
        <>
        <section className="w-[1200px] mx-auto my-[50px]">
            <div className="w-full grid grid-cols-[40%_60%] gap-x-8 items-center">
                <div className="w-full">
                    <div className="h-[350px] w-full">
                        <img src={imgURL} alt="coverImg" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div>
                    <h2 className="capitalize text-3xl font-bold font-serif">{item}</h2>
                    <span className="badge badge-neutral text-lg my-6">
                        {subItem}
                    </span>
                    <div className="flex flex-row justify-between w-[80%]">
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">Rating:
                            <span className="badge badge-secondary ml-2">{rating}</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">
                                price:
                            
                            <span className="badge badge-secondary ml-2">
                                {price}$
                            </span>
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">Customization:
                            <span className={`badge ${custom=="Yes"?"badge-secondary":"badge-error"} ml-2`}>{custom}</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">Stock:
                            <span className={`badge ${stock=="In stock"?"badge-secondary":"badge-error"} ml-2`}>{stock}</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-[80%] text-lg font-serif font-medium text-justify my-[25px]">
                        <p>
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between w-[80%]">
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">
                                name: <span className="badge badge-secondary ml-4">{name}</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-base text-gray-600/50 capitalize">email: 
                            <span className="badge badge-secondary ml-4">{email}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}