function run() {
	var content = $('.content');
	content.slideDown();
	content.empty();
	$(document).ready(function() {
		var movie = $('#name').val();
		$.ajax({
				url: 'http://www.omdbapi.com/?s=' + movie ,
				type: 'GET'
			})
			.done(function(data) {
				if (Object.keys(data).length == 2) {
					console.log(data);
					content.append('<strong>' + data.Error + ' !!!</strong>')
				} else {
					console.log(data);					
					var source = $("#document-template").html();
					var template = Handlebars.compile(source);
					var html = template(data);
					$('.content').html(html);
				}
	})
				
})

}
$(function() {
	$('.content').hide();
});