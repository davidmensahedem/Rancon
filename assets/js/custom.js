/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

$(document).ready(function(){

    // Set the copyright year
    var date = new Date();
    $("#copyRightYear").html(date.getFullYear());

    // Make a project tab active
    var projectTabs = $(".project-tab");
    projectTabs.on("click",function(e){
        for (let index = 0; index < projectTabs.length; index++) {
            projectTabs[index].classList.remove("active-project-tab");
        }
        e.currentTarget.classList.add("active-project-tab");
    });
  
});