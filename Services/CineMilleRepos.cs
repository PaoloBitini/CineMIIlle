using CineMIIlle.Dto;
using CineMIIlle.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Services
{
    public class CineMilleRepos : ICineMilleRepos
    {
        CineMilleDbContenxt db { get; set; }
        public CineMilleRepos(CineMilleDbContenxt db)
        {
            this.db = db;
        }

        public async Task<ActionResult<IEnumerable<FilmDto>>> GetFilteredMovies(DateTime fromDate, DateTime toDate, string? titolo)
        {
            return await db.Films.Where((f) => f.DataUscita >= fromDate && f.DataUscita < toDate && f.Titolo.ToLower().Contains((titolo ?? String.Empty).ToLower()))
                .Select((f) => f.ToFilmDto())
                .ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<SalaDto>>> GetAllRooms()
        {
            return await db.Sale.Select((s) => s.ToSalaDto())
                .ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetFilteredProgrammazioni(DateTime fromDate, DateTime toDate)
        {
            return await db.Programmazioni.Include("Sala")
                .Include("Film")
                .OrderBy((p) => p.DataOraProiezione)
                .Where((p) => p.DataOraProiezione >= fromDate && p.DataOraProiezione < toDate)
                .Select((p) => p.ToProgrammazioneDto())
                .ToListAsync();
        }

        public async Task<ActionResult<IEnumerable<ProgrammazioneDto>>> GetHistory()
        {
            return await db.Programmazioni.Include("Film")
                .Include("Sala")
                .OrderByDescending((p) => p.DataOraProiezione)
                .Select((p) => p.ToProgrammazioneDto())
                .ToListAsync();
        }
    }
}
