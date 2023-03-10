using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<MovieContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MovieContext") ?? throw new InvalidOperationException("Connection string 'MovieContext' not found.")));




builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(cors => 
    {
        cors
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin();
    });
    
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
