// 스크롤 이벤트 핸들러
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  console.log('scrollHeight,scrollTop, clientHeight: ' ,scrollHeight,scrollTop, clientHeight)

  //끝에 도달하면 특정 위치로
  if (scrollTop + clientHeight >= scrollHeight) {
    var element = document.getElementById("summer");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
 };

document.addEventListener('scroll', handleScroll)

window.onresize = function(event) {
    var ht = window.innerHeight;
    console.log(ht)
    document.getElementsByClassName("article-section").style.height = ht;

    console.log( document.getElementsByClassName("article-section").style.height)
 };


