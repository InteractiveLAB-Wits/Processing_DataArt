//JSON map data as 3 level coloumn array
var mapData = [{"loc":"AL","locx":439,"locy":270},{"loc":"AK","locx":94,"locy":325},{"loc":"AZ","locx":148,"locy":241},{"loc":"AR","locx":368,"locy":247},{"loc":"CA","locx":56,"locy":176},{"loc":"CO","locx":220,"locy":183},{"loc":"CT","locx":576,"locy":120},{"loc":"DE","locx":556,"locy":166},{"loc":"FL","locx":510,"locy":331},{"loc":"GA","locx":478,"locy":267},{"loc":"HI","locx":232,"locy":380},{"loc":"ID","locx":143,"locy":101},{"loc":"IL","locx":405,"locy":168},{"loc":"IN","locx":437,"locy":165},{"loc":"IA","locx":357,"locy":147},{"loc":"KS","locx":302,"locy":194},{"loc":"KY","locx":453,"locy":203},{"loc":"LA","locx":371,"locy":302},{"loc":"ME","locx":595,"locy":59},{"loc":"MD","locx":538,"locy":162},{"loc":"MA","locx":581,"locy":108},{"loc":"MI","locx":446,"locy":120},{"loc":"MN","locx":339,"locy":86},{"loc":"MS","locx":406,"locy":274},{"loc":"MO","locx":365,"locy":197},{"loc":"MT","locx":194,"locy":61},{"loc":"NE","locx":286,"locy":151},{"loc":"NV","locx":102,"locy":157},{"loc":"NH","locx":580,"locy":89},{"loc":"NJ","locx":561,"locy":143},{"loc":"NM","locx":208,"locy":245},{"loc":"NY","locx":541,"locy":107},{"loc":"NC","locx":519,"locy":221},{"loc":"ND","locx":283,"locy":65},{"loc":"OH","locx":472,"locy":160},{"loc":"OK","locx":309,"locy":239},{"loc":"OR","locx":74,"locy":86},{"loc":"PA","locx":523,"locy":144},{"loc":"RI","locx":589,"locy":117},{"loc":"SC","locx":506,"locy":251},{"loc":"SD","locx":286,"locy":109},{"loc":"TN","locx":441,"locy":229},{"loc":"TX","locx":291,"locy":299},{"loc":"UT","locx":154,"locy":171},{"loc":"VT","locx":567,"locy":86},{"loc":"VA","locx":529,"locy":189},{"loc":"WA","locx":92,"locy":38},{"loc":"WV","locx":496,"locy":178},{"loc":"WI","locx":392,"locy":103},{"loc":"WY","locx":207,"locy":125}];
var locSize = 40;
var img;
var loc = [];
var locX = [];
var locY = [];

// Preload for data and image laoding
function preload(){
	getMapData(mapData);
	//img = loadImage("map.png");
}

// standard setup
function setup() {
  createCanvas(640, 400); 
  //image(img, 0,0);
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  noStroke();
  smooth();
  // call the draw function to display
  drawLocs();
}


// draw function not used as there is no dynamic updating 
function draw() {
 
}

// draws the states onto the map
function drawLocs(){
	for (var i = 0; i <= loc.length; i++){
      fill(0, 200);
      ellipse(locX[i], locY[i], locSize, locSize);
      fill(255);
      text(loc[i],locX[i], locY[i]);
    }
}

//creates small arrays to pass to draw
function getMapData(data) {

	for (var i = 0; i < data.length; i++) {
            loc[i] = data[i].loc;
            locX[i] = data[i].locx;
            locY[i] = data[i].locy;
    }

//console.log(data[1]);
}

