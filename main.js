function clock() {

       time = new Date();

       hh = time.getHours();
       mm = time.getMinutes();
       ss = time.getSeconds();

       if (hh < 10)
              hh = "0" + hh;
       if (mm < 10)
              mm = "0" + mm;
       if (ss < 10)
              ss = "0" + ss;

       txt1.value = hh + ":" + mm + ":" + ss;
       setTimeout("clock()", 1000)

}