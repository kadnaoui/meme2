import React from "react";
import Header from "./Header";
import Input from "./input";
import DocumentMeta from 'react-document-meta';


export default function App() {

    const meta = {
        title: 'MemeApp',
        description: 'Generate a Random meme and add your ideas to it',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,portfolio,fun,app,build,Abderrahim Kadnaoui'
          }
        }
      };
    return (
   
        <DocumentMeta {...meta}>
        <Header />
        <Input />
      </DocumentMeta>


    )
}