import React from 'react'
import { Heart, Github, Twitter, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-white/5 backdrop-blur-xl mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-white/80 font-medium">Made with</span>
            <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
            <span className="text-white/80 font-medium">for the crypto community</span>
            <span className="animate-bounce">🌟</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm font-medium">
            © 2024 CrossChain Magic ✨ | Powered by THORChain ⚡ | 
            <span className="text-yellow-300 font-bold ml-1">Swap Responsibly! 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
