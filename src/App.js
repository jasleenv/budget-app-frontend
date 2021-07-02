
import './App.css';
import rseact from "react"
import axios from "axios"
import { apiUrl } from "./Util/apiUrl"
import { Switch, Route } from "react-router-dom"
import error from "./Components/error"
import edit from "./Components/edit"
import home from "./Components/home"
import index from "./Components/index"
import navBar from "./Components/navBar"
import newPost from "./Components/newPost"
import show from "./Components/show"

const API_BASE = apiURL()

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
    axios.get(`${API_BASE}/transactions`).then((response) => setTransactions(response.data)).catch((error) => { console.log(error) })
  },[])


  return (
    <div className="App">

    </div>
  );
}

export default App;
