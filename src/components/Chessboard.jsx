import React from 'react'
import './chessboard.css'

const column = ["1", "2", "3", "4", "5", "6", "7", "8"];
const row = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const Chessboard = () => {
    let board = [];

    for (let j = column.length - 1; j >= 0; j--){
        for (let i = 0; i < row.length; i++){
          const num = i + j + 2;
          if (num % 2 === 0){
            board.push(<div className='tile black-tile'>[{row[i]}{column[j]}]</div>);
          }else{
             board.push(<div className='tile white-tile'>[{row[i]}{column[j]}]</div>);
          }
            
        }
    }


  return (
    <div className='chessboard'>{board}</div>
  )
}
