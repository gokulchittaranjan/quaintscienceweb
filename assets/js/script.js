$(document).ready(function () {
	var Scroll = function  () {
		$('html, body').stop(true, true).animate({scrollTop: $(this.hash).offset().top - navHight + 1}, 600);
		return false;
	};
	$winWidth = $(window).width()
	nav = $(".main-header");
	if($winWidth > 767){
		nav.stick_in_parent();		
		navHight = $(".main-header").height();
		$('.navbar-nav li a').on('click', function  () {
			$('html, body').stop(true, true).animate({scrollTop: $(this.hash).offset().top - navHight + 1}, 600);
			return false;
		});
	}
})

$(window).bind('scroll resize', function() {
	$winWidth = $(window).width()
	if($winWidth > 767){
		var nav = $(".main-header");
	    var currentSection = null;
	    $('[data-target]').each(function(){
	        var element = $(this).attr('id');	
	        if ($('#'+element).is('*')){
	            if($(window).scrollTop() >= $('#'+element).offset().top - nav.height())
	            {
	                currentSection = element;
	            }
	        }
	    });
	    $('.navbar-nav li').removeClass('active').find('a[href="#'+currentSection+'"]').parent().addClass('active');
	}
});
$(window).load(function (argument) {
	$('.filter-list').on( 'click', 'a', function() {
	  if($(this).parent().hasClass('active')){
	  }
	  else{
	  	$(this).parent().parent().children().removeClass('active');
	  	$(this).parent().addClass('active');
	  }
	  var filterValue = $(this).attr('data-filter');
	  return false;
	});
})

