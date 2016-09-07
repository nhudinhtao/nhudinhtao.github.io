//autorun javascript
(function() {

    console.log('hello');
    var queryString = getQueryString();
  	
	// Add register info to screen
    var html = '';
    html +=
    'Name: ' + queryString.name + '<br/>' +
    'Email: ' + queryString.email + '<br/>' +
    'Password: ' + queryString.password + '<br/>' +
    'Address: ' + queryString.address + '<br/>' +
    'Phone: ' + queryString.phone + '<br/>' +
    'Year of birth: ' + queryString.year + '<br/>' +
    'Gender: ' + queryString.gender + '<br/>';
    $('.content').html(html);
})();


function getQueryString() {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]).replace(/\+/g, ' ');
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]).replace(/\+/g, ' ')];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]).replace(/\+/g, ' '));
    }
  } 
  return query_string;
}