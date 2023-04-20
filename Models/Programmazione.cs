using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CineMIIlle.Models
{
    public class Programmazione
    {
        [Key]
        public int id { get; set; }
        public Sala Sala { get; set; }
        public Film Film { get; set; }
        public DateTime DataOraProiezione { get; set; }

    }
}
