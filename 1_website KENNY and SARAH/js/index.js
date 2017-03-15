$(function(){
    var products    = ['apples', 'oranges', 'bananas', 'kiwi', 'carrots', 'pineapples', 'chocolate', 'flowers', 'cleaning supplies'];
    var cartCounter = [];
    var prices = [];
     var total = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";
        var price;
        if(i > 5){
            price = 3;
            prices.push(price);
        } else if (i <= 5){
            price = 1;
            prices.push(price);
        }

        string += '<li class="list-group-item clearfix">';
        //string += '<img class="img-thumbnail" src="./images/apples.png">';
        string += products[i];
        

         string += ' $' + prices[i] + '.00';
        string += '<button style = "margin: 10px; height: 30px" class="btn btn-success btn-xs pull-right btn-product" value=' + i + '>Add to Cart</button>';
        string += '<button style = "margin: 10px; height: 30px" class="btn btn-success btn-xs pull-right btn-danger" value=' + i + '>Decrease</button>';

        string += '</li>';


           
       


       


        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
        total.push(0);
    }

    //Add product event
   
    $('#products').on('click', '.btn-product', function(button){
        var index = $(this).val();
        cartCounter[index]++;
        console.log(products);
        console.log(cartCounter);
        total[index] = cartCounter[index] * prices[index]; 
         console.log(total);
    });

    $('#products').on('click', '.btn-danger', function(button){
        var index = $(this).val();

       
        if(cartCounter[index] > 0){
         cartCounter[index]--;
         console.log(products);
         console.log(cartCounter);
         total[index] = cartCounter[index] * prices[index]; 
         console.log(total);

        }
        
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cartCounter[i];
            if(count >= 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span style = "background-color: blue" class="badge badge-pill badge-primary">Count: ' + count +' Total: '+ total[i]+ '</span>';

                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });







});