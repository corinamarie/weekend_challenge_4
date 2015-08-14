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
        $el.append("<button data-id=" + data[i]._id + ">delete</button>");
    }
}