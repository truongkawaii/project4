using Microsoft.EntityFrameworkCore.Migrations;

namespace Project4.Migrations
{
    public partial class add_table_post_feed_back : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Coins",
                table: "Recruitments",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Coins",
                table: "Recruitments");
        }
    }
}
