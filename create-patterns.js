// Create pattern SVG files for sacred geometry elements
mkdir -p /home/ubuntu/synthocracy_platform/prototype/frontend/public/patterns

// Flower of Life SVG
const flowerOfLifeSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="rgba(99, 102, 241, 0.1)" stroke-width="1">
    <!-- Center circle -->
    <circle cx="200" cy="200" r="50"/>
    
    <!-- First ring of 6 circles -->
    <circle cx="200" cy="150" r="50"/>
    <circle cx="243.3" cy="175" r="50"/>
    <circle cx="243.3" cy="225" r="50"/>
    <circle cx="200" cy="250" r="50"/>
    <circle cx="156.7" cy="225" r="50"/>
    <circle cx="156.7" cy="175" r="50"/>
    
    <!-- Second ring of 12 circles -->
    <circle cx="200" cy="100" r="50"/>
    <circle cx="243.3" cy="125" r="50"/>
    <circle cx="286.6" cy="150" r="50"/>
    <circle cx="286.6" cy="200" r="50"/>
    <circle cx="286.6" cy="250" r="50"/>
    <circle cx="243.3" cy="275" r="50"/>
    <circle cx="200" cy="300" r="50"/>
    <circle cx="156.7" cy="275" r="50"/>
    <circle cx="113.4" cy="250" r="50"/>
    <circle cx="113.4" cy="200" r="50"/>
    <circle cx="113.4" cy="150" r="50"/>
    <circle cx="156.7" cy="125" r="50"/>
  </g>
</svg>`;

// Vesica Piscis SVG
const vesicaPiscisSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="rgba(168, 85, 247, 0.1)" stroke-width="1">
    <circle cx="175" cy="200" r="100"/>
    <circle cx="225" cy="200" r="100"/>
  </g>
</svg>`;

// Torus SVG (simplified representation)
const torusSVG = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="rgba(99, 102, 241, 0.1)" stroke-width="1">
    <!-- Outer ellipse -->
    <ellipse cx="200" cy="200" rx="150" ry="100"/>
    
    <!-- Inner ellipse -->
    <ellipse cx="200" cy="200" rx="120" ry="80"/>
    
    <!-- Connecting curves to suggest 3D form -->
    <path d="M50,200 C50,250 350,250 350,200" />
    <path d="M50,200 C50,150 350,150 350,200" />
    <path d="M200,100 C150,100 150,300 200,300" />
    <path d="M200,100 C250,100 250,300 200,300" />
  </g>
</svg>`;

// Write these files to the patterns directory
fs.writeFileSync('/home/ubuntu/synthocracy_platform/prototype/frontend/public/patterns/flower-of-life.svg', flowerOfLifeSVG);
fs.writeFileSync('/home/ubuntu/synthocracy_platform/prototype/frontend/public/patterns/vesica-piscis.svg', vesicaPiscisSVG);
fs.writeFileSync('/home/ubuntu/synthocracy_platform/prototype/frontend/public/patterns/torus.svg', torusSVG);
