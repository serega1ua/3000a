const insertMissingLetters = str => str
    .split``
    .map((e, i, a) =>
        i === a.indexOf(e) ?  e + 'abcdefghijklmnopqrstuvwxyz'
            .split``
            .filter(x => !str.includes(x) && x.charCodeAt() > e.charCodeAt())
            .join``
            .toUpperCase() : e)
    .join``;