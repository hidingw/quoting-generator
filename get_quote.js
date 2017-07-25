function getQuote(){
	$(".my-quote").empty();
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a){
	$(".my-quote").append(a[0].content + "<p>— " + a[0].title + "</p>");
});
};

$(document).ready(function(){
	getQuote();
	$("button").on("click", getQuote);
});
	