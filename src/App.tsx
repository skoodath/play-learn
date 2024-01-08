import { useContext, useState } from "react";
import Landing from "./components/landing/Landing";
import Interactions from "./components/interactions/Interactions";

import { AppContext } from "./state/appContext";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { state } = useContext(AppContext);
  const { table } = state;

  return (
    <>
      <Landing />
      <main>
        <Interactions />
      </main>
    </>
  );
};

export default App;
