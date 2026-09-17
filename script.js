const planets = {

    Mercury: {
        distance: "57.9 million km",
        moons: "0",
        temperature: "167°C",
        year: "88 Earth days",
        type: "Rocky Planet",
        description:
            "Mercury is the smallest planet and the closest planet to the Sun."
    },

    Venus: {
        distance: "108.2 million km",
        moons: "0",
        temperature: "464°C",
        year: "225 Earth days",
        type: "Rocky Planet",
        description:
            "Venus is the hottest planet in our Solar System because of its thick atmosphere."
    },

    Earth: {
        distance: "149.6 million km",
        moons: "1",
        temperature: "15°C",
        year: "365 days",
        type: "Rocky Planet",
        description:
            "Earth is our home planet and the only known world with life."
    },

    Mars: {
        distance: "227.9 million km",
        moons: "2",
        temperature: "-63°C",
        year: "687 Earth days",
        type: "Rocky Planet",
        description:
            "Mars is called the Red Planet because iron minerals make its surface appear reddish."
    },

    Jupiter: {
        distance: "778.5 million km",
        moons: "95+",
        temperature: "-110°C",
        year: "11.86 Earth years",
        type: "Gas Giant",
        description:
            "Jupiter is the largest planet in our Solar System and has a powerful magnetic field."
    },

    Saturn: {
        distance: "1.43 billion km",
        moons: "140+",
        temperature: "-140°C",
        year: "29.45 Earth years",
        type: "Gas Giant",
        description:
            "Saturn is famous for its beautiful ring system made mostly of ice and rocky particles."
    },

    Uranus: {
        distance: "2.87 billion km",
        moons: "27",
        temperature: "-195°C",
        year: "84 Earth years",
        type: "Ice Giant",
        description:
            "Uranus is an ice giant that rotates on its side, giving it an unusual seasonal cycle."
    },

    Neptune: {
        distance: "4.5 billion km",
        moons: "14",
        temperature: "-200°C",
        year: "164.8 Earth years",
        type: "Ice Giant",
        description:
            "Neptune is the farthest recognized planet from the Sun and has extremely fast winds."
    }

};


function showPlanet(name) {

    const planet = planets[name];

    document.getElementById("planetName").innerText = name;

    document.getElementById("description").innerText =
        planet.description;

    document.getElementById("distance").innerText =
        planet.distance;

    document.getElementById("moons").innerText =
        planet.moons;

    document.getElementById("temperature").innerText =
        planet.temperature;

    document.getElementById("year").innerText =
        planet.year;

    document.getElementById("type").innerText =
        planet.type;


    const icon = document.getElementById("planetIcon");

    icon.className = "big-planet " + name.toLowerCase();

}


function setSpeed(speed) {

    const orbits = document.querySelectorAll(".orbit");

    orbits.forEach(function(orbit) {

        orbit.style.animationDuration =
            (15 / speed) + "s";

        orbit.style.animationPlayState =
            "running";

    });

}


function pauseSystem() {

    const orbits = document.querySelectorAll(".orbit");

    orbits.forEach(function(orbit) {

        orbit.style.animationPlayState =
            "paused";

    });

}


const facts = [

    "Jupiter is so large that more than 1,000 Earths could fit inside it by volume.",

    "A day on Venus is longer than a year on Venus.",

    "Saturn's rings are made mostly of ice particles and rocky material.",

    "Neptune has some of the fastest winds in the Solar System.",

    "Mars has two small moons named Phobos and Deimos.",

    "Uranus rotates at a dramatic tilt of about 98 degrees.",

    "Mercury completes one orbit around the Sun in only 88 Earth days.",

    "Earth is currently the only known planet with life."

];


function randomFact() {

    const number =
        Math.floor(Math.random() * facts.length);

    document.getElementById("factText").innerText =
        facts[number];

}