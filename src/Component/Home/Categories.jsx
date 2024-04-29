import { IoMdArrowDropdown } from "react-icons/io";

export default function Categories({header,subItem}){
    return(
        <>
            <details className="dropdown">
                <summary className="btn rounded-none bg-gradient-to-tr from-purple-600 to-purple-300 text-white hover:bg-gradient-to-tr hover:from-purple-700 hover:to-purple-1 border-r-white border border-t-0 border-b-0 border-l-0 capitalize">{header} <IoMdArrowDropdown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-gradient-to-b from-purple-300 to-purple-200 w-52">
                  {
                    subItem.map((value,id)=>{
                        return <li key={id} className="border border-b-[4px] border-r-0 border-t-0 border-l-0 text-lg capitalize font-mono py-2 hover:cursor-pointer transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-200 hover:text-white">{value}</li>
                    })
                  }
                </ul>
              </details>
        </>
    )
}