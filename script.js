/**
 * DYNAMO COLOR MIXER
 * Dynamic Dual-Color Blending Laboratory
 */

// Preset Color Choices for the Rectangle Palette Holder (45 Basic Categorized Colors)
const COLOR_PRESETS = [
  // Reds & Pinks (Warm: 5, Vivid: 2)
  { name: 'Red', hex: '#FF3B30', cat: 'warm' },
  { name: 'Dark Red', hex: '#B71C1C', cat: 'warm' },
  { name: 'Light Red', hex: '#EF5350', cat: 'warm' },
  { name: 'Crimson', hex: '#D32F2F', cat: 'warm' },
  { name: 'Coral', hex: '#FF5722', cat: 'warm' },
  { name: 'Hot Pink', hex: '#E91E63', cat: 'vibrant' },
  { name: 'Pink', hex: '#F06292', cat: 'vibrant' },

  // Oranges & Browns (Warm: 6)
  { name: 'Orange', hex: '#FF9500', cat: 'warm' },
  { name: 'Dark Orange', hex: '#F57C00', cat: 'warm' },
  { name: 'Light Orange', hex: '#FFB74D', cat: 'warm' },
  { name: 'Amber', hex: '#FFA000', cat: 'warm' },
  { name: 'Peach', hex: '#FFCC80', cat: 'warm' },
  { name: 'Rust Brown', hex: '#C85A17', cat: 'warm' },

  // Yellows & Golds (Warm: 3, Vivid: 1, Neutral: 1)
  { name: 'Yellow', hex: '#FFD60A', cat: 'warm' },
  { name: 'Bright Yellow', hex: '#FFEE58', cat: 'vibrant' },
  { name: 'Gold', hex: '#FFC107', cat: 'warm' },
  { name: 'Lemon Yellow', hex: '#FFF176', cat: 'warm' },
  { name: 'Cream', hex: '#FFF9C4', cat: 'neutral' },

  // Greens (Vivid: 2, Nature: 4)
  { name: 'Lime Green', hex: '#7CB342', cat: 'vibrant' },
  { name: 'Bright Green', hex: '#00E676', cat: 'vibrant' },
  { name: 'Green', hex: '#4CAF50', cat: 'nature' },
  { name: 'Dark Green', hex: '#2E7D32', cat: 'nature' },
  { name: 'Forest Green', hex: '#1B5E20', cat: 'nature' },
  { name: 'Olive Green', hex: '#558B2F', cat: 'nature' },

  // Cyans & Teals (Vivid: 2, Cool: 3)
  { name: 'Cyan', hex: '#00E5FF', cat: 'vibrant' },
  { name: 'Aqua', hex: '#00BCD4', cat: 'vibrant' },
  { name: 'Light Blue', hex: '#4DD0E1', cat: 'cool' },
  { name: 'Teal', hex: '#009688', cat: 'cool' },
  { name: 'Dark Teal', hex: '#00695C', cat: 'cool' },

  // Blues (Cool: 6)
  { name: 'Blue', hex: '#007AFF', cat: 'cool' },
  { name: 'Dark Blue', hex: '#1565C0', cat: 'cool' },
  { name: 'Navy Blue', hex: '#0D47A1', cat: 'cool' },
  { name: 'Sky Blue', hex: '#64B5F6', cat: 'cool' },
  { name: 'Royal Blue', hex: '#1E40AF', cat: 'cool' },
  { name: 'Midnight Blue', hex: '#0B192C', cat: 'cool' },

  // Purples & Violets (Vivid: 3, Cool: 3)
  { name: 'Purple', hex: '#9C27B0', cat: 'vibrant' },
  { name: 'Magenta', hex: '#AF52DE', cat: 'vibrant' },
  { name: 'Lavender', hex: '#BA68C8', cat: 'vibrant' },
  { name: 'Violet', hex: '#673AB7', cat: 'cool' },
  { name: 'Dark Purple', hex: '#4A148C', cat: 'cool' },
  { name: 'Indigo', hex: '#3F51B5', cat: 'cool' },

  // Neutrals & Monochromes (Neutral: 4)
  { name: 'White', hex: '#FFFFFF', cat: 'neutral' },
  { name: 'Light Gray', hex: '#E0E0E0', cat: 'neutral' },
  { name: 'Gray', hex: '#9E9E9E', cat: 'neutral' },
  { name: 'Black', hex: '#1C1C1E', cat: 'neutral' }
];

// Curated Named Colors Dictionary for Nearest Color Name Matching
const COLOR_NAMES_DICT = [
  { name: 'White', r: 255, g: 255, b: 255 },
  { name: 'Light Gray', r: 224, g: 224, b: 224 },
  { name: 'Gray', r: 158, g: 158, b: 158 },
  { name: 'Dark Gray', r: 97, g: 97, b: 97 },
  { name: 'Black', r: 28, g: 28, b: 30 },
  { name: 'Red', r: 255, g: 59, b: 48 },
  { name: 'Dark Red', r: 183, g: 28, b: 28 },
  { name: 'Light Red', r: 239, g: 83, b: 80 },
  { name: 'Crimson', r: 211, g: 47, b: 47 },
  { name: 'Coral', r: 255, g: 87, b: 34 },
  { name: 'Orange', r: 255, g: 149, b: 0 },
  { name: 'Dark Orange', r: 245, g: 124, b: 0 },
  { name: 'Amber', r: 255, g: 160, b: 0 },
  { name: 'Yellow', r: 255, g: 214, b: 10 },
  { name: 'Light Yellow', r: 255, g: 241, b: 118 },
  { name: 'Gold', r: 255, g: 193, b: 7 },
  { name: 'Lime Green', r: 124, g: 179, b: 66 },
  { name: 'Bright Green', r: 0, g: 230, b: 118 },
  { name: 'Green', r: 76, g: 175, b: 80 },
  { name: 'Dark Green', r: 46, g: 125, b: 50 },
  { name: 'Forest Green', r: 27, g: 94, b: 32 },
  { name: 'Olive Green', r: 85, g: 139, b: 47 },
  { name: 'Cyan', r: 0, g: 229, b: 255 },
  { name: 'Aqua', r: 0, g: 188, b: 212 },
  { name: 'Light Blue', r: 77, g: 208, b: 225 },
  { name: 'Teal', r: 0, g: 150, b: 136 },
  { name: 'Blue', r: 0, g: 122, b: 255 },
  { name: 'Dark Blue', r: 21, g: 101, b: 192 },
  { name: 'Navy Blue', r: 13, g: 71, b: 161 },
  { name: 'Sky Blue', r: 100, g: 181, b: 246 },
  { name: 'Royal Blue', r: 30, g: 64, b: 175 },
  { name: 'Purple', r: 156, g: 39, b: 176 },
  { name: 'Dark Purple', r: 74, g: 20, b: 140 },
  { name: 'Violet', r: 103, g: 58, b: 183 },
  { name: 'Magenta', r: 175, g: 82, b: 222 },
  { name: 'Pink', r: 240, g: 98, b: 146 },
  { name: 'Hot Pink', r: 233, g: 30, b: 99 },
  { name: 'Lavender', r: 186, g: 104, b: 200 },
  { name: 'Brown', r: 141, g: 110, b: 99 },
  { name: 'Dark Brown', r: 93, g: 64, b: 55 },
  { name: 'Tan', r: 215, g: 204, b: 200 }
];

// Application State
const state = {
  slotCount: 2, // 2 or 3 slots
  slot1Color: '#FF3B30',
  slot2Color: '#007AFF',
  slot3Color: '#FFD60A',
  activeSlot: 1, // 1, 2, or 3
  activeFilter: 'all',
  isSpinning: false,
  targetRpm: 1800,
  currentRpm: 0,
  angle: 0,
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
  eqPlusSlot3: document.getElementById('eqPlusSlot3'),
  eqSlot3Item: document.getElementById('eqSlot3Item'),
  eqSlot3Dot: document.getElementById('eqSlot3Dot'),
  eqSlot3Name: document.getElementById('eqSlot3Name'),
  eqResultDot: document.getElementById('eqResultDot'),
  eqResultName: document.getElementById('eqResultName'),
  eqResultItem: document.getElementById('eqResultItem'),
  eqResultHex: document.getElementById('eqResultHex'),

  // Palette Holder
  paletteHolder: document.getElementById('paletteHolder'),
  mode2SlotsBtn: document.getElementById('mode2SlotsBtn'),
  mode3SlotsBtn: document.getElementById('mode3SlotsBtn'),
  slotTargetSelector: document.getElementById('slotTargetSelector'),
  tabSlot1: document.getElementById('tabSlot1'),
  tabSlot2: document.getElementById('tabSlot2'),
  tabSlot3: document.getElementById('tabSlot3'),
  swapSlotsBtn: document.getElementById('swapSlotsBtn'),
  dotSlot1: document.getElementById('dotSlot1'),
  dotSlot2: document.getElementById('dotSlot2'),
  dotSlot3: document.getElementById('dotSlot3'),
  paletteHint: document.getElementById('paletteHint'),
  colorCirclesGrid: document.getElementById('colorCirclesGrid'),

  // Dynamo & CD Disc
  dynamoAssembly: document.getElementById('dynamoAssembly') || document.querySelector('.dynamo-assembly'),
  tachometerRing: document.getElementById('tachometerRing'),
  cdDisc: document.getElementById('cdDisc'),
  cdSector1: document.getElementById('cdSector1'),
  cdSector2: document.getElementById('cdSector2'),
  cdSector3: document.getElementById('cdSector3'),
  sectorFill1: document.getElementById('sectorFill1'),
  sectorFill2: document.getElementById('sectorFill2'),
  sectorFill3: document.getElementById('sectorFill3'),
  sectorHex1: document.getElementById('sectorHex1'),
  sectorHex2: document.getElementById('sectorHex2'),
  sectorHex3: document.getElementById('sectorHex3'),
  seam2SlotLine: document.getElementById('seam2SlotLine'),
  seams3SlotGroup: document.getElementById('seams3SlotGroup'),
  cdBlendOverlay: document.getElementById('cdBlendOverlay'),
  shortcutSlot3Hint: document.getElementById('shortcutSlot3Hint'),

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

  let c, m, y;
  if (state.slotCount === 3) {
    const c3 = hexToRgb(state.slot3Color);
    const cmy3 = { c: 1 - c3.r / 255, m: 1 - c3.g / 255, y: 1 - c3.b / 255 };
    const factor = 1.7 / 3;
    c = Math.min(1, (cmy1.c + cmy2.c + cmy3.c) * factor);
    m = Math.min(1, (cmy1.m + cmy2.m + cmy3.m) * factor);
    y = Math.min(1, (cmy1.y + cmy2.y + cmy3.y) * factor);
  } else {
    // 2-Slot Subtractive pigment blend
    c = Math.min(1, (cmy1.c + cmy2.c) * 0.85);
    m = Math.min(1, (cmy1.m + cmy2.m) * 0.85);
    y = Math.min(1, (cmy1.y + cmy2.y) * 0.85);
  }

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
  const normHex = hex.toUpperCase();
  const is1 = state.slot1Color.toUpperCase() === normHex;
  const is2 = state.slot2Color.toUpperCase() === normHex;
  const is3 = state.slotCount === 3 && state.slot3Color.toUpperCase() === normHex;

  const matchCount = (is1 ? 1 : 0) + (is2 ? 1 : 0) + (is3 ? 1 : 0);

  if (matchCount > 1) {
    btn.setAttribute('data-selected-slot', matchCount === 3 ? 'multi' : (is1 && is2 ? 'both' : 'multi'));
  } else if (is1) {
    btn.setAttribute('data-selected-slot', '1');
  } else if (is2) {
    btn.setAttribute('data-selected-slot', '2');
  } else if (is3) {
    btn.setAttribute('data-selected-slot', '3');
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
    if (elements.sectorHex1) elements.sectorHex1.textContent = hex;
    if (elements.dotSlot1) elements.dotSlot1.style.backgroundColor = hex;
  } else if (slotNumber === 2) {
    state.slot2Color = hex;
    if (elements.sectorHex2) elements.sectorHex2.textContent = hex;
    if (elements.dotSlot2) elements.dotSlot2.style.backgroundColor = hex;
  } else if (slotNumber === 3) {
    state.slot3Color = hex;
    if (elements.sectorHex3) elements.sectorHex3.textContent = hex;
    if (elements.dotSlot3) elements.dotSlot3.style.backgroundColor = hex;
  }

  // Update root CSS variables and disc sectors
  document.documentElement.style.setProperty(`--slot${slotNumber}-color`, hex);

  updateAllPaletteIndicators();
  updateOutputDisplay();

  // If spinning, trigger physical visual response
  if (state.isSpinning) {
    triggerDiscRipple();
  }
}

function setActiveSlot(slotNumber) {
  state.activeSlot = slotNumber;
  [1, 2, 3].forEach((num) => {
    const tab = elements[`tabSlot${num}`];
    const sector = elements[`cdSector${num}`];
    if (tab) tab.classList.toggle('active', num === slotNumber);
    if (sector) sector.classList.toggle('slot-active-target', num === slotNumber);
  });

  updateAllPaletteIndicators();
}

function setSlotCount(count) {
  state.slotCount = count;
  const is3 = count === 3;

  if (elements.mode2SlotsBtn) elements.mode2SlotsBtn.classList.toggle('active', !is3);
  if (elements.mode3SlotsBtn) elements.mode3SlotsBtn.classList.toggle('active', is3);

  if (elements.cdDisc) {
    elements.cdDisc.classList.toggle('slots-3', is3);
    elements.cdDisc.classList.toggle('slots-2', !is3);
  }

  if (elements.cdSector3) {
    elements.cdSector3.style.display = is3 ? 'block' : 'none';
  }

  if (elements.seams3SlotGroup) {
    elements.seams3SlotGroup.style.display = is3 ? 'inline' : 'none';
  }
  if (elements.seam2SlotLine) {
    elements.seam2SlotLine.style.display = is3 ? 'none' : 'inline';
  }

  if (elements.slotTargetSelector) {
    elements.slotTargetSelector.classList.toggle('slots-3', is3);
  }

  if (elements.tabSlot3) {
    elements.tabSlot3.style.display = is3 ? 'flex' : 'none';
  }

  if (elements.eqPlusSlot3) {
    elements.eqPlusSlot3.style.display = is3 ? 'inline' : 'none';
  }
  if (elements.eqSlot3Item) {
    elements.eqSlot3Item.style.display = is3 ? 'inline-flex' : 'none';
  }

  if (elements.shortcutSlot3Hint) {
    elements.shortcutSlot3Hint.style.display = is3 ? 'inline' : 'none';
  }

  if (elements.paletteHint) {
    elements.paletteHint.textContent = is3
      ? 'Pick a slot above, then tap a color to paint that third.'
      : 'Pick a slot above, then tap a color to paint that half.';
  }

  if (!is3 && state.activeSlot === 3) {
    setActiveSlot(1);
  } else {
    setActiveSlot(state.activeSlot);
  }

  updateAllPaletteIndicators();
  updateOutputDisplay();

  showToast(is3 ? 'Activated 3-Color Spinner Mode (120° Sectors)' : 'Switched to 2-Color Spinner Mode (180° Halves)');
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

  // Update Equation Ribbon inputs (Slot 1, Slot 2, Slot 3)
  const s1Name = getNearestColorName(state.slot1Color);
  const s2Name = getNearestColorName(state.slot2Color);
  if (elements.eqSlot1Dot) elements.eqSlot1Dot.style.backgroundColor = state.slot1Color;
  if (elements.eqSlot1Name) elements.eqSlot1Name.textContent = s1Name;
  if (elements.eqSlot2Dot) elements.eqSlot2Dot.style.backgroundColor = state.slot2Color;
  if (elements.eqSlot2Name) elements.eqSlot2Name.textContent = s2Name;

  if (state.slotCount === 3) {
    const s3Name = getNearestColorName(state.slot3Color);
    if (elements.eqSlot3Dot) elements.eqSlot3Dot.style.backgroundColor = state.slot3Color;
    if (elements.eqSlot3Name) elements.eqSlot3Name.textContent = s3Name;
  }

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
  if (state.slotCount === 3) {
    const c1 = state.slot1Color;
    const c2 = state.slot2Color;
    const c3 = state.slot3Color;
    assignColorToSlot(1, c3);
    assignColorToSlot(2, c1);
    assignColorToSlot(3, c2);
    showToast('Cycled colors: Slot 1 ➜ Slot 2 ➜ Slot 3 ➜ Slot 1');
  } else {
    const temp = state.slot1Color;
    assignColorToSlot(1, state.slot2Color);
    assignColorToSlot(2, temp);
    showToast('Swapped Slot 1 and Slot 2 colors');
  }
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
    slot2: state.slot2Color,
    slot3: state.slot3Color,
    slotCount: state.slotCount
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
    chip.setAttribute('title', `${item.name} (${item.hex}) - Click to restore`);

    chip.addEventListener('click', () => {
      if (item.slotCount === 3) {
        setSlotCount(3);
        assignColorToSlot(1, item.slot1);
        assignColorToSlot(2, item.slot2);
        assignColorToSlot(3, item.slot3);
        showToast(`Restored trio: ${item.name}`);
      } else {
        setSlotCount(2);
        assignColorToSlot(1, item.slot1);
        assignColorToSlot(2, item.slot2);
        showToast(`Restored pair: ${item.name}`);
      }
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

  if (state.slotCount === 3) {
    let idx3 = Math.floor(Math.random() * COLOR_PRESETS.length);
    while (idx3 === idx1 || idx3 === idx2) {
      idx3 = Math.floor(Math.random() * COLOR_PRESETS.length);
    }
    const p3 = COLOR_PRESETS[idx3];
    assignColorToSlot(3, p3.hex);
    triggerDiscRipple();
    showToast(`🎲 Surprise Trio: ${p1.name} + ${p2.name} + ${p3.name}!`);
  } else {
    triggerDiscRipple();
    showToast(`🎲 Surprise Pair: ${p1.name} + ${p2.name}!`);
  }
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

  // Clicking Sector 3 selects Slot 3 as active target
  if (elements.cdSector3) {
    elements.cdSector3.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveSlot(3);
      showToast('Selected CD Slot 3 - Pick a color');
    });
  }

  // Clicking anywhere on the CD when idle toggles the active slot
  if (elements.cdDisc) {
    elements.cdDisc.addEventListener('click', () => {
      if (!state.isSpinning) {
        let next;
        if (state.slotCount === 3) {
          next = state.activeSlot === 3 ? 1 : state.activeSlot + 1;
        } else {
          next = state.activeSlot === 1 ? 2 : 1;
        }
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

  // 2-Slot vs 3-Slot Mode Toggles
  if (elements.mode2SlotsBtn) {
    elements.mode2SlotsBtn.addEventListener('click', () => setSlotCount(2));
  }
  if (elements.mode3SlotsBtn) {
    elements.mode3SlotsBtn.addEventListener('click', () => setSlotCount(3));
  }

  // Slot Tabs & Swap in Palette Holder
  elements.tabSlot1.addEventListener('click', () => setActiveSlot(1));
  elements.tabSlot2.addEventListener('click', () => setActiveSlot(2));
  if (elements.tabSlot3) {
    elements.tabSlot3.addEventListener('click', () => setActiveSlot(3));
  }
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
    } else if (e.key === '3') {
      if (state.slotCount === 2) {
        setSlotCount(3);
        setActiveSlot(3);
      } else {
        setActiveSlot(3);
        showToast('Selected CD Slot 3');
      }
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
  setSlotCount(2);
  setActiveSlot(1);
  setupSectorClickHandlers();
  setupCopyButtons();
  setupEventListeners();
  updateOutputDisplay();

  // Start Animation Loop
  requestAnimationFrame(animationLoop);
}

document.addEventListener('DOMContentLoaded', init);
