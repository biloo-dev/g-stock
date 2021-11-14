 
import axios from 'axios';
 

export async function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
export async function baxios(method, url, data, withToken = true) {
    let token = await getCookie("token");
    return await axios({
      method: method,
      url: url,
      data: data,
      baseURL: 'http://127.0.0.1:3333/', 
 
    })
}