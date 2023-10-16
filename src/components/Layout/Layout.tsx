import React from "react"
import { BodyLayout  } from "./conteudoStyle"
import { Header } from "../Header/Header"

interface LayoutProps {
  children: any
}

export function Layout(props: LayoutProps) {
  return (
    <BodyLayout>
      <Header />
      {props.children}
    </BodyLayout>
  )
}