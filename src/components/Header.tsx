import React from 'react'
import { Zap, Wallet, Star } from 'lucide-react'

const Header = () => {
  return (
    <header className="border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-purple-500/50 animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                XRPSwap ✨
              </h1>
              <p className="text-white/70 text-sm font-medium">Your Magic Swaps</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/20">
              <Star className="h-4 w-4 text-yellow-300 animate-spin" />
              <span className="text-white font-medium">Premium Experience</span>
            </div>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 font-bold">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet 🔗</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
