//箭头
export default function () {
  var jiantou = document.querySelector('.pc .pcHeadWai .pcHead i')

  var jTouWY = NodeLis[window.pcIndex].offsetLeft + NodeLis[window.pcIndex].children[0].offsetWidth/2 - jiantou.offsetWidth/2
  jiantou.style.left = jTouWY + 'px'

  console.log(1)
}

