using System.ComponentModel.DataAnnotations;

namespace CineMIIlle.Dto
{
    public class SalaDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Capienza { get; set; }
        public bool Imax { get; set; }
    }
}
