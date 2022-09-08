import React from "react";
import {useState} from "react";
// import Show from "./Show.jsx";

import Create from "./Create.jsx"
import { useGetAllPostQuery,useGetByIDQuery,useDeleteMutation } from "./services/post";

function App() {
  


  
     

  

  // const [deletepost,responseinfo]=useDeleteMutation();
  


  // const responsebyid = useGetByIDQuery(10);
  // const realid=responsebyid.data.data;
  // console.log("data", responsebyid.data.data);
  // const realdata = responseinfo.data.data;
  // 

  // if (responseinfo.isLoading) return <div>LODING.......</div>;

  return (
    <div className="font-bold w-128 content-center flex justify-center"> YP
    {/* <Show></Show> */}
    <Create/>

    

      {/* <div className="font-bold w-screen content-center flex justify-center">
        Displaying all data
      </div>
      {realdata.map((val,key) => (
        <div key={key}>
        <img src={val.avatar} alt="" />
        <div>{val.id}) {val.first_name}</div>
        <hr />
        </div>
      ))} */}



{/* searched data */}






      {/* <div>Searched data is:{realid.id}) {realid.first_name}</div>
      {console.log("dayayyy",realid.id)} */}


{/* delete data */}
        {/* <div>Deleting:
          <button onClick={()=>{deletepost(2)}} className="bg-cyan-200 h-10 border-solid border-r-black w-10">DEL</button>
        </div> */}


    </div>
  );
}

export default App;
