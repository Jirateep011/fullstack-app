using Microsoft.EntityFrameworkCore;
using server.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// ลำดับการอ่าน Secret Key:
// 1. Environment Variable
// 2. .env file
// 3. Throw error if not found
var jwtSecret = Environment.GetEnvironmentVariable("JWT_SECRET_KEY") ?? 
    throw new InvalidOperationException(
        "JWT_SECRET_KEY environment variable is not set. Please check your .env file or system environment variables."
    );

// ตรวจสอบความยาวของ key
if (Encoding.UTF8.GetBytes(jwtSecret).Length * 8 < 256)
{
    throw new InvalidOperationException(
        "JWT secret key must be at least 32 characters long for security"
    );
}

// Add services to the container.
builder.Services.AddControllers();

// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVueApp",
        builder => builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

// Add JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtSecret)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowVueApp");
app.UseAuthentication();
app.UseAuthorization();
app.UseMiddleware<AdminAuthMiddleware>();
app.MapControllers();

app.Run();