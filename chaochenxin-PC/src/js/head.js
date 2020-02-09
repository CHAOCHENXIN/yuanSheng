/* eslint-disable */

  //设置高度
  var NodeLis = document.querySelectorAll('.pc .pcHeadWai .pcHead .pcHeadRight > ul > li ')//导航字体
  var pcYem = document.querySelector('.pcYem')//主体
  var pcYemUl = document.querySelector('.pcYem ul')//主体UL
  var pcHead = document.querySelector('.pcHead')//导航
  var btnOlLis = document.querySelectorAll('.pc .pcYem .yeM-button li')//切换主体按钮
  var jiantou = document.querySelector('.pc .pcHeadWai .pcHead i')

  var jiantouH = document.body.clientHeight - pcHead.offsetHeight
//设置每一屏的高度
  var pcLis = document.querySelectorAll('.pcYem > ul > li')
  pcLis.forEach(function (item) {
    item.style.height = pcYem.offsetHeight + 'px'
  })

//切换屏幕
  window.pcIndex = 0
  var lol = 0
  var time = ""
  //滚轮事件
  pcYemUl.addEventListener("mousewheel",function (e) {
    clearTimeout(time)
    if (e.deltaY > 0) {
      //每次位移的距离
      time = setTimeout(function () {
        lol = window.pcIndex
        window.pcIndex++
        if (window.pcIndex > 4) {
          window.pcIndex = 4
        }
        pcYemUl.style.top = -window.pcIndex*jiantouH +  'px'
        pcBtn()
        jTouLeft()
      },100)
    } else {
      //每次位移的距离
      time = setTimeout(function () {
        lol = window.pcIndex
        window.pcIndex--
        if (window.pcIndex < 0) {
          window.pcIndex = 0
        }
        pcYemUl.style.top = -window.pcIndex*jiantouH +  'px'
        pcBtn()
        jTouLeft()
      },100)
    }
  })

//页面按钮事件
  btnOlLis.forEach(function (item,index) {
    item.addEventListener("click",function () {
      console.log(item,index)
      window.pcIndex = index
      pcYemUl.style.top = -window.pcIndex*jiantouH +  'px'
      pcBtn()
      jTouLeft()
    })
  })

jTouLeft()

NodeLis.forEach(function (item,index) {
  item.addEventListener("click",function () {
    window.pcIndex = index
    pcYemUl.style.top = -window.pcIndex*jiantouH +  'px'
    pcBtn()
    jTouLeft()
  })
})


//切换选中按钮
function pcBtn () {
  for (let i = 0; i < btnOlLis.length; i++){
    btnOlLis.a = i
    btnOlLis[btnOlLis.a].classList.remove("yeM-button-true")
  }
  btnOlLis[window.pcIndex].classList.add("yeM-button-true")

  //切换字体颜色
  for (let i = 0; i < NodeLis.length; i++){
    NodeLis[i].children[0].children[0].style.width = 0
  }
  NodeLis[window.pcIndex].children[0].children[0].style.width = 100 + '%'
}

NodeLis[window.pcIndex].children[0].children[0].style.width = 100 + '%'

//箭头
function jTouLeft () {
  var jTouWY = NodeLis[window.pcIndex].offsetLeft + NodeLis[window.pcIndex].children[0].offsetWidth/2 - jiantou.offsetWidth/2
  jiantou.style.left = jTouWY + 'px'

  arr[window.pcIndex].inAn()
  arr[lol].outAn()
}
arr[0].inAn()


pcYemUl.style.top = -0*jiantouH + 'px'
/* eslint-enable */
