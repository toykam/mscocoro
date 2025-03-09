import React, { useState } from 'react';
import { Crown, Rocket, Twitter, MessageCircle, ScrollText, Coins, ChevronDown, Clipboard, Ribbon } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);

  const contractAddress = "0xd0f9ad24b8b5c1b3b7842581436e350b6be8bfde";  // Example address

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
  };

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
              className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl animate__animated animate__fadeIn animate__delay-1s"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Mrs Cocoro <Crown className="inline-block w-12 h-12 text-yellow-300" />
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-12 animate__animated animate__fadeIn animate__delay-2s">The Queen of Meme Tokens on Base!</p>
          <div className="flex flex-wrap justify-center gap-6 animate__animated animate__fadeIn animate__delay-3s">
            <a href="https://ape.store/base/0xd0f9ad24b8b5c1b3b7842581436e350b6be8bfde" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Buy on Apestore
            </a>
            <a href='https://t.me/MR_COROCO' className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Join Community
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </header>

      {/* Contract Address Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg animate__animated animate__fadeIn animate__delay-4s">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Contract Address</h2>
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl text-white">
            <p className="text-xl mb-4">Here is the contract address for Mrs Cocoro:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-lg font-semibold break-words sm:w-3/4">{contractAddress}</span>
              <button
                onClick={handleCopyAddress}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                {copied ? "Copied!" : <Clipboard className="w-6 h-6 inline-block mr-2" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}

<section className="py-20 bg-pink-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Our Stylish Roadmap</h2>
    <div className="max-w-5xl mx-auto space-y-10">
      {[
        {
          phase: 'Phase 1',
          title: 'Fair Launch & Community Takeover',
          items: [
            'Launch on Ape Store with 1 billion supply and community-driven governance. CTO ORIGINAL DEV IS A PUSSY',
            'Establish Twitter, Telegram, and Discord for organic growth and engagement. (website being built as you read this)',
            'Kickstart meme culture movement, introducing the Ms. Cocoro origin story.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'NFT Collection & Buybacks',
          items: [
            'Doodle-inspired NFT collection on Base, with profits allocated to token buybacks.',
            'Expand community involvement through NFT rewards and exclusive benefits. (profits used as buybacks)',
            'Build partnerships with other meme projects to enhance visibility. (will share when the time is right)'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Strategic Growth & Partnerships',
          items: [
            'Secure key collaborations with other dog/meme tokens.',
            'Push for CEX listings to boost liquidity and adoption. ALSO teir2/3 exchanges to start.',
            'Introduce community events, giveaways, and viral campaigns.'
          ]
        },
        {
          phase: 'Phase 4',
          title: 'Giveback & Long-Term Expansion',
          items: [
            'Donate a portion of profits to the Humane Society (giving back to a cause tied to the project’s roots).',
            'Achieve ATH market cap milestone, setting the stage for future growth.',
            'Explore cross-chain expansion and further utility integrations.'
          ]
        }
      ].map((phase, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-purple-800 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center space-x-4">
            <Ribbon className="w-6 h-6 text-pink-500" />
            <h3 className="text-2xl font-bold mb-4">{phase.phase}: {phase.title}</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {phase.items.map((item, i) => (
              <li key={i} className="text-lg">{item}</li>
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
