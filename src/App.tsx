import Header from "./components/landing/Landing";
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
