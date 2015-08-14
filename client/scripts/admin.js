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

    //this is the ajax call to delete item by db _id from db
    $(".allTheData").on("click", "button", function(){
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).data("id"),
            success: function(){
                console.log("delete data working!");
            },
            error: function(xhr, status){
                alert("error: " + status);
            },
            complete: function(){
                console.log("delete complete");
            }
        });
        $(this).parent().remove();
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
//admin version includes appending a delete button linked by db _id to its parent object
function postToDOM(data){
    $(".allTheData").empty();
    for(var i = 0; i < data.length; i++){
        $(".allTheData").append("<div></div>");
        var $el = $(".allTheData").children().last();
        $el.append("<p class='dataUnit'>" + data[i].name + "</p>");
        $el.append("<p class='messagedata '>" + data[i].message + "</p>");
        $el.append("<button data-id=" + data[i]._id + ">delete</button>");
    }
}



