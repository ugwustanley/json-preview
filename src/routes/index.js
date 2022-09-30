import React from 'react'
import {Route , Routes} from 'react-router-dom'

//components
import Board from '../components/Board/Board'
import BoardTwo from '../components/BoardTwo/BoardTwo'

const index = () => {
  return (
    <Routes>
          <Route path="/board" element={<Board />} />
          <Route path="/board2" element={<BoardTwo />} />
    </Routes>
  )
}

export default index