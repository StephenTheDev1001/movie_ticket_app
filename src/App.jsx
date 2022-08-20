import './App.css';
import { useState } from 'react'
import Movies from './pages/Movies'
import Times from './pages/Times'
import SelectSeats from './pages/SelectSeats'


function App() {
  const [state, setState] = useState({
    stage: 0,
    time: '',
    title: '',
    selectedSeats: []
  })

  const nextStage = () => {
    setState({
      ...state,
      stage: state.stage + 1
    })
  }

  const prevStage = () => {
    setState({
      ...state,
      stage: state.stage - 1,
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
        selectedSeats: [...state.selectedSeats, seat]
      })
    } else {
      const arr = state.selectedSeats
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
      return <Times title={state.title} selectTime={selectTime} nextStage={nextStage} prevStage={prevStage} />
    case 2:
      return <SelectSeats title={state.title} time={state.time} seatClick={seatClick} tickets={state.selectedSeats.length} prevStage={prevStage} />
  }
}

export default App;
