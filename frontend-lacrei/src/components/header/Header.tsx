import {HeaderNav, ListUl, Listli, LinkHeader} from "./Header.Style.ts";

function Header() {
  return(
    <HeaderNav>
        <LinkHeader href="/">Lacrei</LinkHeader>
        <ListUl>
          <Listli>Home</Listli>
          <Listli>Pessoa Usuária</Listli>
          <Listli>Profissional</Listli>
        </ListUl>
    </HeaderNav>
  )
  // return (
  //   <Router>
  //     <div className="Header">
  //       <h2 className="Header__title">Lacrei</h2>
  //       <nav className="Header__links" >
  //         <Link to='/Frontend_Lacrei/'>Home</Link>
  //         <Link to='/Frontend_Lacrei/PessoaUsuaria'>Pessoa Usuária</Link>
  //         <Link to='/Frontend_Lacrei/Profissional'>Profissional</Link>          
  //       </nav>
  //       <Routes>
  //         <Route path="/Frontend_Lacrei/" element={<Home />} />
  //         <Route path="/Frontend_Lacrei/PessoaUsuaria" element={<Usuaria />} />
  //         <Route path="/Frontend_Lacrei/Profissional" element={<Profissional />} />
  //       </Routes>          
  //     </div>
  //   </Router>      
  // )
}

export default Header;