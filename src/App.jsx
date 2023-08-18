import './App.css';
import { useState } from 'react'
import Movies from './pages/Movies'
import Times from './pages/Times'
import SelectSeats from './pages/SelectSeats'
import Receipt from './pages/Receipt';


function App() {
  const [state, setState] = useState({
    stage: 0,
    time: '',
    title: '',
    selectedSeats: []
  })

  // destructuing
  const { title, time, selectedSeats, stage } = state

  const nextStage = () => {
    setState({
      ...state,
      stage: stage + 1
    })
  }

  const prevStage = () => {
    setState({
      ...state,
      stage: stage - 1,
      selectedSeats: []
    })
  }

  const stage0 = () => {
    setState({
      stage: 0,
      time: '',
      title: '',
      selectedSeats: []
    })
  }

  const selectMovie = title => {
    setState({
      ...state,
      title: title,
      stage: 1
    })
  }

  const selectTime = (time) => {
    setState({
      ...state,
      time: time,
      stage: 2
    })
  }

  const seatClick = (seat) => {
    const ind = state.selectedSeats.indexOf(seat)

    if (ind === -1) {
      setState({
        ...state,
        selectedSeats: [...selectedSeats, seat]
      })
    } else {
      const arr = selectedSeats
      arr.splice(ind, 1)

      setState({
        ...state,
        selectedSeats: arr
      })
    }
  }



  switch (state.stage) {
    case 0:
      return <Movies selectMovie={selectMovie} />
    case 1:
      return <Times title={title} selectTime={selectTime} nextStage={nextStage} prevStage={prevStage} />
    case 2:
      return <SelectSeats title={title} time={time} seatClick={seatClick} tickets={selectedSeats.length} nextStage={nextStage} prevStage={prevStage} />
    case 3:
      return <Receipt title={title} selectedSeats={selectedSeats} time={time} stage0={stage0} tickets={selectedSeats.length} />
  }
}

export default App;
