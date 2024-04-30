export default function PageNumbering({ pageTotal, pageNumberSelect }) {
  const array = [];

  for (let repeat = 1; repeat <= pageTotal; repeat++) {
    array.push(repeat);
  }
  return (
    <>
    <div className="join border border-blue-500 border-t-0 border-r-0 border-l-0">
        {array.map((value,index)=>{
            return(
                <input className="join-item btn btn-square" type="radio" name="options" aria-label={value} key={index} onClick={()=>{pageNumberSelect(value)}}/>
            )
        })}
    </div>
    </>
  );
}
