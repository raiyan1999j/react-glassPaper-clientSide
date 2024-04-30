import { useLoaderData } from "react-router-dom"
import SubCategoryBox from "./SubCategoryBox";

export default function SubCategoryPage(){
    const loader = useLoaderData();

    console.log(loader)
    return(
        <>
        <section className="w-[1200px] mx-auto my-[50px]">
            <h2 className="text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 text-center">More related same category</h2>
            <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6">
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