---
wordsWritten: 
pagesRead: 
journal: 
meditation: 
noPM: 
readBook:
---
<%*
const currentMoment = moment(tp.file.title, "YYYY-MM-DD");
const hash = '# ';
const slash = ' / ';
const pipe = ' | ';
const leftAngle = '❮ ';
const rightAngle = ' ❯';
tR += leftAngle;
tR += '[[' + currentMoment.format('YYYY') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-[Q]Q|[Q]Q') + ']]' + slash;
tR += '[[' + currentMoment.format('YYYY-MM|MMMM') + ']]' + slash;
tR += '[[' + currentMoment.format('GGGG-[W]WW|[Week] WW') + ']]';
tR += rightAngle;
tR += '\n';
tR += '\n';
tR += leftAngle;
currentMoment.add(-1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|dddd Do') + ']]' + pipe;
currentMoment.add(1,'days');
tR += currentMoment.format('dddd Do') + pipe;
currentMoment.add(1,'days');
tR += '[[' + currentMoment.format('YYYY-MM-DD|dddd Do') + ']]';
currentMoment.add(-1,'days');
tR += rightAngle;
%>

