import frozen from '../assets/frozen.jpeg'
import matrix from '../assets/matrix.jpg'
import skyfall from '../assets/skyfall.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Movies = ({ selectMovie }) => {
  const onClick = e => {
    console.log(e.target.name)
    selectMovie(e.target.name)
  }

  return (
    <div className='flex flex-col justify-center items-center h-full lg:h-auto'>
      <h1 className='text-center align-text text-4xl p-6 text-white'>Select a Movie</h1>
      <div className="posters flex justify-center items-center flex-wrap">
        <button onClick={onClick} className='w-[300px] p-1'>
          <img name='Frozen II' src={frozen} alt="Frozen Poster" />
        </button>
        <button onClick={onClick} className='w-[300px] p-1'>
          <img name='Matrix Resurrections' src={matrix} alt="Matrix Poster" />
        </button>
        <button onClick={onClick} className='w-[300px] p-1'>
          <img name='Skyfall' src={skyfall} alt="Skyfall Poster" />
        </button>
        <button onClick={onClick} className='w-[300px] p-1'>
          <img name='Frozen II' src={frozen} alt="Frozen Poster" />
        </button>
        <button onClick={onClick} className='w-[300px] p-1'>
          <img name='Matrix Resurrections' src={matrix} alt="Matrix Poster" />
        </button>
      </div>
    </div>
  )
}
export default Movies