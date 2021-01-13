using System.ComponentModel.DataAnnotations;

namespace Project4.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string WorkAddress { get; set; }

        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }

}

