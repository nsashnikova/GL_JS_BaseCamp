/**
 * Created by Natasha on 17.07.2016.
 */
(function(){

    var info= document.querySelector('.info');
    var main = document.querySelector('.main-content');
    var filmBox = document.querySelector('.films');
    var load = document.querySelector('.main-info');
    var li = document.createElement('li');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var spinner = document.createElement("div");

    var heroId = 1;

    loadHero(heroId);

    function removeInfo (){
        info.textContent = '';
        filmBox.textContent = '';
    }

    function loader() {
        load.setAttribute('style', 'opacity: 0');
        spinner.classList.add("load");
        document.body.appendChild(spinner);
    }

    function killLoader() {
        load.setAttribute('style', 'opacity: 1');
        load.setAttribute('style', 'transition: all 1s ease-out');
        spinner.remove();
    }

    function loadHero(id) {
        loader();
        return fetch('http://swapi.co/api/people/'+ id + '/', {method: 'get'})
            .then(function(response){
                return response.json();
            })
            .then(function(heroes) {
                createHeroInfo(heroes);
                return heroes.films;
            })
            .then(function(films){
                return Promise.all(films.map(function(film){
                        return loadFilm(film);
                    })
                );
            })
            .then(function(episodes){
                var filmsName = episodes.map(function(f) {
                    return f.name;
                });
                createFilmInfo(filmsName);
            })
            .then(function(){
                killLoader();
            })
            .catch(function() {
                killLoader();
                info.textContent = 'There is no such hero. Click next';
            })
    }

    function loadFilm(url) {
        return fetch(url, {method: 'get'})
            .then(function(response){
                return response.json();
            })
            .then(function(films) {
                return {
                    name: "Episode " + films.episode_id + ": " + films.title
                };
            });
    }

    function createHeroInfo(heroes) {
        var heroesArr = ["Name: " + heroes.name, "Height: " + heroes.height, "Mass: " + heroes.mass, "Hair Color: " + heroes.hair_color,
            "Skin Color: " + heroes.skin_color, "Eye Color: " + heroes.eye_color, "Birth Year: " + heroes.birth_year, "Gender: " + heroes.gender];
        var ul = document.createElement('ul');
        heroesArr.forEach(function(val){
            var li = document.createElement('li');
            li.textContent = val;
            ul.appendChild(li);
        });
        info.appendChild(ul);
    }

    function createFilmInfo(films) {
        var ul = document.createElement('ul');
        films.forEach(function(film) {
            var li = document.createElement('li');
            li.textContent = film;
            ul.appendChild(li);
        });
        filmBox.appendChild(ul);
    }

    next.addEventListener('click', nextHero);
    prev.addEventListener('click', prevHero);

    function nextHero(e) {
        if ( heroId < 88 ) {
            heroId++;
            removeInfo();
            loadHero(heroId);
        } if ( heroId === 2 ) {
            prev.removeAttribute('disabled');
        } if ( heroId === 88 ) {
            next.setAttribute('disabled', 'disabled');
        }
    }

    function prevHero(e) {
        if ( heroId > 1 ) {
            heroId--;
            removeInfo();
            loadHero(heroId);
        } if ( heroId === 1 ) {
            prev.setAttribute('disabled', 'disabled');
        } if ( heroId === 88 ) {
            next.removeAttribute('disabled');
        }
    }
})();
