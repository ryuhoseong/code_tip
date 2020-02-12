function objectifyForm(formArray) {//serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    if (formArray[i]['name']){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
  }
  return returnArray;
}