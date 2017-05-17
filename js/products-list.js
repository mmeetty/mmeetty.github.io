// custom code for parkland bookstore
$(document).ready(function () {

    var baseUrl = "https://raw.githubusercontent.com/parkland-CSC175/csc175data/master/bestbuy/products-list.json";

    // get the data
    $.getJSON(baseUrl, function (data) {
        // remove any old links
        console.log(data.categories);
        $("#product").empty();
        $.each(data.products, function (i, product) {
            var $tr = $("<tr></tr>");
            var $anchor = $("<a href='product-details.html'></a>");
            var $tdM = $("<td></td>");
            var $tdN = $("<td></td>");
            var $tdP = $("<td></td>");

            $tdM.text(product.manufacturer);
            $tr.append($tdM);
            $tdN.text(product.name);
            $tr.append($tdN);
            $tdP.text(product.regularPrice);
            $tr.append($tdP);
            // $anchor.attr("id", product.id); 
            $anchor.text("Detail");
            $tr.append($anchor);

            $("#product").append($tr);

        });
    });
});