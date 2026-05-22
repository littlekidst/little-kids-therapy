# Little Kids Therapy — Static Learn & Play Arcade

This package removes the old Supabase/Login Learn & Play app and replaces it with a public static game arcade.

## Upload to GitHub

Upload/replace these files/folders in the repo root:

- `index.html`
- `learn-and-play/`

Do not upload Supabase SQL files. This version does not use Supabase.

## Folder structure

```
index.html
learn-and-play/
  index.html
  styles.css
  games.js
  games.json
```

## How to edit games

Edit `learn-and-play/games.json`.

Set `"enabled": false` to hide a game card from the arcade.

## Privacy

This page is designed to collect nothing:
- no login
- no names
- no DOB
- no diagnosis
- no insurance
- no camera/microphone/upload
- no Supabase
- no private child records

Stars are stored only on the same browser/device using localStorage.
