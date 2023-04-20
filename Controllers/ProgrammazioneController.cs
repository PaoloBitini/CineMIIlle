using CineMIIlle.Dto;
using CineMIIlle.Models;
using CineMIIlle.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/programmazioni")]
    public class ProgrammazioneController : Controller
    {
        private ICineMilleRepos repos;
        public ProgrammazioneController(ICineMilleRepos cineMilleRepos)
        {
            repos = cineMilleRepos;
        }

        [HttpGet("get/{fromDate}/{toDate}")]
        public async Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetFiltered(string fromDate, string toDate)
        {
            bool tryFrom = DateTime.TryParse(fromDate, out DateTime from);
            bool tryTo = DateTime.TryParse(toDate, out DateTime to);
            return await repos.GetFilteredProgrammazioni(tryFrom ? from : DateTime.MinValue, tryTo ? to : DateTime.MaxValue);
        }


        [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetHistory()
        {
            return await repos.GetHistory();
        }

    }
}
