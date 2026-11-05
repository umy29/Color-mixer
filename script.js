/**
 * DYNAMO COLOR MIXER
 * Dynamic Dual-Color Blending Laboratory
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
  customColor: '#FF007F',
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
  eqResultItem: document.getElementById('eqResultItem'),
  eqResultHex: document.getElementById('eqResultHex'),

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
  customColorRing: document.getElementById('customColorRing'),
  customColorHex: document.getElementById('customColorHex'),
  applyCustomBtn: document.getElementById('applyCustomBtn'),
  applySlotPill: document.getElementById('applySlotPill'),

  // In-App Color Studio Popover
  customPickerPopover: document.getElementById('customPickerPopover'),
  pickerCloseBtn: document.getElementById('pickerCloseBtn'),
  pickerSvArea: document.getElementById('pickerSvArea'),
  pickerSvCursor: document.getElementById('pickerSvCursor'),
  pickerHueSlider: document.getElementById('pickerHueSlider'),
  pickerShadesRow: document.getElementById('pickerShadesRow'),
  popoverHexVal: document.getElementById('popoverHexVal'),
  popoverRVal: document.getElementById('popoverRVal'),
  popoverGVal: document.getElementById('popoverGVal'),
  popoverBVal: document.getElementById('popoverBVal'),
  popoverPreviewChip: document.getElementById('popoverPreviewChip'),
  popoverTitleDot: document.getElementById('popoverTitleDot'),
  popoverSlotTarget: document.getElementById('popoverSlotTarget'),
  popoverApplyBtn: document.getElementById('popoverApplyBtn'),

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
  cdBlendOverlay: document.getElementById('cdBlendOverlay'),

  // Controls
  powerBtn: document.getElementById('powerBtn'),
  powerBtnText: document.getElementById('powerBtnText'),
  powerStateSubtext: document.getElementById('powerStateSubtext'),
  speedSlider: document.getElementById('speedSlider'),
  speedBadge: document.getElementById('speedBadge'),

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
 * Color Mixing Engine (Subtractive Pigment Fusion)
 * Uses physical CMY subtractive blending so primary colors blend intuitively (e.g. Blue + Yellow = Green)
 */
function calculateCurrentMix() {
  const c1 = hexToRgb(state.slot1Color);
  const c2 = hexToRgb(state.slot2Color);

  // Convert RGB to CMY
  const cmy1 = { c: 1 - c1.r / 255, m: 1 - c1.g / 255, y: 1 - c1.b / 255 };
  const cmy2 = { c: 1 - c2.r / 255, m: 1 - c2.g / 255, y: 1 - c2.b / 255 };

  // Subtractive pigment blend
  const c = Math.min(1, (cmy1.c + cmy2.c) * 0.85);
  const m = Math.min(1, (cmy1.m + cmy2.m) * 0.85);
  const y = Math.min(1, (cmy1.y + cmy2.y) * 0.85);

  const r = (1 - c) * 255;
  const g = (1 - m) * 255;
  const b = (1 - y) * 255;

  return rgbToHex(r, g, b);
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
  if (elements.applySlotPill) {
    elements.applySlotPill.textContent = `S${slotNumber}`;
    elements.applySlotPill.style.color = slotNumber === 1 ? 'var(--slot1-color)' : 'var(--slot2-color)';
  }
  if (elements.applyCustomBtn) {
    elements.applyCustomBtn.title = `Apply custom color to Slot ${slotNumber}`;
  }
  if (elements.popoverSlotTarget) {
    elements.popoverSlotTarget.textContent = `Slot ${slotNumber}`;
  }
  updateAllPaletteIndicators();
}

function updateOutputDisplay() {
  const mixedHex = calculateCurrentMix();
  const colorName = getNearestColorName(mixedHex);

  document.documentElement.style.setProperty('--mixed-color', mixedHex);
  document.documentElement.style.setProperty('--mixed-glow', `${mixedHex}45`);

  // Update blend overlay background on CD
  if (elements.cdBlendOverlay) {
    elements.cdBlendOverlay.style.backgroundColor = mixedHex;
  }

  // Update Equation Ribbon inputs (Slot 1 and Slot 2)
  const s1Name = getNearestColorName(state.slot1Color);
  const s2Name = getNearestColorName(state.slot2Color);
  if (elements.eqSlot1Dot) elements.eqSlot1Dot.style.backgroundColor = state.slot1Color;
  if (elements.eqSlot1Name) elements.eqSlot1Name.textContent = s1Name;
  if (elements.eqSlot2Dot) elements.eqSlot2Dot.style.backgroundColor = state.slot2Color;
  if (elements.eqSlot2Name) elements.eqSlot2Name.textContent = s2Name;

  // Reveal or Conceal Equation Result depending on whether dynamo is turned on
  if (elements.eqResultItem) {
    if (state.isSpinning) {
      elements.eqResultItem.classList.remove('unrevealed');
      elements.eqResultItem.classList.add('revealed');
      elements.eqResultItem.setAttribute('title', `Mixed: ${colorName} (${mixedHex}) - Click to copy HEX`);
      if (elements.eqResultDot) elements.eqResultDot.style.backgroundColor = mixedHex;
      if (elements.eqResultName) elements.eqResultName.textContent = colorName;
      if (elements.eqResultHex) elements.eqResultHex.textContent = mixedHex;
    } else {
      elements.eqResultItem.classList.remove('revealed');
      elements.eqResultItem.classList.add('unrevealed');
      elements.eqResultItem.setAttribute('title', 'Turn on the dynamo to mix and reveal color combo (or click here)');
      if (elements.eqResultDot) elements.eqResultDot.style.backgroundColor = 'transparent';
      if (elements.eqResultName) elements.eqResultName.textContent = '';
      if (elements.eqResultHex) elements.eqResultHex.textContent = '';
    }
  }
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
  if (!elements.recentChips) return;
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

  updateOutputDisplay();
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

  // Color fusion blend curve as rotational speed increases
  const blendThreshold = 500;
  const fullBlendRpm = 1500;
  let blendOpacity = 0;

  if (state.currentRpm > blendThreshold) {
    blendOpacity = Math.min(1, (state.currentRpm - blendThreshold) / (fullBlendRpm - blendThreshold));
  }

  if (elements.cdBlendOverlay) {
    elements.cdBlendOverlay.style.opacity = blendOpacity.toFixed(3);
  }

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

const THEME_ICONS = {
  sun: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`,
  moon: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`
};

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
      elements.themeIcon.innerHTML = THEME_ICONS.moon;
      elements.themeLabel.textContent = 'Dark Mode';
      if (elements.themeToggleBtn) {
        elements.themeToggleBtn.title = 'Switch to Dark Mode (Hotkey: T)';
      }
    } else {
      elements.themeIcon.innerHTML = THEME_ICONS.sun;
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

  if (elements.themeIcon) {
    elements.themeIcon.classList.add('theme-icon-spin');
    setTimeout(() => {
      elements.themeIcon.classList.remove('theme-icon-spin');
    }, 450);
  }

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

  // Custom Color Picker & Direct Hex Input
  const syncCustomColorDisplay = (hex) => {
    const cleanHex = hex.replace('#', '').toUpperCase();
    state.customColor = `#${cleanHex}`;
    if (elements.customColorHex) {
      if ('value' in elements.customColorHex) {
        elements.customColorHex.value = cleanHex;
      } else {
        elements.customColorHex.textContent = `#${cleanHex}`;
      }
      elements.customColorHex.classList.remove('invalid');
    }
    if (elements.customColorRing) {
      elements.customColorRing.style.background = `#${cleanHex}`;
      elements.customColorRing.style.boxShadow = `0 0 12px #${cleanHex}`;
    }
  };

  // --- In-App Color Studio Controller ---
  let studioHue = 330;
  let studioSat = 1;
  let studioVal = 1;
  let studioLivePreview = true;
  let studioOriginalColor = null; // Slot color before opening, for cancel/revert

  function hsvToRgb(h, s, v) {
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;
    if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  }

  function rgbToHsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    const s = max === 0 ? 0 : d / max;
    const v = max;
    if (max !== min) {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360) % 360, s, v };
  }

  function rgbToHex(r, g, b) {
    const toHex = (n) => {
      const h = Math.max(0, Math.min(255, Math.round(n))).toString(16);
      return h.length === 1 ? '0' + h : h;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  }

  function hexToRgb(hex) {
    let clean = hex.replace('#', '').trim();
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    if (clean.length !== 6) return null;
    const num = parseInt(clean, 16);
    if (isNaN(num)) return null;
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function renderQuickShades(hue) {
    if (!elements.pickerShadesRow) return;
    elements.pickerShadesRow.innerHTML = '';
    const shades = [
      hsvToRgb(hue, 0.22, 1),
      hsvToRgb(hue, 0.52, 1),
      hsvToRgb(hue, 1, 1),
      hsvToRgb(hue, 1, 0.72),
      hsvToRgb(hue, 1, 0.42),
      { r: 255, g: 255, b: 255 },
      { r: 15, g: 23, b: 42 }
    ];

    shades.forEach(c => {
      const hx = rgbToHex(c.r, c.g, c.b);
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'shade-chip';
      chip.style.backgroundColor = hx;
      chip.title = `Select ${hx}`;
      chip.setAttribute('aria-label', `Color shade ${hx}`);
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        setColorStudioHex(hx);
      });
      elements.pickerShadesRow.appendChild(chip);
    });
  }

  function updateStudioUI(source) {
    const rgb = hsvToRgb(studioHue, studioSat, studioVal);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

    if (elements.pickerSvArea) {
      elements.pickerSvArea.style.setProperty('--picker-hue-color', `hsl(${studioHue}, 100%, 50%)`);
    }
    if (elements.pickerSvCursor) {
      elements.pickerSvCursor.style.left = `${studioSat * 100}%`;
      elements.pickerSvCursor.style.top = `${(1 - studioVal) * 100}%`;
    }
    if (elements.pickerHueSlider && source !== 'hue') {
      elements.pickerHueSlider.value = studioHue;
    }

    if (elements.popoverPreviewChip) {
      elements.popoverPreviewChip.style.backgroundColor = hex;
    }
    if (elements.popoverTitleDot) {
      elements.popoverTitleDot.style.backgroundColor = hex;
      elements.popoverTitleDot.style.boxShadow = `0 0 6px ${hex}`;
    }

    if (elements.popoverHexVal && source !== 'hex') {
      elements.popoverHexVal.value = hex;
    }
    if (source !== 'rgb') {
      if (elements.popoverRVal) elements.popoverRVal.value = rgb.r;
      if (elements.popoverGVal) elements.popoverGVal.value = rgb.g;
      if (elements.popoverBVal) elements.popoverBVal.value = rgb.b;
    }

    // Sync with bottom bar
    syncCustomColorDisplay(hex);

    // Live preview: apply to active slot in real-time
    if (studioLivePreview && elements.customPickerPopover && !elements.customPickerPopover.hasAttribute('hidden')) {
      assignColorToSlot(state.activeSlot, hex);
    }

    renderQuickShades(studioHue);
  }

  function setColorStudioHex(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return;
    const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
    studioHue = hsv.h;
    studioSat = hsv.s;
    studioVal = hsv.v;
    updateStudioUI();
  }

  function openColorStudio() {
    if (!elements.customPickerPopover) return;
    // Save original slot color so we can revert on cancel
    studioOriginalColor = state.activeSlot === 1 ? state.slot1Color : state.slot2Color;
    const currentHex = state.customColor || '#FF007F';
    setColorStudioHex(currentHex);
    if (elements.popoverSlotTarget) {
      elements.popoverSlotTarget.textContent = `Slot ${state.activeSlot}`;
    }
    elements.customPickerPopover.removeAttribute('hidden');
    elements.customPickerPopover.setAttribute('aria-hidden', 'false');
  }

  function closeColorStudio() {
    if (!elements.customPickerPopover) return;
    elements.customPickerPopover.setAttribute('hidden', '');
    elements.customPickerPopover.setAttribute('aria-hidden', 'true');
  }

  function toggleColorStudio() {
    if (!elements.customPickerPopover) return;
    if (elements.customPickerPopover.hasAttribute('hidden')) {
      openColorStudio();
    } else {
      closeColorStudio();
    }
  }

  if (elements.customColorWrapper) {
    elements.customColorWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleColorStudio();
    });
  }

  if (elements.pickerCloseBtn) {
    elements.pickerCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeColorStudio();
    });
  }

  // Click outside to close popover
  document.addEventListener('click', (e) => {
    if (elements.customPickerPopover && !elements.customPickerPopover.hasAttribute('hidden')) {
      const isInsidePopover = elements.customPickerPopover.contains(e.target);
      const isInsideWrapper = elements.customColorWrapper && elements.customColorWrapper.contains(e.target);
      if (!isInsidePopover && !isInsideWrapper) {
        closeColorStudio();
      }
    }
  });

  // Escape key closes popover
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.customPickerPopover && !elements.customPickerPopover.hasAttribute('hidden')) {
      closeColorStudio();
    }
  });

  // 2D Saturation / Value Area Dragging
  if (elements.pickerSvArea) {
    const handleSvMove = (e) => {
      const rect = elements.pickerSvArea.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
      const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
      studioSat = rect.width ? x / rect.width : 0;
      studioVal = rect.height ? 1 - (y / rect.height) : 0;
      updateStudioUI('sv');
    };

    elements.pickerSvArea.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      elements.pickerSvArea.setPointerCapture(e.pointerId);
      handleSvMove(e);
      const onPointerMove = (ev) => handleSvMove(ev);
      const onPointerUp = (ev) => {
        elements.pickerSvArea.removeEventListener('pointermove', onPointerMove);
        elements.pickerSvArea.removeEventListener('pointerup', onPointerUp);
        elements.pickerSvArea.removeEventListener('pointercancel', onPointerUp);
      };
      elements.pickerSvArea.addEventListener('pointermove', onPointerMove);
      elements.pickerSvArea.addEventListener('pointerup', onPointerUp);
      elements.pickerSvArea.addEventListener('pointercancel', onPointerUp);
    });
  }

  // Hue Slider in popover
  if (elements.pickerHueSlider) {
    elements.pickerHueSlider.addEventListener('input', (e) => {
      studioHue = parseInt(e.target.value, 10) || 0;
      updateStudioUI('hue');
    });
  }

  // Hex input in popover
  if (elements.popoverHexVal) {
    elements.popoverHexVal.addEventListener('input', (e) => {
      let val = e.target.value.trim().toUpperCase();
      if (!val.startsWith('#')) val = '#' + val;
      const rgb = hexToRgb(val);
      if (rgb) {
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        studioHue = hsv.h;
        studioSat = hsv.s;
        studioVal = hsv.v;
        updateStudioUI('hex');
      }
    });

    elements.popoverHexVal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (elements.popoverApplyBtn) elements.popoverApplyBtn.click();
      }
    });
  }

  // RGB numerical inputs in popover
  const handleRgbInputChange = () => {
    const r = Math.max(0, Math.min(255, parseInt(elements.popoverRVal.value, 10) || 0));
    const g = Math.max(0, Math.min(255, parseInt(elements.popoverGVal.value, 10) || 0));
    const b = Math.max(0, Math.min(255, parseInt(elements.popoverBVal.value, 10) || 0));
    const hsv = rgbToHsv(r, g, b);
    studioHue = hsv.h;
    studioSat = hsv.s;
    studioVal = hsv.v;
    updateStudioUI('rgb');
  };

  [elements.popoverRVal, elements.popoverGVal, elements.popoverBVal].forEach(input => {
    if (input) input.addEventListener('input', handleRgbInputChange);
  });

  // Apply button inside popover (confirms live preview)
  if (elements.popoverApplyBtn) {
    elements.popoverApplyBtn.addEventListener('click', () => {
      const rgb = hsvToRgb(studioHue, studioSat, studioVal);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      assignColorToSlot(state.activeSlot, hex);
      studioOriginalColor = null; // Mark as accepted
      showToast(`Applied custom color ${hex} to Slot ${state.activeSlot}`);
      closeColorStudio();
    });
  }

  if (elements.customColorHex && 'value' in elements.customColorHex) {
    elements.customColorHex.addEventListener('input', (e) => {
      let raw = e.target.value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase().slice(0, 6);
      e.target.value = raw;
      if (raw.length === 6 || raw.length === 3) {
        const fullHex = raw.length === 3 ? raw.split('').map(c => c + c).join('') : raw;
        const color = `#${fullHex}`;
        state.customColor = color;
        if (elements.customColorRing) {
          elements.customColorRing.style.background = color;
          elements.customColorRing.style.boxShadow = `0 0 12px ${color}`;
        }
        elements.customColorHex.classList.remove('invalid');
      } else if (raw.length > 0) {
        elements.customColorHex.classList.add('invalid');
      }
    });

    elements.customColorHex.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (elements.applyCustomBtn) elements.applyCustomBtn.click();
      }
    });

    elements.customColorHex.addEventListener('blur', () => {
      syncCustomColorDisplay(state.customColor || '#FF007F');
    });
  }

  if (elements.applyCustomBtn) {
    elements.applyCustomBtn.addEventListener('click', () => {
      let hex = state.customColor || '#FF007F';
      if (elements.customColorHex && 'value' in elements.customColorHex) {
        const val = elements.customColorHex.value.trim();
        if (val.length === 6 || val.length === 3) {
          const full = val.length === 3 ? val.split('').map(c => c + c).join('') : val;
          hex = `#${full}`.toUpperCase();
        }
      }
      assignColorToSlot(state.activeSlot, hex);
      showToast(`Applied custom color ${hex} to Slot ${state.activeSlot}`);
    });
  }

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


  // Click on Equation Result: Copy HEX if revealed, or start dynamo to mix & reveal if unrevealed
  if (elements.eqResultItem) {
    elements.eqResultItem.addEventListener('click', () => {
      if (!state.isSpinning) {
        toggleDynamoPower();
        return;
      }
      const hex = calculateCurrentMix();
      const name = getNearestColorName(hex);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied ${name} (${hex}) to clipboard!`);
        }).catch(() => {
          showToast(`${name}: ${hex}`);
        });
      } else {
        showToast(`${name}: ${hex}`);
      }
    });
  }

  // Clear History
  if (elements.clearHistoryBtn) {
    elements.clearHistoryBtn.addEventListener('click', () => {
      state.recentMixes = [];
      renderRecentMixes();
      showToast('Recent history cleared');
    });
  }

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
