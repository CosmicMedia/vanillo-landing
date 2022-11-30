/*
*  Created by @RemiThe4ndroid for Vanillo
*  © Copyright 2022 CosmicMedia, LLC. 
*/

var release = (new Date("2022-12-25T00:00:00.000-05:00")).getTime() / 1000;
var current = (new Date()).getTime() / 1000;

var time;

function zero(string) {
	string = string.toString();
	
	if (string.length == 1) string = '0' + string;

	return string;
}

function getDays() {
	var days = Math.floor(time / 86400);
	time -= days * 86400;

	return zero(days);
}

function getHours() {
	var hours = Math.floor(time / 3600);
	time -= hours * 3600;

	return zero(hours);
}

function getMinutes() {
	var minutes = Math.floor(time / 60);
	time -= minutes * 60;

	return zero(minutes);
}

function getSeconds() {
	return zero(time);
}

var interval;

function update() {
	time = parseInt(release - current, 10);
	
	if (time <= 0) clearInterval(interval);
	
	document.getElementById('days').innerHTML    = getDays();
	document.getElementById('hours').innerHTML   = getHours();
	document.getElementById('minutes').innerHTML = getMinutes();
	document.getElementById('seconds').innerHTML = getSeconds();
	
	current++;
}

update();

if (time > 0) interval = setInterval(update, 1000);

// Soothing Jazz brought to you by @RemiThe4ndroid and RelaxingJazz.com

var jazz = document.getElementById('jazz');

jazz.volume = .2;

function toggleJazz() {
	return jazz.paused ? jazz.play() : jazz.pause();
}