// custom code for parkland bookstore
$(document).ready(function () {

    var baseUrl = "https://raw.githubusercontent.com/parkland-CSC175/csc175data/master/bestbuy/categories-list.json";

    // get the data
    $.getJSON(baseUrl, function (data) {
        // remove any old links
        console.log(data.categories);
        $("#category").empty();
        $.each(data.categories, function (i, category) {
            var $anchor = $("<a href='products-list.html'></a>");
            var $li = $("<li></li>");

            $anchor.attr("id", category.id); 
            $anchor.text(category.name);
            $li.append($anchor);
            $("#category").append($li);

        });
    });
});