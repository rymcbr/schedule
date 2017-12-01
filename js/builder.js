/* Day 1 Schedule Builder */
$("#class11").append(a);
$("#class12").append(c);
$("#class13").append(h);
$("#class14").append(e);
$("#lunch1").append("1")
$("#class15").append(g);

/* Day 2 Schedule Builder */
$("#class21").append(b);
$("#class22").append(d);
$("#class23").append(f);
$("#class24").append(g);
$("#lunch2").append("4")
$("#class25").append(e);

/* Day 3 Schedule Builder */
$("#class31").append(a);
$("#class32").append(h);
$("#class33").append(d);
$("#class34").append(c);
$("#lunch3").append("3")
$("#class35").append(f);

/* Day 4 Schedule Builder */
$("#class41").append(b);
$("#class42").append(a);
$("#class43").append(h);
$("#class44").append(g);
$("#lunch4").append("4")
$("#class45").append(e);

/* Day 5 Schedule Builder */
$("#class51").append(c);
$("#class52").append(b);
$("#class53").append(f);
$("#class54").append(d);
$("#lunch5").append("4")
$("#class55").append(g);

/* Day 6 Schedule Builder */
$("#class61").append(a);
$("#class62").append(h);
$("#class63").append(e);
$("#class64").append(f);
$("#lunch6").append("2")
$("#class65").append(c);

/* Day 7 Schedule Builder */
$("#class71").append(b);
$("#class72").append(a);
$("#class73").append(d);
$("#class74").append(e);
$("#lunch7").append("1")
$("#class75").append(g);

/* Day 8 Schedule Builder */
$("#class81").append(c);
$("#class82").append(b);
$("#class83").append(h);
$("#class84").append(f);
$("#lunch8").append("2")
$("#class85").append(d);

/* Halfday 1 Schedule Builder */
$("#class0.511").append(a);
$("#class0.512").append(h);
$("#class0.513").append(b);
$("#class0.514").append(c);

/* Halfday 2 Schedule Builder */
$("#class0.521").append(b);
$("#class0.522").append(h);
$("#class0.523").append(a);
$("#class0.524").append(d + " (Pep Rally)");

/* Halfday 3 Schedule Builder */
$("#class0.531").append(a);
$("#class0.532").append(h);
$("#class0.533").append(b);
$("#class0.534").append(c);

/* Halfday 4 Schedule Builder */
$("#class0.541").append(b);
$("#class0.542").append(h);
$("#class0.543").append(a);
$("#class0.544").append(d);

/* Halfday 5 Schedule Builder */
$("#class0.551").append(a);
$("#class0.552").append(h);
$("#class0.553").append(b);
$("#class0.554").append(c);

/* Halfday 6 Schedule Builder */
$("#class0.561").append(d);
$("#class0.562").append(h);
$("#class0.563").append(e);
$("#class0.564").append(f);

/* Halfday 7 Schedule Builder */
$("#class0.571").append(g);
$("#class0.572").append(h);
$("#class0.573").append(d);
$("#class0.574").append(x);

/* A-block Modal */
$("#a-class").prepend(a);
aInfo = modalInfo.replace("%teach%", aTeach);
aInfo = aInfo.replace("%#%", aPrisonCell);
$("#class-info-a").append(aInfo);

/* B-block Modal */
$("#b-class").prepend(b);
bInfo = modalInfo.replace("%teach%", bTeach);
bInfo = bInfo.replace("%#%", bPrisonCell);
$("#class-info-b").append(bInfo);

/* C-block Modal */
$("#c-class").prepend(c);
cInfo = modalInfo.replace("%teach%", cTeach);
cInfo = cInfo.replace("%#%", cPrisonCell);
$("#class-info-c").append(cInfo);

/* D-block Modal */
$("#d-class").prepend(d);
dInfo = modalInfo.replace("%teach%", dTeach);
dInfo = dInfo.replace("%#%", dPrisonCell);
$("#class-info-d").append(dInfo);

/* E-block Modal */
$("#e-class").prepend(e);
eInfo = modalInfo.replace("%teach%", eTeach);
eInfo = eInfo.replace("%#%", ePrisonCell);
$("#class-info-e").append(eInfo);

/* F-block Modal */
$("#f-class").prepend(f);
fInfo = modalInfo.replace("%teach%", fTeach);
fInfo = fInfo.replace("%#%", fPrisonCell);
$("#class-info-f").append(fInfo);

/* G-block Modal */
$("#g-class").prepend(g);
gInfo = modalInfo.replace("%teach%", gTeach);
gInfo = gInfo.replace("%#%", gPrisonCell);
$("#class-info-g").append(gInfo);

/* H-block Modal */
$("#h-class").prepend(h);
hInfo = modalInfo.replace("%teach%", hTeach);
hInfo = hInfo.replace("%#%", hPrisonCell);
$("#class-info-h").append(hInfo);