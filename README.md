# FOOT'@ISE — Page d'infos

Page d'annonce + cagnotte pour Ben, hébergeable gratuitement sur GitHub Pages.

## ⚠️ Avant de publier

1. Ouvre `script.js`
2. Remplace `BEN_PHONE = "REMPLACER_ICI"` par le vrai numéro de Ben (juste les chiffres, ex: `"0612345678"`)
3. Vérifie que `BEN_NAME = "ben"` correspond bien à ce qu'il tapera comme prénom

Sans ça, la détection par numéro ne marchera pas (seule la détection par nom "ben" fonctionnera).

## Ajouter le logo de l'équipe

Dépose ton fichier logo **directement à la racine du repo** (à côté de `index.html`),
sous le nom **`logo.png`**.
Si le fichier n'est pas trouvé, le logo est simplement masqué, le reste de la page fonctionne quand même.

## ⚠️ À savoir : ce n'est pas un vrai secret technique

Le filtrage se fait dans le code de la page (JavaScript), qui est visible par
n'importe qui via "Afficher le code source" du navigateur. Ça évite que Ben
tombe dessus par erreur en cliquant sur le lien, mais si quelqu'un cherche
activement dans le code, il peut trouver la logique. Pour ce genre d'usage
(éviter une découverte accidentelle avant une surprise), c'est largement
suffisant — ce n'est juste pas un système de sécurité robuste.

## Publier sur GitHub Pages (gratuit)

1. Crée un nouveau repo sur [github.com/new](https://github.com/new), par exemple `foot-annonce`
   (mets-le en **Private** si tu veux limiter qui peut voir le code source)
2. Uploade les fichiers de ce dossier (`index.html`, `style.css`, `script.js`, le dossier `assets/` avec ton logo)
   → sur GitHub : bouton "Add file" → "Upload files"
3. Va dans **Settings** → **Pages**
4. Dans "Source", choisis la branche `main` et le dossier `/ (root)`, puis **Save**
5. GitHub te donne un lien du type `https://tonpseudo.github.io/foot-annonce/`
   → c'est ce lien que tu partages au groupe

⏱️ La mise en ligne prend 1 à 2 minutes après l'activation.

## Note sur le repo privé

Si le repo est **privé**, GitHub Pages nécessite un compte **GitHub Pro** (ou
Team/Enterprise) pour publier un site privé publiquement accessible. Avec un
compte gratuit, si tu veux que le site soit visible par tes coéquipiers sans
qu'ils aient de compte GitHub, le repo doit être **public** — le code source
(et donc la logique de détection) sera alors visible par n'importe qui qui
va chercher, mais l'annonce et la cagnotte, elles, restent uniquement
accessibles via le lien que tu partages.
