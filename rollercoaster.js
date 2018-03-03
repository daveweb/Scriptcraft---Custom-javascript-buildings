
var Drone = require('drone'); 


function rollercoaster() {
  var i,j ;
	 //bookmark the drone's position so it can return there later
	 this.chkpt('rollercoaster'); 
	 for ( i = -3; i<=100; i++ ) {

	  j=Math.round(-0.01*(i)*(i-100));
	  this
	    .box(blocks.fence.oak,3,j,1)
		.up(j)
		.box(blocks.oak,3,1,1)
		.up()
		.right()
		.box(blocks.powered_rail,1,1,1)
		.move('start')
		.fwd(i);
	 }
	 // return the drone to where it started
	  this.move('rollercoaster'); 
 };

Drone.extend( rollercoaster );
