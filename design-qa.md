# Design QA

- Source visual truth: `/tmp/portfolio-reference-audit/01-reference-desktop.png`, `/tmp/portfolio-reference-audit/02-reference-projects-desktop.png`, `/tmp/portfolio-reference-audit/03-reference-mobile-hero.png`
- Browser-rendered implementation: `/tmp/portfolio-qa/home-desktop.png`, `/tmp/portfolio-qa/home-mobile.png`, `/tmp/portfolio-qa/article-desktop.png`
- Combined comparison evidence: `/tmp/portfolio-qa/desktop-comparison.jpg`
- Viewports: desktop `1440 × 1000`; mobile `390 × 844`
- State: dark theme, homepage hero; mobile navigation open and closed; project filter active; technical article attribution visible

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: the implementation preserves the reference's oversized display hierarchy and compact utility text while using Manrope/DM Sans for a more technical editorial tone. Heading wraps remain controlled at desktop and mobile widths.
- Spacing and layout rhythm: the pill navigation, two-column hero, strong section separation, project grid, and mobile single-column collapse preserve the reference's layout language. Desktop and mobile checks show no horizontal overflow.
- Colors and visual tokens: the source's warm dark palette is intentionally translated to deep navy with warm orange and teal evidence accents, matching the user's requested dark AI-engineering direction.
- Image quality and asset fidelity: the hero uses the supplied professional portrait. Project and research cards use supplied real product/research assets, not placeholder art or handcrafted SVG substitutes. Crops remain legible and undistorted.
- Copy and content: the hero leads with broad AI engineering. Medical work appears as delivery evidence rather than the whole identity. The unfinished open-source lab is explicitly marked in development. Taiwan Health MCP appears only in the article and is attributed to HealthyMind Tech with an explicit contribution boundary.
- Icons and controls: Phosphor icons are consistent in weight and alignment. Project filters, mobile navigation, hash-based article navigation, external profile links, and mailto CTAs are functional.
- Accessibility and responsiveness: semantic headings, alt text, visible focus styles, practical mobile tap targets, reduced-motion handling, and no console errors were confirmed. Content remains visible without animation.

## Focused region comparison

- Desktop hero/nav: compared the combined reference and implementation evidence at equalized viewport crops; headline scale, profile imagery, CTA hierarchy, and top navigation match the intended reference language.
- Mobile hero/menu: verified the `390 × 844` hero crop, three-line title treatment, closed navigation, and expanded navigation state. No clipping or horizontal overflow was found.
- Article attribution: verified that the visible attribution block names HealthyMind Tech and distinguishes upstream authorship from Kent Chen's integration and evaluation work.

## Comparison history

### Pass 1

- Finding: mobile article navigation button returned to the homepage instead of opening the menu (P2 behavior mismatch).
- Fix: gave the article layout its own responsive navigation state and stopped desktop navigation links from toggling hidden mobile state.
- Post-fix evidence: lint/build passed; mobile navigation has one unique toggle control, opens successfully, and exposes the About link. No browser console warnings or errors.

### Pass 2

- Earlier P2 finding is resolved. No new P0/P1/P2 issues found.

## Primary interactions tested

- Project category filter: selecting `LLM Systems` reduces the visible project set to one card.
- Mobile menu: toggle opens the complete primary navigation.
- Technical article route: `#article/slm-tool-calling-lab` renders and exposes the attribution boundary.
- Responsive layout: document width equals viewport width at `1440` and `390` pixels.
- Console: no errors or warnings observed.

## Follow-up polish

- P3: future public repositories can replace the in-development lab status with a live repository/demo link when evidence exists.
- P3: future writing can be split into dedicated static routes if search-indexed long-form publishing becomes a priority.

final result: passed
