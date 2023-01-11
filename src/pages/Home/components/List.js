import Item from './Item';

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return <Item 
          note={note} 
          date={date} 
          time={time} 
          deleteData={deleteData} 
          id={id} 
          key={id} 
          submittingStatus={submittingStatus}/>;
      })}
    </div>
  );
};

export default List;
