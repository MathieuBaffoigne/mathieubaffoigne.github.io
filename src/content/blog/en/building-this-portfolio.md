---
title: "Building This Portfolio"
description: "Loose notes on how this site got built: what changed, what broke, what I ended up keeping."
pubDate: 2026-07-22
tags: ["astro", "performance", "design"]
lang: "en"
translationKey: "why-astro"
---

This site changed quite a bit since the first version. It started as a nearly empty Astro scaffold, and I adjusted things as I went, without much of a plan.

## The one constraint I set myself

Before writing anything, I wanted the site to stay usable on an old machine or a so-so connection. So: static rendering by default, and JS only where it actually does something.

## What changed along the way

Going bilingual gave me more trouble than I expected. My first move was locking every nav link to the same width in French and English, so the layout wouldn't shift between languages. That left ugly gaps around the shorter English words. I ended up letting each word take its natural width, and letting the page transition absorb the small change in total width.

The site isn't done. It keeps shifting a bit every time I touch something.
