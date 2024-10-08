import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import CraftItems from "./CraftItems";
import { useNavigate } from "react-router-dom";
import PageNumbering from "./PageNumbering";
import SubCategory from "./SubCategory";
import { Fade } from "react-awesome-reveal";
import { InfoProvider } from "../../ContextProvider/ContextProvider";

const categoryInfo = [
  {
    imgUrl:
      "https://images.pexels.com/photos/19866687/pexels-photo-19866687/free-photo-of-close-up-of-colorful-cards-scattered-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Card making is the creative process of crafting handmade greeting cards using various techniques and materials.",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/19862975/pexels-photo-19862975/free-photo-of-painter-sitting-in-a-workshop.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Scrapbooking is the art of preserving memories through creative layouts, using photos, mementos, and embellishments to capture special moments and tell stories.",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/5417630/pexels-photo-5417630.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Paper quilling and origami are intricate art forms that involve manipulating paper to create beautiful designs. Quilling involves rolling and shaping.",
  },
  {
    imgUrl:
      "https://i.pinimg.com/236x/d6/a5/2c/d6a52ca8469366f9c50773dfa292a372.jpg",
    description:
      "Glass painting involves using special paints and techniques to decorate glass surfaces with colorful designs, adding beauty and personality to any space.",
  },
];

const summeryPoint= [
  "Card making is a creative art form involving handmade greeting cards.",
  "It allows for personal expression and creativity.",
  "Various techniques such as paper cutting, stamping, and embossing are used.",
  "Cards can be customized for different occasions like birthdays, holidays, and special events.",
  "Offers endless possibilities for design and customization.",
  "Creates unique and meaningful cards that bring joy to both sender and recipient."
]
export default function Home() {
  const [container, setContainer] = useState([]);
  const [filter, setFilter] = useState();
  const [pageNumbering, setPageNumbering] = useState({"craft":0,"subItem":0});
  const [totalPage, setTotal] = useState();
  const navigate = useNavigate();
  const [loading,setLoading] = useState({craftLoader:true,subItemLoader:true});
  const {themeMode} = useContext(InfoProvider);

  useEffect(() => {
    async function loadData() {
      const step1 = await fetch("https://server-side-pearl.vercel.app/getItems");
      const step2 = await step1.json();

      setContainer(step2);
      setLoading({craftLoader:true,subItemLoader:true});
      restructure(step2);

      console.log(step1)
    }
    loadData();
  }, []);

  const restructure = (data) => {
    let array = [];
    let len = data.length;

    for (let repeat = 0; repeat <= len; repeat += 6) {
      let formate = data.slice(repeat, repeat + 6);

      array.push(formate);
    }
    let arrayLen = array.length;

    setFilter(array);
    setTotal(arrayLen);
    setLoading({craftLoader:false,subItemLoader:false})
  };

  const selectPageNumber = (value) => {

    let reSubItem = value.subItem==undefined?0:value.subItem - 1;
    let reCraft = value.craft==undefined?0:value.craft - 1;
    let craftCon= value.craftloader==undefined?false:true;
    let subItemCon= value.subItemloader==undefined?false:true;
    

    setPageNumbering({subItem:reSubItem,craft:reCraft});
    setLoading({craftLoader:craftCon,subItemLoader:subItemCon})

    setTimeout(()=>{
      setLoading({craftLoader:false,subItemLoader:false})
    },3000)

    console.log(craftCon,subItemCon)
  };
  const detailView = (value) => {
    navigate(`/details/${value}`);
  };

  const moreProducts = (value) => {
    navigate(`/subCategoryPage/${value}`);
  };
  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
        <div className="w-[1000px] mx-auto mobileS:w-[280px] mobileM:w-[300px] mobileL:w-[425px] tablet:w-[680px] laptop:w-[960px]">
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {categoryInfo.map((value, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="h-[500px] w-full relative">
                    <div className="h-full w-full absolute">
                      <img
                        src={value.imgUrl}
                        className="object-cover h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="absolute w-[40%] left-0 top-[50%] py-4 px-2 rounded-r-lg text-white bg-gradient-to-tr from-black to-gray-500 mobileS:h-full mobileS:top-0 mobileM:h-full mobileM:top-0 mobileL:h-full mobileL:top-0">
                      <p>
                        {value.description}
                      </p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-pink-400 to-pink-600 opacity-30 rounded-xl"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="w-[1200px] mx-auto my-[50px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
        <h2 className={`text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 ${themeMode?"text-blue-950":"text-white"}`}>
        <Fade delay={1e1} cascade damping={1e-1}>
        Craft items
        </Fade>
        </h2>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-[90%] mx-auto mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-2">
        {
          loading.craftLoader?(<div className="translate-x-[150%] mobileS:translate-x-[50%]">
          <span className="loading loading-spinner loading-lg bg-gradient-to-tr from-sky-300 to-gray-100"></span>
          </div>):<>
        
          {filter?.[`${pageNumbering.craft}`].map((value, index) => {
            return (
              <CraftItems
                key={index}
                info={value}
                viewDetails={(val) => {
                  detailView(val);
                }}
              />
            );
          })}
          </>
        }
        </div>
        <div className="flex justify-end w-[90%] mt-[50px]">
          <PageNumbering
            pageTotal={totalPage}
            content ="craft"
            pageNumberSelect={(value) => {
              selectPageNumber(value);
            }}
          />
        </div>
      </section>

      <section className="w-[1200px] mx-auto mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
        <h2 className={`text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 ${themeMode?"text-blue-950":"text-white"}`}>
          
          <Fade cascade>
          <span>Some Items you</span> <span className="mobileS:block">may check out</span>
          </Fade>
        </h2>

        <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-[90%] mx-auto mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-2">
        {
          loading.subItemLoader?(
            <div className="translate-x-[150%] mobileS:translate-x-[50%]">
          <span className="loading loading-spinner loading-lg bg-gradient-to-tr from-sky-300 to-gray-100"></span>
          </div>
          ):<>
          {filter?.[`${pageNumbering.subItem}`].map((value, index) => {
            return (
              <SubCategory
                key={index}
                info={value}
                productsMore={(val) => {
                  moreProducts(val);
                }}
              />
            );
          })}
          </>
        }
          
        </div>

        <div className="flex justify-end w-[90%] mt-[50px]">
          <PageNumbering
            pageTotal={totalPage}
            content="subItem"
            pageNumberSelect={(value) => {
              selectPageNumber(value);
            }}
          />
        </div>
      </section>

      <section className="w-[1200px] mx-auto mt-[50px]">
        <div className="grid grid-cols-2 gap-x-4 items-center">
          <div>
            <div className="h-[350px] w-full">
              <img src="https://i.postimg.cc/52bC324B/1-analyst.png" alt="informationImg" className="h-full w-full object-contain" />
            </div>
          </div>
          <div>
            <p className={`font-serif font-medium text-xl text-justify ${themeMode?"text-blue-950":"text-white"} mb-6`}>
            Card making is a creative and fulfilling art form that involves crafting handmade greeting cards for various occasions. It allows individuals to express their creativity while creating personalized messages for their loved ones.
            </p>
            <ul className={`w-[80%] ${themeMode?"text-sky-950":"text-white"} list-disc`}>
              {summeryPoint.map((value,index)=>{
                return(
                  <li key={index} className="mb-4">{value}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[1200px] mx-auto mt-[50px]">
          <div className="w-[80%] mx-auto">
          <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What materials do I need to start card making?
  </div>
  <div className="collapse-content"> 
    <p className="w-[60%] text-justify font-serif text-base font-normal">Card making requires basic supplies such as cardstock, patterned paper, adhesives (like glue or tape runner), stamps, ink pads, and embellishments (such as stickers, ribbons, or gems).</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What are some beginner-friendly card making techniques?
  </div>
  <div className="collapse-content"> 
    <p className="w-[60%] text-justify font-serif text-base font-normal">For beginners, simple techniques like stamping, where you use inked stamps to add images or sentiments to your cards, are popular. Embossing, which creates raised or textured designs using heat or dry embossing folders, is also beginner-friendly. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Where can I find inspiration for card designs?
  </div>
  <div className="collapse-content"> 
    <p className="w-[60%] text-justify font-serif text-base font-normal">Inspiration for card designs can come from various sources. Online platforms like Pinterest or crafting blogs offer a wealth of ideas and tutorials. Browsing through craft stores and looking at card samples and displays can also inspire creativity.</p>
  </div>
</div>
          </div>
      </section>
    </>
  );
}
