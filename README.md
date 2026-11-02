# ⚡ Dynamo Color Mixer

An interactive single-page web application featuring an industrial motor apparatus that spins a dual-color CD to blend colors via optical persistence of vision and pigment fusion.

![Dynamo Color Mixer Preview](index.html)

---

## 🎨 Features

### 1. 📐 Top-Right Rectangular Color Palette Holder
- **Rectangular Container**: Prominently boxed in the upper-right corner.
- **45 Circular Color Choices**: An expanded, rich collection of 45 curated colors spanning vibrant reds, warm oranges, brilliant yellows, fresh greens, radiant cyans, rich blues, vivid purples, and balanced neutrals.
- **Instant Click-to-Assign**: Select **CD Slot 1** or **CD Slot 2**, then click any circular swatch to instantly assign that color.
- **Dual Slot Control**: Switch between **CD Slot 1** and **CD Slot 2** with active indicator dots, plus a one-click **Swap Colors (⇄)** button.
- **Custom Color Picker**: A circular color ring connected to a native color picker to mix and apply any custom HEX color.

### 2. ⚙️ Central Dynamo & Dual-Sector CD
- **Centered Turntable Assembly**: Smooth central rotor spindle with dynamic electromagnetic glow aura and compact disc hub.
- **Two-Color CD Disc**:
  - **Sector 1 (Left 0°–180°)**: Holds Color 1 (click to select as target).
  - **Sector 2 (Right 180°–360°)**: Holds Color 2 (click to select as target).
  - **Holographic Sheen & Grooves**: Realistic iridescent radial reflection that turns with the disc.
  - **Center Hub & Spindle**: Chrome dynamo shaft tip and acrylic clamp.

### 3. 🔘 Tactical "ON" Power Switch & Rotation Physics
- **Heavy-Duty ON/OFF Switch**: Industrial toggle with green glow, voltage pulses, and status readouts.
- **Rotational Physics**: Smooth acceleration from 0 up to 3600 RPM using `requestAnimationFrame`.
- **Optical Persistence of Vision**: As the dynamo accelerates past ~600 RPM, the two distinct sectors blend smoothly into the perceived composite color.
- **Shortcut**: Press <kbd>Spacebar</kbd> anytime to toggle the dynamo ON/OFF.

### 4. 🧪 Output & Color Analysis Station
- **Glowing Swatch Preview**: Dynamic preview with subtle energy ripples.
- **Human-Friendly Color Naming**: Nearest color matching algorithm identifies names like *Amethyst Violet*, *Sunset Orange*, *Kelly Green*, and *Royal Indigo*.
- **Color Values**: Real-time HEX, RGB, and HSL readouts with 1-click **Copy** buttons.
- **Mixing Modes**:
  - **👁️ Optical Disc**: Maxwell's disc additive temporal photon summation.
  - **🎨 Pigment Dye**: Subtractive CMY paint/dye mixing.
- **Recent Mixes Strip**: Saves recent combinations for one-click restoration.

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
├── index.html       # HTML5 Semantic layout & accessibility
├── style.css        # Futuristic industrial styling & animations
├── script.js        # Motor simulation, color math & interactivity
└── README.md        # Documentation
```

