import $ from 'jquery';

export default () => $('document').ready(function(){
    // $('.results-panel').css({"background":"#FFF", "text-align": "left;"})
    $(".search").detach().appendTo('#search-wrapper')
    $(".search").css({"border-bottom": "none"})
    $("#search-wrapper").find("input").change(function(){
        $(".matching-post").find("a").click(function(){
            $("#search-wrapper").find("input").val("")
            $(".clear-button").click()
        })
    })

});