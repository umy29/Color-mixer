# ⚡ Dynamo Color Mixer

An interactive single-page web application featuring an industrial motor apparatus that spins a dual-color CD to blend colors via dynamic pigment fusion.

---

## 🎨 Features & Architecture

### 1. 📐 Top-Right Rectangular Color Palette Holder
- **Rectangular Container**: Cleanly boxed in the upper-right corner per design specifications.
- **45 Curated Circular Swatches**: Rich, expanded palette across 5 categories: Warm, Cool, Vivid, and Earth/Nature hues.
- **Category Filter Pills**: Quickly filter colors between `All (45)`, `Warm (14)`, `Cool (12)`, `Vivid (10)`, and `Earth (9)`.
- **Instant Click-to-Assign**: Select **CD Slot 1** or **CD Slot 2**, then click any circular swatch to instantly assign that color.
- **Dual Slot Control**: Active indicator dots showing which sector will receive the color, plus a one-click **Swap Colors (⇄)** button.
- **Custom Color Picker**: A native color picker with real-time HEX feedback to mix and apply any custom color.

### 2. ⚙️ Centered Dynamo Disc & Turntable Assembly
- **Clean Disc Presentation**: Streamlined turntable spindle with tachometer speed ring, holographic sheen, and dynamic electromagnetic aura (uncluttered by external stator housing or base footing).
- **Two-Color CD Disc**:
  - **Sector 1 (Left 0°–180°)**: Holds Color 1 (clickable to select as target).
  - **Sector 2 (Right 180°–360°)**: Holds Color 2 (clickable to select as target).
  - **Holographic Grooves & Radial Reflection**: Realistic iridescent CD sheen that rotates smoothly with the disc.
  - **Center Hub & Spindle**: Chrome dynamo shaft tip and clear acrylic clamp.
- **Live Color Equation Ribbon**: Real-time equation bar above the disc displaying `[Color 1] + [Color 2] ➜ [Mixed Result]`.

### 3. 🔘 Tactical "ON" Power Switch & Rotation Physics
- **Heavy-Duty ON/OFF Switch**: Industrial toggle with green glow, voltage pulses, and status readouts.
- **Silent Rotation Physics**: Completely audio-free rotational physics using `requestAnimationFrame` with smooth acceleration from 0 up to 3600 RPM.
- **Smooth Color Fusion**: As the dynamo accelerates past ~600 RPM, the sectors fuse smoothly into the perceived composite color.
- **Speed Dial & Presets**: Slider control with 3 instant preset buttons: **600 Slow**, **1800 Fast**, and **3600 Turbo**.

### 4. 🧪 Output & Color Analysis Station
- **Chamber Preview**: Dynamic preview with subtle energy ripples and animated gradient borders.
- **Nearest-Color Naming Algorithm**: Intelligently identifies color names like *Amethyst Violet*, *Sunset Orange*, *Kelly Green*, and *Royal Indigo*.
- **Color Values**: Real-time HEX, RGB, and HSL readouts with 1-click **Copy** buttons.
- **Physical Pigment Mixing Engine**: Real-world subtractive CMY light absorption blending (e.g. Electric Blue + Sunshine Yellow blends to Green, Red + Blue blends to Purple).
- **Recent Mixes Strip**: Saves recent combinations for one-click restoration.

### 5. ☀️ Light & Dark Mode Theming
- **Instant Theme Toggle**: Switch effortlessly between a deep sci-fi dark laboratory and a clean, high-contrast light laboratory with one click or hotkey (<kbd>T</kbd>).
- **Persistent Preference**: Automatically saves your preferred theme in `localStorage` and adapts to system `prefers-color-scheme`.
- **Contrast & Legibility**: Carefully calibrated slate backgrounds, crisp text hierarchy, subtle glassmorphic elevation, and vivid sector accents.

### 6. 🔬 Color Theory Guide & Randomizer
- **Surprise Pair Generator**: Randomizes vibrant, aesthetically balanced color pairs with one click or hotkey (<kbd>R</kbd>).
- **Color Theory Guide**: Interactive modal explaining physical pigment color fusion.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| <kbd>Space</kbd> | Toggle Dynamo Motor ON / OFF |
| <kbd>1</kbd> | Select CD Slot 1 as active target |
| <kbd>2</kbd> | Select CD Slot 2 as active target |
| <kbd>S</kbd> | Swap Slot 1 and Slot 2 colors |
| <kbd>R</kbd> | Pick a random surprise color pair |
| <kbd>T</kbd> | Toggle Light / Dark Mode theme |
| <kbd>Esc</kbd> | Close Color Theory dialog |

---

## 🚀 How to Run

No installations, build steps, or external dependencies are required.

Simply open [`index.html`](file:///c:/Users/User/Desktop/Color-mixer/index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).

Alternatively, serve with any local HTTP server:
```bash
# Using Python
python -m http.server 8000

# Or using Node.js npx
npx serve .
```

---

## 📁 Project Structure

```
Color-mixer/
├── index.html       # Semantic HTML5 3-panel command dashboard
├── style.css        # Futuristic glassmorphism, responsive grid & CD animations
├── script.js        # Rotational physics, color theory algorithms & interaction
└── README.md        # Comprehensive documentation
```
