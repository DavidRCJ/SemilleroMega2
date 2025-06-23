namespace ApiMovies.Interfaces;
// Interfaces/IMovieRepository.cs
using ApiMovies.Models;


public interface IMovieRepository : IRepository<Movies>
{
    Task<IEnumerable<Movies>> GetMoviesByGenreAsync(string Title);

}

