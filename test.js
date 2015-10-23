var i = 0;
var count = 0;
function verifyAuthWebhookData(conf,io,CompareValue,IntegrationId,ProjectId,verifyAuthWebhookDataCallback) {
	console.log("IntegrationId");
	console.log(IntegrationId);
	conf.UserIntegrations.findOne({_id:IntegrationId}).exec(function (err, UserIntegrationData) {  

		console.log("UserIntegrationData sdsdadsada");
		console.log(UserIntegrationData);
		console.log("UserIntegrationData err");
		console.log(err);
		if (err) {
			verifyAuthWebhookDataCallback({statusCode:100});   
		} else { 
			//compare
			console.log("UserIntegrationData.authenticationData[CompareValue]")
		console.log(UserIntegrationData.authenticationData[CompareValue]);
		console.log("ProjectId ");
		console.log(ProjectId);

			if(UserIntegrationData.authenticationData[CompareValue] != ProjectId ){
				verifyAuthWebhookDataCallback({statusCode:100});
			} else {
				verifyAuthWebhookDataCallback({statusCode:0});
			}
		}
	});
}
