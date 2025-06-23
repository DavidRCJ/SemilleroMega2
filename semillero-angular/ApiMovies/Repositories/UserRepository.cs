
using ApiMovies.Data;
using ApiMovies.Models;
using ApiMovies.Interfaces;

namespace ApiMovies.Repositories;

public class UserRepository : IRepository<Users>
{
    private readonly AllMoviesDBContext _context;

    public UserRepository(AllMoviesDBContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Users>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<Users?> GetByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task AddAsync(Users entity)
    {
        await _context.Users.AddAsync(entity);
        await _context.SaveChangesAsync();
    }

    public async Task CreateAsync(Users entity)
    {
        await AddAsync(entity);
    }

    public async Task UpdateAsync(Users entity)
    {
        _context.Users.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var user = await GetByIdAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<bool> ExistsAsync(int id)
    {
        return await _context.Users.AnyAsync(u => u.Id == id);
    }
}