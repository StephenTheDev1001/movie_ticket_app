

const Receipt = ({ title, time, selectedSeats }) => {

  return (
    <div className="receipt-container text-white flex items-center justify-center h-screen">
      <div className="w- flex flex-col ">
        <h1 className="text-4xl mb-8 p-3">Thank you for your purchase!</h1>
        <p className="text-3xl p-3">Film: {title}</p>
        <p className="text-3xl p-3">Time: {time}</p>
        <p className="text-3xl p-3">Seats: {selectedSeats.join(', ')}</p>
        <p className="text-3xl p-3">Total: {`$${selectedSeats.length * 14}`}</p>
      </div>
    </div>
  )
}



export default Receipt