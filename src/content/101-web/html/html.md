---
title: 'HTML alkeet'
chapter: 1
desc: 'Tähän on heitetty vähän alkeita HTML:stä'
---

# Tehtävät

## Hello tekstitulostus

- Tulosta "Hei maailma", käytä header 1 (h1).
- Tulosta "Tänään on hyvä päivä koodata", käytä paragraafia (p).
- Tulosta "Hei pienempi maailma", käytä header 2 (h2).
- Tulosta "Tänään on ruokana: Keittoa tai pizzaa", käytä span-tagia.
    - Bonus: Korosta Keitto ja pizza lihavoinnilla.

## Yleinen jäsentäminen
    
`<div>` - Division, käytetään pilkkomaan yhtä tai useampaa tekstiä omaan containeriin (tai "laatikkoon"). Ylivoimaisesti käytetyin HTML tägi.
`<span>` - Span, käytetään pienempään pilkkomiseen, esimerkiksi tekstin sisäiseen pilkkomiseen. Tällöin tekstin pätkä voidaan kustomoida vaikuttamatta koko tekstiin.
`<section>` - Voidaan jäsentää jokin isompi kokonaisuus. Usein html:ssä section jää kuitenkin käyttämättä div-elementin takia.
`<main>` - Mainillä erotetaan, sivun teksti kontentti muusta sisällöstä. Mainin ulkopuolelle jäävät esimerkiksi navigointi, aside ja footteri.
`<nav>` - Käytetään sivulla navigointiin
`<footer>` - Käytetään footterin jäsentelyyn
`<aside>` - Käytetään yleensä vanhemmissa sivuissa kuvailemaan sivuvalikkoa.

Svelten ulkopuolelle jäävät tagit, koska Svelte generoi nämä valmiiksi:
`<html>`, `<head>`, `<body>`

Toteuta sivu jonka rakenne on seuraava:

- nav
    - div
        - span
            "Koti"
        - span
            "Ota yhteyttä"
- main
    - h1
        "Svelte on mahtava"
    - section
        - h2
            "HTML"
        - p
            "Sujuu sveltessä"
    - section
        - h2
            "CSS"
        - p
            "Toimii mainiosti"
- footer
    - div
        - span
            "Linkki 1"
        - span
            "Linkki 2"
    - div
        - span
            "Linkki 3"
        - span
            "Linkki 4"
    - div
        - span
            "Linkki 5"
        - span
            "Linkki 6"

## Listat ja taulut

`<ol>` Ordered list, on numeroitu lista
`<ul>` Unordered list, on lista palleroilla
`<li>` List item, on listan jäsen

Bonus: On hyvä osata myös miten muodostetaan html-tauluja `<table>`
Taulujen osaaminen ei tässä vaiheessa ole kuitenkaan välttämätöntä.

Tee kaksi listaa:

Lista 1
* Syö halvalla: 2,50
* Syö herkullisesti: 4,50

Lista 2
1. Ma
    * Kanakeitto
    * Uunimakkara
2. Ti
    * Salaattipöytä
    * Kaurapuuroa
3. Ke
    * Hernekeittoa
    * Pannukakkua

## Linkki ja painikkeet

`<button>`    - Button, käytetään useiten lomakkeissa, painalluksesta seuraa uleensä jokin funktio.
            - Type attribuutilla voidaan spesifioida button on tarkoitettu submitointia varten.
    
`<a>`          - Anchor link, käytetään linkkinä eri html sivujen välillä. Linkillä voidaan myös targetoida samalla sivulle olevia html elementtejä id:n avulla.
            - href attribuutti vastaa linkistä.
            - käytetään ulkoisissa linkeissä, navigaatiossa, footterissa.

Tehtävä:

Tee linkki joka vie Wikipedian etusivulle.

## Lomakkeet

Tärkeimmät tagit:
`<form>` - Lomake pitää kietoa form tagillä
`<input>` - Kaikki syöttökentät ovat inputteja, ne voivat olla tyyppiä; text, number, email, password, checkbox jne
`<label>` - Kaikilla inputeilla pitää olla oma label, jotta ne on mahdollista tunnistaa.
`<button>` - Jokaisella formilla pitää olla vähintään yksi nappi. Napissa pitää olla type="submit" attribuutti.

Tehtävänä on tehdä rekisteröitymis lomake, jossa on:
- `<form>` tägi.
- Nimi
- Syntymävuosi
- Sähköposti
- Salasana
- Olen lukenut käyttö ehdot -raksi ruutuun input
- Kaksi nappia
    - PERUUTA
    - REKISTERÖI