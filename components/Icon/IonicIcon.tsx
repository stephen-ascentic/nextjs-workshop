"use client"

import { refreshTime } from "@/lib/api"
import { ComponentProps } from "react"

type Props = ComponentProps<"ion-icon">

export default function IonicIcon(props: Props) {
  
    

    return (
    <ion-icon {...props} onClick={()=> refreshTime()}></ion-icon>
  )
}