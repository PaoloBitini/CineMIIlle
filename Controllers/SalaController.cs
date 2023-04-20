using CineMIIlle.Dto;
using CineMIIlle.Models;
using CineMIIlle.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/sale")]
    public class SalaController : Controller
    {
        private ICineMilleRepos repos;
        public SalaController(ICineMilleRepos cineMilleRepos) {
            repos = cineMilleRepos;
        }

        [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<SalaDto>>> GetAll()
        {
            return await repos.GetAllRooms();
        }
    }
}
