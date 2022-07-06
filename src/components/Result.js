import React from "react";

export default function Result({src,text}) {
  console.log(text);
    const displayParagraphs=()=>{
        let i=-1;
          return  text.map(t=>{i++;return<p key={i} style={{color:t.color, top:`${t.top}%`, left:`${t.left}%`,fontSize:`${t.size}%`}} id={`p${i}`}>{t.text}</p>})
        
    }

    return (

        <div className="result">
            <div>
         {displayParagraphs()}
            <img src={src} id="result"></img>
            </div>
        </div>

    )

}