import styled from "styled-components";

const Wrapper=styled.header`
padding:5%;

form{
            button{
            width: 20%;
            height: 5vw;
            background-color: blueviolet;
            color: white;
            font-size: 2vw;
            font-weight: bolder;
            border-radius: 0.4vw;
            box-shadow: 0px 1px 5px 0px black;
        }
    .buttons{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;
        h1{
            font-size:3vw;
        }


    }
    .inputs{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        .input{
            width:100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            
        margin-block:3%;
        }
        .text{
            width:30%;
            height: 3vw;
            margin-block:1vw;
            font-size:1.5vw;
        } 
        .directions{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            width:20%;
            button{
                width:40%;
                font-size:1.5vw;
            }
            button:nth-child(1){
                margin-inline:20%;
            }
        }
        .zoom{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            width:20%;
            button{
                width:40%;
                font-size:100%;
            }
        }
    }
    .button{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-block:3vh;
        button{
            width:50%;
            margin:auto;
        }
    }
    .result{
        width:100%;
        min-height:50vh;
        display:flex;
        align-items:center;
        justify-content:center;

        
        div{
            position:relative;
            width:fit-content;
            max-width:100%;
            img{
                width:100%;
            }
            p{margin:0;
                position:absolute;
                text-shadow: 0.2vw 0 0 #000, -0.2vw 0 0 #000, 0 0.2vw 0 #000, 0 -0.2vw 0 #000, 0.2vw 0.2vw #000, -0.2vw -0.2vw 0 #000, 0.2vw -0.2vw 0 #000, -0.2vw 0.2vw 0 #000;

            }
            
        }
       
    }
}
@media(max-width:700px){
form{
    .buttons{
        h1{
            font-size:3vh;
        }
    button{
        height:4vh;
        font-size:2.5vh;
    }
    }
    .input{
        .text{
            width:100%;
            height:4vh;
            font-size:2.5vh;
                border:1px solid black;
            
        }
        button{
            height:fit-content;
            min-height: 3vh;
            width:fit-content;
            font-size:3vh;
        }
    }
    .button{
        button{
            width:100%;
            height:5vh;
            font-size:3vh;
        }

    }
}
}
`
export default Wrapper