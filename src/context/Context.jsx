import { createContext, useState } from "react";
import runChat from "../config/gemini"

export const Context = createContext();
const contextProvider = (props)=>{
    const [input,setInput]=useState("")
    const [recentPrompts,setRecentPrompts]=useState("")
    const[prevPrompt,setPrevPrompt]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setResultData]=useState("")
    const delaypara =(index,newWord)=>{
        setTimeout(()=>{
            setResultData(prev=>prev+newWord)
        },75*index)

    }
    const onSent = async (input)=>{
         setResultData("");
         setLoading(true);
         setShowResult(true);
         setRecentPrompts(input)
         setPrevPrompt(prev=>[...prev,input])
         const response = await runChat(input);
         let responseArray = response.split("**");
         let newResponse="";
         for(let i=0;i<responseArray.length;i++){
            if(i===0 ||i%2!==1){
                newResponse+=responseArray[i]
            }else{
                newResponse+="<b>"+responseArray[i]+"</b>"
            }

         }
         let newResponse2 = newResponse.split("*").join("<br>")
         let newResponseArray = newResponse2.split(" ")
         for(let i=0;i<newResponseArray.length;i++){
             const nextWord = newResponseArray[i];
             delaypara(i,nextWord+" ");
         }
         
        setLoading(false);
        setInput("")
        
         
    }
    

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompts,
        setRecentPrompts,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default contextProvider;