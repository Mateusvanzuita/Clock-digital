import { CSSProperties } from "react"
import { ButtonStyle } from "./buttonStyle"

interface ButtonProps {
  text: string
  style?: CSSProperties
  onClick?: () => void
  required?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyle aria-required={props.required} onClick={props.onClick} style={props.style} >{props.text}</ButtonStyle>
  )
}