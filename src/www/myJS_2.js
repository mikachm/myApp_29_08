var book = {
    id: null,
    title: "title",
    price: null
}

var fruits = ['banane', 'pomme'];

var listBook = [];



$(document).ready(function(){
//$("#myForm").submit(function(event){
    $.ajax({
       // url: "http://localhost:8080/myApp_29_08/rest/hello/book/9"
        url: "http://localhost:8080/myApp_29_08/rest/hello/allBooks",
            }).then(function(data){
            $.each(data, function( index, value){
            //construction de l'objet Livre
            //var book = new object();
                var book_test = Object.create(book);
                book_test.id = value.id;
                book_test.title = value.title;
                book_test.price = value.price;
            //Ajout à la liste de livre
                //listBook.push(book_test);
                fruits.push("poire");
                listBook.push(book_test);
            })
            //affichage de la liste
            //listBook.forEach(function(item, index, array){
            fruits.forEach(function(item, index, array){
            $(".results").append(item);
            //console.log(item,index)
            });

            });
});