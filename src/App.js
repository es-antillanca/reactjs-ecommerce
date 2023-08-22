import {NextUIProvider} from "@nextui-org/react";

import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <NextUIProvider>

      <NavBar/>
      <main className='py-10 px-32 space-y-8'>
        <ItemListContainer greeting="Bienvenidos a eCommerce" />
      </main>

    </NextUIProvider>

  );
}

export default App;
