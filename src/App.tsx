import Landing from "./components/landing/Landing";
import Interactions from "./components/interactions/Interactions";
import { useState } from "react";
import Menu from "./common/menu/Menu";
import LearnMore from "./components/about/LearnMore";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <LearnMore setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Landing />
      <main>
        <Interactions />
      </main>
    </>
  );
};

export default App;
