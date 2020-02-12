function chkVal(val, returnVal){
  //if (val == null || val == undefined){
  if (val){
    val = val.trim();
  }else{
    val = 0;
  }

  if(val){
    return val;
  }else{
    return returnVal;
  }
};
