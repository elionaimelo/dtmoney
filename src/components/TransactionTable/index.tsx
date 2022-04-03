import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  
  }, [])
  

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gás de cozinha</td>
            <td className="withdraw">- R$ 50,00</td>
            <td>Saúde</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Suplementos</td>
            <td className="withdraw">- R$ 30,00</td>
            <td>Saúde</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 1200,00</td>
            <td>Salário</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 10.000,00</td>
            <td>Imóveis</td>
            <td>20/04/2020</td>
          </tr>

         
         
          
        </tbody>
      </table>
    </Container>
  );
}
