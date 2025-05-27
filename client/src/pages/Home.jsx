import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="mx-2 pt-14">
      <h1 className="text-center text-blue-400 font-semibold text-5xl">talkie</h1>
      <p className="text-center">Fast, Secure and Cost free</p>
      <p className="text-center">
        <Link to="/signup" className="text-blue-400">Get started</Link> with talkie now
      </p>
    </div>
  )
}

export default Home
