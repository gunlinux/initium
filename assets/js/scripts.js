$(document).ready(function(){$(document).on("mouseover mouseout","a",function(a){var b=$(this).attr("href");b&&"#"!=b&&$("a").filter('[href="'+$(this).attr("href")+'"]').toggleClass("hover","mouseover"==a.type)})});