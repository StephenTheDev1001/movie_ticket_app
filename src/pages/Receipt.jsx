

const Receipt = ({ title, time, selectedSeats, stage0 }) => {

  return (
    <div className="receipt-container text-white flex items-center justify-center h-screen">
      <div className="w- flex flex-col ">
        <h1 className="text-4xl mb-8 p-3">Thank you for your purchase!</h1>
        <p className="text-3xl p-3">Film: {title}</p>
        <p className="text-3xl p-3">Time: {time}</p>
        <p className="text-3xl p-3">Seats: {selectedSeats.join(', ')}</p>
        <p className="text-3xl p-3">Total: {`$${selectedSeats.length * 14}`}</p>
        <button
        onClick={stage0}
        className='w-80 p-3 mt-2 bg-white text-primary text-center'
      >
        <h1>Start Another Transaction</h1>
      </button>
      </div>      
    </div>
  )
}



export default Receipt