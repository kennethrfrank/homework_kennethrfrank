var arrSections = ['love', 'wisdom', 'passion'];
var arrIMG = ['JL', 'K', 'JK'];
var arrTitles = ['Jolee speaks on Spring Dating', 
	"Kenny whips Jo's ass in chess", 
	"Go fuck yourself haters"];
var numbers = ['one', 'two', 'three'];
var months = ["March'17","April'17","May'17",
"June'17","July'17","Aug'17",
"September'17","October'17","November'17",
"December'17","January'17","February'17",];
var icons = ['hrt', 'wsm', 'psn'];


var clix = 0;




var count = [];

$(function(){


	
var destination;
 var index = -1;

	

	

	mainButtons(index, destination);

	
	
	

});





function mainButtons(ndx, d){
	logoButton(ndx, d);


	var lwp = "lwp";

	lwpButton(lwp, lwp, ndx, d);



	var icon = "icon";
	var iconC = "i";
	lwpButton(icon, iconC, ndx, d);



}


		function logoButton(ndx){

			buildNav();


			buildBox();

				$('#logB').on('click', function(){
					ndx= $(this).val();
					introAnime();
				});
		}

		function lwpButton(x, y, ndx) {




					$('#' + x).on('click', ('.'+ y) , function(button){
						
					ndx = $(this).val();
					

					console.log('id: '+ x + ' class: '+ y + ' value: ' + ndx);

					clix = clix + 1;

					
					buildMeat(ndx, clix);

					lwpAnime();

					});
		}


function buildNav(){

var string  = "";

string +=	'		<button  href = "https://facebook.com">';
string +=	'		              <img   class = "i" value = "6" src = "./badges/qsnwhite.png"  >';
string +=	'		            </button>';

for (var i = 0; i < icons.length; i++){
string +=	'		            <button type= "button" value = "'+i+'" id = "icon" class = "icon"  >';
 string +=	'		           <img  class = "i"   src = "./badges/'+icons[i]+'white.png">';
 string +=	'		           </button>';

 }

$('#navi').html(string);

  buildMeat(ndx,clix);

}





function introAnime(){


		

	
		$('#logoContainer').css('height', '450px');



		$('#logoIMG').css('width', '480px');
		$('#logoIMG').css('height', '420px');

		$('#logoIMG').css('margin-left', '100px');


				
		$('#nav').slideDown(3000);
		$('#box').slideDown(2000);
		$('#lwp').slideDown(4000);
		$('#meat').slideUp(4000);
			

}

function buildBox(){

	for(var i = 0; i < arrSections.length; i++){
        	var string = " ";
        
        // once we have a product design we like, "templatize" it here

        var image = arrIMG[i] || 'default';
 	
   	 string += '<div class ="col-xs-4">';
                
      
        string +=	 '     <div class = "row">';
         string +=	 '         <div class = "col-xs-12">';

          string +=	 '                 <button value = "'+ i +'" id = "lwp" class = "btn lwp '+ arrSections[i] +' border">';

              string +=	 '             <h2 style = "text-align: center">';
           string +=	 '                <img  src = "./badges/'+arrSections[i]+'.png" style = "height: 100px;" >';
                 string +=	 '          </h2>';
                  string +=	 '         </button>';
                   string +=	'</div>';
               string +=	' </div>';

    




           string +=   '<div id = "'+arrSections[i]+'" class = "articleContainer">';

          string +=   '           <div class = "row">';
            string +=   '           <div class = "col-xs-10 col-xs-offset-1">';
                       
            string +=   '                   <img class = "first" src = "./imgs/'+image+'.png">';
                      
         string +=   '              </div>';
        string +=   '          	 </div>';


          string +=   '         <div class = "row">';
           string +=  			'<div class = "headlines">';

            string +=   '           <div class = "col-xs-10 col-xs-offset-1">';
             
                string +=   arrTitles[i];
         
                 string +=   '      </div>';
              string +=   '      </div>';   
              string +=   '    </div>';


             string +=   '      <div class = "row">';
               string +=   '        <div class = "col-xs-10 col-xs-offset-1">';
                        
               string +=   '        </div>';
               string +=   '    </div>';

                
     		string +='</div>';
     
      string +='</div>';
    	
    

       		 $('#lwp').append(string);

        //Set the cart counter to 0 for that this index
      			  count.push(0);
  }

  buildMeat(ndx,clix);
}








function buildMeat(ndx, clix){




		console.log(ndx);

	
		destination = arrSections[ndx];

		

			destination = destination.toUpperCase();
		var string = '';

		// TITLE BAR 
			string += '-- '+ destination + ' --';
			$('#titleBar').html(string);
		//TITLES 
			destination = arrTitles[ndx];
				var string = '';

			string += destination + ' --';
					$('#titles').html(string);

		//DATES  create arr later

		// MEDIA 
			destination = arrIMG[ndx];
			var string = '';
			string += '<img id = "secImg" src ="./imgs/'+ destination +'.png"> ' ;
					$('#media').html(string);
					$('#secImg').addClass('second');

		//INFO 
			destination = numbers[ndx];
			var string = '';


		
                            

			
			string += destination + ' of these days we gonna be posting a bunch ';
			string += ' of shit like this '; 
			string += destination + ' of these days This shits gone be dope. ';
			string +=  'I love her so much. '; 
			string += destination +' of these days Im gunna ';
			string += 'ski down a mountain. ';
			string += destination +' of these days Im gunna ';
			string +=  'fix dis button. ' ;

			$('#info').html(string); 

		//SIDEBAR

		if (clix <= 1){
		
			for(var i = 0; i < months.length; i++){
			var string = '';
			
				 string += ' <div class = "row">';
				  string +=  ' <div class = "col-xs-10 col-xs-offset-2">';
                    

            string +=  '     	<button class = "btn but" >';
            			destination = months[i];
            string += destination;			
            string +=  '  		</button>';


            string +=  ' 		</div>';
            string +=  ' 	</div>';
        


            $('#sideBar').append(string);

             }

         }
         
     }

	
function lwpAnime(){


		$('#meat').slideDown(2000);

		$('#lwp').slideUp(1000);

		
	

}


 






