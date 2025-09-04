# LiftUp Media — statikus weboldal sablon

Egyszerű, görgethető (one-page) sablon GitHub Pages-hez.

## Telepítés GitHub Pages-re
1. Hozz létre egy új publikus repót a GitHubon (pl. `liftup-media-site`).  
2. Másold fel a fájlokat a repo gyökerébe (`index.html`, `styles.css`, `script.js`, `assets/`).  
3. Menj a **Settings → Pages** menübe, és állítsd be:  
   - **Source**: *Deploy from a branch*  
   - **Branch**: `main` / root  
4. Pár perc múlva él a site: `https://<felhasznalonev>.github.io/liftup-media-site/`

## Testreszabás
- Logó csere: cseréld az `assets/logo.png` fájlt a saját logódra (azonos névvel).  
- Képek: az `assets/gallery*.png` képeket cseréld a saját fotóidra.  
- Színek: a `styles.css` tetején a CSS változók módosíthatók (`--accent`, stb.).  
- Kapcsolat adatok: `index.html` → `#kapcsolat` szekcióban.  

## Megjegyzés
Ez egy teljesen statikus oldal (nincs backend). Ha űrlapot szeretnél, használhatsz pl. [Formspree](https://formspree.io/) vagy Netlify Forms megoldást.
