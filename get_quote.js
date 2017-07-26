function getQuote(){

	$(".my-quote").empty();
	$.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', function(a){
	
	var str = a[0].content.slice(3, -5);    
  
  $(".my-quote").append(str + "<p class='autor'>— " + a[0].title + "</p>");
	
	var link =  $(".my-quote").text();
	
	$(".fa-twitter").attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(link) + a[0].title);
});
};

$(document).ready(function(){
	getQuote();
	$("button").on("click", getQuote);
});
	

