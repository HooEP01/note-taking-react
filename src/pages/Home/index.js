import { useState, useEffect } from 'react'

import Edit from './components/Edit'
import List from './components/List'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        //绑定的事情
        return () => {
            //取消绑定 
        }
    }, [data])
    return <div className="
        p-4 
        m-1
        border border-slate-500 border-2">
        <Edit add={setData}/>
        <List listData={data} deleteData={setData}/>
    </div>
}

export default Home;