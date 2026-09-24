# Prime 6 inventory

Pitch transplant of https://www.prime-six.com/ on the Motionsites `creative-studio` chassis. Copy is the published marketing language. Performance numbers are not extended past what the live site states.

## Chassis

| Creative-studio craft | Prime 6 remap |
| --- | --- |
| Full-bleed looping muted video | Published hearth film, 8s loop in `public/media/hero.mp4` |
| Uppercase wide-tracking Inter | Inter 500/600/700, labels tracking-widest, display headings tight |
| Right-aligned stats row | 60% up to fuel costs · 22 LB all usable · 1 tree per case with Veritree |
| Bottom-pinned heading + CTA | Chef-Tested / Fire / Perfected + Request a Hospitality Sample |
| Accent `#5E0ED7` | Logo orange `#DF5826` |
| Circle logo dot | Published `prime 6` wordmark |
| Hamburger + full-screen menu | Same motion; menu lists the published nav, including Biochar |
| `price-calculator` module | Hospitality economics only: radios, sliders, three stacked result cards. Relative LB and refills. Ceiling hard-stops at 60%. No dollars. |
| Matte surfaces | Solid nav, cards, and scrim. No backdrop-filter, no specular ring |

## Open

Axiom ember-hex ignition, about 1.15s, then a 400ms dissolve into the fire hero. Session key `p6-ember`. Skipped when the URL has a hash, `prefers-reduced-motion` is set, or the session already played. Inline boot script adds `skip-ignition` before paint.

## Axiom twists

1. Burn story — pinned scroll, three beats labeled with the published difference: Density (hardwood waste) → Process (controlled furnace) → Results (plated service). Static stack when motion is reduced.
2. Hospitality economics — `#calculator`. Fuel Charcoal / Wood / Both, weekly LB, hours on the current load, refills, and a ceiling slider that cannot pass 60%.
3. Credibility dock — USDA Certified, Woman-owned, Avendra, Shark Tank, Veritree, Chef Terry Koval, Chef Grant Achatz. Directly under the hero.

## Routes

| Path | Source |
| --- | --- |
| `/` | Home |
| `/why-prime-6` | /why-prime-6 |
| `/about` | /about |
| `/home-grillers` | /about-6 plus charcoal, firelog, and grill-kit pages |
| `/pro-chefs` | /applications |
| `/get-a-sample` | /get-a-sample, two steps |
| `/terry-koval` | /terry-koval |
| `/shark-tank` | /shark-tank titles; playback stays on the live page |
| `/sustainability` | Published disclaimer. Case math stays on the live dashboard because the formula is not in the static HTML |
| `/contact` | /contact-4 |
| Biochar | External http://www.prime6.com |

## Sample funnel

1. Qualify — hospitality or procurement, equipment, current fuel, sample type. A “no” stops on the published eligibility line.
2. Details — name, email, phone, restaurant, URL, shipping address, three distributors. “What happens next” uses the published sample sentences. Submit opens a mailto to info@prime-six.com. No API key.

## Theme and language

`p6-lang` and `p6-theme` in localStorage. Default EN + light. Dark inverts paper and charcoal. The hero type stays paper on the fire film in both themes.

## Assets

Published stills and the hearth film, resized for the web, in `public/media/`. Logo orange sampled from the wordmark: `#DF5826`.

## Not in this pitch

No invented deal terms, no dollar ROI, no sustainability case formula, no liquid-glass treatment, no public key in `vercel.json`.
