import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Token {
  symbol: string
  name: string
  icon: string
}

interface TokenSelectorProps {
  token: Token
  onSelect: (token: Token) => void
  availableTokens: Token[]
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onSelect, availableTokens }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded-lg transition-colors"
      >
        <span className="text-2xl">{token.icon}</span>
        <div className="text-left">
          <div className="font-semibold text-white">{token.symbol}</div>
          <div className="text-xs text-gray-400">{token.name}</div>
        </div>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-10 min-w-full">
          {availableTokens.map((availableToken) => (
            <button
              key={availableToken.symbol}
              onClick={() => {
                onSelect(availableToken)
                setIsOpen(false)
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="text-xl">{availableToken.icon}</span>
              <div className="text-left">
                <div className="font-semibold text-white">{availableToken.symbol}</div>
                <div className="text-sm text-gray-400">{availableToken.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TokenSelector
