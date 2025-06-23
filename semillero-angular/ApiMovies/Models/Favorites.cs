namespace ApiMovies.Models;

public class Favorites
{
    public int UserId { get; set; }
    public Users User { get; set; } = null!;

    public int MoviesId { get; set; }
    
    // Additional properties can be added here if needed
}