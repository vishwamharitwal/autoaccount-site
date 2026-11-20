# AutoAccount AI — Landing site

Vite + React + TypeScript + Tailwind v4. Components live under `src/components/ui` (shadcn-style).

## Dev

```bash
npm install
npm run dev
```

## Build (GitHub Pages)

```bash
npm run build
```

Output: `dist/`. Deploy the contents of `dist/` to the Pages root (or set Pages to GitHub Actions that runs `npm run build`).

## Structure

- `src/components/ui/ink-ridges.tsx` — hero WebGL sumi-e ridges
- `src/components/ui/ridgeline-dither-footer.tsx` — dither mountain footer
- Theme: cream `#FFFAF3`, ink `#1A1512`, accent `#F62440`
