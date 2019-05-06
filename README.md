This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing

Testing is done via [cypress](https://www.cypress.io) framework

####to run tests:
* `yarn start` in separate shell tab
* `yarn run test` in separate shell tab

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run test`

Launches the cypress test runner. New window should pop-up. Select test (integrationTest.spec.js) and watch tests running<br>

# Tutorial
Aplikace pocita zivoty hracu
## Kapitola 1
vytvor counter s tlacitkama na incrementaci a dekrementaci hodnoty countru
https://reactjs.org/docs/rendering-elements.html
https://reactjs.org/docs/state-and-lifecycle.html
## Kapitola 2
vytvor formular s dvema inputy na jmeno a pocet zivotu 
https://reactjs.org/docs/forms.html
## Kapitola 3
do countru pridej zadane jmeno a pocet zivotu pres props
https://reactjs.org/docs/components-and-props.html
ziskej z forulare informace a predej je do state predka
## Kapitola 4
pridej conditional rendering counteru + button k odstartovani + do countru pridej zadane jmeno a pocet zivotu pres props
## Kapitola 5
rozdel formular a hraci plochu na samostatne stranky a pridej tlacitko zpet na hraci plochu
https://reactjs.org/docs/conditional-rendering.html
vyuzij stavajici komponentu countru a a formulare a vytvor i druheho hrace (predej data-cy), for cyklus (map)
## Kapitola 6
pridej responsivni zobrazeni pro mobilni zarizeni, kde hraci plocha bude v jednom slupci rozdelenem napul a jednu pulku otoc

tips: 
https://developer.mozilla.org/en-US/docs/Web/CSS/transform
`window.matchMedia("(min-width: 769px)").matches` vraci `true` pokud aplikace bezi na mobilnim zarizeni
rozdel formular a hraci plochu na samostatne stranky a pridej tlacitko zpet na hraci plochu
## Kapitola 7
vsimni si, ze counter micha pocitaci logiku a vzhled, vydel z nej hoc
## Kapitola 8
v realne aplikaci je routovani slozitejsi a je vyhodne ho resit externim nastrojem. Naistaluj si balicek `react-router` a zapoj ho do aplikace
predavej vychozi stavy v route
## Kapitola 9
Build a pochlub se mamince <3

yarn run kap_8 
https://reacttraining.com/react-router/web/guides/quick-start
