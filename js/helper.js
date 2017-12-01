/* Classes */
var a = "American Studies"
var b = "Pre-Calc"
var c = "French Language & Culture"
var d = "Environmental Science"
var e = "American Studies"
var f = "Competitive Team Activities"
var g = "AP Physics"
var h = "H-Block"
var x = "undecided"

/* Class Info */
var aTeach = "Rickley, Judith"
var bTeach = "Hibino, Krista"
var cTeach = "Shaknovsky, Olga"
var dTeach = "Cutler, Melanie"
var eTeach = "Chachus, Michelle"
var fTeach = "Puglisi, Wayne"
var gTeach = "Donovan, Daniel"
var hTeach = "Kalf, Alan"
var aPrisonCell = "255"
var bPrisonCell = "357"
var cPrisonCell = "307"
var dPrisonCell = "321"
var ePrisonCell = "255"
var fPrisonCell = "Field 3"
var gPrisonCell = "230"
var hPrisonCell = "333"

/* Lunch Schedule Builder */
$("#lunch-schedule-1").append(lunchOne);
$("#lunch-schedule-2").append(lunchOne);
$("#lunch-schedule-3").append(lunchOne);
$("#lunch-schedule-4").append(lunchOne);
$("#lunch-schedule-5").append(lunchFour);
$("#lunch-schedule-6").append(lunchFour);
$("#lunch-schedule-7").append(lunchOne);
$("#lunch-schedule-8").append(lunchFour);

/* Lunch Schedules */
var lunchOne = '<p><b>lunch</b> 1</p><p><b>lunch time</b> 11:07 am - 11:34 am</p><p><b>class time</b> 11:38 am - 1:01 pm</p>';
var lunchTwo = '<p><b>lunch</b> 2</p><p><b>class time</b> 11:07 am - 11:36 am</p><p><b>lunch time</b> 11:36 am - 12:03 pm</p><p><b>class time</b> 12:07 pm - 1:01 pm</p>';
var lunchThree = '<p><b>lunch</b> 3</p><p><b>class time</b> 11:07 am - 12:05 pm</p><p><b>lunch time</b> 12:05 pm - 12:32 pm</p><p><b>class time</b> 12:36 pm - 1:01 pm</p>';
var lunchFour = '<p><b>lunch</b> 4</p><p><b>class time</b> 11:07 am - 12:34 pm</p><p><b>lunch time</b> 12:34 pm - 1:01 pm</p>';

/* Class Modal Info */
modalInfo = '<p><b>teacher</b> %teach%</p><p><b>room number</b> %#%</p>'