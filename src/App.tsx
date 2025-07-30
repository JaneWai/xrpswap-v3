import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import TransactionHistory from './components/TransactionHistory'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState<'swap' | 'history'>('swap')

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-pulse">
                🚀 XRPSwap Magic ✨
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                Swap Native XRP to Native Bitcoin Instantly
                <span className="inline-block animate-bounce ml-2">⚡</span>
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-2 border border-white/30 shadow-2xl">
                <button
                  onClick={() => setActiveTab('swap')}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === 'swap'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  🔄 Swap
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === 'history'
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-orange-500/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  📊 History
                </button>
              </div>
            </div>

            {activeTab === 'swap' ? <SwapInterface /> : <TransactionHistory />}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
