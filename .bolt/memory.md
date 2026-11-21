# Project memory

## Product intent & audience

- Solana memecoin/coin website (token launch site)
- Likely a pump.fun-style token (contract address ends in "pump")
- Target audience: crypto investors/meme coin community

## Brand personality & voice

- Crypto/memecoin culture; casual but production-quality

## Visual design & UX direction

- Hero component is the primary landing section
- Hero includes launch details with a contract address (CA) block + "Copy CA" button
- Has a Footer component (potential placement for additional CA display)
- Lucide React icons used throughout

## Decisions, constraints & rationale

- Stack: Vite + React, Tailwind CSS, Lucide React icons
- Path alias `@/` maps to `src/`
- No extra UI/theme/icon packages unless explicitly requested
- Contract address: `8eAuu9WtPWAecAbV7gybm36YhcDRprSzRt6P8uPipump` (Solana)
- CA block was previously removed/restored at least once — user cares about its visibility

## Open questions & assumptions

- User wants CA visible/added back; exact placement beyond Hero is unresolved (Hero vs Footer vs dedicated section)
- Whether the CA value is final or needs to be updated is unknown
- No confirmation yet if user wants a different layout/styling for the CA block vs. the existing one