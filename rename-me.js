// Andrei Birsan
// SDI1 Project 4
// 1/30/2013


// library declaration & implementation
var libObj = {
	
		phonePattern: function (numString) {
			
			var locInsert = numString.length;
					
			
			if ((numString.length != 12) || (numString.length < 1)) {
				
				console.log(">12 or <1");				
				
			}	
			
			else {
				
				for (var i = 0; i <= locInsert; i++) {
						
					if (isNaN(numString.substring(i,i+1) === "-")) {
						
						var dashStore = i;
							
						}
						
						else {
							
							if (isNaN(numString.substring(i,i+1))) {
								
								console.log("is num" +i);	
							}
						
											
						}						
					}	
				}
			}
			
			//email validation function
			emailFunction: function validateForm(emailAddress) {
						
					var check= emailAddress;
					var atPos=check.indexOf("@");
					var dotPos=check.lastIndexOf(".");
					if (atPos<1 || dotPos<atPos+2 || dotPos+2>=check.length) {
				 
				  		return false;	
				   }
				  
				 	else {
				 		
				 		return true;	
				 	}	
			}						
				
					
					
							
					
				
}			
			

		
		


// instantiation


// call methods
var phonePatternCatch = libObj.phonePattern("422-323-300-");


var validateFormCatch = validateForm("myname@yahoo");

console.log(validateFormCatch);

