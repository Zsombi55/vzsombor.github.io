// ----- Left side bar content "collapsers". -----
// Collapse-expand the "contactInfoW" (Contact Information) widget.
var contactInfoW = document.getElementById("contactInfoW");
contactInfoW.getElementsByTagName("h3")[0].onclick = function(){
	if (contactInfoW.className == "widget"){
		contactInfoW.className = "collapsed widget";
	} else {
		contactInfoW.className = "widget";
	}
};

// Collapse-expand the "profGoalW" (Professional Goal/ Preferred Occupacion) widget.
var profGoalW = document.getElementById("profGoalW");
profGoalW.getElementsByTagName("h3")[0].onclick = function(){
	if (profGoalW.className == "widget"){
		profGoalW.className = "collapsed widget";
	} else {
		profGoalW.className = "widget";
	}
};

// Collapse-expand the "profExpW" (Professional Experience) widget.
var profExpW = document.getElementById("profExpW");
profExpW.getElementsByTagName("h3")[0].onclick = function(){
	if (profExpW.className == "widget"){
		profExpW.className = "collapsed widget";
	} else {
		profExpW.className = "widget";
	}
};

// ----- Content (Coding & Lanuage Experience) ~ Home box hiders. -----
//	-Solution 1. -
/* 
function showHomePage() {
	document.getElementById("homePage").style.display = "block";
}

function hideHomePage() {
	var e = document.getElementById("homePage");
	e.style.display = "none";
}

function showCodingExpPage() {
	document.getElementById("codingPage").style.display = "block";
}

function hideCodingExpPage() {
	document.getElementById("codingPage").style.display = "none";
}

function showLanguagePage() {
	document.getElementById("languagePage").style.display = "block";
}

function hideLanguagePage() {
	document.getElementById("languagePage").style.display = "none";
}

function showAboutPage() {
	document.getElementById("aboutPage").style.display = "block";
}

function hideAboutPage() {
	document.getElementById("codingPage").style.display = "none";
}

function clickOnHome() {
	showHomePage();
	hideCodingExpPage();
	hideLanguagePage();
	hideAboutPage();
}

function clickOnSkills() {
	hideHomePage();
	hideAboutPage();
	showCodingExpPage();
	showLanguagePage();
}

function clickOnAbout() {
	hideHomePage();
	hideCodingExpPage();
	hideLanguagePage();
	showAboutPage();
}

document.getElementById("menuHomePage").onclick = function() {
	clickOnHome();
}

document.getElementById("menuSkills").onclick = function() {
	clickOnSkills();
}
 */

// - Solution 2. -
/* 
function hidePage(page) {	// sets the visibility status of the ID'd object, hides it.
	var e = document.getElementById(page);
	e.style.display = "none";
}

function showPage(page) {	// sets the visibility status of the ID'd object, reveals it.
	document.getElementById(page).style.display = "block";
}

function clickOnHome() {
	hidePage("codingPage");
	hidePage("languagePage");
	hidePage("aboutPage");
	showPage("homePage");
}

function clickOnSkills() {
	hidePage("homePage");
	hidePage("aboutPage");
	showPage("codingPage");
	showPage("languagePage");
}

function clickOnAbout() {
	hidePage("homePage");
	hidePage("codingPage");
	hidePage("languagePage");
	showPage("aboutPage");
}

document.getElementById("menuHomePage").onclick = function() {
	clickOnHome();
}

document.getElementById("menuSkills").onclick = function() {
	clickOnSkills();
}

document.getElementById("menuAboutSite").onclick = function() {
	clickOnAbout();
}
 */

// - Solution 3. -

function initTopMenu() {	// find all top-menu items  and handle their "onclick" events.
	var links = document.querySelectorAll("#top-menuBar a");
	console.info(links);

	for(var i = 0; i < links.length; i++) {
		links[i].onclick = clickTmItem;	// no "()" after the function name so the browser calls it not us.
	}
}

function clickTmItem() {	// Click Top Menu Item.
	console.warn("clicked on menu", this);	// "this" is a variable which was just used. Here: just clicked on.
	hideAllTmPages();
	var pageId = this.getAttribute("data-page");
	console.warn({pageId});
	showPage(pageId);
}

function hideAllTmPages() {		// Hide All Top Menu Pages.	// sets the visibility status of all ID'd objects, hides them.
	var pages = document.querySelectorAll(".page");
	for(var i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}
}

function showPage(page) {	// sets the visibility status of the ID'd object, reveals it.
	document.getElementById(page).style.display = "block";
}

initTopMenu();
