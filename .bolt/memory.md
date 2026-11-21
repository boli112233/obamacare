# Project memory

## Product intent & audience

- Solana memecoin/coin website (token launch site)
- Likely a pump.fun-style token (contract address ends in "pump")
- Target audience: crypto investors/meme coin community
- Accepts crypto donations via a Solana wallet address

## Brand personality & voice

- Crypto/memecoin culture; casual but production-quality

## Visual design & UX direction

- Hero component is the primary landing section
- Hero includes launch details with a contract address (CA) block + "Copy CA" button
- Donate component includes a crypto section with a Solana wallet address
- Footer now contains both a CA block and a Solana wallet block, each with its own Copy button — ensures both are visible site-wide on every page
- Lucide React icons used throughout

## Decisions, constraints & rationale

- Stack: Vite + React, Tailwind CSS, Lucide React icons
- Path alias `@/` maps to `src/`
- No extra UI/theme/icon packages unless explicitly requested
- Contract address: `8eAuu9WtPWAecAbV7gybm36YhcDRprSzRt6P8uPipump` (Solana)
- Solana donation wallet address exists in Donate component (full value not yet captured in memory)
- CA + wallet block added to Footer so both are always visible; Hero CA and Donate wallet remain unchanged in their original locations
- User cares about CA visibility (was removed/restored at least once before)

## Open questions & assumptions

- Full Solana wallet address should be confirmed/captured for consistency
- Whether the CA and wallet values are final or need updating is unknown
- No confirmation yet on whether the Footer CA/wallet styling should differ from Hero/Donate originals