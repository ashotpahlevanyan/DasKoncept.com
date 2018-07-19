(function($) {
	
	$.cjTextFx = function(sets) {
		
		var master = sets, dictionary = [];
			
		$.cjTextFx.animate = function(obj, sets) {
			
			var completeParams,
			startParams,
			onComplete,
			linkTarget,
			hyperlink,
			container,
			animateIn,
			posLeft,
			offsetX,
			offsetY,
			starter,
			onStart,
			easing,
			delay,
			pause,
			speed,
			toRun,
			count,
			store,
			chars,
			size,
			iVal,
			iLeg,
			pos,
			ran,
			leg,
			st,
			ar,
			i,
			
			data = {},
			agent = navigator.userAgent.toLowerCase(),
			isIE = agent.search("msie") !== -1;
			
			if(isIE) isIE = parseFloat(agent.substr(agent.indexOf("msie") + 4)) < 9;
			setDefaults();
			
			if(master) setData(master);
			if(sets) setData(sets);
			
			container = $(obj);
			
			if(!container.length) {
				
				return;
				
			}
			else if(container.length > 1) {

				return;
				
			}
			
			cleanDictionary(false, [obj]);
			posLeft = container.offset().left | 0;
			
			pos = [];
			ar = [];
			count = 0;
			
			if(data.linked) container.css("cursor", "pointer").click(gotoURL);
			
			container.css({color: data.color, height: container.height(), visibility: "visible", display: "block"});
			
			store = container.html();
			
			st = store.replace(/<\/?[^>]+>/igm, "");
			st = st.replace(/^\s+|\s+$/g, "");
	
			container.empty();
			leg = st.length;
			iLeg = leg - 1;
						
			for(i = 0; i < leg; i++) {
							
				chars = st.charAt(i);
							
				if(chars === " ") chars = "&nbsp;"
						
				span = $("<span />").html(chars).appendTo(container);
					
				if(toRun !== 12 && animateIn) span.css({opacity: 0, visibility: "hidden"});
						
				ar[i] = span;
							
			}
				
			starter = setTimeout(startItUp, pause === 0 ? 100 : pause);
			
			ran = Math.random();
			dictionary[dictionary.length] = {object: obj, id: ran, html: store, start: starter, array: ar, linkHandler: gotoURL, restore: data.restoreHTML};
			
			container = null;
			chars = null;
			st = null;
			i = null;
			
			function setData(sets) {
				
				for(var key in sets) {
					
					if(sets.hasOwnProperty(key)) data[key] = sets[key];
					
				}
				
				writeVars();
				
			}
			
			function setDefaults() {
				
				data.animation = 1;
				data.animationType = "in";
				data.backwards = false;
				data.easing = "easeOutQuint";
				data.sequenceDelay = 100;
				data.startDelay = 0;
				data.speed = 1000;
				data.offsetX = 100;
				data.offsetY = 50;
				data.color = "#000";
				data.linked = false;
				data.hyperlink = null;
				data.linkTarget = null;
				data.onComplete = null;
				data.onStart = null;
				data.onCompleteParams = null;
				data.onStartParams = null;
				data.restoreHTML = true;
				
				writeVars();
				
			}
			
			function writeVars() {
				
				animateIn = data.animationType.toLowerCase() === "in" ? true : false;
				onComplete = data.onComplete;
				onStart = data.onStart;
				completeParams = data.onCompleteParams;
				startParams = data.onStartParams;
				linkTarget = data.linkTarget;
				hyperlink = data.hyperlink;
				delay = data.sequenceDelay;
				pause = data.startDelay;
				offsetX = data.offsetX;
				offsetY = data.offsetY;
				toRun = data.animation;
				easing = data.easing;
				speed = data.speed;
				
			}
			
			function startItUp() {
				
				var backwards = data.backwards, span, i = leg;
					
				if(toRun === 11 || toRun === 12 || toRun === 14) shuffle();
				
				while(i--) pos[i] = ar[i].offset().left - posLeft;
				
				if(animateIn) {
						
					switch(toRun) {
								
						case 1:
										
							if(!backwards) {
								iVal = setInterval(animeOneIn, delay);
							}
							else {
								count = iLeg;
								iVal = setInterval(animeOneInReverse, delay);			
							}
									
						break;
									
						case 2:
										
							if(!backwards) {
								iVal = setInterval(animeTwoIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeTwoInReverse, delay);			
							}
									
						break;	
									
						case 3:
										
							if(!backwards) {
								iVal = setInterval(animeThreeIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeThreeInReverse, delay);			
							}
									
						break;
									
						case 4:
										
							if(!backwards) {
								iVal = setInterval(animeFourIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFourInReverse, delay);			
							}
									
						break;
									
						case 5:
										
							if(!backwards) {
								iVal = setInterval(animeFiveIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFiveInReverse, delay);			
							}
									
						break;
						
						case 6:
										
							if(!backwards) {
								iVal = setInterval(animeSixIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeSixInReverse, delay);			
							}
									
						break;
									
						case 7:
										
							if(!backwards) {
								iVal = setInterval(animeSevenIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeSevenInReverse, delay);			
							}
									
						break;
									
						case 8:
							
							if(!backwards) {
								iVal = setInterval(animeEightIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeEightInReverse, delay);			
							}
									
						break;
									
						case 9:
										
							if(!backwards) {
								iVal = setInterval(animeNineIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeNineInReverse, delay);			
							}
									
						break;
						
						case 10:
										
							if(!backwards) {
								iVal = setInterval(animeTenIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeTenInReverse, delay);			
							}
									
						break;
									
						case 11:
										
							iVal = setInterval(animeElevenIn, delay);	
									
						break;
									
						case 12:
										
							i = leg;
										
							while(i--) {
										
								if(i % 2 === 0) {
									
									ar[i].css({position: "absolute", left: pos[i] + (Math.random() * offsetX) | 0, top: (Math.random() * -offsetY) | 0});
												
								}
								else {
											
									ar[i].css({position: "absolute", left: pos[i] + (Math.random() * -offsetX) | 0, top: (Math.random() * offsetY) | 0});
												
								}
											
							}
										
							iVal = setInterval(animeTwelveIn, delay);	
									
						break;
									
						case 13:
										
							if(!backwards) {
								iVal = setInterval(animeThirteenIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeThirteenInReverse, delay);			
							}
									
						break;
									
						case 14:
										
							iVal = setInterval(animeThirteenIn, delay);
									
						break;
								
						case 15:
									
							if(!backwards) {
								iVal = setInterval(animeFifteenIn, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFifteenInReverse, delay);			
							}	
								
						break;				
								
					}
					
				}
				else {
					
					i = leg;
					
					while(i--) ar[i].css({position: "absolute", left: pos[i], top: 0});
					
					switch(toRun) {
								
						case 1:
							
							if(!backwards) {
								iVal = setInterval(animeOneOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeOneOut, delay);
							}
									
						break;
									
						case 2:
										
							if(!backwards) {
								iVal = setInterval(animeTwoOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeTwoOut, delay);			
							}
									
						break;	
									
						case 3:
										
							if(!backwards) {
								iVal = setInterval(animeThreeOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeThreeOut, delay);			
							}
									
						break;
									
						case 4:
										
							if(!backwards) {
								iVal = setInterval(animeFourOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFourOut, delay);			
							}
									
						break;
									
						case 5:
										
							if(!backwards) {
								iVal = setInterval(animeFiveOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFiveOut, delay);			
							}
									
						break;
						
						case 6:
										
							if(!backwards) {
								iVal = setInterval(animeSixOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeSixOut, delay);			
							}
									
						break;
									
						case 7:
										
							if(!backwards) {
								iVal = setInterval(animeSevenOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeSevenOut, delay);			
							}
									
						break;
									
						case 8:
							
							if(!backwards) {
								iVal = setInterval(animeEightOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeEightOut, delay);			
							}
									
						break;
									
						case 9:
										
							if(!backwards) {
								iVal = setInterval(animeNineOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeNineOut, delay);			
							}
									
						break;
						
						case 10:
										
							if(!backwards) {
								iVal = setInterval(animeTenOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeTenOut, delay);			
							}
									
						break;
									
						case 11:
										
							iVal = setInterval(animeElevenOut, delay);	
									
						break;
									
						case 12:
										
							iVal = setInterval(animeTwelveOut, delay);	
									
						break;
									
						case 13:
										
							if(!backwards) {
								iVal = setInterval(animeThirteenOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeThirteenOut, delay);			
							}
									
						break;
									
						case 14:
							
							count = iLeg;
							iVal = setInterval(animeThirteenOut, delay);
									
						break;
								
						case 15:
									
							if(!backwards) {
								iVal = setInterval(animeFifteenOutReverse, delay);	
							}
							else {
								count = iLeg;
								iVal = setInterval(animeFifteenOut, delay);			
							}	
								
						break;				
								
					}
					
				}
				
				if(onStart) starter = setTimeout(onStarted, delay);
				
				i = dictionary.length;
				
				while(i--) {
				
					if(dictionary[i].id === ran) {
					
						dictionary[i].timer = iVal;
						dictionary[i].start = starter;
						
						break;
						
					}
					
				}
				
				data = null;
				ran = null;
				
			}
					
			function shuffle() {
					
				var shuf = [], placer;
							   
				for(var i = 0; i < leg; i++) shuf[i] = ar[i];
								
				ar = [];
												
				while(shuf.length > 0) { 
									
					placer = (Math.random() * shuf.length) | 0;
									
					ar[ar.length] = shuf[placer];
					shuf.splice(placer, 1);
												
				}
						
			}
					
			function gotoURL() {
				
				(linkTarget === "_parent") ? window.location = hyperlink : window.open(hyperlink);
							
			}
			
			function onStarted() {
			
				onStart(startParams);
				
			}
			
			function fireComplete() {
			
				onComplete(completeParams);
				
			}
			
			function checkIE() {
					 
				if(isIE && $(this).data("isOut")) $(this).get(0).style.removeAttribute("filter");
				if($(this).data("callback")) $(this).data("callback")();
			
			}
			
			function animeOneIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count] + offsetX, top: 0, visibility: "visible"}).animate({left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeOneInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count] - offsetX, top: 0, visibility: "visible"}).animate({left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeOneOut() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({left: pos[count] + offsetX, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeOneOutReverse() {
				
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({left: pos[count] - offsetX, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeTwoIn() {
				
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count], top: -offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeTwoInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count], top: -offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeTwoOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeTwoOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeThreeIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
						
					ar[count].css({position: "absolute", left: pos[count], top: offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeThreeInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
						
					ar[count].css({position: "absolute", left: pos[count], top: offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeThreeOut() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
						
					ar[count].animate({top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeThreeOutReverse() {
				
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
						
					ar[count].animate({top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFourIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					ar[count].css({position: "absolute", left: pos[count] + offsetX, top: -offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFourInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count] + offsetX, top: -offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFourOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({left: pos[count] + offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFourOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					ar[count].animate({left: pos[count] + offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFiveIn() {
				
				if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
				
				if(count < leg) {
							
					ar[count].css({position: "absolute", left: pos[count] + offsetX, top: offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFiveInReverse() {
				
				if(onComplete && count === 0) ar[count].data("callback", fireComplete);
				
				if(count > -1) {
							
					ar[count].css({position: "absolute", left: pos[count] + offsetX, top: offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFiveOut() {
				
				if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
				
				if(count > -1) {
							
					ar[count].animate({left: pos[count] + offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFiveOutReverse() {
				
				if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
				
				if(count < leg) {
							
					ar[count].animate({left: pos[count] + offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeSixIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					ar[count].css({position: "absolute", left: pos[count] - offsetX, top: -offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeSixInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
					
					ar[count].css({position: "absolute", left: pos[count] - offsetX, top: -offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeSixOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
					
					ar[count].animate({left: pos[count] - offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeSixOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					ar[count].animate({left: pos[count] - offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeSevenIn() {
				
				if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
				
				if(count < leg) {
							
					ar[count].css({position: "absolute", left: pos[count] - offsetX, top: offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeSevenInReverse() {
				
				if(onComplete && count === 0) ar[count].data("callback", fireComplete);
				
				if(count > -1) {
							
					ar[count].css({position: "absolute", left: pos[count] - offsetX, top: offsetY, visibility: "visible"}).animate({top: 0, left: pos[count], opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeSevenOut() {
				
				if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
				
				if(count > -1) {
							
					ar[count].animate({left: pos[count] - offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeSevenOutReverse() {
				
				if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
				
				if(count < leg) {
							
					ar[count].animate({left: pos[count] - offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeEightIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
					
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count], top: offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count], top: -offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeEightInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
					
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count], top: offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count], top: -offsetY, visibility: "visible"}).animate({top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeEightOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
					
					if(count % 2 === 0) {
								
						ar[count].animate({top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeEightOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
					
					if(count % 2 === 0) {
								
						ar[count].animate({top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeNineIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count] + offsetX, top: offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count] + offsetX, top: -offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeNineInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
						
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count] + offsetX, top: offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count] + offsetX, top: -offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeNineOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
						
					if(count % 2 === 0) {
								
						ar[count].animate({left: pos[count] + offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count] + offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeNineOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					if(count % 2 === 0) {
								
						ar[count].animate({left: pos[count] + offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count] + offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeTenIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count] - offsetX, top: offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count] - offsetX, top: -offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeTenInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
						
					if(count % 2 === 0) {
								
						ar[count].css({position: "absolute", left: pos[count] - offsetX, top: offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count] - offsetX, top: -offsetY, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeTenOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
						
					if(count % 2 === 0) {
								
						ar[count].animate({left: pos[count] - offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count] - offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeTenOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					if(count % 2 === 0) {
								
						ar[count].animate({left: pos[count] - offsetX, top: offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count] - offsetX, top: -offsetY, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeElevenIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					if(count % 2 === 0) {
							
						ar[count].css({position: "absolute", left: pos[count] + (Math.random() * offsetX) | 0, top: (Math.random() * -offsetY) | 0, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].css({position: "absolute", left: pos[count] + (Math.random() * -offsetX) | 0, top: (Math.random() * offsetY) | 0, visibility: "visible"}).animate({left: pos[count], top: 0, opacity: 1}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeElevenOut() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					if(count % 2 === 0) {
							
						ar[count].animate({left: pos[count] + (Math.random() * offsetX) | 0, top: (Math.random() * -offsetY) | 0, opacity: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count] + (Math.random() * -offsetX) | 0, top: (Math.random() * offsetY) | 0, opacity: 0}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeTwelveIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
						
					if(count % 2 === 0) {
							
						ar[count].animate({left: pos[count], top: 0}, speed, easing, checkIE);
								
					}
					else {
							
						ar[count].animate({left: pos[count], top: 0}, speed, easing, checkIE);
								
					}
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeTwelveOut() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
					
					if(count % 2 === 0) {
									
						ar[count].animate({left: pos[count] + (Math.random() * offsetX) | 0, top: (Math.random() * -offsetY) | 0}, speed, easing, checkIE);
												
					}
					else {
											
						ar[count].animate({left: pos[count] + (Math.random() * -offsetX) | 0, top: (Math.random() * offsetY) | 0}, speed, easing, checkIE);
												
					}
	
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeThirteenIn() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
							
					ar[count].css({position: "absolute", left: pos[count], top: 0, visibility: "visible"}).animate({opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeThirteenInReverse() {
						
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
							
					ar[count].css({position: "absolute", left: pos[count], top: 0, visibility: "visible"}).animate({opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeThirteenOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
							
					ar[count].animate({opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeThirteenOutReverse() {
						
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
							
					ar[count].animate({opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
			function animeFifteenIn() {
					
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data("callback", fireComplete);
						
					size = ar[count].height();
					ar[count].css({position: "absolute", left: pos[count], top: 0, height: 0, visibility: "visible"}).animate({height: size, opacity: 1}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFifteenInReverse() {
					
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data("callback", fireComplete);
						
					size = ar[count].height();
					ar[count].css({position: "absolute", left: pos[count], top: 0, height: 0, visibility: "visible"}).animate({height: size, opacity: 1}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFifteenOut() {
				
				if(count > -1) {
					
					if(onComplete && count === 0) ar[count].data({callback: fireComplete, isOut: true});
						
					ar[count].animate({height: 0, opacity: 0}, speed, easing, checkIE);
							
					count--;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
			
			function animeFifteenOutReverse() {
					
				if(count < leg) {
					
					if(onComplete && count === iLeg) ar[count].data({callback: fireComplete, isOut: true});
						
					ar[count].animate({height: 0, opacity: 0}, speed, easing, checkIE);
							
					count++;
							
				}
				else {
						
					clearInterval(iVal);
							
				}
						
			}
					
		}
		
		$.cjTextFx.remove = function(removeAll, objs) {
			
			cleanDictionary(removeAll, objs);
			
		}
		
		function cleanDictionary(removeAll, objs) {
			
			if(dictionary.length) {
				
				if(!removeAll) {
				
					var i = objs.length, j;
					
					while(i--) {
						
						j = dictionary.length;
						
						while(j--) {
							
							if(objs[i] === dictionary[j].object) {
								
								clean(dictionary[j]);
								dictionary.splice(j, 1);
								
								break;
								
							}	
							
						}
						
					}
					
				}
				
				else {
					
					while(dictionary.length) {
					
						clean(dictionary[0]);
						dictionary.shift();
						
					}
					
				}
				
			}
			
		}
		
		function clean(model) {
			
			clearTimeout(model.start);
			clearInterval(model.timer);
							
			var arr = model.array, obj;
							
			while(arr.length) {
				
				$(arr[0]).stop(true).removeData("callback").removeData("isOut");
				arr.shift();
								
			}
			
			obj = $(model.object);
			obj.unbind("click", model.linkHandler);	
			
			if(model.restore) {
				
				obj.empty();
				obj.html(model.html);
				
			}
			
			obj.css("visibility", "hidden");
			
		}
		
	}
	
})(jQuery);





