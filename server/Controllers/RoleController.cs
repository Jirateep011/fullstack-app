using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using server.DTOs;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AdminController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPut("change-role/{id}")]
    public async Task<ActionResult> ChangeUserRole(int id, UserRole newRole)
    {
        var user = await _context.Users.FindAsync(id);
        
        if (user == null)
        {
            return NotFound("User not found");
        }

        user.Role = newRole;
        await _context.SaveChangesAsync();

        return Ok($"User role changed to {newRole}");
    }

    [HttpGet("users")]
    public async Task<ActionResult<IEnumerable<UserResponse>>> GetAllUsers()
    {
        var users = await _context.Users
            .Select(u => new UserResponse(
                u.Id, 
                u.Name, 
                u.Email, 
                "", // ไม่ส่ง token
                u.Role.ToString()))
            .ToListAsync();

        return Ok(users);
    }
}