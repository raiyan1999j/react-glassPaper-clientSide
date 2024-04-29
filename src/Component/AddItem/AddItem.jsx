import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import ItemSelection from "./ItemSelection";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const categories = {
  "card-making": [
    "Greeting Cards",
    "Holiday Cards",
    "Invitation Cards",
    "Pop-up Cards",
    "Shaker Cards",
    "Interactive Cards",
    "Embossed Cards",
    "Die-cut Cards",
    "Watercolor Cards",
    "Stamped Cards",
  ],
  scrapbooking: [
    "Layouts",
    "Mini Albums",
    "Pocket Pages",
    "Travel Journals",
    "Baby Books",
    "Wedding Albums",
    "Heritage Albums",
    "Mixed Media Scrapbooks",
    "Digital Scrapbooking",
    "Smash Books",
  ],
  "paper-quilling-and-origami": [
    "Quilled Flowers",
    "Quilled Animals",
    "Quilled Jewelry",
    "Quilled Cards",
    "Origami Animals",
    "Origami Flowers",
    "Origami Boxes",
    "Modular Origami",
    "Origami Decorations",
    "Origami for Kids",
  ],
  "glass-painting": [
    "Stained Glass",
    "Suncatchers",
    "Glass Ornaments",
    "Glass Bottles & Jars",
    "Glassware Painting",
    "Reverse Glass Painting",
    "Glass Panels",
    "Glass Tiles",
    "Faux Stained Glass",
    "Glass Painting Techniques",
  ],
  lampworking: [
    "Glass Beads",
    "Pendants",
    "Earrings",
    "Bracelets",
    "Necklaces",
    "Marbles",
    "Sculptural Pieces",
    "Glass Figurines",
    "Wine Stoppers",
    "Glass Pipes",
  ],
  "glass-dying-and-staining": [
    "Glass Dyeing Techniques",
    "Glass Staining Techniques",
    "Stained Glass Windows",
    "Glass Vases",
    "Glass Jars",
    "Glass Candle Holders",
    "Glass Sculptures",
    "Glass Mosaics",
    "Glass Tiles",
    "Glass Fusing and Slumping",
  ],
};
export default function AddItem() {
  const imgPreview = useRef("");
  const [subItem, setSubItem] = useState();
  const [image, setImg] = useState("");
  const [stock,setStock]= useState(true);
  const [custom,setCustom] = useState(true);

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
      imgURL
    }
    
    console.log(wrap);
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
      <section className="w-[1200px] mx-auto">
      <h2 className="text-center font-mono text-2xl font-bold my-[50px] underline">Add Your Craft Item</h2>
        <div className="w-full grid grid-cols-[40%_60%] gap-x-6 mt-[50px]">
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
            <form onSubmit={formHandler}>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <div className="label">
                    <span className="label-text text-xl font-bold">Pick the Main Category</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={itemSelect}
                    name="itemSelect"
                  >
                    <option value="">-- --</option>
                    {Object.keys(categories).map((value, id) => {
                      return <ItemSelection key={id} items={value} />;
                    })}
                  </select>
                </div>

                <div>
                  <div className="label">
                    <span className="label-text text-xl font-bold">Pick the Sub Items</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="subCategory"
                  >
                    <option value="">-- --</option>
                    {categories?.[`${subItem}`]?.map((value, id) => {
                      return <ItemSelection key={id} items={value} />;
                    })}
                  </select>
                </div>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-xl font-bold">Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24 text-gray-600 capitalize font-serif font-medium"
                    placeholder="Short Description"
                    name="description"
                  ></textarea>
                </label>
              </div>
              <div className="grid grid-cols-3 gap-x-6">
              <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Price</span>
                    </div>
                    <input
                      type="text"
                      placeholder="$"
                      name="price"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>

                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Rating</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Out of 5"
                      name="rating"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>

                <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Customization 
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

              <div className="grid grid-cols-3 gap-x-6">
                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-xl font-bold">Stock Status 
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
