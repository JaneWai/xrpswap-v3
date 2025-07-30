import React from 'react'
import { Clock, CheckCircle, XCircle, ExternalLink } from 'lucide-react'

const TransactionHistory = () => {
  const transactions = [
    {
      id: '1',
      from: 'XRP',
      to: 'BTC',
      fromAmount: '1000',
      toAmount: '0.015',
      status: 'completed',
      timestamp: '2024-01-15 14:30:25',
      txHash: '0x1234...5678'
    },
    {
      id: '2',
      from: 'XRP',
      to: 'BTC',
      fromAmount: '500',
      toAmount: '0.0075',
      status: 'pending',
      timestamp: '2024-01-15 14:25:10',
      txHash: '0x8765...4321'
    },
    {
      id: '3',
      from: 'XRP',
      to: 'BTC',
      fromAmount: '2000',
      toAmount: '0.03',
      status: 'failed',
      timestamp: '2024-01-15 14:20:45',
      txHash: '0x9999...1111'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-400 animate-spin" />
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500/30 to-emerald-500/30 border-green-400/30'
      case 'pending':
        return 'from-yellow-500/30 to-orange-500/30 border-yellow-400/30'
      case 'failed':
        return 'from-red-500/30 to-pink-500/30 border-red-400/30'
      default:
        return 'from-gray-500/30 to-slate-500/30 border-gray-400/30'
    }
  }

  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl shadow-purple-500/20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent flex items-center gap-2">
          📊 Transaction History
        </h2>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`bg-gradient-to-r ${getStatusColor(tx.status)} rounded-2xl p-6 border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(tx.status)}
                <span className="font-bold text-white capitalize text-lg">
                  {tx.status} {tx.status === 'completed' ? '✅' : tx.status === 'pending' ? '⏳' : '❌'}
                </span>
              </div>
              <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">View</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium mb-1">From 💰</p>
                <p className="text-white font-bold text-lg">{tx.fromAmount} {tx.from}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium mb-1">To 🎯</p>
                <p className="text-white font-bold text-lg">{tx.toAmount} {tx.to}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium mb-1">Time ⏰</p>
                <p className="text-white font-bold">{tx.timestamp}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70 font-medium">TX Hash:</span>
              <span className="text-white font-mono bg-white/10 px-3 py-1 rounded-lg">
                {tx.txHash}
              </span>
            </div>
          </div>
        ))}
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-white mb-2">No transactions yet!</h3>
          <p className="text-white/70 font-medium">Start your first magical swap to see history here</p>
        </div>
      )}
    </div>
  )
}

export default TransactionHistory
