import React from "react";
import Wrapper from "../wrappers/inputsWrapper";
import Result from "./Result";
export default function Input() {

    const [src, setSrc] = React.useState('');
    const [text,setText]=React.useState([]);


    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    let imgfun = function () {
        let x = Math.floor(Math.random() * allMemes.length) + 1;

        document.querySelector('.form').addEventListener('submit', function (e) { e.preventDefault() })
        let img = allMemes[x].url;
        setSrc(img);


    }

    const addInputs=(x)=>{
        const newText=text;
        newText.push({text:'',color:'#000',top:0,left:0,size:100})
        setText([...newText])
        

    }

    const zoom=(e,direction)=>{
        const id=e.target.className;
        if (direction=='-' && text[id].size>0) {
            const value=text[id].size-10;
            const newText=text;
            newText[id].size=value;
            setText([...newText])
        }
        if (direction=='+' ) {
            const value=text[id].size+10;
            const newText=text;
            newText[id].size=value;
            setText([...newText])  
        }
            }
    const changePosition=(e,direction)=>{
const id=e.target.className;
console.log(id,direction);
if (direction=='down' && text[id].top<100) {
    const value=text[id].top+10;
    const newText=text;
    newText[id].top=value;
    setText([...newText])
}
if (direction=='up' && text[id].top>0) {
    const value=text[id].top-10;
    const newText=text;
    newText[id].top=value;
    setText([...newText])  
}
if (direction=='right' && text[id].left<100) {
    const value=text[id].left+10;
    const newText=text;
    newText[id].left=value;
    setText([...newText])
}
if (direction=='left' && text[id].left>0) {
    const value=text[id].left-10;
    const newText=text;
    newText[id].left=value;
    setText([...newText])  
}
    }
    const displayInputs=()=>{
        let i=-1;
       return text.map(t=>{i++;
          return ( <div className="input" key={i}><input type='text' value={text[i].text} name={i} className='text' onChange={(e)=>{
            const newText=text;
            const value=e.target.value;
            const name=e.target.name;
            newText[name].text=value;
            setText([...newText])

          }} />
          <input type='color' className={i} onChange={(e)=>{
                        const newText=text;
                        const value=e.target.value;
                        const name=e.target.className;
                        console.log(name);
                        newText[name].color=value;
                        setText([...newText])
          }}/>
          <div className="directions">
        <button onClick={(e)=>changePosition(e,'up')}  className={i}>up</button><br/>
        <button onClick={(e)=>changePosition(e,'left')} className={i}>left</button>
        <button onClick={(e)=>changePosition(e,'right')} className={i}>right</button>
        
        <button onClick={(e)=>changePosition(e,'down')}className={i}>down</button>

          </div>
          <div className="zoom">
        <button onClick={(e)=>zoom(e,'+')} className={i}>+</button>
        <button onClick={(e)=>zoom(e,'-')}className={i}>-</button>

          </div>
          <button id={i} onClick={(e)=>{
            const newText=text;            
            newText.splice(e.target.id, 1)
            setText([...newText])
            } }>Remove</button>
          </div>)
        })
    }


    return (
        <Wrapper>
            <form className="form" onSubmit={e=>{e.preventDefault();console.log(text.length);}}>
            <div  className="buttons">
                <h1>Inputs number : {text.length}</h1>
                
                <button onClick={()=>addInputs()}>Add</button>
                </div>
                <div className="inputs">
                { displayInputs()}
               
                </div>
                <div className="button">
                    <button onClick={imgfun} type='submit'>Genereate new meme</button>
                </div>
                <Result
                    src={src}
                    text={text}
                />
            </form>
        </Wrapper>
    )

}