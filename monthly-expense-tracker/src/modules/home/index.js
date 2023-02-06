import { useEffect, useState } from "react";
import styled from "styled-components";
import Display from "./display";
import Transaction from "./transaction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

const Home = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [exp, updateExpense] = useState(0);
  const [inc ,updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  function calculateBalance() {
    let expense = 0;
    let income = 0;
    transactions.map((payload) => {
      payload.type === "Expense"
        ? (expense = expense + payload.amount)
        : (income = income + payload.amount);
    });
    updateExpense(expense);
    updateIncome(income);
  };

  useEffect(() => calculateBalance() ,[transactions]);


  return (
    <Container>
      <Display addTransaction={addTransaction} expense={exp} income={inc}/>
      <Transaction transactions={transactions} />
    </Container>
  );
};
export default Home;
