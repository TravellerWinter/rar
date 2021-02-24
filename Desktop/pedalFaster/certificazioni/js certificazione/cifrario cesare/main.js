function rot13(str) {
    '\n'.charCodeAt();
    str = str.toLowerCase();
    var arr = str.split("");
    for(var i = 0; i < arr.length; i++){
        var char = arr[i].charCodeAt(0);
        if (char >= 97 && char <= 122){
            char = char - 13;
            if(char < 97){
                char = 122 - (96 - char);
                arr[i] = String.fromCharCode(char);
            }else{
                arr[i] = String.fromCharCode(char);
            }
        }
    }
    arr.join("");
    return arr.join("").toUpperCase();
  }
  
  rot13("SERR PBQR PNZC");


  //97-122