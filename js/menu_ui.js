$(document).ready(function(){
      // Joomla laadt websites trager dan dat javscript wordt uitgevoerd.
	  // Daarom dus, eerst de website laten laden zodat alle elementen er staan
	  // en gevonden kunnen worden.
	  // Dan pas javascript/jquery laden!
getsizes();

var link_url;
var laatste_link;
var bit;
var bit_clean;
var oldSrc;
var newSrc;

pagina_herkenning();
function pagina_herkenning(){
link_url = window.location.pathname; //pak de huidige en volledige url
laatste_link = link_url.split('/'); //hak deze in stukken tussen de "/"
bit = laatste_link[laatste_link.length - 1] //pak van deze stukjes het laatste stukje
bit_clean = bit.toLowerCase().replace(/[^a-z0-9]/gi,''); //maak het stukje tekst wat er nu in zit allemaal kleine letters en haal er speciale tekens uit.

if(bit_clean.length>0){

$('a').filter(
	function(){ 
	return $(this).text().toLowerCase().replace(/[^a-z0-9]/gi,'') === bit_clean;}).parent().css("list-style-image", "url('../images/list_block_item.png')");

}else{

$('a').filter(
	function(){ 
	return $(this).text().toLowerCase().replace(/[^a-z0-9]/gi,'') === "home";}).parent().css("list-style-image", "url('../images/list_block_item.png')");

}
	
}//einde functie paginaherkenning
	
$(".menu li").hover(
  function () {
    $(this).css("list-style-image", "url('../images/list_block_item_hover.png')").children().css("color", "#FFD700");
  },
  function () {
    $(this).css("list-style-image", "none").children().css("color", "#FFFFFF");
	pagina_herkenning();
  }
);

$(".menu_sub li").hover(
  function () {
    $(this).children().css("color", "#FFD700");
	oldSrc = $(this).children().children().attr("src");
	newSrc = oldSrc.substring(0, oldSrc.length - 4);
	newSrc = newSrc + "_hover.png";
	$(this).children().children().attr("src", newSrc);
  },
  function () {
    $(this).children().css("color", "#FFFFFF").children();
	$(this).children().children().attr("src", oldSrc);
  }
);

});