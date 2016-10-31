//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
        $('header').toggleClass('open');
        $('#menu').toggleClass('show-menu');
	});
});