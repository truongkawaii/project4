using System.ComponentModel.DataAnnotations;

namespace Project4.Models
{
    public class Candidate
    {
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public CancatePosition Position { get; set; }
        
        public string WorkAddress { get; set; }
    }

    public enum CancatePosition : byte
    {
        [Display(Name = "Giám đốc")]
        Manager = 1,
        Hr = 2,
        [Display(Name = "Phó phòng")]
        Deputy = 3,
        [Display(Name = "Nhân viên")]
        Staff = 4
    }


 
}