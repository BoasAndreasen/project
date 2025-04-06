import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Logo from "./resources/Logo.svg"

function App() {
  return (
    <>
      <meta name="description" content="Little Lemon is a Mediterranean family-owned restaurant"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon Restaurant"/>
      <meta name="og:image" content={Logo}/>
      <Header>
      </Header>
      <Nav>
      </Nav>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </>
  );
}

export default App;
