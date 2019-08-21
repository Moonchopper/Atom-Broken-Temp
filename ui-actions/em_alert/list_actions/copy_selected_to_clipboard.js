function copySlackFormatToKeyboard() {
  var finalString = '';

  var selSysIds = g_list.getChecked();
  if (!selSysIds)
    return;

  var sysIdList = selSysIds.split(',');

  for (var i = 0; i < sysIdList.size(); i++) {
    var id = sysIdList[i];
    var gr = new GlideRecord('em_alert');
    if (!gr.get(id))
        continue;

    var snAlertNumber = gr.getValue('number');
    var zResource = gr.getValue('node');
    var zComponent = gr.getValue('resource');
    var zEventClass = gr.getValue('type');
    var snStatus = gr.getValue('state');
    var zMessage = gr.getValue('description');
    var zEventLink = gr.getValue('u_event_url');

    var url = window.location;
    var baseUrl = url.protocol + "//" + url.host;

    var alertURL = baseUrl + '/nav_to.do?uri=em_alert.do?sys_id=' + id;

    finalString += "Alert #: " + snAlertNumber + "\n" +
            "Resource: " + zResource + "\n" +
            "Component: " + zComponent + "\n" +
            //"Event Class: " + zEventClass + "\n" +
            "Status: " + snStatus + "\n" +
            "Description: " + zMessage + "\n" +
            "Event Link: " + zEventLink + "\n" +
              "Alert Link: " + alertURL + "\n\n";
  }

  copyToClipboard(finalString);
}
