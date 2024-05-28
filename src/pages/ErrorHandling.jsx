import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorHandling() {
    const error=useRouteError()
  return (
    <main className="w-full min-h-screen bg-slate-900 flex items-center justify-center">
        <h1 className='md:text-4xl text-xl text-white'>Page is {error.statusText} {error.message} </h1>
    </main>
  )
}

export default ErrorHandling