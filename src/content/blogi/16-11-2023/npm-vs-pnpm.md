---
title: npm vs pnpm
author: wesenbergg
readTime: 4
puDate: '16.11.2023'
desc: '5 syytä miksi pnpm lyö npm:n kanvaasille'
tags: ['node', 'js', 'ohjelmistokehitys', 'package manager', 'vertailu', 'devex', 'dx']
---
# Mikä JS pakettijärjestelmä sopii tarpeisiisi pnpm vs npm

Pakettihallintajärjestelmät, kuten npm (Node Package Manager), ovat keskeinen osa nykyaikaista JavaScript-kehitystä, ja niillä on vaikutusta projektien hallintaan ja riippuvuuksien käsittelyyn. pnpm on yksi vaihtoehtoinen pakettihallintajärjestelmä, ja sen käyttäminen voi tarjota joitakin etuja verrattuna perinteiseen npm:ään.

Tässä viisi hyvää syytä, miksi kannattaa siirtyä pnpm.

## Levyn tilan optimointi:
pnpm käyttää linkitystä ja symbolisia linkkejä vähentääkseen levyn käyttöä. Tämä voi olla erityisen hyödyllistä suurissa projekteissa, joissa on paljon riippuvuuksia. pnpm jakaa yhteiset riippuvuudet ja säästää siten tilaa.

## Hyvästi globaalit paketit:
pnpm ei tarvitse globaaleja paketteja, toisin kuin npm. Tämä tarkoittaa, että projektit voivat olla eristettyjä toisistaan, eikä yhteen projektiin asennetut paketit vaikuta muihin projekteihin.

## Ei node_module duplikaatteja:
pnpm jakaa paketit eri projektien välillä, mikä vähentää tarvetta duplikaatti node_modules-kansioille. Tämä voi säästää sekä aikaa että levytilaa.

## Nolla installaatio:
pnpm ei vaadi erillistä asennusvaihetta, kuten npm:n npm install. Tämä tarkoittaa, että projektit ovat nopeampia pystyttää, ja kehittäjän ei tarvitse odottaa riippuvuuksien asennusta.

## Yhteensopivuus npm:n kanssa:
pnpm on yhteensopiva npm:n kanssa, joten voit käyttää sitä olemassa olevissa projekteissa, jotka on alun perin luotu npm:llä.

On tärkeää huomata, että valinta npm:n ja pnpm:n välillä riippuu monista tekijöistä, kuten projektin tarpeista, tiimin kokemuksesta ja henkilökohtaisista mieltymyksistä. Jos projekti hyötyy pnpm:n tarjoamista eduista, se voi olla harkitsemisen arvoinen vaihtoehto.

## Yhteenveto

Työkalu sopii erinomaisesti vapaa-ajan projekteihin. Niitä kun tuppaa kasaantumaan kymmenittäin, niin pnpm karsii node_module duplikaattiviidakkoa kuin machete. Lisäksi muistelen aloittelevana koodarina, kun unohti pari kertaa asentaa riippuvuudet `npm install` komennolla, siitä seurasi hämmennystä ja debuggausta. pnpm:llä aloittelevan koodarin ei tarvitse tietää tätä tuskaa.

### pnpm:n hyödyt
- Säästää tilaa kiintolevyllä.
- Yksinkertaistettu devauskokemus.
- Hyvä yhteensopivuus, Node.js:n oletus (npm)pakettijärjestelmän kanssa.
### pnpm:n puutteet
- Ei ole oletuksena, joten vaatii erillisen asennuksen.
- Suhteellisen vähän käytetty yrityksissä.