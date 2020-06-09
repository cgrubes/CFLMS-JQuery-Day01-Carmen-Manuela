$(document).ready(function(){

    $("a").attr("href", "www.codefactory.wien");
    $("code").css("color", "red");
    $("ol>li").css("background-color", "#2a7b90");
    $("h3:last").text ("Express Your Opinion");
    $("textarea").val("Express your opinion");

    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg" )
    $("blockquote").css({
        "background-color":"orange",
        "font-style": "italic"
    })

    $("#logo").css("color", "black");
    $(".gray").css("color", "white");
    $(".date").remove();
    $(".sidemenu:nth-of-type(1)").append("<li>New Templates</li>", "<li>Order Templates</li>", "<li>Contact Us</li>" );
    //$("#sidebar> h1:nth-of-type(3)").attr("p", "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.")
    $("p:contains('Be not afraid')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

    
});