using   Microsoft.EntityFrameworkCore;
using  Microsoft.OpenApi.Models;
using ApiMovies.Data;
using ApiMovies.Models;
using ApiMovies.Interfaces;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;


var builder = WebApplication.CreateBuilder(args);

var conn = builder.Configuration.GetConnectionString("AllMoviesDB")!;
builder.Services.AddDbContext<AllMoviesDBContext>(options =>
    options.UseSqlServer(conn));

//implementation del swagger
builder.Services.AddControllers();
//Referencia a los repositorios
builder.Services.AddScoped<IMovieRepository, MovieRepository>();

builder.Services.AddEndpointsApiExplorer(); 
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ApiMovies", Version = "v1" });
}); 

var app = builder.Build();

//middleware para el swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();



app.Run();
 