function textareaFunction() {
        
    var x = document.createElement("textarea");
    var t = document.createTextNode(""); //não declare text node
    x.appendChild(t);
    document.body.appendChild(x);
  }