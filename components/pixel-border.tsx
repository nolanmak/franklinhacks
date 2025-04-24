"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface PixelBorderProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function PixelBorder({ children, className, onClick }: PixelBorderProps) {
  return (
    <div className={cn("pixel-border", className)} onClick={onClick}>
      {children}
      <style jsx>{`
        .pixel-border {
          position: relative;
          border: 4px solid #ec4899;
          box-shadow: 
            0 0 0 4px #22d3ee,
            0 0 0 8px #4ade80;
          image-rendering: pixelated;
        }
        
        .pixel-border::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: 
            linear-gradient(45deg, transparent 45%, #ec4899 45%, #ec4899 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, #22d3ee 45%, #22d3ee 55%, transparent 55%);
          background-size: 16px 16px;
          background-position: 0 0, 8px 8px;
          pointer-events: none;
          opacity: 0.3;
        }
      `}</style>
    </div>
  )
}
