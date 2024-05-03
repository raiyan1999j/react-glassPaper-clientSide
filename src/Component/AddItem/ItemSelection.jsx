import { useContext } from "react"
import { InfoProvider } from "../../ContextProvider/ContextProvider"

export default function ItemSelection({items}){
    const {themeMode} = useContext(InfoProvider);
    return(
        <>
            <option value={items} className={`${themeMode?"text-gray-800":"text-blue-950"}`}>
                {items}
            </option>
        </>
    )
}