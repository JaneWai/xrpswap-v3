import React from 'react'
import { ExternalLink, Clock, CheckCircle, XCircle } from 'lucide-react'

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
      timestamp: '2024-01-15 13:45:12',
      txHash: '0x9876...5432'
    },
    {
      id: '3',
      from: 'XRP',
      to: 'BTC',
      fromAmount: '2000',
      toAmount: '0.03',
      status: 'failed',
      timestamp: '2024-01-15 12:15:08',
      txHash: '0xabcd...efgh'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'pending':
        return 'text-yellow-500'
      case 'failed':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Transaction History</h2>
      
      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">No transactions yet</div>
          <div className="text-sm text-gray-500">Your swap history will appear here</div>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30 hover:border-slate-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(tx.status)}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">
                        {tx.fromAmount} {tx.from}
                      </span>
                      <span className="text-gray-400">→</span>
                      <span className="text-white font-medium">
                        {tx.toAmount} {tx.to}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">{tx.timestamp}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium capitalize ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                  <button className="p-1 hover:bg-slate-700/50 rounded transition-colors">
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 font-mono">
                Tx: {tx.txHash}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionHistory
