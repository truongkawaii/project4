using System.ComponentModel.DataAnnotations;

namespace Project4.Models
{
    public class Candidate
    {
        [Key]
        public int Id { get; set; }
        public string WorkAddress { get; set; }
        public string CV { get; set; }
        public bool Verify {get;set;}
        public int UserId { get; set; }
        public int[] Skills {get;set;}
        public virtual ApplicationUser User { get; set; }
    }

}

