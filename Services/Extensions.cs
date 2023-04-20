using CineMIIlle.Dto;
using CineMIIlle.Models;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CineMIIlle.Services
{
    public static class Extensions
    {
        public static FilmDto ToFilmDto(this Film f)
        {
            return new FilmDto
            {
                Id = f.Id,
                Titolo = f.Titolo,
                Regista = f.Regista,
                DataUscita = f.DataUscita,
                DataFinePermanenza = f.DataFinePermanenza
            };
        }

        public static SalaDto ToSalaDto(this Sala s)
        {
            return new SalaDto
            {
                Id = s.Id,
                Nome = s.Nome,
                Capienza = s.Capienza,
                Imax = s.Imax
            };
        }

        public static ProgrammazioneDto ToProgrammazioneDto( this Programmazione p)
        {
            return new ProgrammazioneDto
            {
                Id = p.id,
                Film = p.Film.ToFilmDto(),
                Sala = p.Sala.ToSalaDto(),
                DataOraProiezione = p.DataOraProiezione
            };
        }
    }
}
