---
title: Ashgrove Garland Dancers
caption: Ashgrove Garland Dancers
hero: "../img/Folkmoot23-Group2_crop.webp"
icon: "img/Icon_Garland.webp"
layout: teams
tags: teams
descrip: Garland dancing is an English dance tradition that began in the 1800s in the mill towns of North England. The Industrial Revolution brought women from rural communities to the cities to work in factories. They brought dancing traditions from rural areas. Garland dancing became a new combination of familiar movements that were made more picturesque by flower covered garlands.
---

{% for item in pictures.garland %}
    {% if item.type == "img" %}
    <img src="../img/{{ item.value }}">
    {% endif %}
{% endfor %}