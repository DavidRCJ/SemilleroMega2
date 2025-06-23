// Data/AllMoviesDBContext.cs
using Microsoft.EntityFrameworkCore;
using ApiMovies.Models;


namespace ApiMovies.Data
{
    public class AllMoviesDBContext : DbContext
    {
        public AllMoviesDBContext(DbContextOptions<AllMoviesDBContext> options) : base(options)
        { }
        public DbSet<Users> Users => Set<Users>();
        public DbSet<Movies> Movies => Set<Movies>();

        public DbSet<Favorites> Favorites => Set<Favorites>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Favorites>()
                .HasKey(f => new { f.UserId, f.MovieId });

        }

    }
}