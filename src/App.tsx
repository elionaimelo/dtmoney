import { GlobalStyle } from "./styles/global";
import { Header }   from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./components/hooks/useTransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
