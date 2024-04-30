import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Categories from "./Categories";
import commonData from "../../CommonData/CommonData";
import { useEffect, useState } from "react";
import CraftItems from "./CraftItems";
import { useNavigate } from "react-router-dom";

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
export default function Home() {
  const [container,setContainer] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    async function loadData(){
      const step1 = await fetch('http://localhost:5000/getItems');
      const step2 = await step1.json();

      setContainer(step2);
    }

    loadData();
  },[]);

  const detailView=(value)=>{
    navigate(`/details/${value}`)
  }
  return (
    <>
      <section className="w-[1200px] mx-auto mt-[50px]">
        <div className="w-[1000px] mx-auto">
          <Swiper
            autoplay={{
              delay: 2500,
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
                    <div className="absolute w-[40%] left-0 top-[50%] py-4 px-2 rounded-r-lg text-white bg-gradient-to-tr from-black to-gray-500">
                      <p>{value.description}</p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-pink-400 to-pink-600 opacity-30 rounded-xl"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="w-[1200px] mx-auto my-[50px]">
        <div className="mb-5">
          <h2 className="text-2xl font-mono font-bold capitalize underline">
            art & craft categories
          </h2>
        </div>

        <div className="w-full flex flex-wrap flex-row">
          <div className="w-full flex flex-row flex-wrap items-center">
            <div className="from-black/30 to-slate-500/20 bg-gradient-to-r py-3 px-3">
              <h3 className="capitalize text-lg font-medium font-serif">Choose Category</h3>
            </div>
            {
              Object.keys(commonData).map((title,id)=>{
                return <Categories 
                key={id} 
                header={title}
                subItem={commonData[title]}  
                />
              })
            }
          </div>
        </div>
      </section>

      <section className="w-[1200px] mx-auto my-[50px]">
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-[90%] mx-auto">
              {
                container.map((value,id)=>{
                  return <CraftItems 
                    key={value._id}
                    info={value}
                    viewDetails={(val)=>{detailView(val)}}
                  />
                })
              }
            </div>
      </section>
    </>
  );
}
