import React, { useState } from 'react'
import { ArrowUpDown, Settings, Info, Sparkles } from 'lucide-react'

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')

  const handleSwap = () => {
    // Swap logic will be implemented here
    console.log('Swap initiated')
  }

  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-yellow-300 animate-spin" />
          Magic Swap
        </h2>
        <button className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12">
          <Settings className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="space-y-6">
        {/* From Token */}
        <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl p-6 border border-white/20 backdrop-blur-sm hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/80 font-medium">From 💰</span>
            <span className="text-white/80 font-medium">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white/20 rounded-xl px-4 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                X
              </div>
              <span className="font-bold text-white text-lg">XRP</span>
            </div>
            <input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-3xl font-bold text-white placeholder-white/50 outline-none text-right"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-180 shadow-lg shadow-orange-500/50">
            <ArrowUpDown className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl p-6 border border-white/20 backdrop-blur-sm hover:from-orange-500/40 hover:to-red-500/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/80 font-medium">To 🎯</span>
            <span className="text-white/80 font-medium">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white/20 rounded-xl px-4 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                ₿
              </div>
              <span className="font-bold text-white text-lg">BTC</span>
            </div>
            <input
              type="number"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="flex-1 bg-transparent text-3xl font-bold text-white placeholder-white/50 outline-none text-right"
              readOnly
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3 text-white">
            <Info className="h-5 w-5 text-green-300 animate-pulse" />
            <span className="font-medium">1 XRP ≈ 0.000015 BTC</span>
            <span className="text-green-300 font-bold animate-bounce">📈</span>
          </div>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 text-xl"
        >
          🚀 Launch Swap to the Moon! 🌙
        </button>

        {/* Transaction Details */}
        <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
          <div className="space-y-3 text-white/90 font-medium">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">⛽ Network Fee</span>
              <span className="text-green-300 font-bold">~0.001 XRP</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">🔥 THORChain Fee</span>
              <span className="text-green-300 font-bold">~0.02%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">⏱️ Estimated Time</span>
              <span className="text-yellow-300 font-bold animate-pulse">~5-10 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapInterface
