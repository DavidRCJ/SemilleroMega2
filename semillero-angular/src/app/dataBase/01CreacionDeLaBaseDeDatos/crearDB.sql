USE master;
GO

-- Eliminar la base de datos si ya existe
IF DB_ID(N'AllMovieSerie') IS NOT NULL
BEGIN
    ALTER DATABASE AllMovieSerie SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE AllMovieSerie;
END
GO

-- Crear nueva base de datos
CREATE DATABASE AllMovieSerie;
GO