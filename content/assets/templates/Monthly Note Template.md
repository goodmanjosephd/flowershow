<%*
const currentMoment = moment(tp.file.title, "YYYY-MM");
const hash = '# ';
const slash = ' / ';
const pipe = ' | ';
const leftAngle = '❮ ';
const rightAngle = ' ❯';
tR += leftAngle;
tR += '[[' + currentMoment.format('YYYY') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-[Q]Q|[Q]Q') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-MM|MMMM') + ']]';
tR += rightAngle;
tR += '\n';
tR += '\n';
tR += leftAngle;
currentMoment.add(-1,'months');
tR += '[[' + currentMoment.format('YYYY-MM|MMMM') + ']]' + pipe;
currentMoment.add(1,'months');
tR += currentMoment.format('MMMM') + pipe;
currentMoment.add(1,'months');
tR += '[[' + currentMoment.format('YYYY-MM|MMMM') + ']]';
currentMoment.add(-1,'months');
tR += rightAngle;
tR += '\n';
tR += '\n';
tR += leftAngle;
const thisMonth = currentMoment.month();
currentMoment.startOf('week');
do {
tR += '[[' + currentMoment.format('GGGG-[W]WW|[Week] WW') + ']]';
currentMoment.add(1,'weeks');
if (currentMoment.month() == thisMonth)
{ tR += pipe}
} while (currentMoment.month() == thisMonth)
currentMoment.subtract(1, 'weeks');
tR += rightAngle;
%>