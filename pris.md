---
title: Priser
description: En Renare Vardag har alltid bästa priserna!
date: 2016-05-04 08:51:00
layout: generic
image: /images/pris.jpg
permalink: '/:name/'
fonster:
  - rum: '1:a'
    sidor_2: '270'
    sidor_4: '540'
    sidor_6: '620'
  - rum: '2:a'
    sidor_2: '300'
    sidor_4: '600'
    sidor_6: '690'
  - rum: '3:a'
    sidor_2: '340'
    sidor_4: '680'
    sidor_6: '810'
  - rum: '4:a'
    sidor_2: '390'
    sidor_4: '780'
    sidor_6: '960'
  - rum: '5:a'
    sidor_2: '450'
    sidor_4: '900'
    sidor_6: '1140'
  - rum: '6:a'
    sidor_2: '525'
    sidor_4: '1050'
    sidor_6: '1350'
---

## Privatkunder

* Alla våra priser är efter lagstadgat RUT-avdrag inklusive moms.
* I våra priser ingår också att vi administrerar RUT-avdraget med Skatteverket åt er samt inga inställelseavgifter, inga fakturaavgifter och inga resekostnader.
* Minimitid för beställning 3 tim/tillfälle.
* Engångskunder faktureras löpande efter utfört uppdrag med 10 dagars förfallotid eller med Swish i samband med utfört arbete
* Fakturering abonnemangskunder sker månadsvis den 15:e av varje månad med 10 dagars förfallotid.
* Alla priser nedan är ett ungefärligt pris.Vi genomför ett kostnadsfritt och förutsättningslöst hembesök där vi går igenom dina önskemål och behov samt ger ett exakt pris. Därefter ni får en kontaktperson och en fast städdag och tid.
* Vi garanterar att din vardag blir mycket enklare om du blir en av våra nöjda kunder.

### Fönsterputs prislista:

<div class="table-responsive" style="width:100%">
  <table cellpadding="2px" style="width:100%">
    <tr>
      <td style="background-color: #eee;">
        Lägenhet
      </td>
      <td style="background-color: #eee;">
        2 sidor
      </td>
      <td style="background-color: #eee;">
        4 sidor
      </td>
      <td style="background-color: #eee;">
        6 sidor
      </td>
    </tr>
{% for lagenhet in page.fonster %}
    <tr>
      <td style="background-color: #eee;">
        {{ lagenhet.rum }}
      </td>
      <td>
        {{ lagenhet.sidor_2 }}
      </td>
      <td>
        {{ lagenhet.sidor_4 }}
      </td>
      <td>
        {{ lagenhet.sidor_6 }}
      </td>
    </tr>
  {% endfor %}
    
  </table>
</div>

Inglasad balkong tillkommer från 250 kr.<br>Balkongdörr tillkommer 120 kr/st.<br>[Boka fönsterputs](https://enrenarevardag.se/privat/fonsterputs/)