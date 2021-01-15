const Drawing = require('dxf-writer');
const fs = require('fs');

let d = new Drawing();

d.addLayer('l_yellow', Drawing.ACI.YELLOW, 'DOTTED')
 .setActiveLayer('l_yellow')
 .drawCircle(0, 0, 25);

fs.writeFileSync(__filename + '.dxf', d.toDxfString());