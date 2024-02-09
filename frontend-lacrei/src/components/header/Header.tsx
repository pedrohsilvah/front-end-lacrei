import {HeaderNav, ListUl, ListA, LinkHeader} from "./Header.Style.ts";

function Header() {
  return(
    <HeaderNav>
        <LinkHeader href="/">Lacrei</LinkHeader>
        <ListUl>
          <ListA href="/front-end-lacrei">Home</ListA>
          <ListA href="/front-end-lacrei/pessoa-usuaria">Pessoa Usuária</ListA>
          <ListA href="/front-end-lacrei/profissional">Profissional</ListA>
        </ListUl>
    </HeaderNav>
  )
}

export default Header