exports.routes = function (map) {
  map.resources('employees');

  // Generic routes. Add all your routes below this line
  // feel free to remove generic routes
  map.all('api/:controller/:action');
  map.all('api/:controller/:action/:id');
};