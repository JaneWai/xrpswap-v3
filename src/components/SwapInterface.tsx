import React, { useState } from 'react'
import { ArrowUpDown, Settings, Info } from 'lucide-react'

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')

  const handleSwap = () => {
    // Swap logic will be implemented here
    console.log('Swap initiated')
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Swap</h2>
        <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
          <Settings className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-slate-700/50 rounded-lg px-3 py-2">
              <img 
                src="https://cryptologos.cc/logos/xrp-xrp-logo.png" 
                alt="XRP" 
                className="w-6 h-6"
              />
              <span className="font-medium text-white">XRP</span>
            </div>
            <input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-medium text-white placeholder-gray-500 outline-none text-right"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors border border-slate-600/30">
            <ArrowUpDown className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-slate-700/50 rounded-lg px-3 py-2">
              <img 
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
                alt="Bitcoin" 
                className="w-6 h-6"
              />
              <span className="font-medium text-white">BTC</span>
            </div>
            <input
              type="number"
              placeholder="0.0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-medium text-white placeholder-gray-500 outline-none text-right"
              readOnly
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-blue-400">
            <Info className="h-4 w-4" />
            <span className="text-sm">1 XRP ≈ 0.000015 BTC</span>
          </div>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
        >
          Swap XRP to BTC
        </button>

        {/* Transaction Details */}
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Network Fee</span>
            <span>~0.001 XRP</span>
          </div>
          <div className="flex justify-between">
            <span>THORChain Fee</span>
            <span>~0.02%</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Time</span>
            <span>~5-10 minutes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapInterface
