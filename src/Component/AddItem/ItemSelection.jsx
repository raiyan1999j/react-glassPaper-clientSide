
export default function ItemSelection({items}){
    return(
        <>
            <option value={items}>
                {items}
            </option>
        </>
    )
}