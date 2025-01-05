import { ReactNode } from "react";
import {alerttype} from "./types"
export interface Iprops {
  type :alerttype ;
  icon : ReactNode
  title : string 
  dscription ?: string 
  children ?:ReactNode 
}