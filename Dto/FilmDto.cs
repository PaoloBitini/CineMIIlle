using System.ComponentModel.DataAnnotations;

namespace CineMIIlle.Dto
{
    public class FilmDto
    {
        public int Id { get; set; }
        public string Titolo { get; set; }
        public string Regista { get; set; }
        public DateTime DataUscita { get; set; }
        public DateTime DataFinePermanenza { get; set; }
    }
}
