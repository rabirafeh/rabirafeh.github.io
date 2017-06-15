// ===== CDA 300x250 ANIM.JS =====


function initVars(){

	// haveFeed = false;
	window.localTesting = false;

	// DOM elems and exportRoot positioners

	window.loading 			= document.getElementById("loading");

	window.carouselContainer = document.getElementById("carouselContainer");

	window.carouselTxt 		= document.getElementById('carouselTxt');
	window.carouselTxtPos 	= exportRoot.carouselTxtPos;

	window.showTitleTxt 	= document.getElementById('showTitleTxt');
	window.showTitlePos 	= exportRoot.showTitlePos;

	window.networkLogoContainer 	= document.getElementById('networkLogoContainer');
	window.networkLogoPos 	= exportRoot.networkLogoPos;

	window.showInfoFlexBox 		= document.getElementById('showInfoFlexBox');
	window.showInfoFlexBoxPos 	= exportRoot.showInfoFlexBoxPos;

	window.finalTxt 		= document.getElementById('finalTxt');
	window.finalTxtPos		= exportRoot.finalTxtPos;

	window.priceTxt 		= document.getElementById('priceTxt');
	window.pricePos			= exportRoot.pricePos;

	window.finalImgDiv 		= document.getElementById('finalImgDiv');
	window.finalImgPos		= exportRoot.finalImgPos;
	window.finalImg 		= document.getElementById('finalImg');

	window.ctaFlexBox 		= document.getElementById('ctaFlexBox');
	window.ctaTxt 			= document.getElementById('ctaTxt');
	window.ctaPos 			= exportRoot.ctaPos;
	window.legalTxt 		= document.getElementById('legalTxt');

	// exportRoot elems

	window.ptA 				= exportRoot.ptA;
	window.ptBpos 			= exportRoot.ptBpos;
	window.ptBscale 		= exportRoot.ptBscale;
	window.ptC 				= exportRoot.ptC;

	window.slingLogo 		= exportRoot.slingLogo;

	window.slingLogoPos 	= exportRoot.slingLogoPos;

	// window.cta 				= exportRoot.cta;
	window.bgGrad 			= exportRoot.bgGrad;
	window.bgGradAlpha		= bgGrad.alpha;

	// timeline and carousel vars

	window.enter = 0.5;
	window.exit = 0.25;
	window.pause = 1.75;

	window.thisImgdiv = 0;
	window.topZ = 1000;


	turnOffPositioners();

	populateIAContent();

	styleAndPosition();

	initPlayback();

	if (haveFeed === true){
		cleanUpFeed();
	} else {
		feedFailProgram();
	}

}

function turnOffPositioners(){

	TweenLite.set(slingLogoPos, {alpha:0});
	TweenLite.set(ctaPos, {alpha:0});
	TweenLite.set(carouselTxtPos, {alpha:0});
	TweenLite.set(showTitlePos, {alpha:0});
	TweenLite.set(networkLogoPos, {alpha:0});
	TweenLite.set(showInfoFlexBoxPos, {alpha:0});
	TweenLite.set(finalTxtPos, {alpha:0});
	TweenLite.set(pricePos, {alpha:0});
	TweenLite.set(finalImgPos, {alpha:0});

	TweenLite.set(ptA, {alpha:0});
	TweenLite.set(ptBpos, {alpha:0});
	TweenLite.set(ptBscale, {alpha:0});
	TweenLite.set(ptC, {alpha:0});

}

function styleAndPosition(){

	window.headMinFontSize = 10;
	window.headMaxFontSize = 18;

	window.subMinFontSize = 8;
	window.subMaxFontSize = 18;

	window.maxWidth = document.getElementById('ad').clientWidth - 8;

	divToPos(carouselTxt, carouselTxtPos);
	adjustFontSize(carouselTxtTest, maxWidth, headMinFontSize, headMaxFontSize, carouselTxt);

	// divToPos(showTitleTxt, showTitlePos);

	divToPos(networkLogoContainer, networkLogoPos);
	networkLogoContainer.style.width = (networkLogoPos.nominalBounds.width * networkLogoPos.scaleX) + "px";
	networkLogoContainer.style.height = (networkLogoPos.nominalBounds.height * networkLogoPos.scaleY) + "px";

	divToPos(showInfoFlexBox, showInfoFlexBoxPos);
	showInfoFlexBox.style.width = showInfoFlexBoxPos.nominalBounds.width * showInfoFlexBoxPos.scaleX + "px";
	showInfoFlexBox.style.height = showInfoFlexBoxPos.nominalBounds.height * showInfoFlexBoxPos.scaleY + "px";

	divToPos(finalTxt, finalTxtPos);
	adjustFontSize(finalTxtTest, maxWidth, headMinFontSize, headMaxFontSize, finalTxt);

	divToPos(priceTxt, pricePos);
	divToPos(finalImgDiv, finalImgPos);

	divToPos(ctaFlexBox, ctaPos);
	ctaFlexBox.style.width = (ctaPos.nominalBounds.width * ctaPos.scaleX) + "px";
	ctaFlexBox.style.height = (ctaPos.nominalBounds.height * ctaPos.scaleX) + "px";

	legalTxt.style.width = (ctaPos.nominalBounds.width * ctaPos.scaleX) + "px";
	legalTxt.style.top = Math.round(ctaPos.y + (ctaPos.nominalBounds.height * ctaPos.scaleX)) + 5 + "px";
	legalTxt.style.left = Math.round(ctaPos.x) + "px";

	TweenLite.set(bgGrad, {alpha:0});
	TweenLite.set(carouselTxt, {opacity:0, scaleX:1.3, scaleY:1.3});
	TweenLite.set(showTitleTxt, {opacity:0});
	TweenLite.set(finalTxt, {opacity:0, scaleX:0, scaleY:0});
	TweenLite.set(finalImgDiv, {opacity:0, scaleX:0, scaleY:0});
	TweenLite.set(priceTxt, {opacity:0, scaleX:0, scaleY:0});
	// TweenLite.set(cta, {alpha:0, scaleX:0, scaleY:0});
	TweenLite.set(ctaFlexBox, {opacity:0, scaleX:0, scaleY:0});
	TweenLite.set(legalTxt, {opacity:0});

}

function divToPos(div, pos){

	div.style.top = Math.round(pos.y) + "px";
	div.style.left = Math.round(pos.x) + "px";

}

function adjustFontSize(divTest, maxWidth, minFontSize, maxFontSize, div) {
	var fontSize = minFontSize;
	while (divTest.clientWidth < maxWidth && fontSize < maxFontSize) {
		fontSize += 0.1;
		divTest.style.fontSize = fontSize + "px";
	}
	fontSize -= 0.1;
	div.style.fontSize = fontSize + "px";
}

function populateIAContent(){

	if (localTesting){
		console.log("LOCALTESTING!!!");
		finalImg.src 			= "local_IAimages/deviceFrame.png";
	}
	else { finalImg.src 			= myFT.instantAds.finalImg; }

	carouselTxt.innerHTML 	= myFT.instantAds.carouselTxt.toUpperCase();
	finalTxt.innerHTML 		= myFT.instantAds.finalTxt.toUpperCase();

	priceTxt.innerHTML 		= myFT.instantAds.priceTxt.toUpperCase();
		var priceStr = priceTxt.innerHTML.toUpperCase();
		var priceEdit = priceStr.replace("/MO", "<span style='font-size: 8px;'>/mo</span>");
		priceEdit = priceEdit.replace("$", "<span style='font-size: 8px; vertical-align: super;'>$</span>");
		priceTxt.innerHTML = priceEdit;

	ctaTxt.innerHTML 			= myFT.instantAds.ctaTxt.toUpperCase();
	ctaTxt.style.letterSpacing 	= myFT.instantAds.ctaTxtLetterSpacing + "px";
	legalTxt.innerHTML 			= myFT.instantAds.legalTxt.toUpperCase();

}

function cleanUpFeed(){

	window.shows = feedInfo_obj;

	// manually set for testing
	if (localTesting === true){
		shows =	[
			{
			"new_airing": true,
			"program_id": 520713,
			"playback_start": "2017-04-14T18:00:00Z",
			"playback_stop": "2017-04-14T19:00:00Z",
			"programImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/d9672f85f44e89f5415ae079cb59eca1fee46965.jpg",
			"programName": "CNN Newsroom with Brooke Baldwin",
			"networkName": "CNN",
			"networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://cdn.flashtalking.com/feeds/slingtv/FBI1665/networkimages/CNN.png",
			"networkImage2": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/a8ffbc75293cae317c73bd897b3ad517bf1731a2.png",
			"programTime": "2017-04-14T18:00:00Z"
			},
			{
			"new_airing": false,
			"program_id": 620790,
			"playback_start": "2017-04-14T23:30:00Z",
			"playback_stop": "2017-04-15T00:00:00Z",
			"programImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/95064f6ec2406cf2d3b991c1b8b2e8cb6bc81014.jpg",
			"programName": "Tangled: The Series",
			"networkName": "Disney Channel",
			// "networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://cdn.flashtalking.com/feeds/slingtv/FBI1665/networkimages/DISNEY.png",
			"networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=",
			"networkImage2": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/ebcc4feb24ee294d98f6480f20cb8c05686dd588.png",
			"programTime": "2017-04-14T23:30:00Z"
			},
			{
			"new_airing": false,
			"program_id": 631034,
			"playback_start": "2017-04-19T01:02:00Z",
			"playback_stop": "2017-04-19T02:02:00Z",
			"programImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/69dea4eac30cc30c76eced5140d98bbdc6787950.png",
			"programName": "Famous in Love",
			"networkName": "Freeform",
			"networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://cdn.flashtalking.com/feeds/slingtv/FBI1665/networkimages/FREEFORM.png",
			"networkImage2": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/e103b6e290d8b2b18acc9e3093da61de8f53f156.png",
			"programTime": "2017-04-19T01:02:00Z"
			},
			{
			"new_airing": false,
			"program_id": 521032,
			"playback_start": "2017-04-14T14:00:00Z",
			"playback_stop": "2017-04-17T18:00:00Z",
			"programImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/d725b8157c8b3f023524481cdfc51a2eb8cf8688.jpg",
			"programName": "Fixer Upper",
			"networkName": "HGTV",
			"networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://cdn.flashtalking.com/feeds/slingtv/FBI1665/networkimages/HGTV.png",
			"networkImage2": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/49b122466a32aec2bb5b0aece7bd6c8d261b4a23.png",
			"programTime": "2017-04-14T14:00:00Z"
			},
			{
			"new_airing": true,
			"program_id": 628660,
			"playback_start": "2017-04-18T02:30:00Z",
			"playback_stop": "2017-04-18T03:00:00Z",
			"programImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/69aa02c3b91bf9ee5744679cc2bdcfed11556fee.jpg",
			"programName": "Angie Tribeca",
			"networkName": "TBS",
			"networkImage": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://cdn.flashtalking.com/feeds/slingtv/FBI1665/networkimages/TBS.png",
			"networkImage2": "https://imgcf.flashtalking.com/temp/get.php?adaptiveResize=true&url=http://p-cdn-img.movetv.com/cms/images/60e195c339578c664f9d91ee5a79fa71f0994f4d.png",
			"programTime": "2017-04-18T02:30:00Z"
			}
		];
	}

	// check for broken show images - no .jpg or .png extension detected
	window.brokenShows = [];

	for (var i = 0; i < shows.length; i++){

		console.log(shows[i].programImage);

		if (shows[i].error){
			brokenShows.push(i);
		} else {
			//test for .jpg or .png
			if (!shows[i].programImage.includes(".jpg") && !shows[i].programImage.includes(".jpeg") && !shows[i].programImage.includes(".png")){
				console.log("broken image detected!");
				brokenShows.push(i);
			}
		}
	}

	// remove broken image shows
	for (var x = 0; x < brokenShows.length; x++){
		shows.splice(brokenShows[x], 1);
	}

	var storeNames = [];
	var duplicateShows = [];

	for (i = 0; i < shows.length; i++){
		storeNames.push(shows[i].programName);
		if (storeNames.indexOf(shows[i].programName) !== i){ // has been seen before
			duplicateShows.push(i);
			console.log(i+" is a duplicate");
		}
	}

	// remove duplicate shows
	for (x = 0; x < duplicateShows.length; x++){
		shows.splice(duplicateShows[x], 1);
	}

	// limit to 5 shows
	shows = shows.slice(0, 5);

	reportShows();

	loadShowTitles();

}

function reportShows(){

    var showArray = [];

    for (var i = 0; i < shows.length; i++){
        showArray.push(shows[i].programName + " | " + shows[i].networkName);
    }

    console.log(showArray);
    myFT.stateTrackingEvent(showArray);
}

function loadShowTitles(){
	var charLimit = 30;

	for (var i = 0; i < shows.length; i++){
		shows[i].titleString = shows[i].programName.toUpperCase();
	}

	loadShowImgs();
}

function loadShowImgs(){

	window.showsLoaded = 0;

	for (var i = 0; i < shows.length; i++){
		shows[i].image = new Image();
		shows[i].image.src = shows[i].programImage;
		shows[i].image.addEventListener("load", handleShowsLoad);
	}
}

function handleShowsLoad() {
	showsLoaded++;
	console.log(showsLoaded +" out of "+shows.length);
	if (showsLoaded == shows.length){
		loadLogos();
	}
}

function loadLogos(){

	window.logosLoadArray = [];

	for (var i = 0; i < shows.length; i++){
		if (shows[i].networkImage.includes(".jpg") || shows[i].networkImage.includes(".png") ){
			shows[i].logoType = "image";
			logosLoadArray.push(i);
		} else {
			shows[i].logoType = "text";
		}

		console.log(i+" logoType: "+shows[i].logoType);
	}

	window.logosLoaded = 0;

	for (i = 0; i < shows.length; i++){
		console.log(i+" logoType: "+shows[i].logoType);
		if (shows[i].logoType == "image"){
			console.log("loading show["+i+"] image");
			shows[i].logo = new Image();
			shows[i].logo.src = shows[i].networkImage;
			shows[i].logo.addEventListener("load", handleLogosLoad);
		}
	}
}

function handleLogosLoad() {
	logosLoaded++;
	console.log(logosLoaded +" out of "+logosLoadArray.length);
	if (logosLoaded == logosLoadArray.length){
		initProgramImageSlides();
	}
}


function initProgramImageSlides() {

	window.imgdivArray = [];
	window.logodivArray = [];

	for (var i=(shows.length-1); i >=0; i--){

		imgdivArray[i] = document.createElement("div");
		imgdivArray[i].className = "imgDiv";
		imgdivArray[i].innerHTML = "<img src = \'" + shows[i].programImage + "\'/>";
		carouselContainer.appendChild(imgdivArray[i]);

		var maxImgHeight = ptA.nominalBounds.height * ptA.scaleY;
		var thisImgRatio = shows[i].image.height / shows[i].image.width;
		var newImgWidth = maxImgHeight / thisImgRatio;

		imgdivArray[i].style.position = "absolute";
		// imgdivArray[i].style.left = ptA.x + "px";
		imgdivArray[i].style.left = ptA.x + ((ptA.nominalBounds.width * ptA.scaleX) / 2) - (newImgWidth / 2) + "px";
		imgdivArray[i].style.top = ptA.y + "px";
		imgdivArray[i].style.width = newImgWidth + "px";
		imgdivArray[i].style.height = maxImgHeight + "px";


		// network logos: generate divs
		logodivArray[i] = document.createElement("div");
		if (shows[i].logoType == "image"){
			logodivArray[i].className = "logoImgDiv";
			logodivArray[i].innerHTML = "<img src = \'" + shows[i].networkImage + "\'/>";
			var maxLogoHeight = networkLogoPos.nominalBounds.height * networkLogoPos.scaleY;
			var thisRatio = shows[i].logo.height / shows[i].logo.width;
			var newWidth = maxLogoHeight / thisRatio;
			logodivArray[i].getElementsByTagName('img')[0].style.width = newWidth + "px";

			// center
			// logodivArray[i].style.left = (networkLogoContainer.offsetWidth / 2) - (newWidth / 2) + "px";
			logodivArray[i].style.display = "none";
			networkLogoContainer.appendChild(logodivArray[i]);
		} else {
			logodivArray[i].className = "logoTextDiv";
			logodivArray[i].innerHTML = "<div>" + shows[i].networkName.toUpperCase() + "</div>";
			networkLogoContainer.appendChild(logodivArray[i]);
			logodivArray[i].style.left = (networkLogoContainer.offsetWidth / 2) - (logodivArray[i].clientWidth / 2) + "px";
		}

		TweenLite.set(logodivArray[i], {opacity:0});

	}

	launchCarousel();

}

function launchCarousel(){

	var buildCarouselTL = new TimelineLite();

	buildCarouselTL

	.to( loading		, 		0.5,		{	opacity:0	}) // fade out loader
	.from(	canvas 		,		enter,		{	opacity:0	}, "canvasIn")

	.to(carouselTxt, enter, {opacity:1, scaleX:1, scaleY:1, ease: Power2.easeOut, onComplete:carousel}, "carouselTxt")
	.to(bgGrad, enter, {alpha:bgGradAlpha}, "carouselTxt+=0.25")
	.from(carouselContainer, 0.75, {opacity:0, x: 300, scaleX:0, scaleY:0, ease: Power2.easeOut}, "carouselTxt+=0.25")
	// .from(networkLogoContainer, 1, {opacity:0, ease: Power2.easeOut}, "enterCarousel+=0.5")

	;
}

function carousel(){

	moveImgdiv = imgdivArray[thisImgdiv];
	thisLogoDiv = logodivArray[thisImgdiv];
	moveImgdiv.style.zIndex = topZ;

	if (thisImgdiv === 0){
		enter = 0.75;
	} else {
		enter = 0.5;
	}

	AtoB();

}

function AtoB(){

	TweenLite.set(showTitleTxt, {opacity:0});
	showTitleTxt.innerHTML = shows[thisImgdiv].titleString;

	// if (thisImgdiv == (imgdivArray.length - 1)){
	// 	var resetX = ptA.x + ( (ptA.nominalBounds.width * ptA.scaleX) / 2) - (imgdivArray[0].offsetWidth / 2);
	// 	TweenLite.set(imgdivArray[0], {left: resetX, top: ptA.y});
	// }

	// TweenLite.to(moveImgdiv, enter, {left: ptBpos.x, top: ptBscale.y, ease: Power1.easeInOut});
	var BLeft = ptBpos.x + ((ptBpos.nominalBounds.width * ptBpos.scaleX) / 2) - (moveImgdiv.offsetWidth / 2);
	// TweenLite.to(moveImgdiv, enter, {left: ptBpos.x, top: ptBscale.y, ease: Power1.easeInOut});

	TweenLite.to(moveImgdiv, enter, {scaleX:ptBscale.scaleX, scaleY:ptBscale.scaleY, ease: Power2.easeInOut});
	TweenLite.to(moveImgdiv, enter, {left: BLeft, top: ptBpos.y, ease: Power2.easeInOut});
	TweenLite.to(moveImgdiv.getElementsByTagName('img'), enter, {opacity:1, ease: Power2.easeOut});

	TweenLite.to(showTitleTxt, enter, {opacity:1}, "titleAndLogo");
	networkLogoContainer.style.width = thisLogoDiv.style.width;
	thisLogoDiv.style.display = "inline-block";
	TweenLite.to(thisLogoDiv, enter, {opacity:1}, "titleAndLogo");


	if (thisImgdiv < (imgdivArray.length-1)){
		setTimeout(BtoC, pause*1000);
	} else {
		setTimeout(afterCarousel, pause*1000);
	}

}

function BtoC(){
	var CLeft = ptC.x + ((ptC.nominalBounds.width * ptC.scaleX) / 2) - (moveImgdiv.offsetWidth / 2);
	// TweenLite.to(moveImgdiv, exit, {left: ptC.x, top: ptC.y, ease: Power1.easeInOut});
	TweenLite.to(moveImgdiv, exit, {left: CLeft, top: ptC.y, ease: Power1.easeInOut});
	TweenLite.to(moveImgdiv, exit, {scaleX:ptC.scaleX, scaleY:ptC.scaleY, ease: Power1.easeInOut});
	TweenLite.to(moveImgdiv.getElementsByTagName('img'), enter, {opacity:0.2, ease: Power2.easeIn});
	TweenLite.to(showTitleTxt, exit, {opacity:0});
	TweenLite.to(thisLogoDiv, exit, {opacity:0});

	setTimeout(nextCarousel, exit*1000);
}

function nextCarousel(){

	thisLogoDiv.style.display = "none";

	thisImgdiv++;
	topZ++;

	if (thisImgdiv < imgdivArray.length){
		carousel();
	}
}

function afterCarousel(){

	var afterTL = new TimelineLite();

	afterTL

	.to(carouselTxt, exit, {opacity:0, scaleX:0, scaleY:0, ease: Power2.easeOut}, "out")
	.to(carouselContainer, 0.5, {opacity:0, x: -300}, "out")
	// .to(showTitleTxt, exit, {opacity:0, scaleX:0, scaleY:0}, "out")
	// .to(thisLogoDiv, exit, {opacity:0, scaleX:0, scaleY:0}, "out")
	.to(bgGrad, exit, {alpha:0.2}, "out")

	.to(finalTxt, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut})
	.to(priceTxt, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "lockup")
	// .to(priceLockupMonth, enter, {alpha:1}, "lockup")
	.to(finalImgDiv, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut})

	.to(slingLogo, enter, {x:slingLogoPos.x, ease:Power2.easeInOut})
	// .to(cta, enter, {alpha:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "cta")
	.to(ctaFlexBox, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "cta")
	.to(legalTxt, enter, {opacity:1})

	.add(function(){ slingLogo.gotoAndPlay("wave"); })

	;

}

function feedFailProgram(){

	console.log("feedFailProgram");

	var feedFailTL = new TimelineLite();

	feedFailTL

	.to( loading		, 		0.5,		{	opacity:0	}) // fade out loader
	.from(	canvas 		,		enter,		{	opacity:0	}, "canvasIn")

	.to(finalTxt, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut})
	.to(priceTxt, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "lockup")
	// .to(priceLockupMonth, enter, {alpha:1}, "lockup")
	.to(finalImgDiv, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut})

	.to(slingLogo, enter, {x:slingLogoPos.x, ease:Power2.easeInOut})
	// .to(cta, enter, {alpha:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "cta")
	.to(ctaFlexBox, enter, {opacity:1, scaleX:1, scaleY:1, ease:Power2.easeOut}, "cta")
	.to(legalTxt, enter, {opacity:1})

	.add(function(){ slingLogo.gotoAndPlay("wave"); })

	;

}

function initPlayback() {

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED; //AdHelper.js

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	exportRoot.gotoAndStop(0);

	// runGSAP();                             
}




