//1. Change the href attribute to "www.codefactory.wien" for all links

$(document).ready(function() {
    $("a[href]").attr("href", "www.codefactory.wien");
    //$("a[href='http://www.google.com/']").attr('href', 'http://www.live.com/')
})

// $(document).ready(function() {
// 	$("a").attr("href","www.codefactory.wien");
// })

// 2. Change the text color to red for the <code> tags
$(document).ready(function() {  
    $("code").css("color","red");
})

//3. Change the background color to "#2a7b90" for all <li> elements which are direct child 
// of an <ol> element
$(document).ready(function() {  
    $("ol > li").css("background-color","#2a7b90");
})

//4. Within the form, change the placeholder text to "Express your opinion"
$(document).ready(function() {  
    $("textarea").val("Express your opinion");
})

//5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"
$(document).ready(function() {  
    $("img").attr("src","https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

    // var newImg = $("img").attr("src");
    // console.log(newImg);

})

//6. Change the background color to orange for all blockquote elements and the font-style to italic
$(document).ready(function() {  
    $("blockquote").css({"background-color" : "orange","font-style" : "italic"});
})

//7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
$(document).ready(function() {  
    $("#logo > span").css("color","white");
    $("#logo").css("color","black");
})


//8. Remove the "Oct 01, 2006" Date from the page
$(document).ready(function(){
	$("span.date").remove();
})


//9. Extend the Sidebar Menu with 3 additional items 
//   "New Templates", "Order Template" and "Contact Us"
$(document).ready(function(){
    $(".sidemenu:nth-of-type(1)").append("<li>New Templates</li>", "<li>Order Templates</li>", "<li>Contact Us</li>" );
})



/*10. Change the sentence "Be not afraid of life. 
Believe that life is worth living, and your belief will 
help create the fact." into 
"When someone says: 'I want a programming language in which I need only to say what I wish, and done', 
give him a lollipop."*/
$(document).ready(function(){
    
    // var newQuote = $(":contains('Be not afraid')");
    // console.log(newQuote);

    $("p:contains('Be not afraid')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
})


