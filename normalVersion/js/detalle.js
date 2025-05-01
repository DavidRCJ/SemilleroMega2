const movieId = localStorage.getItem("selectedMovie");

const movieData = {
  pulpFiction: {
    titulo: "Pulp Fiction",
    anio: 1994,
    director: "Quentin Tarantino",
    sinopsis: "Historias entrelazadas de crimen en Los Ángeles que giran en torno a violencia, redención y cultura pop.",
    imagen: "./assets/Culto/pullFitction.jpg",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    pelicula: "#"
  },
  mariposa: {
    titulo: "The Butterfly Effect",
    anio: 2004,
    director: "Eric Bress y J. Mackye Gruber",
    sinopsis: "Un hombre descubre que puede viajar en el tiempo y cambiar eventos de su pasado, pero cada cambio tiene consecuencias inesperadas.",
    imagen: "./assets/Culto/buttEffect.jpg",
    trailer:"https://www.youtube.com/watch?v=kkWQLjI2rAU",
    pelicula: "#"    
  }, 
  donie:{
    titulo: "Donnie Darko",
    anio: 2001,
    director: "Richard Kelly",
    sinopsis: "Un adolescente perturbado comienza a tener visiones de un conejo gigante que lo guía hacia eventos extraños y apocalípticos.",
    imagen: "./assets/Culto/donieDarko.jpg",
    trailer: "https://www.youtube.com/watch?v=EP9L4CzN6to",
    pelicula: "#"
  },
  orange:{
    titulo: "A Clockwork Orange",
    anio: 1971,
    director: "Stanley Kubrick",
    sinopsis: "Una historia distópica sobre un joven delincuente y los métodos extremos utilizados para reformarlo.  ",
    imagen: "./assets/Culto/mechanicalOrange.jpg",
    trailer: "https://www.youtube.com/watch?v=T54uZPI4Z8A",
    pelicula: "#"
  },
  live:{
    titulo: "They Live",
    anio: 1988,
    director: "John Carpetner",
    sinopsis: "Un hombre descubre unas gafas que revelan que la sociedad está controlada por alienígenas.",
    imagen: "./assets/Culto/theyAreLive.jpg",
    trailer: "https://www.youtube.com/watch?v=iJC4R1uXDaE",
    pelicula: "#"
  },
  jump:{
    titulo: "21 Jump Street",
    anio: 2012,
    director: "Phil Lord y Christopher Miller",
    sinopsis: "Dos policías jóvenes se infiltran en una escuela secundaria para desmantelar una red de drogas. ",
    imagen: "./assets/Comedy/21jumpStreet.jpg",
    trailer: "https://www.youtube.com/watch?v=Oj55KinxZx4",
    pelicula: "#"
  },
  ace:{
    titulo: "Ace Ventura: Pet Detective",
    anio: 1994,
    director: "Tom Shadyac",
    sinopsis: "Un excéntrico detective especializado en mascotas busca al delfín mascota de un equipo de fútbol americano.",
    imagen: "./assets/Comedy/aceVentura.jpg",
    trailer: "https://www.youtube.com/watch?v=_MQSTiPbKLA&pp=0gcJCdgAo7VqN5tD",
    pelicula: "#"
  },
  over:{
    titulo: "The Hangover",
    anio: 2009,
    director: "Todd Phillips",
    sinopsis: "Tres amigos despiertan después de una despedida de soltero en Las Vegas sin recordar nada y con el novio desaparecido. ",
    imagen: "./assets/Comedy/hangOver.jpg",
    trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
    pelicula: "#"
  },
  scary:{
    titulo: "Scary Movie",
    anio: 2000,
    director: "Keenen Ivory Wayans",
    sinopsis: "Una parodia de películas de terror que mezcla humor absurdo con referencias a clásicos del género",
    imagen: "./assets/Comedy/scary movie.jpg",
    trailer: "https://www.youtube.com/watch?v=zCFZUZxBVuI",
    pelicula: "#"
  },
  cool:{
    titulo: "Super Bad",
    anio: 2007,
    director: "Greg Mottola",
    sinopsis: "Dos amigos intentan conseguir alcohol para una fiesta, enfrentándose a situaciones hilarantes. ",
    imagen: "./assets/Comedy/superCool.jpg",
    trailer: "https://www.youtube.com/watch?v=LvKvus3vCEY",
    pelicula: "#"
  },
  invensible:{
    titulo: "Invensible",
    anio: 2021,
    director: "Robert Kirkman",
    sinopsis: "Un joven descubre sus poderes y enfrenta la verdad sobre su padre, el superhéroe más poderoso del planeta. ",
    imagen: "./assets/Series/Sin título.jpg",
    trailer: "https://www.youtube.com/watch?v=ROCIksHW2oc",
    pelicula: "#"
  },
  avatar:{
    titulo: "Avatar: The Last Airbender",
    anio: 2005,
    director: "Michael Dante DiMartino y Bryan Konietzko",
    sinopsis: "Un joven maestro del aire debe restaurar el equilibrio en un mundo dividido por la guerra.",
    imagen: "./assets/Series/avatar.jpg",
    trailer: "https://www.youtube.com/watch?v=BPYW-_mF3LM",
    pelicula: "#"
  },
  demon:{
    titulo: "Demon Slayer (Kimetsu no Yaiba)",
    anio: 2019,
    director: "Koyoharu Gotouge",
    sinopsis: "Un joven busca vengar a su familia y salvar a su hermana, convertida en demonio.",
    imagen: "./assets/Series/daemonSlayer.jpg",
    trailer: "https://www.youtube.com/watch?v=sbkI9YjBmd0",
    pelicula: "#"
  },
  one:{
    titulo: "One Punch Man",
    anio: 2015,
    director: "ONE",
    sinopsis: "Un héroe invencible busca emoción en su vida mientras enfrenta enemigos poderosos.",
    imagen: "./assets/Series/onePuchMan.jpg",
    trailer: "https://www.youtube.com/watch?v=C0M93res8Z0",
    pelicula: "#"
  },
  naruto:{
    titulo: "Naruto",
    anio: 2002,
    director: "Masashi Kishimoto",
    sinopsis: "La historia de un joven ninja que aspira a convertirse en Hokage mientras enfrenta desafíos y enemigos.",
    imagen: "./assets/Series/naruto.jpg",
    trailer: "https://www.youtube.com/watch?v=-G9BqkgZXRA",
    pelicula: "#"
  },
  hysteria:{
    titulo: "Hysteria",
    anio:2024 ,
    director: "Matthew Scott Kane",
    sinopsis: "Una banda de metal satánico se convierte en el centro de una caza de brujas en los años 80. ",
    imagen: "./assets/Series/hysteria.jpg",
    trailer: "https://www.youtube.com/watch?v=E2yv6LYktKc",
    pelicula: "#"
  },
  bad:{
    titulo: "Breaking Bad",
    anio:2008 ,
    director: "Vince Gilligan",
    sinopsis: "Un profesor de química se convierte en fabricante de metanfetaminas para asegurar el futuro de su familia.",
    imagen: "./assets/Series/breakingBad.jpg",
    trailer: "https://www.youtube.com/watch?v=mXd1zTwcQ18",
    pelicula: "#"
  },
  stranger:{
    titulo: "Sttranger Things",
    anio: 2016,
    director: "Hermanos Duffer",
    sinopsis: "Un grupo de amigos descubre un mundo alternativo mientras buscan a un niño desaparecido.",
    imagen: "./assets/Series/strangerThings.jpg",
    trailer: "https://www.youtube.com/watch?v=Wre1F5YyIlA",
    pelicula: "#"
  },
  malcom:{
    titulo: "Malcom the middle",
    anio:2000 ,
    director: "Linwood Boomer ",
    sinopsis: "La vida de una familia disfuncional vista a través de los ojos de Malcolm, un niño prodigio.",
    imagen: "./assets/Series/malcom.jpg",
    trailer: "https://www.youtube.com/watch?v=nYW2zieCn6U",
    pelicula: "#"
  },
  house:{
    titulo: "Dr House",
    anio: 2004,
    director: "David Shore",
    sinopsis: " Un médico brillante pero misántropo lidera un equipo de diagnóstico en un hospital.",
    imagen: "./assets/Series/house.jpg",
    trailer: "https://www.youtube.com/watch?v=1nqW4g_S0wo",
    pelicula: "#"
  }
  // Agregá más películas aquí
};
 
const data = movieData[movieId];

if (data) {
  document.getElementById("titulo").innerText = data.titulo;
  document.getElementById("anio").innerText = `Año: ${data.anio}`;
  document.getElementById("director").innerText = `Director: ${data.director}`;
  document.getElementById("sinopsis").innerText = data.sinopsis;
  document.getElementById("imagen").src = data.imagen;
} else {
  document.body.innerHTML = "<h2 class='text-center mt-5'>Película no encontrada 😢</h2>";
}

function addToFavorites() {
  alert(`${data.titulo} agregada a favoritos (esto lo podés guardar en localStorage si querés)`);
}

function verTrailer() {
  window.open(data.trailer, "_blank");
}

function verPelicula() {
  window.location.href = data.pelicula; // o enlace embebido
}
