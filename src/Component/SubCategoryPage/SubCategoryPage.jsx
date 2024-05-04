import { useLoaderData } from "react-router-dom"
import SubCategoryBox from "./SubCategoryBox";

export default function SubCategoryPage(){
    const loader = useLoaderData();

    console.log(loader)
    return(
        <>
        <section className="w-[1200px] mx-auto my-[50px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px]">
            <h2 className="text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 text-center">More related same category</h2>
            <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-2 tablet:w-[90%] tablet:mx-auto">
                {
                    loader.map((value,index)=>{
                        return <SubCategoryBox
                            key={index}
                            info={value}
                        />
                    })
                }
            </div>
        </section>
        </>
    )
}