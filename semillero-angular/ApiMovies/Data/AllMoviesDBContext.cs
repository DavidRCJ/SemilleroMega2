using Microsoft.EntityFrameworkCore;

namespace ApiMovies.Data
{
    public class AllMoviesDBContext : DbContext
    {
        public AllMoviesDBContext(DbContextOptions<AllMoviesDBContext> options) : base(options)
        { }
        public DbSet<Users> Users => Set<Users>();
        public DbSet<Movie> Movies => Set<Movies>();
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
      
    }
}