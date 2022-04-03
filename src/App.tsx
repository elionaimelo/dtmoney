import { GlobalStyle } from "./styles/global";
import { Header }   from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

function App() {
  
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </div>
  );
}

export default App;
