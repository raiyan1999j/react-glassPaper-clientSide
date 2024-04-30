export default function CraftItems({ info,viewDetails }) {
    const {imgURL,price,rating,item,subItem,name,_id} = info;

    const detailView=()=>{
        viewDetails(_id)
    }
  return (
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
          <div className="flex flex-row justify-between smallest:">
            <div>
                <p className="font-bold text-sm underline decoration-lime-500 underline-offset-4 capitalize">Name</p>
                <p className="text-xl font-mono text-gray-500 font-semibold">{name}</p>
            </div>
            <div>
                <p className="font-bold text-sm underline decoration-lime-500 underline-offset-4 capitalize">price</p>
                <p className="text-xl font-mono text-gray-500 font-semibold">{price}</p>
            </div>
            <div>
                <p className="font-bold text-sm underline decoration-lime-500 underline-offset-4 capitalize">rating</p>
                <p className="text-xl font-mono text-gray-500 font-semibold">{rating}</p>
            </div>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-outline btn-info capitalize" onClick={detailView}>view details</button>
          </div>
        </div>
      </div>
    </>
  );
}
