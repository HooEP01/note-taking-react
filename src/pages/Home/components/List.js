import Item from './Item'

const List = ({listData, deleteData}) => {
    return <div className=""> 
        {
            listData.map(item => {
                const { note, date, time, id } = item
                return <Item 
                note={note} 
                date={date} 
                time={time} 
                deleteData={deleteData} 
                id={id}/>
            })
        }
    </div>
}

export default List;