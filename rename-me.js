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
			},
			
			//email validation method
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
			},				
				
					
			//http or https check method		
			httpHttps: function (urlAddress) {
				
				if (urlAddress.startsWith("http://") || (urlAddress.startsWith("https://"))) {
					
					return true;
						
				}	
				
				else {
					
					return false;	
				}
				
			},
			
			//num decimal fix method
			numDecFix: function (numInput, decInput) {
				
				var locNum = numInput.toFixed(decInput);
				return locNum;			
			},	
			
			//string num. to num int. conversion method
			numConversion: function (numString) {
				
				if (isNaN(numString)) {
					
					console.log("Already a num.");	
				}				
				
				else {
				
					var localNum = parseInt(numString);	
				}
				
				
				return localNum;	
			}			
					
				
};		
			

		
		


// instantiation


// call methods
var phonePatternCatch = libObj.phonePattern("422-323-300-");


var validateFormCatch = libObj.emailFunction("myname@yahoo");

console.log(validateFormCatch);

var httpHttpsCatch = libObj.httpHttps("http://www.yahoo.com");

console.log(httpHttpsCatch);

var numDecFixCatch = libObj.numDecFix(22.23432, 4);

console.log(numDecFixCatch);

var numConversionCatch = libObj.numConversion("55");

console.log(numConversionCatch);

