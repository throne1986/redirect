
(function () {
  var compareDate = new Date('Feb 18 2019 00:00:00');
  var curDate = new Date();
  if(curDate.getTime() > compareDate.getTime()){
    window.location.replace('http://www.google.com')
    console.log(curDate);
    console.log(compareDate);
  }else {
        window.location.href="http://www.yahoo.com";
  }
})();
