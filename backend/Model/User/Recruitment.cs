using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project4.Models
{
    public class Recruitment
    {
        [Key]
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public RecruitmentPosition Position { get; set; }
        public string WorkAddress { get; set; }
        public WorkingType[] WorkingTypes { get; set; }
        public RecruitmentType RecruitmentType { get; set; }
        public int UserId { get; set; }
        public double Coins { get; set; }
        public virtual ApplicationUser User { get; set; }


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

    public enum WorkingType : byte
    {

        [Display(Name = "Kinh doanh / Bán hàng")]
        Business = 1,
        [Display(Name = "Biên / Phiên dịch")]
        Translate = 2,

        [Display(Name = "Báo chí / Truyền hình")]
        Media = 3,

        [Display(Name = "Công nghệ phần mềm")]
        SoftwareTechnology = 4,

        [Display(Name = "Công nghệ phần cứng")]
        HardWareTechonlogy = 5



    }

    public enum RecruitmentType : byte
    {

        [Display(Name = "Trả Tiền")]
        Vip = 1,
        [Display(Name = "Free")]
        Free = 2
    }

}