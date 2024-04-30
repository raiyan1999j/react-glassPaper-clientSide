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

        fetch(`http://localhost:5000/removeItem/${value}`, {
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

      await fetch(`http://localhost:5000/myItem/${nameSelection}`)
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
      <section className="w-[1200px] mx-auto my-[50px] smallest:w-[476px]">
        <div className="w-full grid grid-cols-[20%_80%] gap-x-4 smallest:grid-cols-1">
          <div>
            <div className="w-full border border-purple-500 rounded-lg">
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
          <div className="w-full mt-[50px] grid grid-cols-3 gap-x-4 gap-y-8 smallest:grid-cols-1">
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
