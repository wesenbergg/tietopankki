---
title: 'JS alkeet'
chapter: 1
desc: Tervetuloa JS-perusteiden kurssille!
---

# Tehtäviä

## 1. Tulostus ja laskutoimitukset

1. Tee muuttuja "hei maailma" ja tulosta se:
    1. konsoliin
    2. html:nä paragraafina
2. Tee laskuri joka muuttaa km/h -> m/s (oletetaan, että 3,6 kmh = 1 ms)
3. Tee kaksi numero inputtia ja laske numeroiden:
    - summa
    - erotus
    - jako
    - kerto
4. Tee laskuri jossa on kaksi nappia + ja -
    - Laskurin välissä on numero joka pitää kirjaa klikkauksien summasta

## 2. Valinta- ja toistorakenteet

1. Tee valintarakenne, jossa tulostuu paragraafi "Ovi on kiinni" jos ikä on alle 18. Jos ikä on yli 18 tulostetaan "Tervetuloa". Käytä iän kysymiseen inputtia.
2. Muuta edellistä valintarakennetta siten, että jos käyttäjä on yli 60v, tulosta "Tervetuloa, Bingoa pelataan keittiössä." 
3. Tee ohjelma, joka tulostaa annetun luvun kertotaulun arvoilla 1-10. Esim. jos käyttäjä antaa luvun 5, tulostetaan 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.
4. Tee lista päivän aterioista `let ateriat = ['Puuro', 'Keitto', 'Riisi', 'Kahvi']`
    - Tulosta ateriat listassa. Käytä **HTML-elementtejä `<ul>`, `<li>` ja toistorakennetta**.

## 3. Tietorakenteet

1. Tee päivän ruokalista jossa:
    - h2-otsikko "Päivän ruoka"
    - ruokalistan päivät on h3-otsikolla
    - paaruoka, keitto ja jalkkari on listattuna <ul>-listaan
    - käytä apuna päivänRuokalista muuttujaa
2. Tee viikon ruokalista jossa:
    - h2-otsikko "Viikon ruokalista"
    - ruokalistan päivät on h3-otsikolla
    - paaruoka, keitto ja jalkkari on listattuna <ul>-listaan
    - käytä toistorakennetta ja ruokalista muuttujaa alla.
3. Tee lista valtioista:
    - Otsikoi h2 "Valtiot"
    - käytä data kansiossa valtiot.json tiedostoa
    - Käytä h3 otsikkoa valtion nimissä
    - Luettele loput attribuutit haluamallasi tavalla

## 4. API kutsut

Tutustu API kutsuihin oheisessa tehtävässä
[REPL](https://svelte.dev/repl/70e61d6cc91345cdaca2db9b7077a941?version=4.2.2)

1. Tee api kutsu https://api.kanye.rest :iin
2. Tulosta palautettu teksti selaimessa
3. Lisää nappi "PÄIVITÄ" jonka painalluksesta haetaan uusi anekdootti