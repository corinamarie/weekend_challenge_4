$(document).ready(function(){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function(data){
                getData();
            }
        });
    });

    getData();
});

function getData (){
    $.ajax({
        type: "GET",
        url: "/things",
        success: function(data){
            console.log(data);
            postToDOM(data);
        }
    });
}

function postToDOM(data){
    $(".allTheData").empty();
    for(var i = 0; i < data.length; i++){
        $(".allTheData").append("<div></div>");
        var $el = $(".allTheData").children().last();
        $el.append("<p class='dataUnit'>" + data[i].name + "</p>");
        $el.append("<p class='messagedata'>" + data[i].message + "</p>");
    }
}

//set up new app.js file for the second html file, then differentiate with appending remove button functionality. udpate references accordingly in each file.
