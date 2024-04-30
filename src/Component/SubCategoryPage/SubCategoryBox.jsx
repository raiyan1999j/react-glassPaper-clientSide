import { useNavigate } from "react-router-dom";

export default function SubCategoryBox({info}){
    const navigate = useNavigate();
    const {imgURL,item,subItem,description,price,rating,_id} = info;

    const detailView=()=>{
        navigate(`/details/${_id}`)
    }
    return(
        <>
            <div className="card w-full bg-base-100 shadow-xl">
        <figure className="h-[300px] w-full">
          <img
            src={imgURL}
            alt="Shoes"
            className="h-full w-full object-cover rounded-t-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{item}</h2>
          <p className="badge badge-secondary">{subItem}</p>
          <div className="flex flex-row justify-between">
            <div>
                <p className="font-bold text-sm underline decoration-lime-500 underline-offset-4 capitalize">price</p>
                <p className="text-xl font-mono text-gray-500 font-semibold">{price}</p>
            </div>
            <div>
                <p className="font-bold text-sm underline decoration-lime-500 underline-offset-4 capitalize">rating</p>
                <p className="text-xl font-mono text-gray-500 font-semibold">{rating}</p>
            </div>
          </div>
          <div className="w-full text-ellipsis overflow-hidden whitespace-nowrap font-serif font-semibold">
                {description}
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-outline btn-info capitalize" onClick={detailView}>view details</button>
          </div>
        </div>
      </div>
        </>
    )
}