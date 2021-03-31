// 对cookie方法的封装

/**
 * 刷新cookie
 */
var cookiesPath = '/';
var cookiesTime = 3 / 24;
  
function refreshCookie() {
  var cookieData = $.cookie();
  $.each(cookieData, function (_key, _value) {
    $.cookie(_key, _value, {path: cookiesPath, expires: cookiesTime});
  });
}/**
 * 刷新cookie
 */
var cookiesPath = '/';
var cookiesTime = 3 / 24;
  
function refreshCookieCopy() {
  var cookieData = _$.cookie();
  _$.each(cookieData, function (_key, _value) {
    _$.cookie(_key, _value, {path: cookiesPath, expires: cookiesTime});
  });
}
  
/**
 * 设置cookie
 * @param key
 * @param value
 */
function setCookie(key, value) {
  refreshCookie();
  $.cookie(key, value, {path: cookiesPath, expires: cookiesTime});
}
/**
 * 设置_cookie
 * @param key
 * @param value
 */
function setCookieCopy(key, value) {
  refreshCookieCopy();
  _$.cookie(key, value, {path: cookiesPath, expires: cookiesTime});
}
  
/**
 * 设置cookie by time
 * @param key
 * @param value
 */
function setCookieByTime(key, value, time) {
  // refreshCookie();
  $.cookie(key, value, {path: cookiesPath, expires: time});
}
  
/**
 * 获取cookie
 * @param key
 */
function getCookie(key) {
  
  return $.cookie(key);
}
  
/**
 * 删除cookie
 * @param key
 */
function deleteCookie(key) {
  $.removeCookie(key, {path: cookiesPath});
}
  
/**
 * 清除cookie
 */
function clearCookie() {
  var cookieData = $.cookie();
  $.each(cookieData, function (key, value) {
    deleteCookie(key);
  });
}
  
/**
 * 清除单个cookie
 */
function clearCookieSingle(name) {
  setCookie(name, "", -1);
}