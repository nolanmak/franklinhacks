"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function RetroHackathonCard() {
  const [showHero, setShowHero] = useState(true)

  const toggleImage = () => {
    setShowHero(!showHero)
  }

  return (
    <div className="w-full max-w-4xl">
      {/* Main container with Franklin Hacks poster as background */}
      <div className="relative aspect-[4/5] md:aspect-[16/9]">
        {/* Franklin Hacks Poster Background - Cropped to show middle portion */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-[1.15]">
            <Image
              src="/images/franklin_hacks.png"
              alt="Franklin Hacks Background"
              fill
              className="object-cover image-pixelated object-[center_35%]" // Changed back from 25% to 35% to crop out bottom 1/6
              priority
            />
          </div>
        </div>

        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-indigo-950/40"></div>

        {/* Content directly overlaid on the poster */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Top Section: Header with hero image and title */}
          <div className="flex items-start mb-4">
            {/* Left: Hero Image */}
            <div
              className="w-16 h-16 mr-4 cursor-pointer flex-shrink-0 bg-indigo-900/70 p-1"
              onClick={toggleImage}
              title="Click to change image"
            >
              <div className="relative w-full h-full border-2 border-cyan-400">
                <Image
                  src={showHero ? "/images/hero.png" : "/images/hero1.png"}
                  alt="Pixel Art Benjamin Franklin"
                  fill
                  className="object-contain image-pixelated"
                />
              </div>
            </div>

            {/* Right: Title and Register Button */}
            <div className="flex-1">
              {/* Title with text shadow for readability */}
              <h1 className="pixel-font text-2xl md:text-3xl text-cyan-300 leading-tight text-shadow-pixel mb-3">
                FRANKLIN HACKS!
                <span className="block text-pink-500 text-xl md:text-2xl">RETRO TECH HACKATHON</span>
              </h1>

              {/* Register Button - Now at the top */}
              <Link href="https://code-coffee-philly-tech-week.devpost.com/" target="_blank" rel="noopener noreferrer">
                <button className="pixel-button inline-block bg-pink-600 hover:bg-pink-500 text-white pixel-font py-2 px-6 text-lg transition-all">
                  REGISTER NOW!
                </button>
              </Link>
            </div>
          </div>

          {/* Push content to bottom */}
          <div className="flex-grow"></div>

          {/* Bottom Section: Description and Event Details */}
          <div className="mt-auto" style={{ marginBottom: '1rem' }}>
            {/* Description with semi-transparent background */}
            <div className="bg-indigo-950/60 p-3 mb-4 border-l-4 border-cyan-400">
              <p className="text-green-400 leading-relaxed">
                Ready to innovate, collaborate, and create the next big thing? Join us at the Philly Innovation
                Hackathon 2025, an exciting multi-day event dedicated to developing cutting-edge solutions in AI,
                fintech, generative tooling, and more. We'll all be heading to the Samba Steakhouse for an after party
                as well!
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full bg-indigo-950" style={{ marginBottom: '0.75rem' }}>
              <div className="bg-indigo-950 p-2 border-2 border-pink-500 overflow-hidden" style={{ padding: '10px', marginBottom: '8px' }}>
                <span className="block text-pink-500 pixel-font text-xs">WHEN</span>
                <span className="text-cyan-300 text-sm">MAY 7 - MAY 10</span>
              </div>
              <div className="bg-indigo-950 p-2 border-2 border-pink-500 overflow-hidden" style={{ padding: '10px', marginBottom: '8px' }}>
                <span className="block text-pink-500 pixel-font text-xs">WHERE</span>
                <span className="text-cyan-300 text-sm">PHILADELPHIA, PA</span>
              </div>
              <div className="bg-indigo-950 p-2 border-2 border-pink-500 overflow-hidden" style={{ padding: '10px', marginBottom: '8px' }}>
                <span className="block text-pink-500 pixel-font text-xs">PRIZES</span>
                <span className="text-cyan-300 text-sm">$1500 POOL</span>
              </div>
              <div className="bg-indigo-950 p-2 border-2 border-pink-500 overflow-hidden" style={{ padding: '10px', marginBottom: '8px' }}>
                <span className="block text-pink-500 pixel-font text-xs">TEAMS</span>
                <span className="text-cyan-300 text-sm">1-4 PLAYERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for pixel styling */}
      <style jsx global>{`
        @font-face {
          font-family: 'PixelFont';
          src: url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          font-display: swap;
        }
        
        .pixel-font {
          font-family: 'Press Start 2P', monospace;
          letter-spacing: 0.05em;
          line-height: 1.4;
        }
        
        .image-pixelated {
          image-rendering: pixelated;
        }
        
        .text-shadow-pixel {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
        }
        
        .pixel-button {
          position: relative;
          image-rendering: pixelated;
          box-shadow: 0 4px 0 #831843;
          transform: translateY(-2px);
          border: 2px solid #22d3ee;
        }
        
        .pixel-button:hover {
          transform: translateY(0);
          box-shadow: 0 2px 0 #831843;
        }
        
        .pixel-button:active {
          transform: translateY(2px);
          box-shadow: 0 0 0 #831843;
        }
      `}</style>
    </div>
  )
}
