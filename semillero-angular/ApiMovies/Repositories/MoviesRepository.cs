using ApiMovies.Data;
using ApiMovies.Models;
using ApiMovies.Interfaces;
namespace ApiMovies.Interfaces;

public class MoviesRepository : IRepository<Movies>


{
    private readonly AllMoviesDBContext _context;
    public MoviesRepository(AllMoviesDBContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Movies>> GetAllAsync()
    {
        return await _context.Movies.ToListAsync();
    }

    public async Task<Movies?> GetByIdAsync(int id)
    {
        return await _context.Movies.FindAsync(id);
    }

    public async Task AddAsync(Movies entity)
    {
        await _context.Movies.AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task CreateAsync(Movies entity)
    {
        await AddAsync(entity);
    }

    public async Task UpdateAsync(Movies entity)
    {
        _context.Movies.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var movie = await GetByIdAsync(id);
        if (movie != null)
        {
            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<bool> ExistsAsync(int id)
    {
        return await _context.Movies.AnyAsync(m => m.Id == id);
    }
}