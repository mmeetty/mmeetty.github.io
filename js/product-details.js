// custom code for parkland bookstore
$(document).ready(function () {

    var baseUrl = "https://raw.githubusercontent.com/parkland-CSC175/csc175data/master/bestbuy/product-details-4506800.json";

    // get the data
    $.getJSON(baseUrl, function (data) {
        // remove any old links
        $.each(data.products, function (i, product) {
            // update image url
            $("#productImg").attr("src", product.largeImage);
            $("#price").text("$" + product.regularPrice);
            $("#productName").text(product.name);
            $("#comments").text(product.customerReviewCount + " comments");

            var star = product.customerReviewAverage;
            $("#starRating").empty();
            for (i = 0; i < parseInt(star); i++) {
                var $span = $('<span class="glyphicon glyphicon-star"></span>');
                $("#starRating").append($span);
            }
            if (star % 1 > 0) {
                $("#starRating").append('<span class="glyphicon glyphicon-star-empty"></span>');
            }
            $("#starRating").append(star + " stars");
        });

        // validate inputs then submit
        $("#btnSubmit").click(function () {

            $("#form").validate({
                rules: {
                    productId: {
                        required: true,
                        number: true
                    },
                    productRating: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    firstName: {
                        required: true
                    },
                    lastName: {
                        required: true
                    },
                    comment: {
                        required: true
                    }
                },
                submitHandler: function () {
                    alert("A comment will take 48 hours to be reviewed before being posted to the site");
                    form.submit();
                }
            });
        });
    });
});
