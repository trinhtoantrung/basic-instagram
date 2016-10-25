angular.module('BasicInstagram').factory('RegistrationData', function RegistrationDataFactory (){
	var RegistrationData = function(pUserName, pFirstName, pLastName, pPassword, pPhone, pEmail, pCountry, pAvatar) {
		this.userName = pUserName;
		this.firstName = pFirstName;
		this.lastName = pLastName;
		this.password = pPassword
		this.phone = pPhone;
		this.email = pEmail;
		this.country = pCountry;
		this.avatar = pAvatar; 

		console.log("construsction of RegistrationData");
	};

	RegistrationData.prototype.resetData = function () {
		console.log("Reset RegistrationData");
		this.userName = undefined;
		this.firstName = undefined;
		this.lastName = undefined;
		this.password = undefined
		this.phone = undefined;
		this.email = undefined;
		this.country = undefined;
		this.avatar = undefined; 
		return {};
	};

	return RegistrationData;
})
