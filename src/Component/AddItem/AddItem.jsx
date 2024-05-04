import { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import ItemSelection from "./ItemSelection";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { InfoProvider } from "../../ContextProvider/ContextProvider";
import commonData from "../../CommonData/CommonData";
import {Fade} from 'react-awesome-reveal';

export default function AddItem() {
  const {userData} = useContext(InfoProvider);
  const imgPreview = useRef("");
  const formRef = useRef();
  const [subItem, setSubItem] = useState();
  const [image, setImg] = useState("");
  const [stock,setStock]= useState(true);
  const [custom,setCustom] = useState(true);
  const {themeMode} = useContext(InfoProvider)

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
    const subItem = form.subCategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating= form.rating.value;
    const custom= form.custom.value;
    const email= form.email.value;
    const name= form.name.value;
    const stock= form.stock.value;
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
    

    const empty = !item || !subItem || !description || !price || !rating || !custom || !email || !name || !stock || !imgURL || !imgURL;

    if(empty){
      toast('please insert all value');
      return;
    }

    const wrap ={
      item ,
      subItem,
      description,
      price,
      rating,
      custom,
      email,
      name,
      stock,
      imgURL,
      owner
    }

    fetch('http://localhost:5000/addItem',{
      method:'Post',
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body:JSON.stringify(wrap)
    }).then(()=>{
      toast('successfully added')
      setStock(true);
      setCustom(true);
      setImg("");
      formRef.current.reset();
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
      <section className="w-[1200px] mx-auto pt-[50px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px]">
      <h2 className={`text-center font-mono text-2xl font-bold my-[50px] underline ${themeMode?"text-blue-950":"text-white"}`}>
      <Fade delay={1e2} cascade damping={1e-1}>
      Add Your Craft Item
      </Fade>
      </h2>
        <div className={`w-full grid grid-cols-[40%_60%] gap-x-6 mt-[50px] ${themeMode?"text-blue-950":"text-white"} mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-1 tablet:w-[90%] tablet:mx-auto`}>
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
              <div className="grid grid-cols-2 gap-x-6 ">
                <div>
                  <div className="label">
                    <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Pick the Main Category</span>
                  </div>
                  <select
                    className={`select select-bordered w-full max-w-xs ${themeMode?"text-gray-800":"text-blue-950"}`}
                    onChange={itemSelect}
                    name="itemSelect"
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
                    className={`select select-bordered w-full max-w-xs ${themeMode?"text-gray-800":"text-blue-950"}`}
                    name="subCategory"
                  >
                    <option value="">-- --</option>
                    {commonData?.[`${subItem}`]?.map((value, id) => {
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
                      className={`input input-bordered w-full max-w-xs ${themeMode?"text-blue-950":"text-gray-800"}`}
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
                      className={`input input-bordered w-full max-w-xs ${themeMode?"text-blue-950":"text-gray-800"}`}
                    />
                  </label>
                </div>

                <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Customization 
                      <span className={`ml-2 ${!custom?"text-red-500":""}`}>
                      ({custom?"Yes":"No"})
                      </span>
                      </span>
                    </div>
                    <input type="checkbox" className="toggle toggle-info"
                    value={custom?'Yes':'No'} onChange={()=>{setCustom(!custom)}} name="custom" />
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
                      className={`input input-bordered w-full max-w-xs ${themeMode?"text-blue-950":"text-gray-800"}`}
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
                      className={`input input-bordered w-full max-w-xs ${themeMode?"text-blue-950":"text-gray-800"}`}
                    />
                  </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className={`label-text text-xl font-bold ${themeMode?"text-blue-950":"text-white"}`}>Stock Status 
                      <span className={`ml-2 ${!stock?"text-red-500":""}`}>
                      ({stock?"In stock":"Made to order"})
                      </span>
                      </span>
                    </div>
                    <input type="checkbox" className="toggle toggle-info"
                    value={stock?"In stock":"Made to order"} onChange={()=>{setStock(!stock)}} name="stock" />
                  </label>
                    </div>
              </div>

              <div className="w-full mt-8">
              <button className="btn btn-outline btn-success w-full">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
