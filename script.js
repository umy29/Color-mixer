/**
 * DYNAMO COLOR MIXER
 * Optical Persistence & Pigment Mixing Laboratory
 */

// Preset Color Choices for the Rectangle Palette Holder
const COLOR_PRESETS = [
  { name: 'Crimson Red', hex: '#FF3B30' },
  { name: 'Electric Blue', hex: '#007AFF' },
  { name: 'Sunshine Yellow', hex: '#FFCC00' },
  { name: 'Emerald Green', hex: '#34C759' },
  { name: 'Neon Cyan', hex: '#32ADE6' },
  { name: 'Deep Purple', hex: '#5856D6' },
  { name: 'Vivid Magenta', hex: '#AF52DE' },
  { name: 'Tangerine Orange', hex: '#FF9500' },
  { name: 'Hot Coral Pink', hex: '#FF2D55' },
  { name: 'Electric Lime', hex: '#A4E739' },
  { name: 'Amber Gold', hex: '#FF9F0A' },
  { name: 'Mint Seafoam', hex: '#30B0C7' },
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Charcoal Noir', hex: '#1C1C1E' },
  { name: 'Warm Terracotta', hex: '#E06D53' },
  { name: 'Deep Ultramarine', hex: '#1B1464' }
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
  isSpinning: false,
  targetRpm: 1800,
  currentRpm: 0,
  angle: 0,
  mixMode: 'optical', // 'optical' or 'pigment'
  soundEnabled: true,
  recentMixes: []
};

// Web Audio API Motor Synthesizer
let audioCtx = null;
let motorOsc = null;
let motorGain = null;
let motorFilter = null;
let subOsc = null;
let subGain = null;

function initAudio() {
  if (audioCtx) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();

    // Master motor oscillator (triangle wave for whirring hum)
    motorOsc = audioCtx.createOscillator();
    motorOsc.type = 'sawtooth';
    motorOsc.frequency.setValueAtTime(40, audioCtx.currentTime);

    // Sub rumble oscillator
    subOsc = audioCtx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(25, audioCtx.currentTime);

    // Lowpass filter to muffle raw saw into realistic mechanical drone
    motorFilter = audioCtx.createBiquadFilter();
    motorFilter.type = 'lowpass';
    motorFilter.frequency.setValueAtTime(120, audioCtx.currentTime);

    // Motor Gain
    motorGain = audioCtx.createGain();
    motorGain.gain.setValueAtTime(0, audioCtx.currentTime);

    // Sub Gain
    subGain = audioCtx.createGain();
    subGain.gain.setValueAtTime(0, audioCtx.currentTime);

    motorOsc.connect(motorFilter);
    motorFilter.connect(motorGain);
    motorGain.connect(audioCtx.destination);

    subOsc.connect(subGain);
    subGain.connect(audioCtx.destination);

    motorOsc.start();
    subOsc.start();
  } catch (err) {
    console.warn('AudioContext not allowed or not supported:', err);
  }
}

function updateAudio(rpmRatio) {
  if (!audioCtx || !state.soundEnabled) {
    if (motorGain && audioCtx) {
      motorGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
      subGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
    }
    return;
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const targetGain = rpmRatio > 0.02 ? 0.07 * rpmRatio : 0;
  const targetSubGain = rpmRatio > 0.02 ? 0.05 * rpmRatio : 0;

  // Frequency scales dynamically with dynamo speed
  const targetFreq = 40 + rpmRatio * 180; // 40Hz to 220Hz
  const filterFreq = 100 + rpmRatio * 650;

  motorOsc.frequency.setTargetAtTime(targetFreq, now, 0.08);
  subOsc.frequency.setTargetAtTime(targetFreq * 0.5, now, 0.08);
  motorFilter.frequency.setTargetAtTime(filterFreq, now, 0.08);

  motorGain.gain.setTargetAtTime(targetGain, now, 0.08);
  subGain.gain.setTargetAtTime(targetSubGain, now, 0.08);
}

// DOM References
const elements = {
  // Status Header
  statusIndicator: document.getElementById('statusIndicator'),
  statusText: document.getElementById('statusText'),
  rpmDisplay: document.getElementById('rpmDisplay'),

  // Palette Holder
  paletteHolder: document.getElementById('paletteHolder'),
  tabSlot1: document.getElementById('tabSlot1'),
  tabSlot2: document.getElementById('tabSlot2'),
  swapSlotsBtn: document.getElementById('swapSlotsBtn'),
  dotSlot1: document.getElementById('dotSlot1'),
  dotSlot2: document.getElementById('dotSlot2'),
  colorCirclesGrid: document.getElementById('colorCirclesGrid'),
  customColorDraggable: document.getElementById('customColorDraggable'),
  customColorInput: document.getElementById('customColorInput'),
  customColorRing: document.getElementById('customColorRing'),
  customColorHex: document.getElementById('customColorHex'),
  applyCustomBtn: document.getElementById('applyCustomBtn'),

  // Dynamo & CD Disc
  dynamoAssembly: document.getElementById('dynamoAssembly') || document.querySelector('.dynamo-assembly'),
  dynamoDragPill: document.getElementById('dynamoDragPill'),
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

  // Output Station
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  soundIcon: document.getElementById('soundIcon'),
  outputColorPreview: document.getElementById('outputColorPreview'),
  outputColorName: document.getElementById('outputColorName'),
  blendModelBadge: document.getElementById('blendModelBadge'),
  hexVal: document.getElementById('hexVal'),
  rgbVal: document.getElementById('rgbVal'),
  hslVal: document.getElementById('hslVal'),
  recentChips: document.getElementById('recentChips'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
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

// Global Drag State
let currentDraggedColor = null;
let currentDraggedName = null;

function startDragging(hex, name, sourceEl) {
  currentDraggedColor = hex;
  currentDraggedName = name;
  document.body.classList.add('is-dragging-color');
  if (sourceEl) sourceEl.classList.add('dragging');
}

function endDragging(sourceEl) {
  currentDraggedColor = null;
  currentDraggedName = null;
  document.body.classList.remove('is-dragging-color');
  if (sourceEl) sourceEl.classList.remove('dragging');
  clearAllDragHighlights();
}

function clearAllDragHighlights() {
  if (elements.cdSector1) elements.cdSector1.classList.remove('drag-over');
  if (elements.cdSector2) elements.cdSector2.classList.remove('drag-over');
  if (elements.dynamoAssembly) elements.dynamoAssembly.classList.remove('drag-hover-dynamo');
}

function getTargetSlotFromCoords(clientX, clientY) {
  if (!elements.dynamoAssembly) return 1;
  const rect = elements.dynamoAssembly.getBoundingClientRect();
  const midX = rect.left + rect.width / 2;
  return clientX < midX ? 1 : 2;
}

function triggerDynamoDropPulse(slotNum) {
  if (!elements.dynamoAssembly) return;
  elements.dynamoAssembly.classList.add('dynamo-pulse-drop');
  const sector = slotNum === 1 ? elements.cdSector1 : elements.cdSector2;
  if (sector) sector.classList.add('sector-pulse-drop');
  setTimeout(() => {
    elements.dynamoAssembly.classList.remove('dynamo-pulse-drop');
    if (sector) sector.classList.remove('sector-pulse-drop');
  }, 400);
}

function enablePointerDrag(element, getColorFn, getNameFn) {
  element.addEventListener('pointerdown', (e) => {
    // Only primary button / touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const startX = e.clientX;
    const startY = e.clientY;
    let isDragging = false;
    let ghost = null;
    const hex = typeof getColorFn === 'function' ? getColorFn() : getColorFn;
    const name = typeof getNameFn === 'function' ? getNameFn() : (getNameFn || 'Color');

    function onPointerMove(moveEvent) {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      if (!isDragging && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        isDragging = true;
        startDragging(hex, name, element);

        ghost = document.createElement('div');
        ghost.className = 'custom-drag-ghost';
        ghost.style.backgroundColor = hex;
        ghost.textContent = '⚡';
        document.body.appendChild(ghost);
      }

      if (isDragging && ghost) {
        ghost.style.left = `${moveEvent.clientX}px`;
        ghost.style.top = `${moveEvent.clientY}px`;

        if (elements.dynamoAssembly) {
          const rect = elements.dynamoAssembly.getBoundingClientRect();
          if (
            moveEvent.clientX >= rect.left &&
            moveEvent.clientX <= rect.right &&
            moveEvent.clientY >= rect.top &&
            moveEvent.clientY <= rect.bottom
          ) {
            const slot = getTargetSlotFromCoords(moveEvent.clientX, moveEvent.clientY);
            if (slot === 1) {
              elements.cdSector1.classList.add('drag-over');
              elements.cdSector2.classList.remove('drag-over');
            } else {
              elements.cdSector2.classList.add('drag-over');
              elements.cdSector1.classList.remove('drag-over');
            }
            elements.dynamoAssembly.classList.add('drag-hover-dynamo');
          } else {
            clearAllDragHighlights();
          }
        }
      }
    }

    function onPointerUp(upEvent) {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      if (isDragging) {
        if (elements.dynamoAssembly) {
          const rect = elements.dynamoAssembly.getBoundingClientRect();
          if (
            upEvent.clientX >= rect.left &&
            upEvent.clientX <= rect.right &&
            upEvent.clientY >= rect.top &&
            upEvent.clientY <= rect.bottom
          ) {
            const slot = getTargetSlotFromCoords(upEvent.clientX, upEvent.clientY);
            assignColorToSlot(slot, hex);
            setActiveSlot(slot);
            triggerDynamoDropPulse(slot);
            showToast(`⚡ Absorbed ${hex} into Dynamo Slot ${slot}!`);
          }
        }

        if (ghost) ghost.remove();
        clearAllDragHighlights();
        endDragging(element);
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  });
}

function renderPaletteSwatches() {
  elements.colorCirclesGrid.innerHTML = '';

  COLOR_PRESETS.forEach((preset, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'color-circle-btn';
    btn.style.setProperty('--btn-color', preset.hex);
    btn.setAttribute('title', `${preset.name} (${preset.hex}) - Drag onto Dynamo or click to assign`);
    btn.setAttribute('aria-label', `${preset.name}: ${preset.hex}`);
    btn.setAttribute('data-color', preset.hex);
    btn.setAttribute('data-name', preset.name);
    btn.draggable = true;

    // Highlight if currently assigned to any slot
    updateButtonSlotIndicator(btn, preset.hex);

    // Click handler to assign to current active slot
    btn.addEventListener('click', () => {
      assignColorToSlot(state.activeSlot, preset.hex);
    });

    // Native HTML5 Drag and Drop handlers
    btn.addEventListener('dragstart', (e) => {
      startDragging(preset.hex, preset.name, btn);
      if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', preset.hex);
        e.dataTransfer.setData('text/hex', preset.hex);
        e.dataTransfer.effectAllowed = 'copy';
      }
    });

    btn.addEventListener('dragend', () => {
      endDragging(btn);
    });

    // Pointer-based drag for universal touch and mouse support
    enablePointerDrag(btn, () => preset.hex, preset.name);

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

  // If spinning, play dynamic transition
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

// ============================================================================
// DYNAMO MOTOR SIMULATION & ANIMATION LOOP
// ============================================================================

let lastTimestamp = 0;

function toggleDynamoPower() {
  initAudio();
  state.isSpinning = !state.isSpinning;

  if (state.isSpinning) {
    elements.powerBtn.classList.add('active');
    elements.powerBtnText.textContent = 'STOP DYNAMO';
    elements.powerStateSubtext.textContent = 'Dynamo active • Generating RPM';
    elements.statusIndicator.classList.add('active');
    elements.statusText.textContent = 'DYNAMO ENERGIZED';
    elements.dynamoAssembly.classList.add('dynamo-active');

    const mixedHex = calculateCurrentMix();
    const name = getNearestColorName(mixedHex);
    addRecentMixToHistory(mixedHex, name);
    showToast(`Dynamo engaged! Mixing ${name}...`);
  } else {
    elements.powerBtn.classList.remove('active');
    elements.powerBtnText.textContent = 'TURN ON';
    elements.powerStateSubtext.textContent = 'Press to engage dynamo';
    elements.statusIndicator.classList.remove('active');
    elements.statusText.textContent = 'DYNAMO IDLE';
    elements.dynamoAssembly.classList.remove('dynamo-active');
  }
}

function animationLoop(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1); // clamp dt to avoid jumps
  lastTimestamp = timestamp;

  // Smooth acceleration / deceleration
  const target = state.isSpinning ? state.targetRpm : 0;
  const accelRate = state.isSpinning ? 1800 : 900; // RPM per second

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
  // Human eyes blend color sectors together when passing ~600-1200 RPM
  const blendThreshold = 500;
  const fullBlendRpm = 1600;
  let blendOpacity = 0;

  if (state.currentRpm > blendThreshold) {
    blendOpacity = Math.min(1, (state.currentRpm - blendThreshold) / (fullBlendRpm - blendThreshold));
  }

  elements.cdOpticalBlend.style.opacity = blendOpacity.toFixed(3);

  // Audio update
  const rpmRatio = state.currentRpm / 3600;
  updateAudio(rpmRatio);

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
        }).catch(() => {
          showToast(`Copy failed. Value: ${textToCopy}`);
        });
      }
    });
  });
}

// ============================================================================
// SETUP DRAG & DROP ON DYNAMO & CD SECTORS
// ============================================================================

function setupDragAndDrop() {
  // 1. Dynamo Assembly as a Master Drop Zone
  if (elements.dynamoAssembly) {
    elements.dynamoAssembly.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';

      const slot = getTargetSlotFromCoords(e.clientX, e.clientY);
      if (slot === 1) {
        elements.cdSector1.classList.add('drag-over');
        elements.cdSector2.classList.remove('drag-over');
      } else {
        elements.cdSector2.classList.add('drag-over');
        elements.cdSector1.classList.remove('drag-over');
      }
      elements.dynamoAssembly.classList.add('drag-hover-dynamo');
    });

    elements.dynamoAssembly.addEventListener('dragleave', (e) => {
      const rect = elements.dynamoAssembly.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        clearAllDragHighlights();
      }
    });

    elements.dynamoAssembly.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const hex =
        (e.dataTransfer && (e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/hex'))) ||
        currentDraggedColor;

      if (hex && /^#[0-9A-F]{3,6}$/i.test(hex)) {
        const slot = getTargetSlotFromCoords(e.clientX, e.clientY);
        assignColorToSlot(slot, hex);
        setActiveSlot(slot);
        triggerDynamoDropPulse(slot);
        showToast(`⚡ Absorbed ${hex} into Dynamo Slot ${slot}!`);
      }

      clearAllDragHighlights();
      endDragging();
    });
  }

  // 2. Individual CD Sectors Direct Drops
  [elements.cdSector1, elements.cdSector2].forEach((sector) => {
    if (!sector) return;
    const slotNum = parseInt(sector.getAttribute('data-slot'), 10);

    sector.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
      sector.classList.add('drag-over');
    });

    sector.addEventListener('dragleave', () => {
      sector.classList.remove('drag-over');
    });

    sector.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      sector.classList.remove('drag-over');

      const hex =
        (e.dataTransfer && (e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/hex'))) ||
        currentDraggedColor;

      if (hex && /^#[0-9A-F]{3,6}$/i.test(hex)) {
        assignColorToSlot(slotNum, hex);
        setActiveSlot(slotNum);
        triggerDynamoDropPulse(slotNum);
        showToast(`⚡ Injected ${hex} into CD Slot ${slotNum}!`);
      }

      clearAllDragHighlights();
      endDragging();
    });

    // Clicking a sector makes it active target
    sector.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveSlot(slotNum);
    });
  });

  // Clicking on CD when idle can toggle slot or give feedback
  if (elements.cdDisc) {
    elements.cdDisc.addEventListener('click', () => {
      if (!state.isSpinning) {
        setActiveSlot(state.activeSlot === 1 ? 2 : 1);
      }
    });
  }

  // 3. Custom Color Picker Drag & Drop
  if (elements.customColorDraggable) {
    elements.customColorDraggable.addEventListener('dragstart', (e) => {
      const hex = elements.customColorInput.value.toUpperCase();
      startDragging(hex, 'Custom Hex', elements.customColorDraggable);
      if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', hex);
        e.dataTransfer.setData('text/hex', hex);
        e.dataTransfer.effectAllowed = 'copy';
      }
    });

    elements.customColorDraggable.addEventListener('dragend', () => {
      endDragging(elements.customColorDraggable);
    });

    // Pointer-based touch/mouse drag for custom picker
    enablePointerDrag(
      elements.customColorDraggable,
      () => elements.customColorInput.value.toUpperCase(),
      'Custom Hex'
    );
  }
}

// ============================================================================
// EVENT LISTENERS INITIALIZATION
// ============================================================================

function setupEventListeners() {
  // Slot Tabs & Swap in Palette Holder
  elements.tabSlot1.addEventListener('click', () => setActiveSlot(1));
  elements.tabSlot2.addEventListener('click', () => setActiveSlot(2));
  elements.swapSlotsBtn.addEventListener('click', swapColors);

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
  });

  // Mixing Algorithm Mode Toggle
  elements.modeOptical.addEventListener('click', () => {
    state.mixMode = 'optical';
    elements.modeOptical.classList.add('active');
    elements.modePigment.classList.remove('active');
    updateOutputDisplay();
    showToast("Switched to Maxwell's Optical Disc mixing");
  });

  elements.modePigment.addEventListener('click', () => {
    state.mixMode = 'pigment';
    elements.modePigment.classList.add('active');
    elements.modeOptical.classList.remove('active');
    updateOutputDisplay();
    showToast("Switched to Pigment Subtractive mixing");
  });

  // Sound Toggle
  elements.soundToggleBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elements.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    elements.soundToggleBtn.classList.toggle('active', state.soundEnabled);
    showToast(state.soundEnabled ? 'Motor audio enabled' : 'Motor audio muted');
  });

  // Clear History
  elements.clearHistoryBtn.addEventListener('click', () => {
    state.recentMixes = [];
    renderRecentMixes();
    showToast('Recent history cleared');
  });

  // Keyboard shortcut: Spacebar toggles dynamo power
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
      e.preventDefault();
      toggleDynamoPower();
    }
  });
}

// ============================================================================
// BOOTSTRAP APPLICATION
// ============================================================================

function init() {
  renderPaletteSwatches();
  setActiveSlot(1);
  setupDragAndDrop();
  setupCopyButtons();
  setupEventListeners();
  updateOutputDisplay();

  // Start Animation Loop
  requestAnimationFrame(animationLoop);
}

document.addEventListener('DOMContentLoaded', init);
