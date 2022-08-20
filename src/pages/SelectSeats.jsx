import Row from '../components/seats/Row'
import standardTime from '../functions/standardTime'

const SelectSeats = ({ seatClick, title, time, tickets, prevStage }) => {

  // 0 available seat
  // 1 selected seat
  // 2 occupied seat
  const seatStatus = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 0, 0],
  ]

  const screenStyle = {
    backgroundColor: '#fff',
    height: '90px',
    width: '20rem',
    margin: '15px 0',
    transform: 'rotateX(-45deg)',
    boxShadow: '0 3px 10px rgba(255, 255, 255, 0.7)',
  }



  return (
    <div className='flex flex-col justify-center items-center h-screen  text-white'>
      <div className="p-2">
        <h1 className='text-4xl text-center'>{title} <br />{standardTime(time)} </h1>
      </div>
      <ul className='flex justify-stretch text-center p-4'>
        <li className='p-4 flex flex-col justify-center items-center'>
          <div className="available h-6 w-6 m-2 rounded-t-xl"></div>
          <h3>Available</h3>
        </li>
        <li className='p-4 flex flex-col justify-center items-center'>
          <div className="selected h-6 w-6 m-2 rounded-t-xl"></div>
          <h3>Selected</h3>
        </li>
        <li className='p-4 flex flex-col justify-center items-center'>
          <div className="occupied h-6 w-6 m-2 rounded-t-xl"></div>
          <h3>Occupied</h3>
        </li>
      </ul>
      <div style={screenStyle} className='screen'></div>
      <div className='row-container flex flex-col'>
        <Row seatClick={seatClick} rowName='A' status={seatStatus[0]} />
        <Row seatClick={seatClick} rowName='B' status={seatStatus[1]} />
        <Row seatClick={seatClick} rowName='C' status={seatStatus[2]} />
        <Row seatClick={seatClick} rowName='D' status={seatStatus[3]} />
        <Row seatClick={seatClick} rowName='E' status={seatStatus[4]} />
        <Row seatClick={seatClick} rowName='F' status={seatStatus[5]} />
      </div>
      <button
        className='w-80 p-3 bg-secondary text-primary text-center'
        style={tickets > 0 ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >
        <h1>Pay Now for ({tickets}) seats</h1>
      </button>
      <button
        onClick={prevStage}
        className='w-80 p-3 mt-2 bg-white text-primary text-center'
      >
        <h1>Back</h1>
      </button>
    </div>
  )
}
export default SelectSeats