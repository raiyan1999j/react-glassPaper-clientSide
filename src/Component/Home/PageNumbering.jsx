import { useContext } from "react";
import { InfoProvider } from "../../ContextProvider/ContextProvider";

export default function PageNumbering({ pageTotal, pageNumberSelect, content }) {
  const {themeMode} = useContext(InfoProvider);
  const array = [];

  for (let repeat = 1; repeat <= pageTotal; repeat++) {
    array.push(repeat);
  }

  const selectPageNumber=(value)=>{
    let wrap = {
      [content] : value,
      [`${content}loader`] : true
    }

    pageNumberSelect(wrap);
  }
  return (
    <>
    <div className={`join border border-t-0 border-r-0 border-l-0 ${themeMode?"border-blue-500":"shadow-lg shadow-red-500"}`}>
        {array.map((value,index)=>{
            return(
                <input className="join-item btn btn-square" type="radio" name="options" aria-label={value} key={index} onClick={()=>{selectPageNumber(value)}}/>
            )
        })}
    </div>
    </>
  );
}
