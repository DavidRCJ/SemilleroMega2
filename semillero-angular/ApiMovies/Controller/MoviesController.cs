using Microsoft.AspNetCore.Mvc;
using ApiMovies.Interfaces;

namespace ApiMovies.Controller
{
    [ApiController]
    [Route("api/controller]")]

    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _repo;

        public MoviesController(IMovieRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllMovies()=> Ok(await _movieRepository.GetAllAsync());



    }

}