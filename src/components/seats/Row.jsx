import Seat from './Seat'

const Row = ({ status, rowName, seatClick }) => {
  return (
    <div>
      {status.map((el, index) => {
        return <Seat seatClick={seatClick} key={`${rowName + index.toString()}`} seatName={`${rowName + index.toString()}`} status={el} />
      })}
    </div>
  )
}
export default Row