# Local typography assets

Downloaded unmodified on 2026-11-03 from the official Google Fonts service.
Both families are distributed under the SIL Open Font License 1.1; their
original copyright notices and complete licenses are preserved alongside them.

| File | Configuration used by the site | Official source |
| --- | --- | --- |
| `dm-sans/latin-variable.woff2` | Normal, variable; exposed weights 400–500 | [Google Fonts WOFF2](https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2) |
| `dm-serif-display/latin-regular.woff2` | Normal, weight 400 | [Google Fonts WOFF2](https://fonts.gstatic.com/s/dmserifdisplay/v17/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2) |

The assets were selected from the `latin` entries returned by the
[official stylesheet request](https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..500&family=DM+Serif+Display&display=swap).
This coverage includes the site's English text, fractions, and typographic
punctuation. No italic, Latin Extended, or Cyrillic files are included.
The supplied DM Sans variable binary retains its upstream 100–1000 weight axis;
the application declares only the 400–500 range currently used. No extra static
weight files or optical-size variants are loaded.

Licenses:

- `dm-sans/OFL.txt`: [official Google Fonts repository](https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/OFL.txt)
- `dm-serif-display/OFL.txt`: [official Google Fonts repository](https://raw.githubusercontent.com/google/fonts/main/ofl/dmserifdisplay/OFL.txt)

SHA-256 checksums:

```text
9fea608a947e67020c33cad9a6fe3d60c54119dfb8cff87768a8117a15ed7543  dm-sans/latin-variable.woff2
fdf61e20fd2c0108e0ea28da4daca0035205b4b7fc031a3974b865b704de160a  dm-serif-display/latin-regular.woff2
```

`layout.jsx` retains the existing CSS variables and `display: swap` behavior.
`fallbacks.css` retains the previous Google loader's metric-adjusted Arial and
Times New Roman fallbacks, obtained from the installed Next.js
`getFallbackFontOverrideMetrics` helper. Automatic local fallback adjustment is
disabled to avoid changing those metrics. The existing body fallback stack
and typography tokens remain unchanged.
