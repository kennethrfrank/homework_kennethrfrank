/*
Goal: get this shopping cart working!
- load the correct products into the <select>
- when the "Add to Cart" button is clicked it should add the item to the shopping cart
- the receipt should show the correct price for each item in the shopping cart
- the receipt should have the correct total for all the items in the shopping cart

Bonus:
- Create your own products
- Add a description of each item in the shopping cart
- List the product next to the price in the receipt
- Have the shopping cart list each product once with the number of that item in the cart
For example:
apple 3

instead of:
apple
apple
apple
Hint: you'll need array like var arrCount = [0, 0, 0]
*/

$(function(){
    //Declare and assign global variables
    var total = 0;
    var arrProducts = ['apple', 'oranges', 'bananas', 'kiwis', 'berries', 'melons', 'pineapples'];
    var arrPrices = ['1.25', '2.15', '.75', '1.50', '1.00','3.00', '2.80'];
    var arrDescription = ['gala', 'pygmy','ripe','skinned','brainfood', 'medley','Real Estate' ];
    var arrCount=[0,0,0,0,0,0,0];


    for(var i = 0; i<arrProducts.length; i = i+1){
        var product = arrProducts[i];
        $('#selectProduct').append('<option value='+ i +'>'+ product + '</option>') ;

        }


    //Functions to call
    addProducts(i, arrProducts);

    //Event Handler
    $("#products").submit(function(submitEvent){
        
        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var price = 0;
        var formattedCost = "";
        var formattedTotal = "";
        var selectedIndex = $('#selectProduct').val(); //Use this variable to store the value of the selected product
        var description = arrDescription[selectedIndex];
        //Show what is selected
        console.log("The value of the selected product:" + $('#selectProduct').val());

        //Assign new values
        product = arrProducts[selectedIndex];
        p2 = product.substring(1);
        p1 = product.charAt(0);
        p1 = p1.toUpperCase();
        product = p1 + p2;

        d2 = description.substring(1);
        d1 = description.charAt(0);
        d1 = d1.toUpperCase();
        description = d1 + d2;



        var sum;
        

        console.log("Current Product: " + product);

        price = getPrice(selectedIndex, arrPrices);
        formattedCost = currencyFormat(price);
        total = total + price;
        formattedTotal = currencyFormat(total);


        //Update the DOM

        $('#cart').append('<div class="col-xs-12">' + product + ': '+ description + '</div>');
        $("#itemRow").append('<div class="col-xs-12">' + product+': '+ formattedCost + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });


});

function counter(arrCount, index){
    sum = arrCount[index];
    sum = sum + 1;
    return sum;

}

function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}

function getPrice(index, arrPrices)
{
    var itemCost = arrPrices[index];
    if(!arrPrices[index])
    {
        console.log('you gotta give me an valid index!')
    } else {
        //Won't return the price unless you assign the value to itemCost
        for(var i = 0; i < arrPrices.length; i++)
        {
            console.log('The price of index ' + i + ' = ' + arrPrices[i]);
        }
    }
    return parseFloat(itemCost);
}

function addProducts(index, arrProducts)
{
    console.log("I'm inside 'addProducts' right now");
    
    
    $('#selectProduct').html();
    $.each(arrProducts,function(index){

        //This won't add them to the DOM, but at least it will show you the values
        console.log(index);
    });
    
}



