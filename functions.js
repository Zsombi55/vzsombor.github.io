// -----  Colorful Browser Console Message -----
var browserCStyle = [
    "background: linear-gradient(#D33106, #571402)"
    , "border: 1px solid #3E0E02"
    , "color: white"
    , "display: block"
    , "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)"
    , "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset"
    , "line-height: 40px"
    , "text-align: center"
    , "font-weight: bold"
].join(';');

console.log("%c Contact page: form & \"Send message\" button is not yet functional! " + 
	"Waiting for server side e-mail form scripting lesson..", browserCStyle);

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

// ----- Skills' page dynamic unordered list listing -----
// - Solution 1 -
/* 
	function showSkills_A() {
	var skills = ["html", "css", "js"];
	for(var i =0; i < skills.length; i++) {
		console.info(i+1 + ". " + skills[i]);
	}
}
 */

// - Solution 2 -
/*
	function showSkills_B() {
	var skills = ["html", "css", "js"];
	console.warn("showSkills", skills);
	for(var i =0; i < skills.length; i++) {
		console.info("# " + (i+1) + " " + skills[i]);	// "i+1" has to be in parentheses or they behave like strings.
	}
}
 */

// - Solution 3 -
/* 
function showSkills() {
	var skills = ["html", "css", "js"];
	console.warn("showSkills", skills);
	
	skills.forEach(printSkill);

	function printSkill(skill, index) {
		console.info("# " + (index + 1) + " " + skill);	// "i+1" has to be in parentheses or they behave like strings.
	}
}
 */

// - Solution 4 , expanded with the endorsement functions -
function showSkills(skills) {
	
	/* var skills = [		// My first json code!  :D
		{name: "HTML", endorsements: 5, endorsedBy: "Andrei I"}, 
		{name: "CSS", endorsements: 1, endorsedBy: null}, 
		{name: "JavaScript", endorsements: 9, endorsedBy: "Vasile I"}, 
		{name: "nodeJS", endorsements: 3, endorsedBy: null}
	]; */
	
	//var skills = [];

	skills.sort(function(a, b) {	// Sort by: 1-highest endorsement, 2-alphabet.
		var nameA = a.name.toLowerCase();
		var nameB = b.name.toLowerCase();
		return nameB.endorsements - nameA.endorsements;		// decreasing order by nr.
	});

	var htmlSkills = skills.map( function (skill, index) {	// "map" transforms the data into something else.
		var endorsedBy = skill.endorsedBy ? " - " + skill.endorsedBy : "";	// like an "if-else" check.
		
		var endorsements = ` <span class="endorsement">(
			${skill.endorsements}
			${endorsedBy}
		)</span>`;	// " `` " string template wrappers.
		
		return "<li>" + skills[index].name + endorsements + "</li>";	// without ".toUpperCase()" .. be punctual !!
	});

	var ul = document.querySelector("#codingPage ul");	// referencing an HTML element with its ID, and a tag within that.
	ul.innerHTML = htmlSkills.join("");
}

// --- Start at desired page for testing purposes.
/* hideAllTmPages();
showPage("skillsPage"); */

// ----- Load "skills.json"and pass here.
console.log("1. Before loading.");
fetch("data/skills.json")
	.then(function(response) {
		console.log("2. Loaded: skills.json");
		return response.json();
	})
	.then(function(skills) {
		console.log("3. Loading skills.", skills);
		showSkills(skills);
	});
console.log("4. After loading.");

// ----- E-mail form. -----
// ...
