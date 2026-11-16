# SocialHub

Prosta, responsywna strona agregująca linki do portfolio i profili społecznościowych. Bez frameworków i bez wymaganej instalacji.

## Personalizacja

1. Otwórz `config.js`.
2. Zmień `name`, `description`, opcjonalny `avatarUrl` i listę `links`.
3. Otwórz `index.html` w przeglądarce lub wgraj wszystkie pliki na hosting statyczny.

Przykład wpisu:
```js
{ label: "GitHub", url: "https://github.com/DawidSmiechPL" }
```

Puste lub nieprawidłowe linki są pomijane. Nie używaj `javascript:` jako adresu linku. Przy braku avatara wyświetlane są inicjały.

## Pliki

- `index.html` — struktura strony
- `style.css` — styl i responsywność
- `config.js` — dane profilu i linki
- `script.js` — wyświetlanie danych

## Demo

Historyczny adres demonstracyjny: https://linki.dawidsmiech.pl (dostępność i aktualność wdrożenia wymagają weryfikacji).

Autor: [Dawid Śmiech](https://dawidsmiech.pl).
