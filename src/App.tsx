import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import TransactionHistory from './components/TransactionHistory'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState<'swap' | 'history'>('swap')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')] opacity-5 bg-cover bg-center"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cross-Chain Swap
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Seamlessly swap XRP to Bitcoin in a single transaction with THORChain integration
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
                <button
                  onClick={() => setActiveTab('swap')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === 'swap'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Swap
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === 'history'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  History
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
