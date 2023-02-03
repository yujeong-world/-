var menu = $(".main-menu"); //ul
var menu_list = menu.children("li"); //ul하위메뉴 li 1차메뉴 
/* menu_list.css('background-color', 'red');
console.log(menu_list);
 */
menu_list.on("mouseenter", function () {
	var target = $(this);
	target.addClass("slide");
	target.children("div").css("z-index", "100").stop().slideDown(500, function () {
		menu_list.not(".slide").children("div").hide();
		target.removeClass("slide");
	});
});
menu_list.on("mouseleave", function () {
	var target = $(this);
	target.children("div").css("z-index", "1");
	menu_list.children("div").hide();
});