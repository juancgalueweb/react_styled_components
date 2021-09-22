// Styled components
import {
  Advertisement,
  Apps,
  Header,
  Main,
  Navigation,
  SubContent,
} from "./components/Components.styles";
// Global styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Apps>
      <GlobalStyle />
      <Header />
      <Navigation />
      <Main>
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
      </Main>
    </Apps>
  );
}

export default App;
