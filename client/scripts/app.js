$(document).ready(function(){

    //this is the submit button functionality to write each entry to the db via serializing and ajax
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

    //refreshes data each page refresh
    getData();
});

//this is a function that does an ajax call to grab data from db in things.js
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

//this is a function that clears the dom, then loops through all the data on the db/message schema and appends to the DOM
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
