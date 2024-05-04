import { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import ItemSelection from "../AddItem/ItemSelection";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { InfoProvider } from "../../ContextProvider/ContextProvider";
import commonData from "../../CommonData/CommonData";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function AddItem() {
  const {userData,themeMode} = useContext(InfoProvider);
  const {custom,description,email,imgURL,item,name,owner,price,rating,stock,subItem,_id} = useLoaderData();
  const imgPreview = useRef("");
  const formRef = useRef();
  const [subItemInfo, setSubItem] = useState(item);
  const [image, setImg] = useState(imgURL);
  const [stockInfo,setStock]= useState(stock=="In stock"?true:false);
  const [customization,setCustom] = useState(custom=="Yes"?true:false);
  const navigate = useNavigate();
  
  const uploadImg = () => {
    const takeValue = imgPreview.current.value;

    setImg(takeValue);

    imgPreview.current.value = "";
  };

  const itemSelect = (event) => {
    const selectedItem = event.target.value;

    setSubItem(selectedItem);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const item = form.itemSelect.value;
    const subItemInfo = form.subCategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating= form.rating.value;
    const customization= form.customization.value;
    const email= form.email.value;
    const name= form.name.value;
    const stockInfo= form.stockInfo.value;
    const imgURL= image;
    const owner = userData?.email || userData?.displayName;

    if(!Number(form.price.value) || !Number(form.rating.value)){
      toast('please insert valid number');
      return;
    }

    if(Number(form.rating.value) > 5){
      toast('please set rating out of 5')
      return;
    }
    

    const empty = !item || !subItemInfo || !description || !price || !rating || !customization || !email || !name || !stockInfo || !imgURL || !imgURL;

    if(empty){
      toast('please insert all value');
      return;
    }

    const wrap ={
      item ,
      subItemInfo,
      description,
      price,
      rating,
      customization,
      email,
      name,
      stockInfo,
      imgURL,
      owner
    }

    fetch(`http://localhost:5000/updateInfo/${_id}`,{
        method:'Put',
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify(wrap)
    }).then(()=>{
        toast('update successfully')
        setTimeout(()=>{
            navigate('/myItem')
        },2000)
    })
  };
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <section className="w-[1200px] mx-auto mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
      <h2 className={`text-center font-mono text-2xl font-bold py-[50px] underline ${themeMode?"text-blue-950":"text-white"}`}>
      <Fade cascade damping={1e-1}>
      Update Your Craft Item
      </Fade>
      </h2>
        <div className="w-full grid grid-cols-[40%_60%] gap-x-6 mt-[50px] mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-1 tablet:w-[90%] tablet:mx-auto laptop:w-[90%] laptop:mx-auto">
          <div className="border w-full h-[350px] flex justify-center items-center relative">
            <label
              id="imgURL"
              className="w-full flex flex-col items-center z-20"
            >
              <FaCamera
                className="text-4xl text-center w-full mb-4"
                onClick={uploadImg}
              />
              <input
                type="text"
                name="imgURL"
                id="imgURL"
                className="border-2 border-black"
                placeholder="Upload image by URL"
                ref={imgPreview}
                defaultValue={imgURL}
              />
            </label>
            <div className="absolute top-0 left-0 h-full w-full">
              {image ? (
                <img
                  src={image}
                  alt="uploaded Img"
                  className="h-full w-full object-cover"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <form onSubmit={formHandler} ref={formRef}>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <div className="label">
                    <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Pick the Main Category</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={itemSelect}
                    name="itemSelect"
                    defaultValue={item}
                  >
                    <option value="">-- --</option>
                    {Object.keys(commonData).map((value, id) => {
                      return <ItemSelection key={id} items={value} />;
                    })}
                  </select>
                </div>

                <div>
                  <div className="label">
                    <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Pick the Sub Items</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="subCategory"
                    defaultValue={subItem}
                  >
                    <option value="">-- --</option>
                    {commonData?.[`${subItemInfo}`]?.map((value, id) => {
                      return <ItemSelection key={id} items={value} />;
                    })}
                  </select>
                </div>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24 text-gray-600 capitalize font-serif font-medium"
                    placeholder="Short Description"
                    name="description"
                    defaultValue={description}
                  ></textarea>
                </label>
              </div>
              <div className="grid grid-cols-3 gap-x-6 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-2">
              <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Price</span>
                    </div>
                    <input
                      type="text"
                      placeholder="$"
                      name="price"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={price}
                    />
                  </label>
                </div>

                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Rating</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Out of 5"
                      name="rating"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={rating}
                    />
                  </label>
                </div>

                <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Customization 
                      <span className={`ml-2 ${!customization?"text-red-500":""}`}>
                      ({customization?"Yes":"No"})
                      </span>
                      </span>
                    </div>
                    <input type="checkbox" className="toggle toggle-info"
                    value={customization?'Yes':'No'} onChange={()=>{setCustom(!customization)}} name="customization" />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-x-6 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-2">
                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={email}
                    />
                  </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={name}
                    />
                  </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Stock Status 
                      <span className={`ml-2 ${!stockInfo?"text-red-500":""}`}>
                      ({stockInfo?"In stock":"Made to order"})
                      </span>
                      </span>
                    </div>
                    <input type="checkbox" className="toggle toggle-info"
                    value={stockInfo?"In stock":"Made to order"} onChange={()=>{setStock(!stockInfo)}} name="stockInfo" />
                  </label>
                    </div>
              </div>

              <div className="w-full mt-8">
              <button className="btn btn-outline btn-success w-full">
                Update Item
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
