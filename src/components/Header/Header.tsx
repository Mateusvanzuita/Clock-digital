import { HeaderStyle, HeaderMenu, HeaderMenuConfig, HeaderLink } from "./headerStyle"

export function Header() {
  return (
    <HeaderStyle>
      <HeaderMenu>
        <HeaderLink>HORA</HeaderLink>
        <HeaderLink>CALENDARIO</HeaderLink>
      </HeaderMenu>
      <HeaderMenuConfig>
        <HeaderLink>FAÇA LOGIN</HeaderLink>
        <HeaderLink>CONFIGURAÇÕES</HeaderLink>
      </HeaderMenuConfig>
    </HeaderStyle>
  )
}