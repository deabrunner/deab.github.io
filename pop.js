var choice = document.cookie
if (choice != "choice=yes") {
swal("Denna sida innehåller information om alkoholhaltiga drycker, Bekräfta att du är 20 år eller äldre.",
{
buttons: true,
dangerMode: true,
})
.then((value) => {
	if (value == null) {
		window.location.replace("http://google.com");}
	else {
		document.cookie = "choice=yes"	
	}	

})};