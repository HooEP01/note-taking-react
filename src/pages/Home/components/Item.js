const Item = ( {id, note, date, time, deleteData} ) => {

    const deleteItem = () => {
        deleteData( (prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="
        w-full
        border-b-2
        border-slate-500
        pb-2
        flex
        justify-between
        items-center"> 
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <div className="
        flex-initial">
             <button type="button" 
                onClick={deleteItem}
                className="
                bg-red-500
                hover:bg-red-600
                text-white
                p-2
                mt-2">删除</button>
        </div>
    </div>
}

export default Item;