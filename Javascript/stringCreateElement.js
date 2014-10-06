(function($) {
    $.extend({
        /**
         * stringCreateElement
         * 通过选择器字符串，生成元素
         * @param   {string}    str
         * @returns {element}
         */
        stringCreateElement: function(str) {
            var element = $("<" + (str.replace(/^([a-zA-Z]*).*$/g, "$1") || "div") + ">");
            if (/#/.test(str)) {
                element.attr("id", str.replace(/^.*?#(\w+).*$/, "$1"));
            }
            if (/\./.test(str)) {
                $.each(str.match(/\.\w+/g) || [], function() {
                    element.addClass(this.replace(".", ""));
                });
            }
            if (/\[.*?\]/.test(str)) {
                $.each(str.match(/\[.*?\]/g) || [], function(k, v) {
                    var attr = v.replace(/^\[(.*?)\]$/g, "$1").split("=");
                    element.attr(attr[0], attr[1] || "");
                });
            }
            return element;
        }
    });
})(jQuery);
