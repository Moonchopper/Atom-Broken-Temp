function copySlackFormatToKeyboard() {
	var snAlertNumber = g_form.getValue('number');
	var zResource = g_form.getValue('node');
	var zComponent = g_form.getValue('resource');
	var zEventClass = g_form.getValue('type');
	var snStatus = g_form.getValue('state');
	var zMessage = g_form.getValue('description');
	var zEventLink = g_form.getValue('u_event_url');

	var url = window.location;
	var baseUrl = url.protocol + "//" + url.host;

	var alertURL = baseUrl + '/nav_to.do?uri=em_alert.do?sys_id=' + g_form.getUniqueValue();

	finalString =   "Alert #: " + snAlertNumber + "\n" +
					"Resource: " + zResource + "\n" +
					"Component: " + zComponent + "\n" +
					//"Event Class: " + zEventClass + "\n" +
					"Status: " + snStatus + "\n" +
					"Description: " + zMessage + "\n" +
					"Event Link: " + zEventLink + "\n" +
				    "Alert Link: " + alertURL;

	copyToClipboard(finalString);
}
