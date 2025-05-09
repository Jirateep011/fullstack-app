namespace server.DTOs;

public record LoginRequest(string Email, string Password);
public record RegisterRequest(string Name, string Email, string Password);
public record UserResponse
{
    public int Id { get; init; }
    public string Name { get; init; }
    public string Email { get; init; }
    public string Token { get; init; }
    public string Role { get; init; }

    public UserResponse(int id, string name, string email, string token, string role)
    {
        Id = id;
        Name = name;
        Email = email;
        Token = token;
        Role = role;
    }
}
