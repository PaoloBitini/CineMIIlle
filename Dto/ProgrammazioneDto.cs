using System.ComponentModel.DataAnnotations;

namespace CineMIIlle.Dto
{
    public class ProgrammazioneDto
    {
        public int Id { get; set; }
        public  SalaDto Sala { get; set; }
        public  FilmDto Film { get; set; }
        public DateTime DataOraProiezione { get; set; }

    }
}
