import { FC } from "react"
import './index.scss'
import {   X  } from 'lucide-react';
import { Iprops } from "./interfacse/interface"
const Alert :  FC <Iprops> = ({type  , icon ,title ,dscription ,children})=> {
  return (
    <>
    <div className= {type}>
      <div className="alert-header">
        <div className="alert-title">
        {icon }
         <h2 className="title">{title}</h2>
        </div>
         <X className="x"/>
      </div>
   
   
    {children? children :  <pre className="pp"> {dscription }</pre>}
      
    </div>
  
    </>
  )
}

export default  Alert