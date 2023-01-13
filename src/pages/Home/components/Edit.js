import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const noteChange = (e) => {
    setNote(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const addItem = () => {

    submittingStatus.current = true;

    add((prevData) => {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  };

  return (
    <div>
      <h1
        className="
            text-3xl 
            font-bold
            pb-4
            dark:text-slate-100"
      >
        备忘录
      </h1>
      <div
        className="
            pb-2"
      >
        <p
          className="
                text-lg 
                font-semibold
                pb-2
                dark:text-slate-100"
        >
          记事:
        </p>
        <input
          type="text"
          onChange={noteChange}
          value={note}
          required
          className="
                w-full
                border border-slate-500
                p-1
                dark:bg-slate-600
                dark:text-slate-100
                "
        />
      </div>

      <div
        className="
            pb-2"
      >
        <p
          className="
                text-lg
                font-semibold
                pb-2
                dark:text-slate-100"
        >
          日期:
        </p>
        <input
          type="date"
          onChange={dateChange}
          value={date}
          required
          className="
                w-full
                border border-slate-500
                p-1
                dark:bg-slate-600
                dark:text-slate-100
                "
        />
      </div>

      <div
        className="
            pb-3"
      >
        <p
          className="
                text-lg
                font-semibold
                pb-2
                dark:text-slate-100"
        >
          时间:
        </p>
        <input
          type="time"
          onChange={timeChange}
          value={time}
          required
          className="
                w-full
                border border-slate-500
                p-1
                dark:bg-slate-600
                dark:text-slate-100"
        />
      </div>

      <div
        className="
            pb-3"
      >
        <button
          onClick={addItem}
          type="button"
          className="
                w-full
                bg-slate-800
                hover:bg-slate-900
                text-white
                p-2 
                dark:bg-slate-500"
        >
          新增
        </button>
      </div>
    </div>
  );
};

export default Edit;
