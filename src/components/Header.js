import React from "react";
import Wrapper from '../wrappers/headerWrapper'
import image from '../meme.png'
export default function Header() {
    return (
        <Wrapper>
            <nav>
                <div className="logo"><img src={image} />
                    <h1> Meme Generator</h1></div>
                <h2>Abderrahim Kadnaoui</h2>
            </nav>
        </Wrapper>
    )

}