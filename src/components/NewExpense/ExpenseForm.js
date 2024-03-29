import React,{useState} from "react";
import './ExpenseForm.css';


const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
  // const [userInput,setUserinput]=useState({
   // enteredTitle:'',
    //enteredAmount:'',
   // enteredDate:'',
  // });
    
    const titleChangeHandler=(event)=>{
       setEnteredTitle(event.target.value);
      //setUserinput({
       // ...userInput,
        //enteredTitle:event.target.value,
        
     // });
     //setUserinput((prevState)=>{
      //  return {...prevState,enteredTitle:event.target.value};
    // });
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
      // setUserinput({
      //  ...userInput,
      //  enteredAmount:event.target.value,
     // });
       // setUserinput((prevState)=>{
        //return {...prevState,enteredAmount:event.target.value};
    // });
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
       //setUserinput({
       // ...userInput,
      //  enteredDate:event.target.value,
     // });
     //setUserinput((prevState)=>{
       // return {...prevState,enteredDate:event.target.value};
     //});
    };

     const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate)
        };
        console.log(expenseData);
     };

   return ( 
   <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Title</label>
            <input type='text'onChange={titleChangeHandler}/>

        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01"onChange={amountChangeHandler}/>

        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            
            <input type='date' min="2019-01-01"
             max="2022-12-31"
            onChange={dateChangeHandler}/>

        </div>

    </div>
    <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
    </div>
   </form>
   );
};

export default ExpenseForm;
