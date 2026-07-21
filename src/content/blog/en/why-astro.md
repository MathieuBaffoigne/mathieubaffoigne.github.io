---
title: "Portfolio"
description: "This site didn't come together in a day: the story of building it, from the starting constraint to the adjustments that followed, plus a couple of technical details along the way."
pubDate: 2026-07-22
tags: ["astro", "performance", "design"]
lang: "en"
translationKey: "why-astro"
---

This portfolio didn't come out finished on the first try. It started as an almost empty Astro scaffold and took its current shape in small steps — one constraint set at the very start, then a lot of back-and-forth to actually get it right.

## The starting point

One rule, fixed before writing a single line of content: the site has to stay pleasant even on an underpowered machine or a mediocre connection. In practice that means static rendering by default, JavaScript only where it earns its place, and no dependency hanging around just because it was convenient in the moment.

## What changed along the way

The color palette, for one, went through several versions before settling on a warm cream/taupe base with a sage green accent — each round fixed a contrast or readability issue that showed up in actual use, not in theory.

Going bilingual took more work than expected. The first instinct — locking every nav link to a fixed width so it stayed identical in French and English — seemed to solve the layout jumping between languages. In practice it left ugly empty gaps around short English words sitting in boxes sized for their longer French counterparts. The simplest fix turned out to be the best one: let each word take its natural width, and trust the page transition to smooth over the small change in total width.

## Two technical details

The light/dark theme started flipping on its own when navigating between pages — a subtle bug: Astro's page transitions replace the `<html>` element's attributes with those of the freshly fetched document, which never had a theme applied client-side. The fix is a few lines: catch the event right before the swap and copy the active theme onto it.

Project cards needed to become fully clickable, including when they hold two different links (demo and source code) — a case where HTML doesn't allow nesting links. The fix is an old CSS trick: an invisible, absolutely positioned link that covers the whole card, with the second link sitting above it via a higher `z-index`. No JavaScript required.

What I take away from building this isn't really the stack — Astro, Tailwind, whatever — it's the method: set a simple constraint at the start, then iterate on it as feedback comes in instead of locking everything down upfront. The site isn't finished. It probably never really will be, and that's fine.
