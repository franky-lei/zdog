// ------------------------- demo ------------------------- //

var illoElem = document.querySelector('.illo');
var sceneSize = 24;
var minWindowSize = Math.min( window.innerWidth - 20 , window.innerHeight - 20 );
var zoom = Math.floor( minWindowSize / sceneSize );
var illoSize = sceneSize * zoom;
illoElem.setAttribute( 'width', illoSize );
illoElem.setAttribute( 'height', illoSize );
var isSpinning = true;
var TAU = Zdog.TAU;
var offWhite = '#FED';
var gold = '#EA0';
var orange = '#E62';
var garnet = '#C25';
var eggplant = '#636';

var illo = new Zdog.Illustration({
  element: illoElem,
  zoom: zoom,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

// ----- model ----- //

new Zdog.Rect({
  addTo: illo,
  width: 4,
  height: 4,
  translate: { x: -4, y: -4, z: 4 },
  stroke: 1,
  color: orange,
});

new Zdog.RoundedRect({
  addTo: illo,
  width: 4,
  height: 4,
  cornerRadius: 1,
  translate: { x: -4, y: 4, z: -4 },
  stroke: 1,
  color: eggplant,
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 4,
  translate: { x: 4, y: 4, z: 4 },
  stroke: 1,
  color: garnet,
});

new Zdog.Polygon({
  addTo: illo,
  sides: 3,
  radius: 2.5,
  translate: { x: 4, y: -4, z: -4 },
  stroke: 1,
  color: orange,
});

new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -1 },
    { x:  1 },
    { move: { y: -1 } },
    { y: 1 },
    { move: { z: -1 } },
    { z: 1 }
  ],
  scale: 1.25,
  stroke: 1,
  color: offWhite,
});

new Zdog.Hemisphere({
  addTo: illo,
  diameter: 5,
  translate: { x: -4, y: -4, z: -4 },
  color: garnet,
  backface: gold,
  stroke: false,
});

new Zdog.Cylinder({
  addTo: illo,
  diameter: 5,
  length: 4,
  translate: { x: -4, y: 4, z: 4 },
  color: gold,
  backface: offWhite,
  stroke: false,
});

new Zdog.Cone({
  addTo: illo,
  diameter: 5,
  length: 4,
  translate: { x: 4, y: -4, z: 4 },
  color: eggplant,
  backface: garnet,
  stroke: false,
});

new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 5,
  depth: 5,
  translate: { x: 4, y: 4, z: -4 },
  color: orange,
  topFace: gold,
  leftFace: garnet,
  rightFace: garnet,
  bottomFace: eggplant,
  stroke: false,
});

// ----- animate ----- //

var clock = 0;

function animate() {
  if ( isSpinning ) {
    var theta = Zdog.easeInOut( clock % 1, 3 ) * TAU;
    illo.rotate.y = theta * 2;
    illo.rotate.x = Math.sin( theta ) * 0.5;
    clock += 1/360; // cycle ever 360 frames
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

