import React from 'react'

const App = () => {
  return (
    <div className= "flex items-center justify-center min-h-screen bg-konoha-bg">
      <div className = "bg-konoha-card border border-konoha-border p-8 rounded-2xl hover:border-konoha-orange/50 transition-all duration-300">
      <h1 className = "text-xs text-konoha-orange bg-konoha-orange/10 px-3 py-1 rounded-full w-fit">
        ⚡ Ready for Missions / Internships
      </h1>
      <h2 className = "text-2xl font-bold text-white mt-4">
        Ravishka Praveen Bandara
      </h2>
      <p className = "text-konoha-muted mt-1">
        Full-Stack Developer
      </p>
      <button className = "bg-konoha-orange hover:bg-konoha-orange/90 text-white font-medium px-5 py-2.5 rounded-xl transition mt-4">
      Explore Jutsu Arsenal</button>

      </div>

    </div>
  )
}

export default App