"use strict";
String.prototype.endsWith || (String.prototype.endsWith = function(t) {
    return "string" == typeof t && (!t || this.slice(-t.length) === t)
}), document.location.hostname.endsWith("tsinghua.edu.cn") || document.location.hostname.endsWith("tsinghua.edu.cn.") || (document.title = document.title.replace(/(\u6e05\u534e)|(tsinghua)|(tuna)/gi, ""), $().ready(function() {
    $(document.body).addClass("nonthu")
}));