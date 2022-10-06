import Header from "./components/header/Header";
import Interactions from "./components/interactions/Interactions";
import Selections from "./components/selections/Selections";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Selections />
        <Interactions />
      </main>
    </>
  );
};

export default App;
