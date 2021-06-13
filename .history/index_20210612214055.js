function textareaFunction() {
        
    var x = document.createElement("textarea");
    var t = document.createTextNode("");//omitir text
    x.appendChild(t);
    document.body.appendChild(x);
  }