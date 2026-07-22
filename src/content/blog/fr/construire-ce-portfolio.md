---
title: "Construire ce portfolio"
description: "Notes en vrac sur la construction de ce site : ce qui a changé, ce qui a foiré, ce que j'ai fini par garder."
pubDate: 2026-07-22
tags: ["astro", "performance", "design"]
lang: "fr"
translationKey: "why-astro"
---

Ce site a pas mal changé depuis la première version. Au départ c'était un squelette Astro quasi vide, et j'ai ajusté au fur et à mesure, sans vraiment de plan détaillé.

## La seule contrainte que je me suis fixée

Avant d'écrire quoi que ce soit, je voulais que le site reste utilisable sur une vieille machine ou une connexion moyenne. Donc rendu statique par défaut, et du JS seulement là où ça sert vraiment à quelque chose.

## Ce qui a changé en cours de route

Le bilingue m'a donné plus de fil à retordre que prévu. Mon premier réflexe a été de forcer chaque lien du menu à la même largeur en français et en anglais, pour éviter que la mise en page bouge en changeant de langue. Résultat : des espaces vides moches autour des mots anglais, plus courts. J'ai fini par laisser chaque mot prendre sa largeur naturelle, et laisser la transition de page absorber le petit changement de largeur totale.

Le site n'est pas fini. Il continue de bouger un peu à chaque fois que je retouche un truc.
