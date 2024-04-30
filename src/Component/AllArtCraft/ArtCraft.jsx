import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CraftItems from '../Home/CraftItems';
import PageNumbering from '../Home/PageNumbering';

export default function ArtCraft(){
    const [filter,setFilter] = useState();
    const [pageNumber,setPageNumber] = useState(0);
    const [totalPage,setTotal] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadData(){
          const step1 = await fetch('http://localhost:5000/getItems');
          const step2 = await step1.json();
    
          restructure(step2);
        }
        loadData();
        
      },[]);

      const selectPageNumber=(value)=>{
        let reValue = value - 1;
    
        setPageNumber(reValue);
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
      }
    return(
        <>
            <section className="w-[1200px] mx-auto my-[50px]">
                <h2 className="text-3xl font-mono font-bold capitalize decoration-blue-600 underline underline-offset-8 mb-10 text-center">All available craft & arts</h2>

                <div className="w-[80%] mx-auto grid grid-cols-3 gap-x-6 gap-y-6">
                {
                filter?.[`${pageNumber}`].map((value,index)=>{
                  return <CraftItems
                    key={index}
                    info={value}
                    viewDetails={(val)=>{detailView(val)}}
                  />
                })
              }
                </div>
                <div className="flex justify-end w-[90%] mt-[50px]">
              <PageNumbering 
              pageTotal={totalPage}
              pageNumberSelect={(value)=>{selectPageNumber(value)}}
              />
            </div>  
            </section>
        </>
    )
}