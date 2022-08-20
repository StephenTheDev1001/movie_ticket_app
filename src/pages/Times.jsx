import standardTime from "../functions/standardTime";

const Times = ({ title, selectTime }) => {
  const showTimes = ['11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15']

  const onClick = e => {
    selectTime(e.target.value)
  }

  return (
    <div className='text-white flex flex-col items-center h-screen justify-center'>
      <div className="p-2">
        <h1 className='text-4xl text-center'>Select a Show Time <br /> {title}</h1>
      </div>
      <ul>
        {
          showTimes.map(militaryTime => {
            return (
              <li key={militaryTime} className='p-2 hover:text-secondary'>
                <button onClick={onClick} value={militaryTime}>
                  {standardTime(militaryTime)}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Times