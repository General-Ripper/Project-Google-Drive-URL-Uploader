function downloadBrowserCookie() {
  var url = "http://pws2.portaltvto.com/card_files/amoozesh/740b03ddce14daa399a59482f6761a77.jpg";
  var filename = "740b03ddce14daa399a59482f6761a77.jpg";
  try {
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (response.getResponseCode() === 200) {
      var blob = response.getBlob();
      DriveApp.createFile(blob).setName(filename);
      Logger.log("✅ Uploaded: " + filename);
    } else {
      Logger.log("❌ Failed: " + response.getResponseCode() + " - " + response.getContentText());
    }
  } catch (e) {
    Logger.log("❌ Error: " + e.toString());
  }
}

