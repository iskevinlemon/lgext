document.addEventListener("DOMContentLoaded", function(){
    // console.log("Document is loaded...");

    // var languagePreference = "ID";
    var languagePreference = localStorage.getItem("lang");

    var allIndoTags = document.querySelectorAll("[\\[indo\\]]");
    allIndoTags.forEach((tag) => {
        var indoText = tag.getAttribute("[indo]")
        // console.log(indoText);
        if(languagePreference === "ID" || languagePreference === "id"){
            tag.innerHTML = indoText;
        }
    });

    var allEnglishTags = document.querySelectorAll("[\\[english\\]]");
    allEnglishTags.forEach((tag) => {
        var englishText = tag.getAttribute("[english]")
        // console.log(allEnglishTags);
        if(languagePreference === "EN" || languagePreference =="en"){
            tag.innerHTML = englishText;
        }
    });
});