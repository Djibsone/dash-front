import React from 'react'

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-green-400 border-t-transparent" />
    </div>
  )
}

export default Loader;
