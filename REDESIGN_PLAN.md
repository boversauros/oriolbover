# Portfolio Redesign Plan

## Design Philosophy

> "Beautiful design through usability and simplicity"

The site itself is the portfolio piece. It should demonstrate craft, taste, and understanding of design systems - not just list projects.

---

## Inspiration & Direction

**Reference points:** Vercel design engineers, OpenAI design system

**Key characteristics to adopt:**
- Refined, intentional typography
- Subtle micro-interactions (hover states, smooth transitions)
- Technical credibility through design details
- Dark mode as a first-class experience
- Monospace accents for developer identity
- Generous whitespace with purpose

---

## Proposed Changes

### 1. Typography Upgrade

**Current:** Inter with light weights
**Proposed:** Geist Sans + Geist Mono (Vercel's typeface)
- Sans for body text
- Mono for technical elements, accents, and subtle details
- Slightly heavier weights for better contrast

*Why:* Geist is purpose-built for developer/design tools. Signals awareness of modern design tooling.

---

### 2. Color Refinement

**Current:** Warm paper tones, sage green accent
**Proposed:** Neutral gray scale with a refined accent

```
Light mode:
- Background: #fafafa (crisp white-gray)
- Text: #171717 (near-black)
- Muted: #737373
- Accent: #0a0a0a or subtle blue

Dark mode:
- Background: #0a0a0a (true dark)
- Text: #fafafa
- Muted: #a3a3a3
- Accent: #fafafa or subtle blue
```

*Why:* Neutral palette feels more "systems" and less decorative. Lets content breathe.

---

### 3. Hero Section Rework

**Current:** Name, role, brief intro
**Proposed:** More intentional statement

```
Oriol Bover
Software Engineer

Building products with care for
usability and simplicity.

[Subtle status indicator: "Currently at X" or "Open to opportunities"]
```

- Larger name with tighter letter-spacing
- Role in monospace, uppercase, subtle
- One-liner that captures philosophy
- Optional: availability/status badge

---

### 4. Projects Presentation

**Current:** Simple list with description + tags
**Proposed:** Refined cards with more visual hierarchy

- Subtle border/separator treatment
- Hover state with gentle lift or glow
- Language/tech shown with more intention (small pills or inline mono text)
- Arrow indicator animated on hover
- Consider showing 1-2 "featured" projects with more detail

---

### 5. Micro-interactions

Add subtle polish:
- Smooth page load fade-in
- Hover states with transform + opacity shifts
- Theme toggle with smooth icon transition
- Links with underline animation
- Subtle cursor feedback

*Principle:* Motion should feel natural, never distracting

---

### 6. Footer Refinement

**Current:** Simple contact links
**Proposed:**
- Keep minimal
- Add subtle "Built with care" or design system nod
- Consider: small colophon (font, inspiration, or "View source")

---

### 7. Technical Credibility Signals

Subtle ways to show you understand the craft:
- Clean, semantic HTML (already have this)
- Expose design tokens concept (optional: small "Design" section)
- Fast performance (already lightweight)
- Accessibility done right
- Meta details: proper OG images, structured data

---

## What We're NOT Doing

- No blog (for now)
- No case studies
- No complex animations or JS frameworks
- No decorative elements without purpose
- Keeping it a single-page static site

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Update typography (Geist fonts)
- [ ] Refine color palette
- [ ] Adjust spacing system

### Phase 2: Hero & Content
- [ ] Rework hero section
- [ ] Update intro copy
- [ ] Add status/availability indicator (optional)

### Phase 3: Projects
- [ ] Refine project card design
- [ ] Improve hover states
- [ ] Better visual hierarchy

### Phase 4: Polish
- [ ] Add micro-interactions
- [ ] Refine theme toggle
- [ ] Footer updates
- [ ] Test dark/light modes

### Phase 5: Meta
- [ ] Update OG image
- [ ] Review structured data
- [ ] Performance check

---

## Open Questions

1. **Status indicator**: Do you want to show "Open to opportunities" or current role?
2. **Accent color**: Pure monochrome, or keep a subtle color accent?
3. **Project featuring**: Highlight 1-2 specific projects, or keep all equal?
4. **Colophon**: Include a subtle "Designed & built by me" or tech credits?

---

## Next Steps

1. Review this plan
2. Answer open questions
3. Begin implementation phase by phase
