import Prismic from 'prismic-javascript'
 
var apiEndpoint = "https://valentinbourreau.cdn.prismic.io/api/v2";
var apiToken = "MC5YTlZ0NmlvQUFENEFvNHc1.GUInVO-_vTzvv73vv73vv71F77-9Zlsg77-9JUbvv70-AWIY77-977-977-9He-_vVPvv71wS0Y";
 
Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
  return api.query(""); // An empty query will return all the documents
}).then(function(response) {
  console.log("Documents: ", response.results);
}, function(err) {
  console.log("Something went wrong: ", err);
});