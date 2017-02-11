

// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

 /*
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });*/

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */


 /*
function getImageUrl(searchTerm, callback, errorCallback) {
  // Google image search - 100 searches per day.
  // https://developers.google.com/image-search/
  var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
    '?v=1.0&q=' + encodeURIComponent(searchTerm);
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    if (!response || !response.responseData || !response.responseData.results ||
        response.responseData.results.length === 0) {
      errorCallback('No response from Google Image search!');
      return;
    }
    var firstResult = response.responseData.results[0];
    // Take the thumbnail instead of the full image to get an approximately
    // consistent image size.
    var imageUrl = firstResult.tbUrl;
    var width = parseInt(firstResult.tbWidth);
    var height = parseInt(firstResult.tbHeight);
    console.assert(
        typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
        'Unexpected respose from the Google Image Search API!');
    callback(imageUrl, width, height);
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    renderStatus('Performing Google Image search for ' + url);

    getImageUrl(url, function(imageUrl, width, height) {

      renderStatus('Search term: ' + url + '\n' +
          'Google image search result: ' + imageUrl);
      var imageResult = document.getElementById('image-result');
      // Explicitly set the width/height to minimize the number of reflows. For
      // a single image, this does not matter, but if you're going to embed
      // multiple external images in your page, then the absence of width/height
      // attributes causes the popup to resize multiple times.
      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    }, function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
  });
});
*/

// var senators ={};

// senators.pleahy="Patrick Leahy";
// senators.ohatch="Orrin Hatch";
// senators.tcochran="Thad Cochran";
// senators.cgrassley="Chuck Grassley";
// senators.mmconnel="Mitch McConnell";
// senators.rshelby="Richard Shelby";
// senators.jmccain="John McCain";
// senators.dfeinstein="Diane Feinstein";
// senators.pmurray="Patty Murray";
// senators.jinhofe="Jim Inhofe";
// senators.rwyden="Ron Wyden";
// senators.proberts="Pat Roberts";
// senators.ddurbin="Dick Durbin";
// senators.jreed="Jack Reed";
// senators.jsessions="Jeff Sessions";
// senators.scollins="Susan Collins";
// senators.menzi="Mike Enzi";
// senators.cschumer="Chuck Schumer";
// senators.mcrapo="Mike Crapo";
// senators.bnelson="Bill Nelson";
// senators.tcarper="Tom Carper";
// senators.dstabenow="Debbie Stabenow";
// senators.mcantwell="Maria Cantwell";
// senators.jcornyn="John Cornyn";
// senators.lmurkowski="Lisa Murkowski";
// senators.lgraham="Lindsey Graham";
// senators.lalexander="Lamar Alexander";
// senators.rburr="Richard Burr";
// senators.jthune="John Thune";
// senators.jisakson="Johnny Isakson";
// senators.bmenendez="Bob Menendez";
// senators.bcardin="Ben Cardin";
// senators.bsanders="Bernie Sanders";
// senators.sbrown="Sherrod Brown";
// senators.bcaseyjr="Bob Casey";
// senators.bcorker="Bob Corker";
// senators.cmccaskill="Claire McCaskill";
// senators.aklobuchar="Amy Klobuchar";
// senators.swhitehouse="Sheldon Whitehouse";
// senators.jtester="John Tester";
// senators.jbarrasso="John Barrasso";
// senators.rwicker="Roger Wicker";
// senators.tudall="Tom Udall";
// senators.jshaheen="Jeanne Shaheen";
// senators.mwarner="Mark Warner";
// senators.jrisch="Jim Risch";
// senators.jmerkley="Jeff Merkley";
// senators.mbennet="Michael Bennet";
// senators.kgillibrand="Kirsten Gillibrand";
// senators.afranken="Al Franken";
// senators.jmanchin="Joe Manchin";
// senators.ccoons="Chris Coons";
// senators.rblunt="Roy Blunt";
// senators.jmoran="Jerry Moran";
// senators.rportman="Rob Portman";
// senators.jboozeman="John Boozeman";
// senators.ptoomey="Pat Toomey";
// senators.jhoeven="John Hoeven";
// senators.mrubio="Marco Rubio";
// senators.rjohnson="Ron Johnson";
// senators.rpaul="Rand Paul";
// senators.rblumenthal="Richard Blumenthal";
// senators.mlee="Mike Lee";
// senators.dheller="Dean Heller";
// senators.bschatz="Brian Schatz";
// senators.tscott="Tim Scott";
// senators.tbaldwin="Tammy Baldwin";
// senators.jflake="Jeff Flake";
// senators.jdonnelly="Joe Donnelly";
// senators.cmurphy="Chris Murphy";
// senators.mhirono="Mazie Hirono";
// senators.mheinrich="Martin Heinrich";
// senators.aking="Angus King";
// senators.tkaine="Tim Kaine";
// senators.tcruz="Ted Cruz";
// senators.ewarren="Elizabeth Warren";
// senators.dfischer="Deb Fischer";
// senators.hheitkamp="Heidi Heitkamp";
// senators.emarkey="Ed Markey";
// senators.cbooker="Cory Booker"
// senators.smcapito="Shelley Moore Capito";
// senators.gpeters="Gary Peters";
// senators.bcassidy="Ben Cassidy";
// senators.cgardener="Cory Gardner";
// senators.jlankford="James Lankford";
// senators.tcotton="Tom Cotton";
// senators.sdaines="Steve Daines";
// senators.mrounds="Mike Rounds";
// senators.dperdue="David Perdue";
// senators.ttillis="Thom Tillis";
// senators.jernst="Joni Ernst";
// senators.bsasse="Ben Sasse";
// senators.dsullivan="Dan Sullivan";
// senators.cvhollen="Chris Van Hollen";
// senators.tyound="Todd Young";
// senators.tduckworth="Tammy Duckworth";
// senators.mhassan="Maggie Hassan";
// senators.kharris="Kamala Harris";
// senators.jnkennedy="John Neely Kennedy";
// senators.ccmasto="Catherine Cortez Masto";



// var Sens = new Array("Patrick Leahy", "Orrin Hatch", "Thad Cochran", "Chuck Grassley","Mitch McConnell", "Richard Shelby", "John McCain", "Dianne Feinstein", "Patty Murray", "Jim Inhofe", "Ron Wyden", "Pat Roberts", "Dick Durbin", "Jack Reed", "Jeff Sessions", "Susan Collins", "Mike Enzi", "Chuck Schumer", "Mike Crapo", "Bill Nelson", "Tom Carper", "Debbi Stabenow", "Maria Cantwell", "John Cornyn", "Lisa Murkowski", "Lindsey Graham", "Lamar Alexander", "Richard Burr", "John Thune", "ohnny Isakson", "Bob Menendez", "Ben Cardin", "Bernie Snaders", "Sherrod Brown", "Bob Casey, Jr.", "Bob Corker", "Claire McCaskill", "Amy Klobuchar", "Sheldon Whitehouse", "John Tester", "John Barrasso", "Roger Wicker", "Tom Udall", "Jeanne Shaheen", "Mark Warner", "Jim Risch", "Jeff Merkley", "Michael Bennet", "Kirsten Gillibrand", "Al Franken", "Joe Manchin", "Chris Coons", "Roy Blunt", "Jerry Moran", "Rob Portman", "John Boozeman", "Pat Toomey". "John Hoeven", "Marco Rubio", "Ron Johnson", "Rand Paul", "Richard Blumenthal" , "Mike Lee", "Dean Heller", "Brian Schatz", "Tim Scott", "Jeff Flake", "Joe Donnelly", "Chris Murphy", "Mazie Hirono", "Martin Heinrich", "Angus King", "Tim Kaine", "Ted Cruz", "Elizabeth Warren", "Deb Fischer", "Heidi Heitkamp", "Ed Markey", "Cory Booker", "Shelley Moore Capito", "Gary Peters","Bill Cassidy", "Cory Gardener", "James Lankford", "Tom Cotton", "Steve Daines","Mike Rounds", "David Perdue", "Tom Tillis", "Joni Ernst", "Ben Sasse", "Dan Sullivan", "Chris Van Hollen", "Todd Young", "Tammy Duckworth", "Maggie Hassan", "Kamala Harris", "John Neely Kennedy", "Catherine Cortez Masto" )




var theText;
$('p,h1,h2,h3,h4,h5').each(function(){
  theText += $(this).text();
});



var i;

document.write(="tests");

for(i=0;i<100;i++)
{
  if (theText.includes(Sens[i]))
  {
    document.write( Sens[i]+" Found!");

  }
}




class senator{
  constructor(name, web)
  {
    this.name=name;
    this.web=web;
  }
}

var srshelby=new senator("Richard Shelby", "https://www.opensecrets.org/politicians/summary.php?cid=N00009920&cycle=2016");
var slstrange=new senator("Luther Strange", "https://www.opensecrets.org/lobby/lobbyist.php?id=Y0000025847L&year=2007");
var slmurkowski=new senator("Lisa Murkowski", "https://www.opensecrets.org/politicians/summary.php?cid=N00026050&cycle=2016");
var sdsullivan=new senator("Dan Sullivan", "https://www.opensecrets.org/politicians/summary.php?cid=N00035774&cycle=2016");
var sjmccain=new senator("John McCain", "https://www.opensecrets.org/politicians/summary.php?cid=N00006424&cycle=2016");
var sjflake=new senator("Jeff Flake", "https://www.opensecrets.org/politicians/summary.php?cid=N00009573&cycle=2016");
var sjboozman=new senator("John Boozman", "https://www.opensecrets.org/politicians/summary.php?cid=N00013873&cycle=2016");
var stcotton=new senator("Tom Cotton", "https://www.opensecrets.org/politicians/summary.php?cid=N00033363&cycle=2016");
var sdfeinstein=new senator("Dianne Feinstein", "https://www.opensecrets.org/politicians/summary.php?cid=N00007364&cycle=2016");
var skharris=new senator("Katherine Harris", "https://www.opensecrets.org/politicians/summary.php?cid=N00024882&cycle=2006");
var smbennet=new senator("Michael Bennet", "https://www.opensecrets.org/politicians/summary.php?cid=N00030608&cycle=2016");
var scgardner=new senator("Cory Gardnet", "https://www.opensecrets.org/politicians/summary.php?cid=N00030780&cycle=2016");
var srblumenthal=new senator("Richard Blumenthal"; "https://www.opensecrets.org/politicians/summary.php?cid=N00031685&cycle=2016");
var scmurphy=new senator("Christopher Murphy", "https://www.opensecrets.org/politicians/summary.php?cid=N00027566&cycle=2016");
var stcarper=new senator("Tom Carper", "https://www.opensecrets.org/politicians/summary.php?cid=N00012508&cycle=2016");
var sccoons=new senator("Chris Coons", "https://www.opensecrets.org/politicians/summary.php?cid=N00031820&cycle=2016");
var sbnelson=new senator("Bill Nelson", "https://www.opensecrets.org/politicians/summary.php?cid=N00009926&cycle=2016");
var smrubio=new senator("Marco Rubio", "https://www.opensecrets.org/politicians/summary.php?cid=N00030612&cycle=2016");
var sjisakson=new senator("Johnny Isakson", "https://www.opensecrets.org/politicians/summary.php?cid=N00002593&cycle=2016");
var sdperdue=new senator("David Perdue", "https://www.opensecrets.org/politicians/summary.php?cid=N00035516&cycle=2016");
var sbschatz=new senator("Brian Schatz", "https://www.opensecrets.org/politicians/summary.php?cid=N00028138&cycle=2016");
var smhirono=new senator("Mazie Hirono", "https://www.opensecrets.org/politicians/summary.php?cid=N00028139&cycle=2016");
var smcrapo=new senator("Mike Crapo", "https://www.opensecrets.org/politicians/summary.php?cid=N00006267&cycle=2016");
var sjrisch=new senator("James Risch", "https://www.opensecrets.org/politicians/summary.php?cid=N00029441&cycle=2016");
var sddurbin=new senator("Dick Durbin", "https://www.opensecrets.org/politicians/summary.php?cid=N00004981&cycle=2016");
var stduckworth=new senator("Tammy Duckworth", "https://www.opensecrets.org/politicians/summary.php?cid=N00027860&cycle=2016");
var sjdonnelly=new senator("Joe Donnelly", "https://www.opensecrets.org/politicians/summary.php?cid=N00026586&cycle=2016");
var styoung=new senator("Todd Young", "https://www.opensecrets.org/politicians/summary.php?cid=N00030670&cycle=2016");
var scgrassley=new senator("Chuck Grassley", "https://www.opensecrets.org/politicians/summary.php?cid=N00001758&cycle=2016");
var sjernst=new senator("Joni Ernst", "https://www.opensecrets.org/politicians/summary.php?cid=N00035483&cycle=2016");
var sproberts=new senator("Pat Roberts", "https://www.opensecrets.org/politicians/summary.php?cid=N00005285&cycle=2016");
var sjmoran=new senator("Jerry Moran", "https://www.opensecrets.org/politicians/summary.php?cid=N00005282&cycle=2016");
var smmcconnell=new senator("Mitch McConnell", "https://www.opensecrets.org/politicians/summary.php?cid=N00003389&cycle=2016");
var srpaul=new senator("Rand Paul", "https://www.opensecrets.org/politicians/summary.php?cid=N00030836&cycle=2016");
var sbcassidy=new senator("Bill Cassidy", "https://www.opensecrets.org/politicians/summary.php?cid=N00030245&cycle=2016");
var sjkennedy=new senator("John Kennedy", "NA");
var sscollins=new senator("Susan Collins", "https://www.opensecrets.org/politicians/summary.php?cid=N00000491&cycle=2016");
var saking=new senator("Angus King", "https://www.opensecrets.org/politicians/summary.php?cid=N00034580&cycle=2016");
var sbcardin=new senator("Ben Cardin", "https://www.opensecrets.org/politicians/summary.php?cid=N00001955&cycle=2016");
var scvhollen=new senator("Chris Van Hollen", "https://www.opensecrets.org/politicians/summary.php?cid=N00013820&cycle=2016");
var sewarren=new senator("Elizabeth Warren", "https://www.opensecrets.org/politicians/summary.php?cid=N00033492&cycle=2016");
var semarkey=new senator("Ed Markey", "https://www.opensecrets.org/politicians/summary.php?cid=N00000270&cycle=2016");
var sdstabenow=new senator("Debbie Stabenow", "https://www.opensecrets.org/politicians/summary.php?cid=N00004118&cycle=2016");
var sgpeters=new senator("Gary Peters", "https://www.opensecrets.org/politicians/summary.php?cid=N00029277&cycle=2016");
var saklobuchar=new senator("Amy Klobuchar", "https://www.opensecrets.org/politicians/summary.php?cid=N00027500&cycle=2016");
var safranken=new senator("Al Franken", "https://www.opensecrets.org/politicians/summary.php?cid=N00029016&cycle=2016");
var stcochran=new senator("Thad Chochran", "https://www.opensecrets.org/politicians/summary.php?cid=N00003328&cycle=2016");
var srwicker=new senator("Roger Wicker", "https://www.opensecrets.org/politicians/summary.php?cid=N00003280&cycle=2016");


var scmccaskill=new senator("Claire McCaskill", "https://www.opensecrets.org/politicians/summary.php?cid=N00027694&cycle=2016");
var srblunt=new senator("Roy Blunt","https://www.opensecrets.org/politicians/summary.php?cid=N00005195&cycle=2016");
var sjtester=new senator("Jon Tester","https://www.opensecrets.org/politicians/summary.php?cid=N00027605&cycle=2016");
var ssdaines=new senator("Steve Daines","https://www.opensecrets.org/politicians/summary.php?cid=N00033054&cycle=2016");
var sdfischer=new senator("Deb Fischer","https://www.opensecrets.org/politicians/summary.php?cid=N00033443&cycle=2016");
var sbsasse=new senator("Ben Sasse","https://www.opensecrets.org/politicians/summary.php?cid=N00035544&cycle=2016");
var sdheller=new senator("Dean Heller","https://www.opensecrets.org/politicians/summary.php?cid=N00027522&cycle=2016");
var sccmasto=new senator("Catherine Cortez Masto","https://www.opensecrets.org/races/summary.php?cycle=2016&id=NVS2");
var sjshaheen=new senator("Jeanne Shaheen","https://www.opensecrets.org/politicians/summary.php?cid=N00024790&cycle=2016");
var smhassan=new senator("Maggie Hassan",);
var sbmenendez=new senator("Bob Menendez", );
var scbooker=new senator("Cory Booker" );
var studall=new senator("Tom Udall",);
var smheinrich=new senator("Martin Heinrich",);
var scschumer=new senator("Chuck Schumer", );
var skgillibrand=new senator("Kirsten Gillibrand",);
var srburr=new senator("Richard Burr",);
var sttillis=new senator("Thom Tillis", );
var sjhoeven=new senator("John Hoeven", );
var shheitkamp=new senator("Heidi Heitkamp", );
var ssbrown=new senator("Sherrod Brown", );
var srportman=new senator("Rob Portman", );
var sjinhofe=new senator("Jim Inhofe", );
var sjlankford=new senator("James Lankford", );
var srwyden=new senator("Ron Wyden", );
var sjmerkley=new senator("Jeff Merkley", );
var sbcasey=new senator("Bob Casey Jr.", );
var sptoomey=new senator("Pat Toomey", );
var sjreed=new senator("Jack Reed", );
var swhitehouse=new senator("Sheldon Whitehouse", );
var slgraham=new senator("Lindsey Graham", );
var stscott=new senator("Tim Scott",  );
var sjthune=new senator("John Thune", );
var smrounds=new senator("Mike Rounds", );
var slalexander=new senator("Lamar Alexander", );
var sbcorker=new senator("Bob Corker", );
var sjcornyn=new senator("John Cornyn", );
var stcruz=new senator("Ted Cruz", );
var sohatch=new senator("Orrin Hatch", );
var smlee=new senator("Mike Lee");
var spleahy=new senator("Patrick Leahy", );
var sbsanders=new senator("Bernie Sanders", );
var smwarner=new senator("Mark Warner", );
var stkaine=new senator("Tim Kaine", );
var spmurray=new senator("Patty Murray", );
var smcantwell=new senator("Maria Cantwell", );
var sjmanchin=new senator("Joe Manchin", );
var ssmcapito=new senator("Shelley Moore Capito", );
var srjohnson=new senator("Ron Johnson", );
var stbaldwin=new senator("Tammy Baldwin", );
var smenzi=new senator("Mike Enzi", );
var sjbarrasso=new senator("John Barrasso", );



var theText;
$('p,h1,h2,h3,h4,h5').each(function(){
  theText += $(this).text();
});


var search()