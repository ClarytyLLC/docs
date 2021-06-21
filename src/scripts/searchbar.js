import $ from 'jquery';

export default () => $('document').ready(function(){
    // $('.results-panel').css({"background":"#FFF", "text-align": "left;"})
    $(".search").detach().appendTo('#search-wrapper')
    $(".search").css({"border-bottom": "none"})

});