---
title: Asheville Morris Dancers
caption: Asheville Morris Dancers
hero: "../img/AshevilleMorrisLittleSwitzerlandCafe.webp"
icon: "img/Icon_Morris.webp"
layout: teams
tags: teams
descrip: Morris dancing is an English folk tradition. As far back as the 16th century, paintings, carvings, and the writings of Shakespeare included Morris dancers and their musicians, Fool, and Hobby Horse. Morris dancers celebrate the changing seasons and perform for enjoyment. 
---

{% for item in pictures.morris %}
    {% if item.type == "img" %}
    <img src="../img/{{ item.value }}">
    {% endif %}
{% endfor %}