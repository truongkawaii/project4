using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Project4.Migrations
{
    public partial class add_col_skills : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int[]>(
                name: "Skills",
                table: "Posts",
                type: "integer[]",
                nullable: true);

            migrationBuilder.AddColumn<int[]>(
                name: "Skills",
                table: "Candidates",
                type: "integer[]",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Skills",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Skills",
                table: "Candidates");
        }
    }
}
