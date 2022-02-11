// List of every location along with data about each
let alltheplaces = [
  ["Glazer Children's Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.5, 27.94960, -82.46152, 16, 'Family Friendly', 'Museum', 'Shopping'], 
  ["Tampa Bay History Center&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.6, 27.94225, -82.44990, 37, 'Historical', 'Guided Tour'],
  ["Tampa Riverwalk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 0, 4.5, 27.94983, -82.46399, 41, 'Recreation', 'Shopping', 'Food'],
  ["Busch Gardens&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.5, 28.03708, -82.42126, 9, 'Recreation', 'Theme Park', 'Alcohol', 'Food'],
  ["Straz Center&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 3.7, 27.95075, -82.46442, 33, 'Recreation', 'Live Performance', 'Family Friendly'],
  ["Manatee Viewing Center&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 0, 4.7, 27.79278, -82.40102, 25, 'Wildlife', 'Recreation'],
  ["Adventure Island&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.3, 28.04197, -82.41352, 2, 'Wild Life', 'Theme Park', 'Food', 'Family Friendly'],
  ["Tampa Museum of Art&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.2, 27.94947, -82.46236, 40, 'Museum', 'Historical'],
  ["Amalie Arena&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.7, 27.9427, -82.45189, 3, 'Sports', 'Family Friendly', 'Alcohol'],
  ["Florida Museum of Photographic Arts&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.1, 27.94739, -82.4602, 14, 'Historical', 'Museum', 'Guided Tour'],
  ["Imagine Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.9, 27.77129, -82.65953, 19, 'Museum', 'Family Friendly'],
  ["J.C. Newman Cigar Company&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.8, 27.96693, -82.44159, 21, 'Historical', 'Shopping'],
  ["Henry B. Plant Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.6, 27.94621, -82.46418, 17, 'Museum', 'Historical', 'Guided Tour'],
  ["ZooTampa&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.6, 28.01501, -82.46993, 50, 'Wildlife', 'Theme Park'],
  ["Wat Mongkolrata Temple&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.8, 27.94402, -82.39496, 46, 'Historical', 'Guided Tour'],
  ["Tampa Firefighters Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.7, 27.95123, -82.45533, 39, 'Museum', 'Historical'],
  ["Dali Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.7, 27.76598, -82.63146, 11, 'Museum', 'Historical', 'Family Friendly'],
  ["Museum of Science and Industry&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 3.9, 28.05363, -82.40478, 27, 'Museum', 'Family Friendly', 'Food'],
  ["Seminole Hard Rock Hotel & Casino&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.4, 27.99297, -82.37213, 31, 'Alcohol', 'Food', 'Sports'],
  ["Legoland&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.5, 27.98929, -81.68486, 23, 'Theme Park', 'Family Friendly', 'Food'],
  ["Florida State Fairgrounds&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.4, 27.98838, -82.366056, 15, 'Family Friendly', 'Food', 'Alcohol'],
  ["Epperson Lagoon&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.2, 28.27243, -82.29068, 12, 'Wildlife', 'Recreation'],
  ["Clearwater Marine Aquarium&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.2, 27.976882, -82.81929, 10, 'Wildlife', 'Family Friendly', 'Food'],
  ["American Victory Ship Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.7, 27.94373, -82.44409, 5, 'Historical', 'Museum'],
  ["Florida Aquarium&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.5, 27.94401, -82.44485, 13, 'Wildlife', 'Family Friendly', 'Shopping'],
  ["Bok Tower Gardens&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.8, 27.90967, -81.56647, 8, 'Wildlife', 'Recreation'],
  ["Oxford Exchange&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.6, 27.94495, -82.4646, 28, 'Food'],
  ["Morean Arts Center&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.5, 27.77145, -82.6442, 26, 'Museum', 'Family Friendly', 'Shopping'],
  ["Ybor City Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.6, 27.96191, -82.43834, 47, 'Museum', 'Historical', 'Guided Tour'],
  ["USF Contemporary Art Museum&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.6, 28.06355, -82.41561, 45, 'Museum', 'Family Friendly'],
  ["American Social&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.2, 27.93939, -82.4544, 4, 'Alcohol', 'Food', 'Sports'],
  ["Anchor and Brine&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.2, 27.94339, -82.45046, 6, 'Food', 'Alcohol'],
  ["Kitchen & Bar&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.3, 27.96608, -82.55077, 22, 'Food', 'Alcohol'],
  ["211 Restaurant&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.3, 27.9464, -82.45807, 1, 'Food', 'Alcohol'],
  ["The Rez Grill&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.3, 27.99297, -82.37213, 44, 'Food', 'Alcohol'],
  ["Sunshine Skyway&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 0, 4.7, 27.69797, -82.6784, 34, 'Historical'],
  ["Big Cat Rescue&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.6, 28.06033, -82.57151, 7, 'Wildlife', 'Guided Tour', 'Family Friendly'],  
  ["Tampa Theatre&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.8, 27.95038, -82.4588, 42, 'Live Performance', 'Family Friendly', 'Food'],
  ["Yuengling Brewery&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.5, 28.04767, -82.42608, 49, 'Alcohol', 'Historical'],
  ["Raymond James Stadium&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 3, 4.5, 27.97789, -82.50531, 29, 'Sports', 'Family Friendly'],
  ["International Plaza & Bay Street&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.6, 27.96544, -82.5206, 20, 'Food', 'Shopping', 'Mall'],
  ["Lettuce Lake Park&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.7, 28.06936, -82.37358, 24, 'Family Friendly', 'Recreation', 'Historical', 'Wildlife'],
  ["TECO Line Streetcar System&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.5, 27.96019, -82.44607, 35, 'Historical', 'Guided Tours'],
  ["Hyde Park&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.4, 27.93734, -82.46751, 18, 'Food', 'Shopping', 'Mall'],
  ["Sparkman Wharf&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.5, 27.9432, -82.44701, 32, 'Food', 'Shopping', 'Recreation'],
  ["Tampa Convention Center&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.5, 27.94196, -82.45661, 38, 'Food', 'Shopping', 'Live Performance', 'Family Friendly'],
  ["Tampa Union Station&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.1, 27.95282, -82.45068, 43, 'Historical'],
  ["Sacred Heart Catholic Church&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 4.8, 27.9489, -82.45739, 30, 'Historical', 'Guided Tour'],
  ["Ybor City Saturday Market&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 2, 4.1, 27.96109, -82.43789, 48, 'Food', 'Shopping'],
  ["Taco Bus&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp", 1, 3.7, 27.94869, -82.45822, 36, 'Food']
];

// Variable initialization
let output = "";
let temp = alltheplaces;

var distanceOutput = ""
var change = 1;
var current = 0;
var inHelpMenu = false;

// Displays
function displayMarkers() {
  for (let i = 0; i < temp.length; i++) {
      const marker = new google.maps.Marker({
        position: { lat: temp[i][3], lng: temp[i][4] },
        label: (i+1).toString(),
        map: map,
      });
    }
}


// Sorts the locations based on the key provided
function sortthestuff(key) {
  temp.sort((a, b) => {
    if (change == 1){
      return a[key]-b[key];
    }
    else {
      return b[key]-a[key];
    }
  });

  current = key;

  display()
  initMap()
  displayMarkers()
}


//uses the haversine formula to calculate the distance between two markers
function haversine(mk1, mk2) {
  var R = 3958.8; // Radius of the Earth in miles
  var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
  var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
  return d;
}


// Gets and displays the distance between the user's location and the selected location
function getdistance() {

  // Reprints the map
  initMap();
 
  // Either clears the message or returns an error if no location is inputted
  if (document.getElementById("text1").value.length == 0) {
    if (distanceOutput.length == 0) {
      window.alert("ERROR: please input a starting point"); // Returns an error
    return;
    }
    else {
      distanceOutput = ""; // Clears the current distance message
      display();
      return;
    }
  }

  // Sets first location (user location)
  var requestloc = {address: document.getElementById("text1").value};

  // Sets second location (selected location)
  let lat2 = temp[document.getElementById("number").value-1][3];
  let lng2 = temp[document.getElementById("number").value-1][4];


  // Runs the geocoder function from Google Maps API
  geocoder
    .geocode(requestloc)
    .then((result) => {
      const { results } = result;
      
      
      // Redraws the map
      map.setCenter(results[0].geometry.location);
      userlocation.setPosition(results[0].geometry.location);
      userlocation.setMap(map);

      // Sets the latitude and longitude of the selected location
      var lat1 = results[0].geometry.location.lat();
      var lng1 = results[0].geometry.location.lng();
      
    const loc1 = {lat: lat1, lng: lng1};
    const loc2 = {lat: lat2, lng: lng2};

    // Creates markers for the two locations
    var mk1 = new google.maps.Marker({position: loc1});
    var mk2 = new google.maps.Marker({position: loc2});
    mk1.setVisible(false);
    mk2.setVisible(false);
    
    // Calculate and display the distance between markers
    var distance = haversine(mk1, mk2);
    console.log("Distance between markers: " + distance.toFixed(2) + " mi.");

    // Initializes Google Maps direction API
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const route = {
      origin: loc1,
      destination: loc2,
      travelMode: 'DRIVING'
    }

    // Draws the directions on the map
    directionsService.route(route,
    function(response, status) {
      if (status !== 'OK') {
        window.alert('Directions request failed due to ' + status);
        return;
      } 
      else {
        directionsRenderer.setDirections(response);
        var directionsData = response.routes[0].legs[0];
        if (!directionsData) {
          window.alert('Directions request failed');
          return;
        }
        else {
          console.log("Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").");
        }
      }

    });

      // Outputs the distance between the two locations
      loc1Name = results[0].formatted_address;
      loc2Name = (temp[document.getElementById("number").value-1][0].replace(/&nbsp/g,''));
      distanceOutput = loc1Name + " is " + directionsData.distance.text + " (" + directionsData.duration.text + ") away from " +loc2Name + ".";
      display();
    
      return results;
    })
    .catch((e) => {});
}


// Switches the order that the locations are displayed and changes the button text
function ascending() {
  change *= -1;
  sortthestuff(current)
  if (change > 0) {
    document.getElementById("funnybutton").innerHTML = "Ascending";
  }
  else {
    document.getElementById("funnybutton").innerHTML = "Descending";
  }
}


// Filters the locations by pushing all locations with the filter into a new array
function filter(key) {
  temp = []
  for (let i = 0; i < alltheplaces.length; i++) {
    for (let j = 0; j < alltheplaces[i].length-6; j++) {
      if (alltheplaces[i][j+6] == key) {
        temp.push(alltheplaces[i])
      }
    }  
  }
  display()
  initMap()
  displayMarkers()
}

// Clears the current filters
function resetFilters() {
  temp = alltheplaces
  display()
  initMap()
}

// Toggles between displaying and closing the help menu
function helpMenu() {

  if (inHelpMenu == true)
  {
    inHelpMenu = false;
    display();
  }
  else {

    inHelpMenu = true;
    document.getElementById("demo").innerHTML = "";

    helpText = "Welcome to Explore Tampa Bay!<br><br>In this program, you can browse a list of 50 attractions around the Tampa Bay Area. On the top of the screen you will see the map, where locations are dynamically updated depending on what you filter or sort by. Under the map you will see a list of the 50 locations.<br><br>Each attraction displays a dollar sign symbol and a star rating. The dollar signs listed next to each location correspond to its price. An attraction with no dollar sign costs nothing, 1 dollar sign costs $10 or less, 2 dollar signs costs $10-$25, and 3 dollar signs costs $25 or more. The Star count is based on the average rating based on reviews of the location on Google Maps.<br><br>The Current Location text box you see allows you to enter a number (1-50), which corresponds to the location listed below. The View Location button allows you to view the chosen location.<br><br>The Sort and Filter dropdown menus allow you to change which locations are displayed. Choosing an option in the Sort dropdown menu sorts the entire list of attractions based on the selected attribute. Choosing an option in the filter menu allows you to only view locations with that selected attribute. To restore the full list of 50 locations, select the 'None' option under the Filter dropdown.The ascending/descending button switches the order of the display to the order that the button reads.<br><br>The Starting Point text box and Directions button allow you to find directions to a selected attraction. Simply type in your current location into the Starting Point text box, and press the Directions button to view directions to the currently selected location. Additionally, the Directions button will display how long it would take to drive to the location.<br><br>Press Help to exit this menu, and press it again at any time to return. Thank you for using Explore Tampa Bay!"
    document.getElementById("demo").innerHTML = helpText;
  }
}