using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Project4.Data;

namespace Project4.Models
{
    public class ApplicationUser : IdentityUser<int>
    {
        [MaxLength(15)]
        public string PosUserId { get; set; }

        public DateTime? PosSyncDate { get; set; }

        [MaxLength(50, ErrorMessage = "Tên không được vượt quá 50 ký tự")]
        [Display(Name = "Tên")]
        public string FirstName { get; set; }

        [MaxLength(50, ErrorMessage = "Họ không được vượt quá 50 ký tự")]
        [Display(Name = "Họ")]
        public string LastName { get; set; }

        [Display(Name = "Ảnh đại diện")]
        [MaxLength(300)]
        public string Avatar { get; set; }

        [MaxLength(100, ErrorMessage = "Họ tên không được vượt quá 100 ký tự")]
        [Display(Name = "Họ tên")]
        public string FullName { get; set; }

        [Display(Name = "Giới thiệu")]
        [MaxLength(500, ErrorMessage = "Nội dung giới thiệu không được vượt quá 500 ký tự")]
        public string Description { get; set; }

        [Display(Name = "Giới tính")]
        public Gender Gender { get; set; }

        [Display(Name = "Ngày sinh")]
        public DateTime? Birthdate { get; set; }

        [Display(Name = "Ngày tham gia")]
        public DateTime JoinDate { get; set; }

        [Display(Name = "Trạng thái")]
        public IdentityStatus Status { get; set; }

        public virtual ICollection<UserRole> Roles { get; } = new List<UserRole>();

        public virtual ICollection<IdentityUserClaim<int>> Claims { get; } = new List<IdentityUserClaim<int>>();

        public virtual ICollection<IdentityUserLogin<int>> Logins { get; } = new List<IdentityUserLogin<int>>();

        public virtual Candidate UserCandidate { get; set; }
        public virtual Recruitment UserRecruitment { get; set; }

    }



    public class Role : IdentityRole<int>
    {
        [MaxLength(100, ErrorMessage = "Tên chức vụ không được vượt quá 100 ký tự")]
        public string PositionName { get; set; }

        [MaxLength(300, ErrorMessage = "Nội dung mô tả không được vượt quá 300 ký tự")]
        public string Description { get; set; }

        public IdentityStatus Status { get; set; }

        public virtual ICollection<UserRole> Users { get; set; }

        public virtual ICollection<IdentityRoleClaim<int>> Claims { get; set; }

    }

    public class UserRole : IdentityUserRole<int>
    {
        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
    }


    /* user and role stores */
    public class ApplicationUserStore : UserStore<ApplicationUser, Role, ApplicationDbContext, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityUserToken<int>, IdentityRoleClaim<int>>
    {
        public ApplicationUserStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer) { }
    }

    public class ApplicationRoleStore : RoleStore<Role, ApplicationDbContext, int, UserRole, IdentityRoleClaim<int>>
    {
        public ApplicationRoleStore(ApplicationDbContext db, IdentityErrorDescriber describer = null) : base(db, describer)
        {

        }
    }


    public enum IdentityStatus : byte
    {
        [Display(Name = "Hoạt động")]
        Active = 1,
        [Display(Name = "Không hoạt động")]
        Inactive = 2,

        [Display(Name = "Đã xóa")]
        Deleted = 3

    }

    public enum Gender : byte
    {

        [Display(Name = "Nam")]
        Male = 1,

        [Display(Name = "Nữ")]
        Female = 2,

        [Display(Name = "Khác")]
        Other = 3
    }
}
