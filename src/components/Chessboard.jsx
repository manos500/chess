import './chessboard.css'
import Tile from './Tile';
import { bb, br, bn, bq, bp, bk, wb, wk, wn, wp, wq, wr } from '../assets'

const row = ["1", "2", "3", "4", "5", "6", "7", "8"];
const column = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];
for (let i=0; i < 8; i++) {
  pieces.push({image: wp, x: i, y: 1})
  pieces.push({image: bp, x: i, y: 6})}
pieces.push({image: wr, x: 0, y: 0})
pieces.push({image: wr, x: 7, y: 0})
pieces.push({image: wn, x: 1, y: 0})
pieces.push({image: wn, x: 6, y: 0})
pieces.push({image: wb, x: 2, y: 0})
pieces.push({image: wb, x: 5, y: 0})
pieces.push({image: wk, x: 4, y: 0})
pieces.push({image: wq, x: 3, y: 0})
pieces.push({image: br, x: 0, y: 7})
pieces.push({image: br, x: 7, y: 7})
pieces.push({image: bn, x: 1, y: 7})
pieces.push({image: bn, x: 6, y: 7})
pieces.push({image: bb, x: 2, y: 7})
pieces.push({image: bb, x: 5, y: 7})
pieces.push({image: bk, x: 4, y: 7})
pieces.push({image: bq, x: 3, y: 7})


console.log(pieces)

export const Chessboard = () => {
    let board = [];

    for (let j = row.length - 1; j >= 0; j--){
        for (let i = 0; i < column.length; i++){
          let image = undefined;
          pieces.forEach(piece => {
            if(piece.x === i && piece.y === j){
              image = piece.image;
            }
          })
         
          const number = i + j + 2
          board.push(<Tile number = {number} image = {image}/>)          
        }
    }


  return (
    <div className='chessboard'>{board}</div>
  )
}
