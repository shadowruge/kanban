function textareaFunction() {
        
    var x = document.createElement("textarea");
    var t = document.createTextNode(""); //não decl text node
    x.appendChild(t);
    document.body.appendChild(x);
  }