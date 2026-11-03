/**
 * DYNAMO COLOR MIXER
 * Optical Persistence & Pigment Mixing Laboratory
 */

// Preset Color Choices for the Rectangle Palette Holder (45 Diverse Categorized Colors)
const COLOR_PRESETS = [
  // Reds & Corals (Warm / Vibrant)
  { name: 'Crimson Red', hex: '#FF3B30', cat: 'warm' },
  { name: 'Scarlet Ruby', hex: '#E60026', cat: 'warm' },
  { name: 'Cherry Red', hex: '#D90429', cat: 'warm' },
  { name: 'Coral Flame', hex: '#FF4500', cat: 'warm' },
  { name: 'Hot Coral Pink', hex: '#FF2D55', cat: 'vibrant' },
  { name: 'Deep Burgundy', hex: '#8B0000', cat: 'warm' },
  { name: 'Rose Petal', hex: '#FF6B8B', cat: 'vibrant' },

  // Oranges & Ambers (Warm)
  { name: 'Tangerine Orange', hex: '#FF9500', cat: 'warm' },
  { name: 'Amber Gold', hex: '#FF9F0A', cat: 'warm' },
  { name: 'Sunset Copper', hex: '#FF7A00', cat: 'warm' },
  { name: 'Warm Terracotta', hex: '#E06D53', cat: 'warm' },
  { name: 'Burnt Sienna', hex: '#C85A17', cat: 'warm' },
  { name: 'Apricot Peach', hex: '#FFA07A', cat: 'warm' },

  // Yellows & Golds (Warm / Vibrant)
  { name: 'Sunshine Yellow', hex: '#FFCC00', cat: 'warm' },
  { name: 'Canary Lemon', hex: '#FFEE32', cat: 'warm' },
  { name: 'Cyber Neon Yellow', hex: '#FAFF00', cat: 'vibrant' },
  { name: 'Goldenrod', hex: '#DAA520', cat: 'warm' },
  { name: 'Pale Vanilla', hex: '#FFF3B0', cat: 'neutral' },

  // Greens & Limes (Nature / Vibrant)
  { name: 'Electric Lime', hex: '#A4E739', cat: 'vibrant' },
  { name: 'Chartreuse Volt', hex: '#76FF03', cat: 'vibrant' },
  { name: 'Emerald Green', hex: '#34C759', cat: 'nature' },
  { name: 'Spring Mint', hex: '#00E676', cat: 'nature' },
  { name: 'Forest Evergreen', hex: '#0B6623', cat: 'nature' },
  { name: 'Olive Sage', hex: '#556B2F', cat: 'nature' },

  // Cyans & Aquas (Cool / Vibrant)
  { name: 'Neon Aqua', hex: '#00F2FE', cat: 'vibrant' },
  { name: 'Electric Cyan', hex: '#32ADE6', cat: 'cool' },
  { name: 'Caribbean Teal', hex: '#00B4D8', cat: 'cool' },
  { name: 'Mint Seafoam', hex: '#30B0C7', cat: 'cool' },
  { name: 'Deep Turquoise', hex: '#007791', cat: 'cool' },

  // Blues & Indigos (Cool)
  { name: 'Electric Blue', hex: '#007AFF', cat: 'cool' },
  { name: 'Royal Cobalt', hex: '#1E40AF', cat: 'cool' },
  { name: 'Sky Azure', hex: '#38BDF8', cat: 'cool' },
  { name: 'Deep Ultramarine', hex: '#1B1464', cat: 'cool' },
  { name: 'Midnight Navy', hex: '#0B192C', cat: 'cool' },
  { name: 'Glacier Blue', hex: '#A5F3FC', cat: 'cool' },

  // Purples & Magentas (Vibrant / Cool)
  { name: 'Vivid Magenta', hex: '#AF52DE', cat: 'vibrant' },
  { name: 'Fuchsia Shock', hex: '#FF007F', cat: 'vibrant' },
  { name: 'Deep Violet', hex: '#5856D6', cat: 'cool' },
  { name: 'Amethyst Purple', hex: '#8B5CF6', cat: 'vibrant' },
  { name: 'Lavender Mist', hex: '#C4B5FD', cat: 'vibrant' },
  { name: 'Royal Plum', hex: '#4A0E4E', cat: 'cool' },

  // Monochromes & Neutrals (Neutral)
  { name: 'Pure White', hex: '#FFFFFF', cat: 'neutral' },
  { name: 'Platinum Silver', hex: '#CBD5E1', cat: 'neutral' },
  { name: 'Slate Gray', hex: '#64748B', cat: 'neutral' },
  { name: 'Charcoal Noir', hex: '#1C1C1E', cat: 'neutral' }
];

// Curated Named Colors Dictionary for Nearest Color Name Matching
const COLOR_NAMES_DICT = [
  { name: 'Pure White', r: 255, g: 255, b: 255 },
  { name: 'Silver Mist', r: 210, g: 215, b: 220 },
  { name: 'Steel Gray', r: 140, g: 150, b: 160 },
  { name: 'Obsidian Black', r: 28, g: 28, b: 30 },
  { name: 'Vivid Crimson', r: 255, g: 59, b: 48 },
  { name: 'Scarlet Ruby', r: 220, g: 20, b: 60 },
  { name: 'Sunset Orange', r: 255, g: 149, b: 0 },
  { name: 'Amber Gold', r: 255, g: 180, b: 0 },
  { name: 'Solar Yellow', r: 255, g: 204, b: 0 },
  { name: 'Lemon Chiffon', r: 255, g: 240, b: 140 },
  { name: 'Lime Electric', r: 164, g: 231, b: 57 },
  { name: 'Kelly Green', r: 52, g: 199, b: 89 },
  { name: 'Forest Emerald', r: 16, g: 120, b: 50 },
  { name: 'Cyan Aqua', r: 50, g: 173, b: 230 },
  { name: 'Sky Turquoise', r: 48, g: 176, b: 199 },
  { name: 'Electric Azure', r: 0, g: 122, b: 255 },
  { name: 'Royal Indigo', r: 27, g: 20, b: 100 },
  { name: 'Deep Cobalt', r: 30, g: 70, b: 160 },
  { name: 'Amethyst Violet', r: 88, g: 86, b: 214 },
  { name: 'Neon Orchid', r: 175, g: 82, b: 222 },
  { name: 'Fuchsia Magenta', r: 255, g: 0, b: 128 },
  { name: 'Rose Coral', r: 255, g: 45, b: 85 },
  { name: 'Dusty Mauve', r: 180, g: 140, b: 170 },
  { name: 'Lavender Mist', r: 200, g: 190, b: 235 },
  { name: 'Sage Olive', r: 130, g: 155, b: 120 },
  { name: 'Warm Khaki', r: 190, g: 170, b: 130 },
  { name: 'Terracotta Rust', r: 224, g: 109, b: 83 },
  { name: 'Chocolate Sienna', r: 110, g: 60, b: 35 },
  { name: 'Neutral Ash Taupe', r: 155, g: 145, b: 140 }
];

// Application State
const state = {
  slot1Color: '#FF3B30',
  slot2Color: '#007AFF',
  activeSlot: 1, // 1 or 2
  activeFilter: 'all',
  isSpinning: false,
  targetRpm: 1800,
  currentRpm: 0,
  angle: 0,
  mixMode: 'optical', // 'optical' or 'pigment'
  recentMixes: []
};

// DOM References
const elements = {
  // Theme & Status Header
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  themeLabel: document.getElementById('themeLabel'),
  statusIndicator: document.getElementById('statusIndicator'),
  statusText: document.getElementById('statusText'),
  rpmDisplay: document.getElementById('rpmDisplay'),
  randomBtn: document.getElementById('randomBtn'),
  infoBtn: document.getElementById('infoBtn'),

  // Equation Ribbon
  eqSlot1Dot: document.getElementById('eqSlot1Dot'),
  eqSlot1Name: document.getElementById('eqSlot1Name'),
  eqSlot2Dot: document.getElementById('eqSlot2Dot'),
  eqSlot2Name: document.getElementById('eqSlot2Name'),
  eqResultDot: document.getElementById('eqResultDot'),
  eqResultName: document.getElementById('eqResultName'),

  // Palette Holder
  paletteHolder: document.getElementById('paletteHolder'),
  paletteBadge: document.getElementById('paletteBadge'),
  tabSlot1: document.getElementById('tabSlot1'),
  tabSlot2: document.getElementById('tabSlot2'),
  swapSlotsBtn: document.getElementById('swapSlotsBtn'),
  dotSlot1: document.getElementById('dotSlot1'),
  dotSlot2: document.getElementById('dotSlot2'),
  colorCirclesGrid: document.getElementById('colorCirclesGrid'),
  customColorWrapper: document.getElementById('customColorWrapper'),
  customColorInput: document.getElementById('customColorInput'),
  customColorRing: document.getElementById('customColorRing'),
  customColorHex: document.getElementById('customColorHex'),
  applyCustomBtn: document.getElementById('applyCustomBtn'),

  // Dynamo & CD Disc
  dynamoAssembly: document.getElementById('dynamoAssembly') || document.querySelector('.dynamo-assembly'),
  tachometerRing: document.getElementById('tachometerRing'),
  cdDisc: document.getElementById('cdDisc'),
  cdSector1: document.getElementById('cdSector1'),
  cdSector2: document.getElementById('cdSector2'),
  sectorFill1: document.getElementById('sectorFill1'),
  sectorFill2: document.getElementById('sectorFill2'),
  sectorHex1: document.getElementById('sectorHex1'),
  sectorHex2: document.getElementById('sectorHex2'),
  cdOpticalBlend: document.getElementById('cdOpticalBlend'),

  // Controls
  powerBtn: document.getElementById('powerBtn'),
  powerBtnText: document.getElementById('powerBtnText'),
  powerStateSubtext: document.getElementById('powerStateSubtext'),
  speedSlider: document.getElementById('speedSlider'),
  speedBadge: document.getElementById('speedBadge'),
  modeOptical: document.getElementById('modeOptical'),
  modePigment: document.getElementById('modePigment'),
  modeNote: document.getElementById('modeNote'),

  // Output Station
  outputColorPreview: document.getElementById('outputColorPreview'),
  outputColorName: document.getElementById('outputColorName'),
  blendModelBadge: document.getElementById('blendModelBadge'),
  hexVal: document.getElementById('hexVal'),
  rgbVal: document.getElementById('rgbVal'),
  hslVal: document.getElementById('hslVal'),
  recentChips: document.getElementById('recentChips'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),

  // Modal & Toast
  infoModal: document.getElementById('infoModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalUnderstoodBtn: document.getElementById('modalUnderstoodBtn'),
  toastContainer: document.getElementById('toastContainer')
};

// ============================================================================
// COLOR UTILITIES & MIXING ALGORITHMS
// ============================================================================

function hexToRgb(hex) {
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const clamped = Math.max(0, Math.min(255, Math.round(n)));
    return clamped.toString(16).padStart(2, '0').toUpperCase();
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl(r, g, b) {
  const normR = r / 255;
  const normG = g / 255;
  const normB = b / 255;

  const max = Math.max(normR, normG, normB);
  const min = Math.min(normR, normG, normB);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case normR:
        h = (normG - normB) / d + (normG < normB ? 6 : 0);
        break;
      case normG:
        h = (normB - normR) / d + 2;
        break;
      case normB:
        h = (normR - normG) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Optical Persistence Mixing (Maxwell's Spinning Disc)
 * Additive light temporal summation with gamma correction
 */
function mixColorsOptical(hex1, hex2) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);

  // Gamma-corrected perceptual integration
  const gamma = 2.2;
  const rLin = (Math.pow(c1.r / 255, gamma) + Math.pow(c2.r / 255, gamma)) / 2;
  const gLin = (Math.pow(c1.g / 255, gamma) + Math.pow(c2.g / 255, gamma)) / 2;
  const bLin = (Math.pow(c1.b / 255, gamma) + Math.pow(c2.b / 255, gamma)) / 2;

  const r = Math.pow(rLin, 1 / gamma) * 255;
  const g = Math.pow(gLin, 1 / gamma) * 255;
  const b = Math.pow(bLin, 1 / gamma) * 255;

  return rgbToHex(r, g, b);
}

/**
 * Pigment / Subtractive Mixing (Paint / Dye Fusion)
 * Uses CMY subtractive light filtering
 */
function mixColorsPigment(hex1, hex2) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);

  // Convert RGB to CMY
  const cmy1 = { c: 1 - c1.r / 255, m: 1 - c1.g / 255, y: 1 - c1.b / 255 };
  const cmy2 = { c: 1 - c2.r / 255, m: 1 - c2.g / 255, y: 1 - c2.b / 255 };

  // Subtractive blend
  const c = Math.min(1, (cmy1.c + cmy2.c) * 0.85);
  const m = Math.min(1, (cmy1.m + cmy2.m) * 0.85);
  const y = Math.min(1, (cmy1.y + cmy2.y) * 0.85);

  const r = (1 - c) * 255;
  const g = (1 - m) * 255;
  const b = (1 - y) * 255;

  return rgbToHex(r, g, b);
}

function calculateCurrentMix() {
  if (state.mixMode === 'optical') {
    return mixColorsOptical(state.slot1Color, state.slot2Color);
  } else {
    return mixColorsPigment(state.slot1Color, state.slot2Color);
  }
}

/**
 * Find the closest human-friendly color name
 */
function getNearestColorName(hex) {
  const rgb = hexToRgb(hex);
  let bestMatch = COLOR_NAMES_DICT[0].name;
  let minDistance = Infinity;

  for (const item of COLOR_NAMES_DICT) {
    // Weighted Euclidean distance for human perception
    const dR = rgb.r - item.r;
    const dG = rgb.g - item.g;
    const dB = rgb.b - item.b;
    const distance = 0.3 * dR * dR + 0.59 * dG * dG + 0.11 * dB * dB;

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = item.name;
    }
  }

  return bestMatch;
}

// ============================================================================
// UI RENDERING & SYNCHRONIZATION
// ============================================================================

function renderPaletteSwatches() {
  const filtered = state.activeFilter === 'all'
    ? COLOR_PRESETS
    : (state.activeFilter === 'earth' || state.activeFilter === 'neutral')
      ? COLOR_PRESETS.filter(p => p.cat === 'nature' || p.cat === 'neutral')
      : COLOR_PRESETS.filter(p => p.cat === state.activeFilter);

  if (elements.paletteBadge) {
    elements.paletteBadge.textContent = `${filtered.length} Colors`;
  }

  elements.colorCirclesGrid.innerHTML = '';

  filtered.forEach((preset) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'color-circle-btn';
    btn.style.setProperty('--btn-color', preset.hex);
    btn.setAttribute('title', `${preset.name} (${preset.hex}) - Click to paint Slot ${state.activeSlot}`);
    btn.setAttribute('aria-label', `${preset.name}: ${preset.hex}`);
    btn.setAttribute('data-color', preset.hex);
    btn.setAttribute('data-name', preset.name);

    // Highlight if currently assigned to any slot
    updateButtonSlotIndicator(btn, preset.hex);

    // Click handler to assign to current active slot
    btn.addEventListener('click', () => {
      assignColorToSlot(state.activeSlot, preset.hex);
      showToast(`Applied ${preset.name} to Slot ${state.activeSlot}`);
    });

    elements.colorCirclesGrid.appendChild(btn);
  });
}

function updateButtonSlotIndicator(btn, hex) {
  const isSlot1 = state.slot1Color.toUpperCase() === hex.toUpperCase();
  const isSlot2 = state.slot2Color.toUpperCase() === hex.toUpperCase();

  if (isSlot1 && isSlot2) {
    btn.setAttribute('data-selected-slot', 'both');
  } else if (isSlot1) {
    btn.setAttribute('data-selected-slot', '1');
  } else if (isSlot2) {
    btn.setAttribute('data-selected-slot', '2');
  } else {
    btn.removeAttribute('data-selected-slot');
  }
}

function updateAllPaletteIndicators() {
  const buttons = elements.colorCirclesGrid.querySelectorAll('.color-circle-btn');
  buttons.forEach((btn) => {
    const hex = btn.getAttribute('data-color');
    updateButtonSlotIndicator(btn, hex);
  });
}

function assignColorToSlot(slotNumber, hex) {
  if (slotNumber === 1) {
    state.slot1Color = hex;
  } else {
    state.slot2Color = hex;
  }

  // Update root CSS variables and disc sectors
  document.documentElement.style.setProperty(`--slot${slotNumber}-color`, hex);
  if (slotNumber === 1) {
    elements.sectorHex1.textContent = hex;
    elements.dotSlot1.style.backgroundColor = hex;
  } else {
    elements.sectorHex2.textContent = hex;
    elements.dotSlot2.style.backgroundColor = hex;
  }

  updateAllPaletteIndicators();
  updateOutputDisplay();

  // If spinning, trigger physical visual response
  if (state.isSpinning) {
    triggerDiscRipple();
  }
}

function setActiveSlot(slotNumber) {
  state.activeSlot = slotNumber;
  if (slotNumber === 1) {
    elements.tabSlot1.classList.add('active');
    elements.tabSlot2.classList.remove('active');
    elements.cdSector1.classList.add('slot-active-target');
    elements.cdSector2.classList.remove('slot-active-target');
  } else {
    elements.tabSlot2.classList.add('active');
    elements.tabSlot1.classList.remove('active');
    elements.cdSector2.classList.add('slot-active-target');
    elements.cdSector1.classList.remove('slot-active-target');
  }
  updateAllPaletteIndicators();
}

function updateOutputDisplay() {
  const mixedHex = calculateCurrentMix();
  const mixedRgb = hexToRgb(mixedHex);
  const mixedHsl = rgbToHsl(mixedRgb.r, mixedRgb.g, mixedRgb.b);
  const colorName = getNearestColorName(mixedHex);

  document.documentElement.style.setProperty('--mixed-color', mixedHex);

  elements.outputColorPreview.style.backgroundColor = mixedHex;
  elements.outputColorPreview.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px ${mixedHex}88`;

  if (state.isSpinning) {
    elements.outputColorName.textContent = colorName;
  } else {
    elements.outputColorName.textContent = `${colorName} (Ready)`;
  }

  elements.hexVal.textContent = mixedHex;
  elements.rgbVal.textContent = `rgb(${mixedRgb.r}, ${mixedRgb.g}, ${mixedRgb.b})`;
  elements.hslVal.textContent = `hsl(${mixedHsl.h}, ${mixedHsl.s}%, ${mixedHsl.l}%)`;

  elements.blendModelBadge.textContent = 
    state.mixMode === 'optical' ? "Maxwell's Optical Disc" : 'Subtractive Pigment Model';

  // Update optical blend overlay background on CD
  elements.cdOpticalBlend.style.backgroundColor = mixedHex;

  // Update Equation Ribbon
  const s1Name = getNearestColorName(state.slot1Color);
  const s2Name = getNearestColorName(state.slot2Color);
  elements.eqSlot1Dot.style.backgroundColor = state.slot1Color;
  elements.eqSlot1Name.textContent = s1Name;
  elements.eqSlot2Dot.style.backgroundColor = state.slot2Color;
  elements.eqSlot2Name.textContent = s2Name;
  elements.eqResultDot.style.backgroundColor = mixedHex;
  elements.eqResultName.textContent = colorName;
}

function swapColors() {
  const temp = state.slot1Color;
  assignColorToSlot(1, state.slot2Color);
  assignColorToSlot(2, temp);
  showToast('Swapped Slot 1 and Slot 2 colors');
}

function triggerDiscRipple() {
  elements.cdDisc.style.transform = `scale(1.03) rotate(${state.angle}deg)`;
  setTimeout(() => {
    elements.cdDisc.style.transform = `scale(1) rotate(${state.angle}deg)`;
  }, 180);
}

function addRecentMixToHistory(hex, name) {
  // Avoid duplicate consecutively
  if (state.recentMixes.length > 0 && state.recentMixes[0].hex === hex) {
    return;
  }

  state.recentMixes.unshift({
    hex,
    name,
    slot1: state.slot1Color,
    slot2: state.slot2Color
  });

  if (state.recentMixes.length > 10) {
    state.recentMixes.pop();
  }

  renderRecentMixes();
}

function renderRecentMixes() {
  if (state.recentMixes.length === 0) {
    elements.recentChips.innerHTML = '<span class="empty-history-text">Spin the dynamo to save mixes</span>';
    return;
  }

  elements.recentChips.innerHTML = '';
  state.recentMixes.forEach((item) => {
    const chip = document.createElement('div');
    chip.className = 'recent-chip';
    chip.style.backgroundColor = item.hex;
    chip.setAttribute('title', `${item.name} (${item.hex}) - Click to restore pair`);

    chip.addEventListener('click', () => {
      assignColorToSlot(1, item.slot1);
      assignColorToSlot(2, item.slot2);
      showToast(`Restored pair: ${item.name} (${item.slot1} + ${item.slot2})`);
    });

    elements.recentChips.appendChild(chip);
  });
}

function randomizeColorPair() {
  const idx1 = Math.floor(Math.random() * COLOR_PRESETS.length);
  let idx2 = Math.floor(Math.random() * COLOR_PRESETS.length);
  while (idx2 === idx1) {
    idx2 = Math.floor(Math.random() * COLOR_PRESETS.length);
  }

  const p1 = COLOR_PRESETS[idx1];
  const p2 = COLOR_PRESETS[idx2];
  assignColorToSlot(1, p1.hex);
  assignColorToSlot(2, p2.hex);
  triggerDiscRipple();
  showToast(`🎲 Surprise Pair: ${p1.name} + ${p2.name}!`);
}

// ============================================================================
// DYNAMO MOTOR SIMULATION & ANIMATION LOOP
// ============================================================================

let lastTimestamp = 0;

function toggleDynamoPower() {
  state.isSpinning = !state.isSpinning;

  if (state.isSpinning) {
    elements.powerBtn.classList.add('active');
    elements.powerBtnText.textContent = 'STOP DYNAMO';
    elements.powerStateSubtext.textContent = 'Dynamo active • Generating RPM';
    elements.statusIndicator.classList.add('active');
    elements.statusText.textContent = 'DYNAMO ROTATING';
    elements.dynamoAssembly.classList.add('dynamo-active');

    const mixedHex = calculateCurrentMix();
    const name = getNearestColorName(mixedHex);
    addRecentMixToHistory(mixedHex, name);
    showToast(`⚡ Dynamo engaged! Mixing ${name}...`);
  } else {
    elements.powerBtn.classList.remove('active');
    elements.powerBtnText.textContent = 'TURN ON';
    elements.powerStateSubtext.textContent = 'Press to engage dynamo';
    elements.statusIndicator.classList.remove('active');
    elements.statusText.textContent = 'DYNAMO STANDBY';
    elements.dynamoAssembly.classList.remove('dynamo-active');
  }
}

function animationLoop(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1); // clamp dt to avoid jumps
  lastTimestamp = timestamp;

  // Smooth physical acceleration / deceleration
  const target = state.isSpinning ? state.targetRpm : 0;
  const accelRate = state.isSpinning ? 2000 : 1000; // RPM per second

  if (state.currentRpm < target) {
    state.currentRpm = Math.min(target, state.currentRpm + accelRate * dt);
  } else if (state.currentRpm > target) {
    state.currentRpm = Math.max(target, state.currentRpm - accelRate * dt);
  }

  // Update status UI
  elements.rpmDisplay.textContent = `${Math.round(state.currentRpm)} RPM`;

  // Rotate disc
  if (state.currentRpm > 0) {
    const degreesPerSec = (state.currentRpm / 60) * 360;
    state.angle = (state.angle + degreesPerSec * dt) % 360;
    elements.cdDisc.style.transform = `rotate(${state.angle.toFixed(2)}deg)`;
  }

  // Optical persistence blend curve
  // Human retina integrates temporal wavelengths above ~500-1400 RPM
  const blendThreshold = 500;
  const fullBlendRpm = 1500;
  let blendOpacity = 0;

  if (state.currentRpm > blendThreshold) {
    blendOpacity = Math.min(1, (state.currentRpm - blendThreshold) / (fullBlendRpm - blendThreshold));
  }

  elements.cdOpticalBlend.style.opacity = blendOpacity.toFixed(3);

  requestAnimationFrame(animationLoop);
}

// ============================================================================
// TOAST NOTIFICATIONS & CLIPBOARD
// ============================================================================

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

function setupCopyButtons() {
  document.querySelectorAll('.copy-pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const textToCopy = targetEl.textContent.trim();
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${textToCopy} to clipboard!`);
          btn.textContent = '✓ Copied';
          setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
        }).catch(() => {
          showToast(`Copy failed. Value: ${textToCopy}`);
        });
      }
    });
  });
}

// ============================================================================
// SETUP INTERACTION ON CD SECTORS & PRESETS
// ============================================================================

function setupSectorClickHandlers() {
  // Clicking Sector 1 selects Slot 1 as active target
  if (elements.cdSector1) {
    elements.cdSector1.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveSlot(1);
      showToast('Selected CD Slot 1 - Pick a color');
    });
  }

  // Clicking Sector 2 selects Slot 2 as active target
  if (elements.cdSector2) {
    elements.cdSector2.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveSlot(2);
      showToast('Selected CD Slot 2 - Pick a color');
    });
  }

  // Clicking anywhere on the CD when idle toggles the active slot
  if (elements.cdDisc) {
    elements.cdDisc.addEventListener('click', () => {
      if (!state.isSpinning) {
        const next = state.activeSlot === 1 ? 2 : 1;
        setActiveSlot(next);
        showToast(`Switched to CD Slot ${next}`);
      }
    });
  }

  // Harmony preset pills in left sidebar
  document.querySelectorAll('.harmony-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const c1 = pill.getAttribute('data-c1');
      const c2 = pill.getAttribute('data-c2');
      assignColorToSlot(1, c1);
      assignColorToSlot(2, c2);
      triggerDiscRipple();
      const name = pill.querySelector('.harmony-name').textContent;
      showToast(`Loaded "${name}" (${c1} + ${c2})`);
    });
  });

  // Filter pills in palette holder
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.getAttribute('data-filter');
      renderPaletteSwatches();
    });
  });

  // Speed preset buttons
  document.querySelectorAll('.speed-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.speed-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const rpm = parseInt(btn.getAttribute('data-preset-rpm'), 10);
      state.targetRpm = rpm;
      elements.speedSlider.value = rpm;
      let label = 'Medium';
      if (rpm < 1200) label = 'Slow';
      else if (rpm >= 2400) label = 'Turbo';
      else if (rpm >= 1600) label = 'Fast';
      elements.speedBadge.textContent = `${label} (${rpm} RPM)`;
    });
  });
}

// ============================================================================
// THEME MANAGEMENT (LIGHT & DARK MODE)
// ============================================================================

function getInitialTheme() {
  const saved = localStorage.getItem('color-mixer-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('color-mixer-theme', theme);
  if (elements.themeIcon && elements.themeLabel) {
    if (theme === 'light') {
      elements.themeIcon.textContent = '🌙';
      elements.themeLabel.textContent = 'Dark Mode';
      if (elements.themeToggleBtn) {
        elements.themeToggleBtn.title = 'Switch to Dark Mode (Hotkey: T)';
      }
    } else {
      elements.themeIcon.textContent = '☀️';
      elements.themeLabel.textContent = 'Light Mode';
      if (elements.themeToggleBtn) {
        elements.themeToggleBtn.title = 'Switch to Light Mode (Hotkey: T)';
      }
    }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} Mode`);
}

// ============================================================================
// EVENT LISTENERS INITIALIZATION
// ============================================================================

function setupEventListeners() {
  // Theme Toggle Button
  if (elements.themeToggleBtn) {
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Slot Tabs & Swap in Palette Holder
  elements.tabSlot1.addEventListener('click', () => setActiveSlot(1));
  elements.tabSlot2.addEventListener('click', () => setActiveSlot(2));
  elements.swapSlotsBtn.addEventListener('click', swapColors);

  // Randomize Pair Button
  if (elements.randomBtn) {
    elements.randomBtn.addEventListener('click', randomizeColorPair);
  }

  // Color Theory Modal Handlers
  if (elements.infoBtn && elements.infoModal) {
    elements.infoBtn.addEventListener('click', () => {
      elements.infoModal.classList.add('open');
      elements.infoModal.setAttribute('aria-hidden', 'false');
    });

    const closeModal = () => {
      elements.infoModal.classList.remove('open');
      elements.infoModal.setAttribute('aria-hidden', 'true');
    };

    if (elements.closeModalBtn) elements.closeModalBtn.addEventListener('click', closeModal);
    if (elements.modalUnderstoodBtn) elements.modalUnderstoodBtn.addEventListener('click', closeModal);

    elements.infoModal.addEventListener('click', (e) => {
      if (e.target === elements.infoModal) closeModal();
    });
  }

  // Custom Color Input & Ring Click
  if (elements.customColorRing) {
    elements.customColorRing.addEventListener('click', () => {
      elements.customColorInput.click();
    });
  }

  elements.customColorInput.addEventListener('input', (e) => {
    const hex = e.target.value.toUpperCase();
    elements.customColorHex.textContent = hex;
    if (elements.customColorRing) {
      elements.customColorRing.style.background = hex;
      elements.customColorRing.style.boxShadow = `0 0 12px ${hex}`;
    }
  });

  elements.applyCustomBtn.addEventListener('click', () => {
    const hex = elements.customColorInput.value.toUpperCase();
    assignColorToSlot(state.activeSlot, hex);
    showToast(`Applied custom color ${hex} to Slot ${state.activeSlot}`);
  });

  // Power Button
  elements.powerBtn.addEventListener('click', toggleDynamoPower);

  // Speed Slider
  elements.speedSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    state.targetRpm = val;
    let label = 'Medium';
    if (val < 1200) label = 'Slow';
    else if (val >= 2400) label = 'Turbo';
    else if (val >= 1600) label = 'Fast';
    elements.speedBadge.textContent = `${label} (${val} RPM)`;

    // Sync speed preset pills
    document.querySelectorAll('.speed-preset-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-preset-rpm'), 10) === val);
    });
  });

  // Mixing Algorithm Mode Toggle
  elements.modeOptical.addEventListener('click', () => {
    state.mixMode = 'optical';
    elements.modeOptical.classList.add('active');
    elements.modePigment.classList.remove('active');
    elements.modeNote.textContent = 'Light summation model (Persistence of vision)';
    updateOutputDisplay();
    showToast("Switched to Maxwell's Optical Disc mixing");
  });

  elements.modePigment.addEventListener('click', () => {
    state.mixMode = 'pigment';
    elements.modePigment.classList.add('active');
    elements.modeOptical.classList.remove('active');
    elements.modeNote.textContent = 'Subtractive pigment model (Paint & dye fusion)';
    updateOutputDisplay();
    showToast("Switched to Pigment Subtractive mixing");
  });

  // Clear History
  elements.clearHistoryBtn.addEventListener('click', () => {
    state.recentMixes = [];
    renderRecentMixes();
    showToast('Recent history cleared');
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;

    if (e.code === 'Space') {
      e.preventDefault();
      toggleDynamoPower();
    } else if (e.key === '1') {
      setActiveSlot(1);
      showToast('Selected CD Slot 1');
    } else if (e.key === '2') {
      setActiveSlot(2);
      showToast('Selected CD Slot 2');
    } else if (e.key === 's' || e.key === 'S') {
      swapColors();
    } else if (e.key === 'r' || e.key === 'R') {
      randomizeColorPair();
    } else if (e.key === 't' || e.key === 'T') {
      toggleTheme();
    } else if (e.key === 'Escape') {
      if (elements.infoModal && elements.infoModal.classList.contains('open')) {
        elements.infoModal.classList.remove('open');
      }
    }
  });
}

// ============================================================================
// BOOTSTRAP APPLICATION
// ============================================================================

function init() {
  applyTheme(getInitialTheme());
  renderPaletteSwatches();
  setActiveSlot(1);
  setupSectorClickHandlers();
  setupCopyButtons();
  setupEventListeners();
  updateOutputDisplay();

  // Start Animation Loop
  requestAnimationFrame(animationLoop);
}

document.addEventListener('DOMContentLoaded', init);
