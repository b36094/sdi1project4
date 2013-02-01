// Andrei Birsan
// SDI1 Project 4
// 1/30/2013


// library declaration & implementation
var libObj = {
	
			phonePattern: function (numString) {
				
				
				var endString = numString.indexOf("-");
				
				var string1 = numString.substring(0,endString);
				
				var stringLn = string1.length;
				
				var boolVar = false;
				
				var startString = numString.indexOf("-") + 1;
				
				var endString = numString.lastIndexOf("-");
				
				var string2 = numString.substring(startString, endString);
				
				var stringLn2 = string2.length;
				
				var startString = numString.lastIndexOf("-") + 1;
				
				var endString = numString.length;
				
				var string3 = numString.substring(startString, endString);
				
				var stringLn3 = string3.length;
				
				if (stringLn === 3 && stringLn2 === 3 && stringLn3 === 4)	{
					
					boolVar = true; 	
				}
				
				return boolVar;
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
				
				if (!isNaN(numString)) {
					
					return false;	//already a number
				}				
				
				else {
				
					var localNum = parseInt(numString);	
				}
				
				
				return localNum;	
			},
			
			// array method find total value of numbers
			findNumArray: function (inputArray) {
			
					var localIndex = inputArray.length;
					var localSum = 0;					
					
					for (var i = 0; i <= localIndex; i++) {
					
						if (!isNaN(inputArray[i])) {
							
							localSum += parseInt(inputArray[i]);	
							
						}
						
						else {
							
						}
						
					}
					

					return localSum;

			}		
				
					
				
};		
			

		
		


// instantiation


// call methods
var phonePatternCatch = libObj.phonePattern("44-000-0000");

console.log(phonePatternCatch);

var validateFormCatch = libObj.emailFunction("myname@yahoo.com");

console.log(validateFormCatch);

var httpHttpsCatch = libObj.httpHttps("http://www.yahoo.com");

console.log(httpHttpsCatch);

var numDecFixCatch = libObj.numDecFix(22.23432, 4);

console.log(numDecFixCatch);

var numConversionCatch = libObj.numConversion("56");

console.log(numConversionCatch);

var findNumArrayCatch = libObj.findNumArray([4, "water", 1, "pickles", 1, "onions", 1, "1", 2, "SDI"]);

console.log(findNumArrayCatch);

