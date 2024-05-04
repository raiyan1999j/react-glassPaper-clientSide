import {useContext, useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CraftItems from '../Home/CraftItems';
import PageNumbering from '../Home/PageNumbering';
import {Typewriter} from 'react-simple-typewriter';
import { InfoProvider } from '../../ContextProvider/ContextProvider';

export default function ArtCraft(){
    const [filter,setFilter] = useState();
    const [pageNumber,setPageNumber] = useState({allCraft:0});
    const [totalPage,setTotal] = useState();
    const [loader,setLoader] = useState({allCraftLoader:true});
    const navigate = useNavigate();
    const {themeMode} = useContext(InfoProvider);

    useEffect(()=>{
        async function loadData(){
          const step1 = await fetch('http://localhost:5000/getItems');
          const step2 = await step1.json();
          
          
          setLoader({allCraftLoader:true})
          restructure(step2);
        }
        loadData();
        
      },[]);

      const selectPageNumber=(value)=>{
        // let reValue = value - 1;
    
        // setPageNumber(reValue);

        const craftNum = value.allCraft==undefined? 0: value.allCraft - 1;
        const craftCon = value.allCraftloader==undefined? false : true;

        setLoader({allCraftLoader:craftCon})

        setPageNumber({allCraft:craftNum})

        setTimeout(()=>{
          setLoader({allCraftLoader:false})
        },2000)
      }

      const detailView=(value)=>{
        navigate(`/details/${value}`)
      }

      const restructure=(data)=>{
        let array = [];
        let len = data.length;
    
        for(let repeat=0; repeat<=len; repeat += 6){
          let formate = data.slice(repeat, repeat+6)
    
          array.push(formate)
        }
        let arrayLen = array.length;
    
        setFilter(array);
        setTotal(arrayLen)
        setLoader({allCraftLoader:false})
      }
    return(
        <>
        {
          loader.allCraftLoader?
          <div className='w-full h-screen flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg bg-gradient-to-tr from-blue-600 to-gray-400"></span>
          </div>:
          <section className="w-[1200px] mx-auto pt-[100px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
                <h2 className={`text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 text-center ${themeMode?"text-blue-950":"text-white"}`}>
                
                <Typewriter words={["All available craft & arts"]} typeSpeed={180}/>
                
                </h2>

                <div className="w-[80%] mx-auto grid grid-cols-3 gap-x-6 gap-y-6 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-2">
                {
                filter?.[`${pageNumber.allCraft}`].map((value,index)=>{
                  return <CraftItems
                    key={index}
                    info={value}
                    viewDetails={(val)=>{detailView(val)}}
                  />
                })
              }
                </div>
                
            </section>
        }
        <div className="flex justify-end w-[90%] mt-[50px]">
              <PageNumbering 
              pageTotal={totalPage}
              content="allCraft"
              pageNumberSelect={(value)=>{selectPageNumber(value)}}
              />
            </div>  
        </>
    )
}