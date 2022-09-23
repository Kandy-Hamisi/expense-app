import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import categoryConstants from '../constants/categoryConstants';
import { addTransaction } from '../features/Transactions/transactionSlice';

const Transactions = () => {

    const allTransactions = useSelector((state: any) => state.transactions.transactionList)
    const dispatch = useDispatch();

    const myDate:string = new Date().toLocaleDateString()
    const [ myTransaction, setMyTransaction ] = useState({
        label: "",
        date: myDate,
        amount: 0,
     })


    const handleChange = (e: any) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setMyTransaction({...myTransaction, [name]:value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(myTransaction.label && myTransaction.date && myTransaction.amount) {
            const selectedCategory =  categoryConstants.filter(myItem => myItem.category === myTransaction.label)
            const newTransaction = {...myTransaction, id: parseInt(uuidv4()), categoryId: selectedCategory[0].id};
            dispatch(addTransaction(newTransaction));

            // clear the form
            setMyTransaction({
                label: "",
                date: myDate,
                amount: 0,
            })
        }
    }

  return (
    <div>
        <div className='transaction-wrapper'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Transaction Label</th>
                        <th>Transaction Amount</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTransactions.map((transaction:any) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.label}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <form action="">
            <div className="form-group">
                <label htmlFor="label">Label</label>
                <select
                    name="label"
                    id="label"
                    className='form-control'
                    onChange={handleChange}
                >
                    <option value="">Select Label</option>
                {
                    categoryConstants.map(item => (
                        <option key={item.id} value={item.category}>{item.category}</option>
                    ))
                }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input
                    type="date"
                    value={myTransaction.date}
                    onChange={handleChange}
                    name="date"
                    id="date"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Enter Expense Amount</label>
                <input
                    type="number"
                    value={myTransaction.amount}
                    onChange={handleChange}
                    placeholder="Enter Amount"
                    name="amount"
                    id="amount"
                />
            </div>
            <div className="form-group">
                <button onClick={handleSubmit}>Add Transaction</button>
            </div>
        </form>
    </div>
  )
}

export default Transactions