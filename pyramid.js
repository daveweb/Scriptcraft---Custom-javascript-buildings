// function pyramidd
//
//

var Drone = require('drone');

function pyramid(levels) {
  var i;

  echo ('building pyramid levels: ' + levels)
  this.chkpt('mypyramid');

  i = levels;
  while ( i>0) {
    this
    .box(blocks.sandstone,(i+(i-1)),1,(i+(i-1)))
	.up()
	.right()
	.fwd();
 
  --i;
  }
 this.move('mypyramid');
};

Drone.extend(pyramid);
