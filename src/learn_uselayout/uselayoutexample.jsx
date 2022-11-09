import { useEffect, useLayoutEffect } from "react"

export const UseLayout=()=>{

    useEffect(()=>{
      console.log("Ist console Item")
    },[])

    useLayoutEffect(()=>{
    console.log("IInd console Item")
    },[])


    useEffect(()=>{
      console.log("iiird console item")
    },[])


    return(

        <div>
            <h1>Learn Use Layout</h1>
        </div>
    )
}