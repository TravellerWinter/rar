function telephoneCheck(str) {
    var rE = [/^\d\d\d-\d\d\d-\d\d\d\d$/, /^\(\d\d\d\)\d\d\d-\d\d\d\d$/, /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/, /^\d\d\d\s\d\d\d\s\d\d\d\d$/, /^\d{10}$/, /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/ ];
    
    if(str[1] === " "){
      if(str[0] != 1){
        
        return false;
      }else{
        let arr = str.split("");
        str = arr.splice(2, arr.length - 2);
        str = str.join("");
        
      }
    }
    for(var i = 0; i < rE.length; i++){
      if (rE[i].test(str)){
        return true;
      }
    }
    return false;
  }
  
  telephoneCheck("1 (757) 622-7382");