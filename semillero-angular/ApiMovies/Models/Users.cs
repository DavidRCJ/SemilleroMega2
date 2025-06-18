public class Users
{
    public int id { get; set; }
    public string Username { get; set; } = nunll!;
    public string Email { get; set; } = null!;
    public byte[] Password { get; set; } = null!;
    public Datetime CreatedAt { get; set; } = DateTime.Now;
       
}