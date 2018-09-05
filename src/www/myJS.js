$(document).ready(function(){
//$("#myForm").submit(function(event){
    $.ajax({
       // url: "http://localhost:8080/myApp_29_08/rest/hello/book/9"
        url: "http://localhost:8080/myApp_29_08/rest/hello/allBooks",
            }).then(function(data){
            $.each(data, function( index, value){
                $(".title").append(value.title);
                $(".price").append(value.price);
            })
            //$(".results").append(data);
            //$(".type").append(data.type);
            //$(".title").append(data.title);
            //$(".price").append(data.price);
            });
});



