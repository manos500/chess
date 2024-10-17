import './chessboard.css'
import Tile from './Tile';
import { bb, br, bn, bq, bp, bk, wb, wk, wn, wp, wq, wr } from '../assets'
import React, { useRef, useEffect } from 'react';

const row = ["1", "2", "3", "4", "5", "6", "7", "8"];
const column = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];

for (let i=0; i < 8; i++) {
  pieces.push({image: wp, x: i, y: 1})
  pieces.push({image: bp, x: i, y: 6})
}

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



export const Chessboard = () => {
  const chessboardRef = useRef(null)

  let activepiece;

   useEffect(() => {
    if (chessboardRef.current) {
      // Get the bounding rectangle of the chessboard
  
    }
  }, []);

  function dropPiece(e) {
    if(activepiece ){
      activepiece = null;
    } 
  }

  function movePiece(e) {
    const chessboard = chessboardRef.current;
    if (activepiece && chessboard){

      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 20;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 85;

      const mouseX = e.clientX - 50;
      const mouseY = e.clientY - 50;

      activepiece.style.position = "absolute"
      
      activepiece.style.top = `${mouseY}px`;

      if (mouseX < minX){
        activepiece.style.left = `${minX}px`;
      }else if(mouseX > maxX){
        activepiece.style.left = `${maxX}px`;
      }else{
        activepiece.style.left = `${mouseX}px`;
      }

      if (mouseY < minY){
        activepiece.style.top = `${minY}px`;
      }else if(mouseY > maxY){
        activepiece.style.top = `${maxY}px`;
      }else{
        activepiece.style.top = `${mouseY}px`;
      }
     

    }
  }


  function grabPiece(e) {
    if (e.target.classList.contains("chess-piece")){
      console.log(e.target)
      const mouseX = e.clientX - 50;
      const mouseY = e.clientY - 50;
    
      e.target.style.position = "absolute"
      e.target.style.left = `${mouseX}px`;
      e.target.style.top = `${mouseY}px`;

      activepiece = e.target
   
    }

  }

 

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
        board.push(<Tile key = {`${j},${i}`}  number = {number} image = {image}/>)          
      }
  }


  return (
    <div ref={chessboardRef} onMouseUp={e => dropPiece(e)} onMouseMove={e => movePiece(e)} onMouseDown={e => grabPiece(e)} className='chessboard' >{board}</div>
  )
}
