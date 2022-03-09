function doGet(e) {
  var sheet = SpreadsheetApp.getActive();
  var x = sheet.getSheetByName('DATA');
  var data = [];
  var rln = x.getLastRow();
  var cln = x.getLastColumn();
  var rows = x.getRange(1,1,rln,cln).getValues();
  for (var i = 1 ; i < rows.length ; i++){
    var datarow = rows[i];
    var record = {};
    for(var j = 0; j < cln ; j++){
      record[rows[0][j]] = datarow[j];

    }
    data.push(record);
  }
  console.log(data)
  var result = JSON.stringify(data);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}