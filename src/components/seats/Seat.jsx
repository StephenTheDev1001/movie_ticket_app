import { useEffect, useState } from "react"

const Seat = ({ seatClick, status, seatName }) => {
  const [state, setState] = useState({ status: status })

  const onClick = e => {
    if (state.status === 0) {
      setState({ status: 1 })
      seatClick(seatName)
    } else if (state.status === 1) {
      setState({ status: 0 })
      seatClick(seatName)
    }
  }

  const seatStatus = x => {
    switch (x) {
      case 0:
        return { backgroundColor: '#444451' }
      case 1:
        return { backgroundColor: '#6feaf6' }
      case 2:
        return { backgroundColor: '#fff' }
    }
  }



  // ${ seatStatus(state.status) }
  return (
    <div
      onClick={onClick}
      className='h-6 w-6 m-2 rounded-t-xl'
      style={seatStatus(state.status)}
    >

    </div>
  )
}
export default Seat