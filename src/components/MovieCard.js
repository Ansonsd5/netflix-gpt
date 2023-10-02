import React from 'react'
import { CARD_IMAGE_URL } from '../utils/constants'

const MovieCard = ({cardImg}) => {
  return (
    <div className='px-4'>
    
      <img className='w-48 max-w-none '  src={ CARD_IMAGE_URL+cardImg}  alt='card-img'/>

    </div>
  )
}

export default MovieCard