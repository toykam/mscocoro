import React from 'react';
import { Crown, Rocket, Twitter, MessageCircle, ScrollText, Coins, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-blue-500">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/header-image.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <img
              src="/logo.jpg"
              alt="Mrs Cocoro Mascot"
              className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Mrs Cocoro <Crown className="inline-block w-12 h-12 text-yellow-300" />
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-12">The Queen of Meme Tokens on Base!</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Buy on Apestore
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Join Community
            </button>
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Read Whitepaper
            </button> */}
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Mrs Cocoro</h2>
          <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed">
            <p className="mb-6">
              Mrs Cocoro is more than a meme—it’s a movement! Built on Base, this token blends community, humor, and onchain innovation. Join the queen of memes and be part of something legendary!
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Tokenomics</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white text-center">
              <Coins className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">Total Supply</h3>
              <p className="text-xl">1,000,000,000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white text-center">
              <ScrollText className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Tax</h3>
              <p className="text-xl">0/0</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-pink-300" />
              <h3 className="text-2xl font-bold mb-2">Lp Burned</h3>
              <p className="text-xl">100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Roadmap</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { phase: 'Phase 1', title: 'Launch & Community Building', items: ['Token Launch on Base', 'Community Growth', 'Marketing Campaign'] },
              { phase: 'Phase 2', title: 'Expansion & Partnerships', items: ['CEX Listings', 'Strategic Partnerships', 'NFT Collection'] },
              { phase: 'Phase 3', title: 'Utility & Innovation', items: ['Staking Platform', 'DAO Governance', 'Cross-chain Expansion'] },
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-2">{phase.phase}: {phase.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <footer className="py-12 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Join Our Community</h2>
          <div className="flex justify-center gap-6">
            <a href="https://x.com/ms_cocoro" className="text-white hover:text-pink-300 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://t.me/MR_COROCO" className="text-white hover:text-purple-300 transition-colors">
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
          <p className="text-white/60 mt-8">© 2025 Mrs Cocoro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;