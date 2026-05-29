# TODO — Recruiter-ready portfolio upgrades

## Step 1: Accessibility fixes (high impact)
- [ ] Update `index.html` contact form semantics: associate labels with inputs/textarea.
- [ ] Add `aria-live`/status semantics for `#cf-status` and make status readable by screen readers.
- [ ] Ensure keyboard accessibility for interactive elements (nav tiles, modals, AI/chatbot controls).

## Step 2: Contact form reliability
- [x] Update `assets/js/contact.js` to focus first invalid field and avoid confusing status updates (screen-reader friendly status + `aria-live`).
- [ ] Disable submit button during validation/submission and restore state appropriately.

## Step 3: Performance + privacy production readiness
- [ ] Update `assets/js/analytics.js` to load analytics only when user opens the analytics panel.
- [ ] Respect `prefers-reduced-motion` in heavy animations (star canvas + typing/interval-driven UI).

## Step 4: SEO + metadata polish
- [ ] Add `twitter:site`, `twitter:creator`, and improve any missing meta attributes.

## Step 5: Image optimization
- [ ] Check for existing images; if none, ensure any future/implicit images are lazy-loaded (no redesign).

## Step 6: Dead code / maintainability
- [ ] Identify and remove/avoid clearly dead code paths only.

## Step 7: README recruiter-focused
- [ ] Expand root `README.md`: clear run instructions, accessibility/SEO notes, privacy note for analytics.

## Step 8: Verification
- [ ] Manual keyboard tab test checklist (nav toggle, contact form, modals, AI/chat inputs).
- [ ] Quick console error check by running simple open in browser.
- [ ] Lighthouse quick run (optional) for perf/accessibility baselines.

