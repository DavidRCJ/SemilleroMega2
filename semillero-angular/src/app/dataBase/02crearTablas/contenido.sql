CREATE TABLE dbo.Movies(
    id INT IDENTITY (1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Anio INT NULL,
    Director NVARCHAR(100) NOT NULL,
    Overview NVARCHAR(MAX) NULL, -- SINOPSIS
    PosterPath NVARCHAR(500) NULL,
    Trailer NVARCHAR(500) NULL, -- Agregando el tipo de dato
    ReleaseDate DATE NULL,
    VoteAverage DECIMAL(3,1) NULL
);
GO

--Table Intermiddle relation n-n


CREATE TABLE dbo.Favorites(
	UserId INT NOT NULL,
	MovieId INT NOT NULL,
	FavoriteAT DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
	CONSTRAINT PK_Favorites PRIMARY KEY (UserId,MovieId),
	CONSTRAINT FK_Favorites_User FOREIGN KEY (UserId) REFERENCES dbo.Users(id), 
	CONSTRAINT FK_Favorites_Movies FOREIGN KEY (MoviesId) REFERENCES dbo.Movies(id), 
);
GO



--ADD peliculas ejemplo Ace ventura
INSERT INTO dbo.Movies (Title, Anio, Director, Overview, PosterPath, Trailer, ReleaseDate, VoteAverage)
VALUES 
('Pulp Fiction', 1994, 'Quentin Tarantino', 'Historias entrelazadas de crimen en Los Ángeles que giran en torno a violencia, redención y cultura pop.', '/assets/Culto/pullFitction.jpg', 'https://www.youtube.com/watch?v=s7EdQ4FqbhY', '1994-10-14', 8.9),
('The Butterfly Effect', 2004, 'Eric Bress y J. Mackye Gruber', 'Un hombre descubre que puede viajar en el tiempo y cambiar eventos de su pasado, pero cada cambio tiene consecuencias inesperadas.', '/assets/Culto/buttEffect.jpg', 'https://www.youtube.com/watch?v=kkWQLjI2rAU', '2004-01-23', 7.6),
('Donnie Darko', 2001, 'Richard Kelly', 'Un adolescente perturbado comienza a tener visiones de un conejo gigante que lo guía hacia eventos extraños y apocalípticos.', './assets/Culto/donieDarko.jpg', 'https://www.youtube.com/watch?v=EP9L4CzN6to', '2001-10-26', 8.0),
('A Clockwork Orange', 1971, 'Stanley Kubrick', 'Una historia distópica sobre un joven delincuente y los métodos extremos utilizados para reformarlo.', './assets/Culto/mechanicalOrange.jpg', 'https://www.youtube.com/watch?v=T54uZPI4Z8A', '1971-12-19', 8.3),
('They Live', 1988, 'John Carpenter', 'Un hombre descubre unas gafas que revelan que la sociedad está controlada por alienígenas.', './assets/Culto/theyAreLive.jpg', 'https://www.youtube.com/watch?v=iJC4R1uXDaE', '1988-11-04', 7.2),
('21 Jump Street', 2012, 'Phil Lord y Christopher Miller', 'Dos policías jóvenes se infiltran en una escuela secundaria para desmantelar una red de drogas.', './assets/Comedy/21jumpStreet.jpg', 'https://www.youtube.com/watch?v=Oj55KinxZx4', '2012-03-16', 7.2),
('Ace Ventura: Pet Detective', 1994, 'Tom Shadyac', 'Un excéntrico detective especializado en mascotas busca al delfín mascota de un equipo de fútbol americano.', './assets/Comedy/aceVentura.jpg', 'https://www.youtube.com/watch?v=_MQSTiPbKLA&pp=0gcJCdgAo7VqN5tD', '1994-02-04', 6.9),
('The Hangover', 2009, 'Todd Phillips', 'Tres amigos despiertan después de una despedida de soltero en Las Vegas sin recordar nada y con el novio desaparecido.', './assets/Comedy/hangOver.jpg', 'https://www.youtube.com/watch?v=tcdUhdOlz9M', '2009-06-05', 7.7),
('Scary Movie', 2000, 'Keenen Ivory Wayans', 'Una parodia de películas de terror que mezcla humor absurdo con referencias a clásicos del género.', './assets/Comedy/scary movie.jpg', 'https://www.youtube.com/watch?v=zCFZUZxBVuI', '2000-07-07', 6.2),
('Super Bad', 2007, 'Greg Mottola', 'Dos amigos intentan conseguir alcohol para una fiesta, enfrentándose a situaciones hilarantes.', './assets/Comedy/superCool.jpg', 'https://www.youtube.com/watch?v=LvKvus3vCEY', '2007-08-17', 7.6),
('Invensible', 2021, 'Robert Kirkman', 'Un joven descubre sus poderes y enfrenta la verdad sobre su padre, el superhéroe más poderoso del planeta.', './assets/Series/Sin título.jpg', 'https://www.youtube.com/watch?v=ROCIksHW2oc', '2021-03-25', 8.7),
('Avatar: The Last Airbender', 2005, 'Michael Dante DiMartino y Bryan Konietzko', 'Un joven maestro del aire debe restaurar el equilibrio en un mundo dividido por la guerra.', './assets/Series/avatar.jpg', 'https://www.youtube.com/watch?v=BPYW-_mF3LM', '2005-02-21', 9.2),
('Demon Slayer (Kimetsu no Yaiba)', 2019, 'Koyoharu Gotouge', 'Un joven busca vengar a su familia y salvar a su hermana, convertida en demonio.', './assets/Series/daemonSlayer.jpg', 'https://www.youtube.com/watch?v=sbkI9YjBmd0', '2019-04-06', 8.7),
('One Punch Man', 2015, 'ONE', 'Un héroe invencible busca emoción en su vida mientras enfrenta enemigos poderosos.', './assets/Series/onePuchMan.jpg', 'https://www.youtube.com/watch?v=C0M93res8Z0', '2015-10-05', 8.8),
('Naruto', 2002, 'Masashi Kishimoto', 'La historia de un joven ninja que aspira a convertirse en Hokage mientras enfrenta desafíos y enemigos.', './assets/Series/naruto.jpg', 'https://www.youtube.com/watch?v=-G9BqkgZXRA', '2002-10-03', 8.3),
('Hysteria', 2024, 'Matthew Scott Kane', 'Una banda de metal satánico se convierte en el centro de una caza de brujas en los años 80.', './assets/Series/hysteria.jpg', 'https://www.youtube.com/watch?v=E2yv6LYktKc', '2024-04-15', 7.5),
('Breaking Bad', 2008, 'Vince Gilligan', 'Un profesor de química se convierte en fabricante de metanfetaminas para asegurar el futuro de su familia.', './assets/Series/breakingBad.jpg', 'https://www.youtube.com/watch?v=mXd1zTwcQ18', '2008-01-20', 9.5),
('Stranger Things', 2016, 'Hermanos Duffer', 'Un grupo de amigos descubre un mundo alternativo mientras buscan a un niño desaparecido.', './assets/Series/strangerThings.jpg', 'https://www.youtube.com/watch?v=Wre1F5YyIlA', '2016-07-15', 8.8),
('Malcolm in the Middle', 2000, 'Linwood Boomer', 'La vida de una familia disfuncional vista a través de los ojos de Malcolm, un niño prodigio.', './assets/Series/malcom.jpg', 'https://www.youtube.com/watch?v=nYW2zieCn6U', '2000-01-09', 8.0),
('Dr House', 2004, 'David Shore', 'Un médico brillante pero misántropo lidera un equipo de diagnóstico en un hospital.', './assets/Series/house.jpg', 'https://www.youtube.com/watch?v=1nqW4g_S0wo', '2004-11-16', 8.9);