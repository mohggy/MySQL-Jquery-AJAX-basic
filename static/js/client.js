$(document).ready(function() {

    $.ajax({
        url: "/ajax-GET-Lab8",
        dataType: "json",
        type: "GET",
        success: function(data) {

            console.log("Data returned from MySQL", data);
            // YOUR CODE GOES HERE
            var div = $("#infoHere");
            let table = "<table><tr><th>Country</th><th>Top City</th><th>Population</th><th>Ticket Price</th><th>Primary Language Spoken</th></tr>";

                for (let i = 0; i < data.rows.length; i++) {
                    var country = data.rows[i].country;
                    var capital = data.rows[i].capital;
                    var population = data.rows[i].population;
                    var price = data.rows[i].price;
                    var speak = data.rows[i].speak;

                    table += "<tr><td>" + country + "</td><td>" + capital + "</td><td>" + population + "</td><td>" + price + "</td><td>" + speak + "</td>";

                }
                table += "</table>"
                div.html(table);
            

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#p1").text(textStatus + " " + errorThrown
                + jqXHR.responseText);
        }
    });

});
