"use strict";
function updateCoords(e){
	pointerX=(e.clientX||e.touches[0].clientX)
	-canvasEl.getBoundingClientRect().left,
	pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top
	}function setParticuleDirection(e){
		var t=anime.random(0,360)*Math.PI/180,
		a=anime.random(50,180),
		n=[-1,1][anime.random(0,1)]*a;
		return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}
		}function createParticule(e,t){
			var a={};return a.x=e,
			a.y=t,
			a.color=colors[anime.random(0,colors.length-1)],
			a.radius=anime.random(16,32),
			a.endPos=setParticuleDirection(a),
			a.draw=function(){
				ctx.beginPath(),
				ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),
				ctx.fillStyle=a.color,ctx.fill()},a
		}function createCircle(e,t){
			var a={};
			return a.x=e,
			a.y=t,
			a.color="#F00",a.radius=0.1,
			a.alpha=0.5,
			a.lineWidth=6,
			a.draw=function(){
				ctx.globalAlpha=a.alpha,
				ctx.beginPath(),
				ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),
				ctx.lineWidth=a.lineWidth,
				ctx.strokeStyle=a.color,ctx.stroke(),
				ctx.globalAlpha=1},a
				}function renderParticule(e){
					for(var t=0;t