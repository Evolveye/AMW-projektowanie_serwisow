# Task 1



**This is polish only repo!**



## Moje projekty które uprzednio spełniają wstępne wymogi pozostałych zadań



 1. **Podstawy**: /lab-1/  
    Folder z prostą stroną internetową.
 2. **Praca z elementami DOM**: (patrz niżej)
 3. **Obsługa zdarzeń**:  
    Szachy RPG [repozytorium](https://github.com/Evolveye/CChess.io/)
    [gra](https://cactu-cchess.herokuapp.com/)  
    [Gry na GameJamy](https://github.com/Evolveye/Game_jams)  
    Jam 2: [Pacman-like](http://antrio.jcom.pl/cactujam/2/main.html)  
    Jam 5: [Trudna i nieintuicyjna przygodówka](http://antrio.jcom.pl/cactujam/5/)  
    Pierwsze 6 CactuJamów (0-5) wykonałem w `vanilla JS` oraz zwyczajowym HTML oraz CSS.
    Dużo się tam dzieje a modyfikacje DOM najlepiej oddaje **CactuJam 0**.
    To właśnie tam poza elementem canvas na siatce gry pojawiają się różne gify, w UI
    widać coś w rodzaju ekwipunku do/z którego doawane/usuwane są elementy,
    oraz gdyby ktokolwiek zdołał przejsć tę niesamowicie trudną grę to ujrzałby
    wstrzyknięty w HTML ekran końcowy.<br>
    Jako, ze są to gry "klikacze" to operują głównie na zdarzeniach poruszania i klikania kursorem
    (niestety nie ogólnie wskaźnikiem).
    Dodatkowo do zaprezentowania mam także grę w szachy RPG(?) zbudowaną na protokole websocket --
    co implikuje pełną asynchroniczność i operowanie na zdarzeniach.
 4. **Asynchroniczny JavaScript**:  
    [Bot Discorda](https://github.com/Evolveye/Cactu-discord.js),  
    Szachy RPG [repozytorium](https://github.com/Evolveye/CChess.io/)
    [gra](https://cactu-cchess.herokuapp.com/)  
    Discord do komunikator. Taki serwis nie ma prawa istnieć bez asynchroniczności.
    Wszakże każda wiadomość dociera do użytkowników, cóż, asynchronicznie.
    Całą aplikacja opiera się na zdarzeniach WebSocket. Bot Discorda jest niczym innym
    jak skomputeryzowanym użytkownikiem.
    Wszystko na czym się opiera to zdarzenia, których spis można znaleźć w dokumentacji
    [Discord.js, klasie `Client`, kolumnie `Events`](https://discord.js.org/#/docs/main/stable/class/Client).
    Warto dodać, że atutem mojego rozwiązania jest to,
    że polecenia mogę ładować do bota bez potrzeby jego restartowania za pomoca `dynamicznego importowania`

    Szachy RPG z kolei to gra którą zrobiłem z nudów i chęci posiadania jakiejś prostej gry multiplayer.
    Każdy ruch i każde zdarzenie w takiej grze wysyła informacje do serwera,
    ten wiadomość interpretuje i -- jeśli tak wynika ze zdarzenia -- odpowiada.

 5. **Gra "Papier, kamień i nożyczki"**:
    Uważam, że opisane wczesniej produkcje na GameJamy oraz szachy wystarczą

 6. **React -- task 1**: (patrz niżej)
 7. **React -- task 2**: (patrz niżej)
 8. **React -- task 3**:  
    [Moja strona na GithubPages](https://evolveye.github.io/),  
    [CactuJam 7](https://github.com/Evolveye/Game_jams/tree/master/CactuJam-7)  
    Moją stronę wykonałem w CMSie [gatsby](https://www.gatsbyjs.com/).
    Jest to narzędzie które obudowuje niejako aplikację Reacta w przyjemniejszą w użyciu formę.
    Na repozytorium strony warto wejść na
    [branch dev-gatsby](https://github.com/Evolveye/Evolveye.github.io/tree/dev-gatsby) aby sprawdzić kod.
    W pliku `gatsby.config.js` są wypisane rozszerzenia, które trzeba należało zainstalować z NPM --
    czyli tak samo, jak w zwykłym Reakcie.
    Oczywiście plik `package.json` także istnieje i zawiera zainstalowane dodatki.