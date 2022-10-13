import { useContext, useState } from "react";
import Landing from "./components/landing/Landing";
import Interactions from "./components/interactions/Interactions";
import Menu from "./common/menu/Menu";
import LearnMore from "./components/about/LearnMore";
import { AppContext } from "./state/appContext";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { state } = useContext(AppContext);
  const { table, selectedAnswers } = state;

  return (
    <>
      {selectedAnswers.length >= table.tableUpto && (
        <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      )}
      <LearnMore setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Landing />
      <main>
        <Interactions />
      </main>
    </>
  );
};

export default App;
