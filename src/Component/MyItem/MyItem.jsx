import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/ContextProvider";
import ItemsCard from "./ItemsCard";
import Swal from "sweetalert2";

export default function MyItem() {
  const { userData } = useContext(InfoProvider);
  const [info, setInfo] = useState([]);
  const [filter,setFilter] = useState([]);

  const dataRemove = (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "It will remove permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const copy = [...info];

        const updateValue = copy.filter((val, index) => {
          return copy[index]._id != value;
        });

        setInfo(updateValue);

        fetch(`https://server-side-pearl.vercel.app/removeItem/${value}`, {
          method: "Delete",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        });
      }
    });
  };

  useEffect(() => {
    async function loadData() {
      let nameSelection;

      if (!userData.email) {
        nameSelection = userData.displayName;
      } else {
        nameSelection = userData.email;
      }

      await fetch(`https://server-side-pearl.vercel.app/myItem/${nameSelection}`)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        });
    }

    loadData();
  }, []);

  const formHandler=(event)=>{
    event.preventDefault();
    const copy = [...info];
    let redefined ;

    if(event.target.value == "Yes"){
      redefined = copy.filter((value,index)=>{
        return value.custom == "Yes"
      })

      setFilter(redefined)
    }else if(event.target.value == "No"){
      redefined = copy.filter((value,index)=>{
        return value.custom == "No"
      })

      setFilter(redefined)
    }else{
      setFilter(copy);
    }
  }
  return (
    <>
      <section className="w-[1200px] mx-auto py-[50px] mobileS:w-[320px] mobileM:w-[375px] mobileL:w-[425px] tablet:w-[768px] laptop:w-[1024px]">
        <div className="w-full grid grid-cols-[20%_80%] gap-x-4 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-1 tablet:w-[90%] tablet:mx-auto laptop:grid-cols-1 laptop:w-[90%] laptop:mx-auto">
          <div>
            <div className="w-full border border-purple-500 rounded-lg tablet:w-[40%] tablet:mx-auto laptop:w-[30%] laptop:mx-auto">
              <form onClick={formHandler}>
                <select className="select select-bordered w-full max-w-xs border border-purple-600">
                  <option value="">Customization</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Clear">Clear</option>
                </select>
              </form>
            </div>
          </div>
          <div className="w-full mt-[50px] grid grid-cols-3 gap-x-4 gap-y-8 mobileS:grid-cols-1 mobileM:grid-cols-1 mobileL:grid-cols-1 tablet:grid-cols-2">
            {
              filter==""?info.map((value,index)=>{
                return (
                <ItemsCard
                  key={value._id}
                  data={value}
                  removeData={(val) => {
                    dataRemove(val);
                  }}
                />
              );
              }):filter.map((value,index)=>{
                return (
                <ItemsCard
                  key={value._id}
                  data={value}
                  removeData={(val) => {
                    dataRemove(val);
                  }}
                />
              );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}
