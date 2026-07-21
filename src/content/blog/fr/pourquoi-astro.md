---
title: "Portfolio"
description: "Ce site ne s'est pas fait en un jour : le récit de sa construction, des contraintes de départ aux ajustements successifs, et deux ou trois détails techniques en cours de route."
pubDate: 2026-07-22
tags: ["astro", "performance", "design"]
lang: "fr"
translationKey: "why-astro"
---

Ce portfolio n'est pas sorti fini du premier coup. Il a démarré comme un squelette Astro presque vide, et a pris sa forme actuelle par petites touches — une contrainte posée au départ, puis beaucoup d'allers-retours pour l'appliquer correctement.

## Le point de départ

Une seule règle, fixée avant d'écrire la première ligne de contenu : le site doit rester agréable même sur une machine peu puissante ou une connexion moyenne. Concrètement, ça veut dire du rendu statique par défaut, du JavaScript uniquement là où il apporte quelque chose de réel, et pas de dépendance qui traîne parce que c'était plus simple sur le moment.

## Ce qui a changé en route

La palette de couleurs, par exemple, est passée par plusieurs versions avant de se stabiliser sur un crème/taupe chaud avec un vert sauge en accent — chaque itération corrigeait un problème de contraste ou de lisibilité repéré en cours d'usage, pas en théorie.

Le passage au bilingue a demandé plus de travail que prévu. Le premier réflexe — verrouiller la largeur de chaque lien de navigation pour qu'elle soit identique en français et en anglais — semblait résoudre le problème de mise en page qui bougeait d'une langue à l'autre. En pratique, ça créait des espaces vides disgracieux autour des mots courts anglais dans des cases dimensionnées pour leurs équivalents français plus longs. La solution la plus simple a fini par être la meilleure : laisser chaque mot prendre sa largeur naturelle, et faire confiance à la transition de page pour lisser le léger changement de largeur totale.

## Deux détails techniques

Le thème clair/sombre s'est mis à changer tout seul en changeant de page, un bug discret : les transitions de page d'Astro remplacent les attributs du `<html>` par ceux du document fraîchement récupéré, qui n'a jamais eu de thème appliqué côté client. La correction tient en quelques lignes — intercepter l'événement juste avant l'échange et y recopier le thème actif.

Les cartes de projets devaient devenir entièrement cliquables, y compris quand elles contiennent deux liens différents (démo et code source) — un cas où le HTML interdit d'imbriquer des liens. La solution est un vieux classique du CSS : un lien invisible positionné en absolu qui recouvre toute la carte, avec le second lien qui reste par-dessus grâce à un `z-index` plus élevé. Aucune ligne de JavaScript n'a été nécessaire.

Ce que je retiens de cette construction, c'est moins la stack — Astro, Tailwind, peu importe — que la méthode : poser une contrainte simple au départ, puis itérer dessus au fil des retours plutôt que de tout figer d'avance. Le site n'est pas fini. Il ne le sera probablement jamais vraiment, et c'est très bien comme ça.
