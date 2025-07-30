import React from 'react'
import { Clock, DollarSign, Zap } from 'lucide-react'

interface SwapDetailsProps {
  fromAmount: string
  toAmount: string
  fromToken: string
  toToken: string
  exchangeRate: number
  slippage: number
}

const SwapDetails: React.FC<SwapDetailsProps> = ({
  fromAmount,
  toAmount,
  fromToken,
  toToken,
  exchangeRate,
  slippage
}) => {
  const networkFee = 0.0001
  const thorchainFee = 0.02

  if (!fromAmount || !toAmount) return null

  return (
    <div className="bg-slate-900/30 rounded-lg p-4 space-y-3">
      <h3 className="text-lg font-semibold text-white mb-3">Swap Details</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>Exchange Rate</span>
          </span>
          <span className="text-white">1 {fromToken} = {exchangeRate.toFixed(8)} {toToken}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>Network Fee</span>
          </span>
          <span className="text-white">{networkFee} {toToken}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">THORChain Fee</span>
          <span className="text-white">{thorchainFee}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Max Slippage</span>
          <span className="text-white">{slippage}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400 flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Estimated Time</span>
          </span>
          <span className="text-white">~5-10 minutes</span>
        </div>

        <div className="border-t border-slate-600 pt-2 mt-3">
          <div className="flex justify-between items-center font-semibold">
            <span className="text-gray-300">You'll Receive</span>
            <span className="text-green-400">
              ~{(Number(toAmount) - networkFee).toFixed(8)} {toToken}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapDetails
