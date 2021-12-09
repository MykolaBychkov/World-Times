const getLondonTime = function(){
    document.getElementById('londonTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h23',})
}
getLondonTime()
setInterval(getLondonTime,1000)

const getKyivTime = function(){
    document.getElementById('kyivTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'Europe/Kiev', timeStyle:'medium', hourCycle:'h23'})
}
getKyivTime()
setInterval(getKyivTime,1000)

const getNyTime = function(){
    document.getElementById('nyTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'America/New_York', timeStyle:'medium', hourCycle:'h23'})
}
getNyTime()
setInterval(getNyTime,1000)

const getSydneyTime = function(){
    document.getElementById('sydneyTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'Australia/Sydney', timeStyle:'medium', hourCycle:'h23'})
}
getSydneyTime()
setInterval(getSydneyTime,1000)

const getTokyoTime = function(){
    document.getElementById('tokyoTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'Japan/Tokyo', timeStyle:'medium', hourCycle:'h23'})
}

const getLaTime = function(){
    document.getElementById('laTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'America/Los_Angeles', timeStyle:'medium', hourCycle:'h23'})
}
getLaTime()
setInterval(getLaTime,1000)

const getMadridTime = function(){
    document.getElementById('madridTime').innerHTML = new Date().toLocaleString
    ('en-US',{timeZone:'Europe/Madrid', timeStyle:'medium', hourCycle:'h23'})
}
getMadridTime()
setInterval(getMadridTime,1000)

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });