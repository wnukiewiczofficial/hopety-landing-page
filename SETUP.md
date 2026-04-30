# Hopety Landing Page — Instrukcja konfiguracji

## Co musisz zrobić po wygenerowaniu projektu

### 1. Logo

Wklej plik logo do:

```
public/logo.png
```

### 2. Screeny aplikacji

Wklej screeny do `public/screens/` z dokładnie tymi nazwami:

```
public/screens/screen-today.png      — Panel dziś
public/screens/screen-pets.png       — Twoje pupile
public/screens/screen-tasks.png      — Planowanie zadań
public/screens/screen-pharmacy.png   — Apteczka
public/screens/screen-summary.png    — Historia zadań
public/screens/screen-assistant.png  — Asystent AI
```

### 3. Zmienne SMTP

Skopiuj `.env.local.example` jako `.env.local` i uzupełnij:

```bash
cp .env.local.example .env.local
```

Następnie edytuj `.env.local`:

- `SMTP_HOST` — serwer SMTP Twojego hostingu
- `SMTP_PORT` — zazwyczaj 587 (TLS) lub 465 (SSL)
- `SMTP_SECURE` — `true` dla portu 465, `false` dla 587
- `SMTP_USER` — adres e-mail nadawcy
- `SMTP_PASS` — hasło do konta e-mail
- `NOTIFY_EMAIL` — Twój adres, na który trafią powiadomienia o zapisach

### 4. Linki do sklepów

W pliku `components/Hero.tsx` znajdź linki:

```tsx
href = "#"; // App Store
href = "#"; // Google Play
```

Podmień `#` na prawdziwe URL do App Store i Google Play.

### 5. Domena w SEO

W `app/layout.tsx` podmień:

```ts
url: "https://hopety.pl";
```

na swoją właściwą domenę.

### 6. Dane w polityce prywatności

W `components/LegalSection.tsx` uzupełnij:

- `[Twoje imię/firma]`
- `[adres]`
- `[email]`

### 7. Deploy na Vercel

1. Utwórz repozytorium GitHub i wypchnij kod
2. Wejdź na vercel.com → Import Project → wybierz repo
3. W zakładce Settings → Environment Variables dodaj wszystkie zmienne z `.env.local`
4. Deploy!

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## Budowanie produkcyjne

```bash
npm run build
npm start
```
