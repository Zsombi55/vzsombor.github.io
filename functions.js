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

function hidePage(page) {	// does the same as the next one.
	var e = document.getElementById(page);
	e.style.display = "none";
}

function showPage(page) {	// sets the visibility status of the ID'd object.
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
// - Solution 3. -

// hide all unneeded pages().
//  use for or foreach to go through all pages not matching the needed one(s).