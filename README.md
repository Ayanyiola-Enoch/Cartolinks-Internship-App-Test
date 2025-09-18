# Cartolinks Quiz

A React Native Expo application for creating stunning promotional posters with AI-powered design suggestions.

## Features

- Smart script generation for poster creation
- Multiple poster templates and categories
- Customizable settings (size, category)
- Modern dark UI with gradient effects
- Cross-platform support (iOS, Android, Web)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd poster-generator-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the Expo Go app on your phone and scan the QR code, or run on a simulator.

## Project Structure

```
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Main poster creation screen
│   │   ├── advanced.tsx       # Advanced scripting (coming soon)
│   │   └── _layout.tsx        # Tab navigation layout
│   ├── _layout.tsx            # Root layout
│   └── +not-found.tsx         # 404 screen
├── hooks/
│   └── useFrameworkReady.ts   # Framework initialization hook
└── assets/                    # Static assets

```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build:web` - Build for web deployment
- `npm run lint` - Run ESLint

## Technologies Used

- React Native
- Expo Router
- TypeScript
- Expo Linear Gradient
- Lucide React Native (icons)
- React Native Reanimated

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.# Cartolinks-Internship-App-Test
