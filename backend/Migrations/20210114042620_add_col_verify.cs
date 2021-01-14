using Microsoft.EntityFrameworkCore.Migrations;

namespace Project4.Migrations
{
    public partial class add_col_verify : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "RecruitmentType",
                table: "Recruitments",
                type: "smallint",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.AddColumn<string>(
                name: "CV",
                table: "Candidates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Verify",
                table: "Candidates",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RecruitmentType",
                table: "Recruitments");

            migrationBuilder.DropColumn(
                name: "CV",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "Verify",
                table: "Candidates");
        }
    }
}
