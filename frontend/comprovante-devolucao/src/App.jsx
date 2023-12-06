import Content from "./components/Content";
import Upload from "./components/Content/upload";
import Header from "./components/Header";


function App() {

  return (
      <>
        <Header />
        <Content 
        h2="Prestação de Contas" 
        h3 ="Anexe o(s) arquivo(s) abaixo"/>
        <Upload />
      </>
    )
}

export default App
