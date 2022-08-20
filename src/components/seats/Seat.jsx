import { useState } from "react"

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
  console.log(typeof state.status);
  const seatStatus = x => {
    switch (x) {
      case 0:
        return 'tertiary'
      case 1:
        return 'secondary'
      case 2:
        return 'white'
    }
  }
  return (
    <div
      onClick={onClick}
      className={`bg-primary h-6 w-6 m-2 rounded-t-xl`}
    >

    </div>
  )
}
export default Seat