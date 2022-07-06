import styled from "styled-components";

const Wrapper=styled.header`
nav{
    display: flex;
    justify-content: space-between;
    background-color: blueviolet;
    align-items: center;
    box-shadow: 0px 0.133vw 1.333vw 0px black;
    min-width:100%;
    color: white;
    height: 7vw;
    
}
.logo{
    display: flex;
    align-items: center;
    margin-left: 3%;
}
.logo>img{
    width: 5vw;
    height: 80%;
}
.logo>h1{
    margin-left: 3%;
    width: 30vw;
    font-size: 2vw;
}
nav>h2{
    margin-right: 5%;
    font-weight: lighter;
    font-size: 2vw;
}
@media(max-width:700px){
    nav{

        height: 7vh;
        
    }

    .logo>img{
        width: 5vh;
    }
    .logo>h1{
        width: 80vw;
        font-size: 5vw;
    }
    nav>h2{
        font-size: 5vw;
        display:none;
    }
}
`
export default Wrapper