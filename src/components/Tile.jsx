import React from 'react'
import './tile.css'

export default function Tile ( {number, image} ) {
    if ( number % 2 === 0){
        return <div className='tile black-tile'>
            <div style = {{backgroundImage : `url(${image})`}} className='chess-piece'></div>
        </div>
    }else {
        return <div className='tile white-tile'>
            <div style = {{backgroundImage : `url(${image})`}} className='chess-piece'></div>
        </div>
    }
  
}
