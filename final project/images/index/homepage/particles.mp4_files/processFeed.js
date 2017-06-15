/*------------------------------------------------------------------------*/
// VARS
/*------------------------------------------------------------------------*/
// NOTE: Legend of data type naming convention suffixes
//----------------------------------------------------
// "_num" 		: (NUMBER)
// "_obj" 		: (OBJECT)
// "_bool" 		: (BOOLEAN)
// "_intv" 		: (SET INTERVAL)
// "_txt" 		: (TEXT FIELD) Div with text
// "_img" 		: (IMAGEHOLDER) Div with image
// "_mod" 		: (MODULE) Module
// "_frm" 		: (FRAME) Sling TV Frame
// "_rect" 		: (RECTANGLE) Div with background color
//----------------------------------------------------
// CONSTANTS
//------------------------------------------*/
var ad 			= document.getElementById("ad");
var body 		= document.body;
var ftIA;
var ftFeed;

//------------------------------------------*/
// RELEVANT FEED INFORMATION
/*------------------------------------------*/
var feedInfo_obj;
var isFeedFail_bool = false;

window.feedFailedAlready = false;

var haveFeed = false; // checked by anim.js for display/fallback

//------------------------------------------*/
// PRELOAD BOOLEANS
/*------------------------------------------*/
var isWindowLoaded_bool 	= false;
var isPoliteLoad_bool		= false;
var isIALoaded_bool			= false;
var isFeedProcessed_bool 	= false;

//------------------------------------------*/
// PRELOAD SET INTERVALS
/*------------------------------------------*/
var politeLoad_intv = setInterval(politeSubloader, 1);

//------------------------------------------*/
// PRELOAD ARRAY
/*------------------------------------------*/
// Array will contain the objects we want to preload
var preload_arr = [];

/*------------------------------------------------------------------------*/
// FUNCTIONS - PRELOADERS
/*------------------------------------------------------------------------*/
// Checks to see if window is loaded
window.onload = function(){
	// Here we set this boolean to true so that the preloader knows that the
	// browser window has loaded.
    isWindowLoaded_bool = true;
};

/*------------------------------------------*/
// INSTANT AD EVENT LISTENER
/*------------------------------------------*/
// Instant Ad event listener
myFT.on('instantads', function(){
	// Stores instant ads in global variable "ftIA"
	//ftIA = AdUtils.convertIAToTypes(myFT.instantAds);

	// Feed component

	ftFeed = new FTFeed(myFT);
	ftFeed.getFeed(feedLoaded, feedLoadError);

	isFeedProcessed_bool = true;

	// Here we set this boolean to true so that the preloader knows that the
	// Instant Ad variables are loaded.
    isIALoaded_bool = true;

});

/*------------------------------------------*/
// POLITE LOAD EVENT LISTENER
/*------------------------------------------*/
// This event listener will listen when the polite load event fires
myFT.on('politeload', function(e){
    // Sets our suload loading boolean to true once parent page is loaded
    isPoliteLoad_bool = true;
});

/*------------------------------------------*/
// POLITE PRELOADER
/*------------------------------------------*/
// Makes sure our parent page and IA vars are loaded before creating our graphic assets
function politeSubloader(){
	//console.log("POLITE LOADING");
    if(isWindowLoaded_bool && isPoliteLoad_bool && isIALoaded_bool && isFeedProcessed_bool){
    	// clears preloader interval once parent website is loaded
        clearInterval(politeLoad_intv);

        // This function sets up our graphics once instant ads are loaded
    	//setup();
    }
}

/*------------------------------------------*/
// MAIN PRELOADER
/*------------------------------------------*/
// Preloads graphic assets in ad before displaying the ad
function preloader(){
	if(preload_arr.length > 0){
		for(var i=0; i<preload_arr.length; i++){
	        if(!preload_arr[i].isLoaded){
	            break;
	        } else {
	            if(i>=preload_arr.length-1){
	                // clears preloader interval once assets are loaded
	        		clearInterval(preloader_intv);

	        		// animates in our ad
	       			//adAnimation();
	            }
	        }
	    }
	} else {
		// clears preloader interval once assets are loaded
		clearInterval(preloader_intv);

		// animates in our ad
		//adAnimation();
	}
}

/*------------------------------------------*/
// FEED LOAD HANDLER
/*------------------------------------------*/
// Takes our feed and places the appropriate information in the
// necessary variables for later use
function feedLoaded(feedItems, feedURL) {
    //console.log("Feed URL: " + feedURL);
    //console.log(feedItems);
    // feedInfo_obj = feedItems[0];
    feedInfo_obj = feedItems;

    // test empty array
    // feedInfo_obj = [];

    // Tells ad that feed is loaded.  Used for preloading purposes

    console.log("feedInfo_obj: "+feedInfo_obj);
    console.log(feedInfo_obj.length);

    if(!feedInfo_obj || feedInfo_obj=== undefined || feedInfo_obj === null || feedInfo_obj.length === 0){
        // FAIL!
        console.log("feed FAILED");
        haveFeed = false;
        // init(); // fire it up, show fallback content
        // initLoad();
        feedFail();
    } else {
        // SUCCESS!
        console.log("feed SUCCESS");

        if (feedFailedAlready !== true){
            haveFeed = true;
            // init(); // fire it up, show feed data
            initLoad();
            // myFT.stateTrackingEvent(feedInfo_obj.team+' vs '+feedInfo_obj.opposition);
            isFeedProcessed_bool = true;
        }

    }

}

// Feed error Handler
function feedLoadError(errorMsg){
    console.log(errorMsg);
    // "Feed response timeout error. Exceeded 3 seconds. Run backup logic."
    feedFail();
}

function feedFail(){
    feedFailedAlready = true;
    myFT.stateTrackingEvent("feed_failed");

    // Preloading
    isFeedProcessed_bool = true;

    // Lets ad know if feed fails
    isFeedFail_bool = true;
    haveFeed = false;
    initLoad();
}
