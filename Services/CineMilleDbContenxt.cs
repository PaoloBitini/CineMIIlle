using CineMIIlle.Models;
using Microsoft.EntityFrameworkCore;

namespace CineMIIlle.Services
{
    public class CineMilleDbContenxt : DbContext
    {
        public CineMilleDbContenxt(DbContextOptions<CineMilleDbContenxt> options) : base(options)
        {

        }

        public virtual DbSet<Film> Films { get; set; }
        public virtual DbSet<Sala> Sale { get; set; }
        public virtual DbSet<Programmazione> Programmazioni { get; set; }

    }
}
