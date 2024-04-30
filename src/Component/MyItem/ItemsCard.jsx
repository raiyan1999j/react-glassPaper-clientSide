import { useNavigate } from "react-router-dom";

export default function ItemsCard({ data }) {
    const navigate = useNavigate();
  const { imgURL, price, item, rating, custom, stock, _id, subItem } = data;

  const updateData=()=>{
    navigate(`/getSpecific/${_id}`)
  }
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl shadow-black">
        <figure className="h-[250px] w-full">
          <img
            src={imgURL}
            alt="coverPhoto"
            className="h-full w-full rounded-t-lg object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{item}</h2>
          <span className="badge badge-secondary">{subItem}</span>
          <div className="flex flex-row justify-between w-full mt-4">
            <div>
              <p className="font-medium text-base text-gray-600/50 capitalize">
                price:
                <span className="badge badge-neutral ml-1">{price}$</span>
              </p>
            </div>
            <div>
              <p className="font-medium text-base text-gray-600/50 capitalize">
                rating:
                <span className="badge badge-neutral ml-1">{rating}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <p className="font-medium text-base text-gray-600/50 capitalize">Customization</p>
            <span className={`badge ${custom=="Yes"?"badge-neutral":"badge-error"} ml-1`}>
                {custom}
            </span>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-medium text-base text-gray-600/50 capitalize">
                stocks
            </p>
            <span className={`badge ${stock=="In stock"?"badge-neutral":"badge-error"} ml-1`}>{stock}</span>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <span className="badge badge-success capitalize text-white transition-all ease-in duration-300 hover:bg-transparent border border-success hover:text-success hover:cursor-pointer" onClick={updateData}>update</span>
            <span className="badge badge-error capitalize text-white transition-all duration-300 ease-in hover:bg-transparent border border-error hover:cursor-pointer hover:text-error">
                delete
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
