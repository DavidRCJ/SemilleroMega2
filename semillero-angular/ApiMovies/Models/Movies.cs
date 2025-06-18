public class Movies
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Director { get; set; } = null!;
    public DateTime ReleaseDate { get; set; }
    public string Genre { get; set; } = null!;
    public string PosterUrl { get; set; } = null!;
    public double Rating { get; set; }
}