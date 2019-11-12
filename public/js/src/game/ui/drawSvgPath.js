// source: https://gist.github.com/shamansir/6294f8cfdd555a9d1b9e182007dd0c2f
// take SVG commands and draw this path to HTML5 canvas

// commandList should look like that: [ { marker: "M", values: [ 10, 10 ] },
//                                      { marker: "l", values: [ 5, 7 ] },
//                                      { marker: "C", values: [ -5, 7.2, .3, -16, 24, 10 ] },
//                                      . . .
//                                      { marker: "z", values: [ ] } ]

// there's another gist which has the code to parse SVG paths:
// https://gist.github.com/shamansir/0ba30dc262d54d04cd7f79e03b281505
//
// var ctx = canvas.getContext('2d');
// [ 'M10,10 l 5,7 C-5,7.2,.3-16,24,10  z', ... ].map(svgPathToCommands)
//                                               .forEach(function(commandList) { drawSvgPath(ctx, commandList); });

export default (ctx, commandList) => {
    ctx.beginPath();
    var lastPos = [ 0, 0 ]; var pointOne, pointTwo;
    console.log(commandList);
    commandList.forEach(function(command) {
        if ((command.marker === 'z') || (command.marker === 'Z')) {
            lastPos = [ 0, 0 ];
            ctx.closePath();
        } else if (command.marker === 'm') {
            lastPos = [ lastPos[0] + command.values[0], lastPos[1] + command.values[1] ];
            ctx.moveTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'l') {
            lastPos = [ lastPos[0] + command.values[0], lastPos[1] + command.values[1] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'h') {
            lastPos = [ lastPos[0] + command.values[0], lastPos[1] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'v') {
            lastPos = [ lastPos[0], lastPos[1] + command.values[0] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'c') {
            pointOne = [ lastPos[0] + command.values[0],
                         lastPos[1] + command.values[1] ];
            pointTwo = [ lastPos[0] + command.values[2],
                         lastPos[1] + command.values[3] ];
            lastPos  = [ lastPos[0] + command.values[4],
                         lastPos[1] + command.values[5] ];
            ctx.bezierCurveTo(
                    pointOne[0], pointOne[1],
                    pointTwo[0], pointTwo[1],
                    lastPos[0], lastPos[1]);
        } else if (command.marker === 'M') {
            lastPos = [ command.values[0], command.values[1] ];
            ctx.moveTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'L') {
            lastPos = [ command.values[0], lastPos[1] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'H') {
            lastPos = [ command.values[0], lastPos[1] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'V') {
            lastPos = [ lastPos[0], command.values[0] ];
            ctx.lineTo(lastPos[0], lastPos[1]);
        } else if (command.marker === 'C') {
            pointOne = [ command.values[0],
                         command.values[1] ];
            pointTwo = [ command.values[2],
                         command.values[3] ];
            lastPos  = [ command.values[4],
                         command.values[5] ];
            ctx.bezierCurveTo(
                    pointOne[0], pointOne[1],
                    pointTwo[0], pointTwo[1],
                    lastPos[0], lastPos[1]);
        }
    });
}
