using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Project4.Models

{
    public class Post
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is not null")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Thumbnail is not null")]
        public string Thumbnail { get; set; }

        [Required(ErrorMessage = "Description is not null")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Content is not null")]
        public string Content { get; set; }

        public int[] Skills { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<PostFeedBack> PostFeedBacks { get; set; }

        public PostType PostType { get; set; }

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

    }

    public enum PostType : byte
    {
        [Display(Name = "Tuyển dụng")]
        Recruitment = 1,

        [Display(Name = "Tin tức")]
        News = 2
    }

    public class PostFeedBack
    {

        [Key]
        public int Id { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
        public int UserId { get; set; }

        [ForeignKey("PostId")]
        public Post Post { get; set; }
        public int PostId { get; set; }
        [Required(ErrorMessage = "Subject is not null")]
        public string Subject { get; set; }
        [Required(ErrorMessage = "Content is not null")]
        public string Content { get; set; }
        public PostFeedBackType PostFeedBackType { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }

    public enum PostFeedBackType : byte
    {
        [Display(Name = "Chưa xử lý")]
        Noprocess = 1,

        [Display(Name = "Hủy bỏ")]
        Dispose = 2,
        [Display(Name = "Duyệt")]
        Approve = 2
    }
}
