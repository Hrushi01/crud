import React from "react";
import {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
} from "./services/post";
import { useState } from "react";
import "./Show.css";

function Show() {
  const responseinfo = useGetAllPostQuery();

  const [data, setdata] = useState(responseinfo?.data?.data);
  const [show, setshow] = useState("first");
  console.log("statedata", data);


  const deleter=(e)=>{
    console.log(e)
    const update=data.filter(data=>data.id!==e);
    setdata(update);
  }

  return (
    <div>
      Show
      <button
        className="bg-orange-500 py-2 px-1 font-light hover:bg-orange-300 "
        onClick={() => setshow("Next")}
      >
        Show data
      </button> 
       <button
        className="bg-orange-500 py-2 px-1 font-light hover:bg-orange-300 "
        onClick={() => setshow("first")}
      >
        Hide data
      </button>
      <div className={show === "Next" ? "Next" : "first"}>

    <div className="flex">
      {data.map((val,key) => (
        <div key={key} className="bg-gray-700 h-auto flex p-1 w-48 flex-col" >
        <img src={val.avatar} alt=""  className="p-0"/>
        <div className="  ">{val.id}) {val.first_name}</div>
        <div className="bg-red-500 h-20 w-24">
            <button className="bg-amber-500 hover:bg-amber-700" onClick={()=>deleter(val.id)}>Delete</button>
        </div>
        <hr />
        </div>
      ))}
      </div> 

      </div>
    </div>
  );
}

export default Show;
