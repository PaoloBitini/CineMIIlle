using CineMIIlle.Dto;
using CineMIIlle.Models;
using CineMIIlle.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/movies")]
    public class MovieController : Controller
    {
        private ICineMilleRepos repos;
        public MovieController(ICineMilleRepos cineMilleRepos)
        {
            repos = cineMilleRepos;
        }

        [HttpGet("get/{fromDate}/{toDate}/{titolo}")]
        public async Task<ActionResult<IEnumerable<FilmDto>>> GetMovies(string fromDate, string toDate, string? titolo)
        {
            bool tryFrom = DateTime.TryParse(fromDate, out DateTime from);
            bool tryTo = DateTime.TryParse(toDate, out DateTime to);
            return await repos.GetFilteredMovies(tryFrom ? from : DateTime.MinValue, tryTo ? to: DateTime.MaxValue, titolo);
        }

        [HttpGet("get/{fromDate}/{toDate}")]
        public async Task<ActionResult<IEnumerable<FilmDto>>> GetMovies(string fromDate, string toDate)
        {
            bool tryFrom = DateTime.TryParse(fromDate, out DateTime from);
            bool tryTo = DateTime.TryParse(toDate, out DateTime to);
            return await repos.GetFilteredMovies(tryFrom ? from : DateTime.MinValue, tryTo ? to : DateTime.MaxValue, null);
        }
    }
}
