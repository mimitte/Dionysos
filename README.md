# Dionysos
##  application qui intègre du e-commerce, c'est un gestionnaire de cave a vin avec un peu de social et marketplace
C'est donc une application pour gérer son vin.
1- Elle permet d'enregistrer des bouteilles que tu peux mettre dans une ou plusieurs caves différentes

2- Elle permet d'ajouter ou en retirer

3- Elle permet d'enregistrer ton garde

4- Elle envoie des notification si le vin arrive bientôt à maturité

5- Ellet'oriente quel vin qui peut se marier avec ton plat

### features suplémentaires: possibilté de partager avec des amis, conseils de consommations, partages des photos, mise en relation par des vendeurs professionels etc...

# Normalisation du code

## Javascript

Fonctions : camelCase
Variables : camelCase
Constantes : UPPER_SNAKE_CASE

## SCSS

classes : dashed-case


# installation de l'application :

## première étape
    Ce rendre dans son dossier local, faire la commande :
        - git init
    Paramètré l'identité avec les commandes suivantes:
        - git config --global user.name "name"
        - git config --global user.email "email@"
    Clonez le dépot distant de Dionysos à l'adresse : https://github.com/mimitte/Dionysos.git
    avec la commande :
        - git clone htttps://github.com/mimitte/Dionysos.git
    Après avoir récupérer le dépôt il faut installer les dépendances avec la commande :
    (info installer au préalable nodejs,npm)
        - npm install // installe les dépendances se trouvant le le fichier package.json il faut ce mettre dans les réertoires
        ou ce trouve les fichiers package.json ex: app pour l'application react et api pour l'api


## deuxieme etape
    Lancement des differns applications
        - l' API il faut ce positionner dans le dossier api et lancer la commande :
            node server
        - L'application Dionysos ce pôsitionner dans le dossier app et lancer la commande :
            npm start || npm run start
        - Le SASS il faut ce positionner dans le dossier app et lancer la commande:
            npm run build-sass


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)