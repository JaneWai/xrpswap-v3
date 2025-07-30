import React from 'react'
import { Github, Twitter, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CrossChain Swap. Powered by THORChain.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-700/50">
          <div className="text-xs text-gray-500 text-center">
            This application facilitates cross-chain swaps between XRP and Bitcoin using THORChain protocol.
            Always verify transaction details before confirming swaps.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
