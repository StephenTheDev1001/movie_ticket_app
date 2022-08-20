import Row from '../components/seats/Row'

const SelectSeats = ({ seatClick }) => {

  // 0 available seat
  // 1 selected seat
  // 2 occupied seat
  const seatStatus = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 0, 0],
  ]

  return (
    <div>
      <div className='row-container flex'>
        <Row seatClick={seatClick} rowName='A' status={seatStatus[0]} />
        <Row seatClick={seatClick} rowName='B' status={seatStatus[1]} />
        <Row seatClick={seatClick} rowName='C' status={seatStatus[2]} />
        <Row seatClick={seatClick} rowName='D' status={seatStatus[3]} />
        <Row seatClick={seatClick} rowName='E' status={seatStatus[4]} />
        <Row seatClick={seatClick} rowName='F' status={seatStatus[5]} />
      </div>
    </div>
  )
}
export default SelectSeats