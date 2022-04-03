import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Gás de cozinha',
          value: -50.00,
          type: 'withdraw',
          category: 'Saúde',
          date: '20/04/2020'
        },
        {
          id: 2,
          title: 'Suplementos',
          value: -30.00,
          type: 'withdraw',
          category: 'Saúde',
          date: '20/04/2020'
        },
        {
          id: 3,
          title: 'Salário',
          value: 1200.00,
          type: 'deposit',
          category: 'Salário',
          date: '20/04/2020'
        },
        {
          id: 4,
          title: 'Aluguel',
          value: -10000.00,
          type: 'withdraw',
          category: 'Imóveis',
          date: '20/04/2020'
        }
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
