/**
 * loadScript
 * 动态加载js文件
 * @author  ForeverGlory
 */
(function($) {
    $.extend({
        /**
         * loadScript
         * 动态加载js文件，多次加载时，只加载一次，防止重复加载js文件
         * @author  ForeverGlory
         * @param   {string}    url     js文件路径
         * @param   {function}  func    加载成功后执行
         * @param   {function}  once    加载成功后，只执行一次
         * @returns {undefined}
         */
        loadScript: function(url, func, once) {
            if (typeof $.loadScript.loaded == "undefined") {
                $.loadScript.loaded = [];
                $.loadScript.loading = [];
            }
            if ($.inArray(url, $.loadScript.loaded) >= 0) {
                typeof func == "function" && func.call(this);
            } else if ($.inArray(url, $.loadScript.loading) >= 0) {
                setTimeout(function() {
                    $.loadScript(url, func);
                }, 100);
            } else {
                $.loadScript.loading.push(url);
                $.getScript(url, function() {
                    $.loadScript.loaded.push(url);
                    $.loadScript.loading.pop(url);
                    typeof once == "function" && once.call(this);
                    typeof func == "function" && func.call(this);
                });
            }
        }
    });
})(jQuery);

