using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class FixEntityPhoto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ActivityAttendees_Photos_PhotoId",
                table: "ActivityAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Photos_PhotoId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_ActivityAttendees_PhotoId",
                table: "ActivityAttendees");

            migrationBuilder.DropColumn(
                name: "PhotoId",
                table: "ActivityAttendees");

            migrationBuilder.RenameColumn(
                name: "PhotoId",
                table: "Photos",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Photos_PhotoId",
                table: "Photos",
                newName: "IX_Photos_AppUserId");

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "Photos",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_AspNetUsers_AppUserId",
                table: "Photos",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_AspNetUsers_AppUserId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "Photos");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "Photos",
                newName: "PhotoId");

            migrationBuilder.RenameIndex(
                name: "IX_Photos_AppUserId",
                table: "Photos",
                newName: "IX_Photos_PhotoId");

            migrationBuilder.AddColumn<string>(
                name: "PhotoId",
                table: "ActivityAttendees",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ActivityAttendees_PhotoId",
                table: "ActivityAttendees",
                column: "PhotoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ActivityAttendees_Photos_PhotoId",
                table: "ActivityAttendees",
                column: "PhotoId",
                principalTable: "Photos",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Photos_PhotoId",
                table: "Photos",
                column: "PhotoId",
                principalTable: "Photos",
                principalColumn: "Id");
        }
    }
}
