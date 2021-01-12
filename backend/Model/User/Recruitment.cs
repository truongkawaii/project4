using System.ComponentModel.DataAnnotations;

namespace Project4.Models
{
    public class Recruitment
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public RecruitmentPosition Position { get; set; }
        public string WorkAddress { get; set; }
        public WorkingPosition[] WorkingPosition { get; set; }

    }
    public enum RecruitmentPosition : byte
    {
        [Display(Name = "Giám đốc")]
        Manager = 1,
        Hr = 2,
        [Display(Name = "Phó phòng")]
        Deputy = 3,
        [Display(Name = "Nhân viên")]
        Staff = 4
    }

    public enum WorkingPosition : byte
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