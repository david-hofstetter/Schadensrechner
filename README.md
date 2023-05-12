# Schadensrechner


## Vorwort

Am 16.03.2023 wurde mir die Aufgabe gestellt eine Website mit einem Schadensrechner zu erstellen, das Ganze mithilfe von react. Der Auftrag kam von der BBW und diese erhielte den Auftrag von der KBW, die Abgabe dieses Projekt ist am 12.05.2023.


## Planung

Für die Planung hab ich Trello benutzt mit dieser Applikation konnte ich immer sehen was ich noch zu tun habe, an was ich gerade arbeite und was ich schon alles gemacht habe. Als Vorgehensmethode habe ich mich für IPERKA entschieden, da ich diese Methode schon ziemlich gut kenne


## Features

Das Projekt verfügt über drei Seiten, die ich mithilfe von Routing verlinkt habe. Eine "Home", eine "About" und die "Schadensrechner" Seite. Auf der Schadensrechner Seite kann man eingeben wie viel Wert der entstandene Schaden hat und zu wie viel % man bei seiner Versicherung versichert ist. Zudem hat die Website eine Navigation Bar mit dieser kann man von Seite zu Seite wechseln per Knopfdruck.




## Github


* [@david-hofstetter](https://github.com/david-hofstetter) 📖



## Dockerfile 

Ein anderes Ziel unseres Projekt war es die Website über ein Dockerfile starten zu können, hier ist meins.


FROM node:latest

WORKDIR /app/

RUN git clone https://github.com/david-hofstetter/Schadensrechner.git .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]


## Kontakt

Falls sie Fragen haben können sie mich unter dieser E-Mail erreichen: <david.hofstetter@lernende.bbw.ch>.

