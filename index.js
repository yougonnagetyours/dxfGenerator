const Drawing = require('dxf-writer');
const fs = require('fs');

let d = new Drawing();

d.addLayer('l_yellow', Drawing.ACI.YELLOW, 'CONTINUOUS')
 .setActiveLayer('l_yellow')
 .drawCircle(0, 0, 25);

d.addLayer('l_green', Drawing.ACI.GREEN, 'CONTINUOUS')
 .setActiveLayer('l_yellow')
 .drawArc(50, 50, 50, 30, 90);

fs.writeFileSync(__filename + '.dxf', d.toDxfString());