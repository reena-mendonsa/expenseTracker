import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
`;
const BalancedBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px 20px;
  &input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid black;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const AddTransactionView = (props) => {
  const [amount ,setAmount] = useState();
  const [desc ,setDesc] =useState();
  const [type, setType] =useState("Expense");
  const addTransaction = () => {
    console.log({amount,desc,type})
    props.addTransaction({amount:Number(amount),desc,type,id:Date.now()});
    props.toggleTransc();
  }
  return (
    <AddTransactionContainer>
      <input placeholder="Amount" type="number" value= {amount} onChange={(e) => setAmount(e.target.value)}/>
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
      <RadioBox>
        <input type="radio" id="expense" name="type" value="Expense" checked={type=="Expense" } onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="type" value="Income" checked={type=="Income"} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

const Display = (props) => {
  const [isAddTranscVisible, toggleTransc] = useState(false);
  return (
    <Container>
      <BalancedBox>
        Balance : {props.income - props.expense}
        <AddTransaction onClick={() => toggleTransc((isVisible) => !isVisible)}>
          
          {isAddTranscVisible ? "Cancel " : "ADD"}
        </AddTransaction>
      </BalancedBox>
      {isAddTranscVisible && <AddTransactionView toggleTransc={toggleTransc} addTransaction ={props.addTransaction}/>}
    
    <ExpenseContainer>
      <ExpenseBox isIncome={false}>
        Expense <span>{props.expense}</span>
      </ExpenseBox>
      <ExpenseBox isIncome={true} >
        Income <span>{props.income}</span>
      </ExpenseBox>
    </ExpenseContainer>
    </Container>
  );
};
export default Display;
