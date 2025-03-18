"use client"
import NavicationSubpage from "../components/NavicationSubpage";
import { useEffect,useState } from "react";
import axios from "axios";

export default function Listing1() {
  const [icons, setIcons] = useState([]);    
  useEffect(async() => {
     
      let data = await fetch ("https://iconsguru.com/admin/api/icons");
      data = await data.json();
       setIcons(data.icons)
       }, [])

  return (
      <>
       <NavicationSubpage/>
        <div className="conatiner">
            <div>
                <h1>Icons List</h1>
                <div className="row">
                  
                      {
                      icons.map((icon)=>{
                        <div className="col">
                           <h1>{icon.color}</h1>
                        </div>
                        })
                        
                      }
                    
                </div>
            </div>
        </div>
      </>
  );
}
