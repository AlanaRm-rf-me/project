export const animations = {
  chromatic: {
    text: `text-shadow: 
      -2px -2px 0 rgba(255, 0, 0, 0.7),
      2px 2px 0 rgba(0, 255, 255, 0.7)`,
    keyframes: `
      @keyframes chromaticMove {
        0% { text-shadow: -2px -2px 0 rgba(255, 0, 0, 0.7), 2px 2px 0 rgba(0, 255, 255, 0.7); }
        50% { text-shadow: -3px -1px 0 rgba(255, 0, 0, 0.7), 3px 1px 0 rgba(0, 255, 255, 0.7); }
        100% { text-shadow: -2px -2px 0 rgba(255, 0, 0, 0.7), 2px 2px 0 rgba(0, 255, 255, 0.7); }
      }`
  },
  constellation: {
    background: `radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
      radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
      radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px)`,
    keyframes: `
      @keyframes starsMove {
        from { background-position: 0 0, 40px 60px, 130px 270px; }
        to { background-position: 550px 550px, 390px 410px, 380px 520px; }
      }`
  }
} as const;