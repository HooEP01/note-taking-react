import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
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
    const [theme, setTheme] = useState('light');
    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);


    const listData = useMemo(() => {
        return data
    }, [data])

    const toggleTheme = () => {
        const mode = (theme === 'light') ? 'dark' : 'light';
        setTheme(mode);
        localStorage.setItem('theme', JSON.stringify(mode));
    }

    useEffect(() => {
        const mode = JSON.parse(localStorage.getItem('theme'));
        console.log(mode)
        if(mode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
     }, [theme])

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
        border 
        border-8
        border-slate-800 dark:border-slate-500
        bg-white dark:bg-slate-900">
        <div>
            <button 
                type="button"
                onClick={toggleTheme}
                className="
                float-right
                bg-slate-800
                hover:bg-slate-900
                text-white
                p-2"
            >
                { theme }
            </button>
        </div>
        <Edit add={setData} submittingStatus={submittingStatus} />
        <List listData={listData} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
}

export default Home;