using CineMIIlle.Dto;
using CineMIIlle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Services
{
    public interface ICineMilleRepos
    {
        Task<ActionResult<IEnumerable<FilmDto>>> GetFilteredMovies(DateTime fromDate, DateTime toDate, string? titolo);
        Task<ActionResult<IEnumerable<SalaDto>>> GetAllRooms();
        Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetFilteredProgrammazioni(DateTime fromDate, DateTime toDate);
        Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetHistory();

    }
}
