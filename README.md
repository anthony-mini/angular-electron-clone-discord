Ceci est un projet d'étude visant à manipuler Electron avec le framework Angular. J'utilise ce [template](https://github.com/maximegris/angular-electron) pour lancer le projet.

L'objectif de ce projet est de créer un clone de l'application Discord avec les fonctionnalités suivantes :

- Une fenêtre principale avec un chat
- Quand la fenêtre est fermée et que le programme tourne en tâche de fond, l'application doit toujours recevoir les messages
- Créer un petit serveur NodeJS avec SocketIO pour connecter l'application
- Connecter l'application au serveur
- Ajouter le support de plusieurs chats avec la possibilité d'ouvrir un chat dans une nouvelle fenêtre

Pour commencer, clonez ce dépôt localement :

```bash
git clone <git@github.com:anthony-mini/angular-electron-clone-discord.git>

```

Il existe un problème avec `yarn` et `node_modules` lorsque l'application est construite par le packager. Veuillez utiliser `npm` comme gestionnaire de dépendances.

Si vous souhaitez générer des composants Angular avec Angular-cli, vous **DEVEZ** installer `@angular/cli` dans le contexte global npm.
Veuillez suivre la [documentation d'Angular-cli](https://github.com/angular/angular-cli) si vous aviez installé une version précédente de `angular-cli`.

```bash
npm install -g @angular/cli

```

Installez les dépendances avec npm et run l'application:

```bash
npm install

```

```bash
npm run start

```

Pourquoi deux package.json ? Ce projet suit la [structure à deux package.json d'Electron Builder](https://www.electron.build/tutorials/two-package-structure) afin d'optimiser le bundle final et de pouvoir toujours utiliser la fonction `ng add` d'Angular.

Pour construire pour le développement :

- **dans une fenêtre de terminal** -> npm run start

Et voilà! Vous pouvez lancer l'application Angular + Electron dans un environnement de développement local avec hot reload!

Le code de l'application est géré par `app/main.ts`. Dans cet exemple, l'application fonctionne avec une simple application Angular ([http://localhost:4200](http://localhost:4200/)), et une fenêtre Electron.
Le composant Angular contient un exemple d'importation de lib native Electron et NodeJS.
Vous pouvez désactiver les "Outils de développement" en commentant `win.webContents.openDevTools();` dans `app/main.ts`.

Pour construire l'application pour un environnement de production, exécutez `npm run electron:windows` pour Windows, `npm run electron:mac` pour MacOS, ou `npm run electron:linux` pour Linux. Après avoir construit l'application, vous pouvez la trouver dans le dossier release.
