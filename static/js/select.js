/**
 * Created by austinsdoe on 10/26/16.
 */
  var liberia_counties = {

        "Bomi": ["Dewoin", "Klay", "Mecca", "Senjeh"],
        "Bong": ["Fuamah", "Jorquelleh", "Kokoyah", "Panta-Kpa", "Salala", "Sanayea ", "Suakoko", "Zota"],
        "Gbarpolu": ["Belleh", "Bopolu", "Bokomu", "Kongba", "Gbarma"],
        "Grand Bassa": ["District #1", "District #2", "District #3", "District #4", "Owensgrove", "St. John River"],
        "Grand Cape Mount": ["Commonwealth", "Garwula", "Gola Konneh", "Porkpa", "Tewor"],
        "Grand Gedeh": ["Gbarzon", "Konobo", "Tchien"],
        "Grand Kru": ["Buah", "Lower Kru Coast", "Sasstown", "Upper Kru Coast"],
        "Lofa": ["Foya", "Kolahun", "Salayea", "Vahun", "Voinjama", "Zorzor"],
        "Margibi": ["Firestone", "Gibi", "Kakata", "Mambah-Kaba"],
        "Maryland": ["Barrobo", "Pleebo/Sodeken"],
        "Montserrado": ["Careysburg", "Greater Monrovia", "Commonwealth", "St. Paul River", "Todee"],
        "Nimba": ["Gbehlageh", "Saclepea", "Sanniquelleh-Mahn", "Tappita", "Yarwein-Mehnsohnneh", "Zoegeh"],
        "River Gee": ["Gbeapo", "Webbo"],
        "Rivercess": ["Morweh", "Timbo"],
        "Sinoe": ["Butaw", "Dugbe River", "Greenville", "Jaedae Jaedepo", "Juarzon", "Kpayan", "Pyneston"]
    }

function countiesList() {

    html = "<option value="+">" +"--Select--"+ "</option>" //make the default option blank
    
    for (var key in liberia_counties) {
        html += "<option value=" + key + ">" + key + "</option>"
    }
    $("#counties").innerHTML = html;
}

function districtMap(){

   var county_selected = $("#counties").val()


    for (var key in county_selected) {
        html += "<option value=" + county_selected[key] + ">" + county_selected[key] + "</option>"
    }
    document.getElementById("district").innerHTML = html;
}
