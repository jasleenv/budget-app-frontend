
import './App.css';
import React, { useEffect, useState } from "react"
import axios from "axios"
import { apiUrl } from "./Util/apiUrl"
import { Switch, Route } from "react-router-dom"
import Error from "./Components/Error"
import Edit from "./Components/Edit"
import Home from "./Components/Home"
import Index from "./Components/Index"
import NavBar from "./Components/NavBar"
import Post from "./Components/Post"
import Show from "./Components/Show"


const API_BASE = apiUrl()

function App() {
  const [transactions, setTransactions] = useState([])
  const addTransaction = (newTransaction) => {
    axios.post(`${API_BASE}/transactions/new`, newTransaction).then((response) => {
      return axios.get(`${API_BASE}/transactions/`).then((response) => {
        setTransactions(response.data)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  const updateTransaction = (index, updatedTransaction) => {
    axios.put(`${API_BASE}/transactions/${index}`, updatedTransaction).then((response) => {
      return axios.get(`${API_BASE}/transactions/`).then((response) => {
        setTransactions(response.data)
      })
    }).catch((error) => {
      console.log(error)
    })

  }

  const deleteTransaction = (index) => {
    axios.delete(`${API_BASE}/transactions/${index}`).then((response) => {
      return axios.get(`${API_BASE}/transactions/`).then((response) => {
        setTransactions(response.data)

      })
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`).then((response) => { setTransactions(response.data) }).catch((error) => { console.log(error) })
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/transactions">
          <Index transactions={transactions} />
        </Route>
        <Route path="/transactions/new">
          <Post add={addTransaction} />
        </Route>
        <Route exact path="/transactions/:index">
          <Show transactions={transactions} deleteTransaction={deleteTransaction} />
        </Route>
        <Route path="/transactions/:index/edit">
          <Edit update={updateTransaction} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
