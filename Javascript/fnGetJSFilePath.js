/**
 * 获取当前JS的路径
 * @returns {String}
 */
function fnGetJSFilePath() {
    try {
        throw new Error('Dummy Exception');
    } catch (e) {
        return getThrowPath(e);
    }
}
/**
 * 获取异常文件路径
 * @param {type} e
 * @returns {String}
 */
function getThrowPath(e) {
    var Path = "";
    if (e.fileName) {    // firefox
        Path = e.fileName;
    } else if (e.stacktrace) {  // opera
        var tempStackTrace = e.stacktrace;
        tempStackTrace = tempStackTrace.substr(tempStackTrace.indexOf('http'));
        tempStackTrace = tempStackTrace.substr(0, tempStackTrace.indexOf('Dummy Exception'));
        tempStackTrace = tempStackTrace.substr(0, tempStackTrace.lastIndexOf(':'));
        Path = tempStackTrace;
    } else if (e.stack) {   // firefox, opera, chrome
        (function() {
            var str = e.stack;
            var tempStr = str;
            var strProtocolSeparator = '://';
            var idxProtocolSeparator = tempStr.indexOf(strProtocolSeparator) + strProtocolSeparator.length;
            var tempStr = tempStr.substr(idxProtocolSeparator);
            if (tempStr.charAt(0) == '/') {
                tempStr = tempStr.substr(1);
                idxProtocolSeparator++;
            }
            var idxHostSeparator = tempStr.indexOf('/');
            tempStr = tempStr.substr(tempStr.indexOf('/'));
            var idxFileNameEndSeparator = tempStr.indexOf(':');
            var finalStr = (str.substr(0, idxProtocolSeparator + idxHostSeparator + idxFileNameEndSeparator));
            finalStr = finalStr.substr(finalStr.indexOf('http'));
            Path = finalStr;
        }());
    } else {    // internet explorer
        Path = "/";
    }
    return Path;
}