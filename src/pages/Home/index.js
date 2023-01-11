import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../../global/constants'

import Edit from './components/Edit'
import List from './components/List'

const fetchData = async (setData) =>{
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

const fetchSetData = async (data) => {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {
    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);

    useEffect(() => {
        if(!submittingStatus.current) {
            return
        }
        fetchSetData(data)
        .then(data => submittingStatus.current = false)
    }, [data])

    useEffect(() => {
        //绑定的事情
        fetchData(setData)
        return () => {
            //取消绑定 
        }
    }, [])

    return <div className="
        p-4 
        m-1
        border border-slate-500 border-2">
        <Edit add={setData} submittingStatus={submittingStatus} />
        <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
}

export default Home;