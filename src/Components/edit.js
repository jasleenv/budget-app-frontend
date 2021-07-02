import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"
import {apiUrl} from "../Util/apiUrl"


const API_BASE = apiUrl()

export default function edit(props) {
    const [transaction, setTransaction] = useState({
        date:"",
        name:"",
        amount:"",
        from:"",
    })
    return (
        <div>
            
        </div>
    )
}
