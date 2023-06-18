function timeSince(d1, d2) {

	var seconds = Math.floor((d2 - d1) / 1000);

	var interval = seconds / 31536000;

	if (interval > 1) {
	  return Math.floor(interval) + " years";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
	  return Math.floor(interval) + " months";
	}
	interval = seconds / 86400;
	if (interval > 1) {
	  return Math.floor(interval) + " days";
	}
	interval = seconds / 3600;
	if (interval > 1) {
	  return Math.floor(interval) + " hours";
	}
	interval = seconds / 60;
	if (interval > 1) {
	  return Math.floor(interval) + " minutes";
	}
	return Math.floor(seconds) + " seconds";
}

var dateStartDes = new Date('2016-09-14');
var dateStartCode = new Date('2020-09-14');
var dateNow = new Date();

console.log(timeSince(dateStartDes, dateNow));
console.log(timeSince(dateStartCode, dateNow));
