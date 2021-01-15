const Drawing = require('dxf-writer');
const fs = require('fs');

let d = new Drawing();

d.addLayer('geometry', Drawing.ACI.WHITE, 'CONTINUOUS')
 .setActiveLayer('geometry')
 .drawArc(50, 50, 50, 0, 90);

d.addLayer('geometry', Drawing.ACI.WHITE, 'CONTINUOUS')
 .setActiveLayer('geometry')
 .drawLine(50, 50, 50, 50);

fs.writeFileSync(__filename + '.dxf', d.toDxfString());