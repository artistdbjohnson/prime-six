# Prime 6 — motion meeting
Date: 2026-10-06  
Pass: one motion pass on the shipped Motionsites creative-studio chassis  
Looked at: https://www.prompt-motion.com/ (attitude and timing only — no video rehost, no prompt packs)  
Live host returned 402 `DEPLOYMENT_DISABLED`. Index attitude taken from the same-day capture of that URL.  
Site: charcoal pitch already at ember-hex ignition + fire hero. Source https://www.prime-six.com/ · pitch https://prime-six.vercel.app

## Seats
Vale (restraint), Reed (taste), Glyph (mark), Ash (material). Axiom sat optional — the ember-hex open is already theirs.

## What is already in motion
- **Intro, locked:** Axiom ember-hex ignition, ~1.15s ignite, dissolve by 1.55s, once per session, skip on hash and `prefers-reduced-motion`. This is the only open.
- Hero wordmask + stat/CTA rise after ignition, on the existing curve `cubic-bezier(0.22, 1, 0.36, 1)`.
- Burn-story scroll film (three beats + progress rule). Do not stack a second scroll film on it.

## Prompt Motion — attitude we actually used
Index chrome, not the reels:

| Gesture | Timing on the index |
| --- | --- |
| Poster settles (opacity + filter) | 500ms `ease-out`, killed by `motion-reduce` |
| Preview crossfade | 300ms `ease-out` |
| Hover ring | 200ms |
| Type color | 150ms |

Public labels on the shelf split into two temperatures. The quiet shelf (Swiss-style, easing and morphing, type / form / space, geometric, logo reveal) is the attitude. The loud shelf (kinetic-type showreels, beat-sync, particles, psychedelic) is the thing this brand is not.

Steal the settle: one thing arrives soft and is sharp in about half a second, ease-out, once, and reduced motion removes the transition. Do not import showreel language.

Prime 6 already owns the curve `cubic-bezier(0.22, 1, 0.36, 1)`. Keep it. Match the index duration (500ms) instead of introducing a second easing family.

## Options

| Option | Vote | Why |
| --- | --- | --- |
| Second intro, splash, or kinetic-type hero | Reject | Ember-hex already ships. Portfolio locks still hold (BRA splash, Batley quiet type). A second open would compete. |
| Ken Burns on the fire loop or the plates | Reject | Boho owns scroll Ken Burns. Scale drift changes the photograph. |
| Proof-chip stagger | Reject | Vale: too many moving parts on a credibility dock. |
| Economics count-up | Reject | Reed: slot-machine figures fight a live slider. |
| Menu wipe | Reject | Layout chrome stays. |
| Light retune of ember-hex timing | Reject | Axiom: 1.15s / 1.55s already sits in the locked 1.0–1.2s band. Leave it. |
| **Plate settle** | **WIN** | Ash + Vale. Editorial photographs only: hearth, service pizza, Terry portrait. Blur 6px and opacity 0.86 resolve to sharp in 500ms, once, in view. Logos, product cutouts, diagrams, chef thumbnails, and the burn-story film stay still. |
| **Proof-dock rule** | **WIN** | Glyph. One 1px accent rule draws across the existing credibility border in 640ms, then fades out in 240ms. Resting state is the same matte line. Once. |

## Locked
Two elements. No new intro.

1. **Plate settle** — `PlateSettle` on `/media/hearth.jpg`, `/media/pizza.jpg`, `/media/lifestyle.jpg`.
2. **Proof-dock rule** — absolute rule on the home credibility rail. No layout shift. Accent is the existing `#DF5826` token and it does not remain.

`prefers-reduced-motion: reduce` and `scripting: none` force plates sharp and hide the rule. Ignition session-skip is unchanged.

## Copy / brand
No copy edits. No logo swaps. No font, typeface, color, or chrome changes. Motion is arrival only; the resting page matches the chassis.
