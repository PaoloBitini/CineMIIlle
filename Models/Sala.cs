using System.ComponentModel.DataAnnotations;

namespace CineMIIlle.Models
{
    public class Sala
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Capienza { get; set; }
        public bool Imax { get; set; }
    }
}
