import { useContext, useEffect, useState } from "react"
import { InfoProvider } from "../../ContextProvider/ContextProvider"
import ItemsCard from "./ItemsCard";

export default function MyItem(){
    const {userData} = useContext(InfoProvider);
    const [info,setInfo] = useState([]);

    useEffect(()=>{
        async function loadData(){
            let nameSelection;

            if(!userData.email){
                nameSelection = userData.displayName
            }else{
                nameSelection = userData.email
            }

            await fetch(`http://localhost:5000/myItem/${nameSelection}`)
            .then(response=>response.json())
            .then((data)=>{setInfo(data)})
        }

        loadData()
    },[])
    return(
        <>
        <section className="w-[1200px] mx-auto my-[50px]">
            <div className="w-full grid grid-cols-[20%_80%] gap-x-4">
                <div>

                </div>
                <div className="w-full grid grid-cols-3 gap-x-4 gap-y-8">
                    {info.map((value,index)=>{
                        return <ItemsCard
                            key={value._id}
                            data={value}
                        />
                    })}
                </div>
            </div>
        </section>
        </>
    )
}