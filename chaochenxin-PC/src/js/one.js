(function () {

  //为什么第一次转动晚了2s


  //第一屏屏幕
  var oneNodeLis = document.querySelectorAll('.pc .pcYem > ul > li:nth-child(1) .pcYem1 .pcYem')
  //第一屏按钮
  var oneBtns = document.querySelectorAll('.pc .pcYem > ul > li:nth-child(1) ol > li')

  var times = ""//自动轮播定时器
  var newIndex = 0//当前轮播
  var oldIndex = 0//上一个轮播的index
  const XIANSHI = "xianshi"//显示
  const YINCANG = "yincang"//隐藏
  const ONEOLLI = "oneOlLi"
  //手动滑动
  oneBtns.forEach(function (item,index) {
    item.addEventListener("click",function () {
      if (index==oldIndex) {return}
      clearInterval(times)
      hua(index)

      //鼠标点击时，关闭轮播
      ding()
    })
  })

  //自动轮播
    clearInterval(times)
    ding()
    function ding() {
      times = setInterval(function () {
        newIndex++
        if (newIndex === 4){
          newIndex = 0
        }
        hua(newIndex)

      },3000)
    }


  //滑动
  function hua(index) {

    newIndex = index //当前轮播

    for (let i = 0; i < oneBtns.length; i++){
      oneNodeLis[i].classList.remove(XIANSHI)
      oneNodeLis[i].classList.remove(YINCANG)
      oneNodeLis[0].classList.remove("aaaaa")
      //清除按钮选中样式
      oneBtns[i].classList.remove(ONEOLLI)
    }

    //鼠标点击时添加进场动效
    oneNodeLis[newIndex].classList.add(XIANSHI)
    oneNodeLis[oldIndex].classList.add(YINCANG)

    //切换按钮
    oneBtns[newIndex].classList.add(ONEOLLI)

    oldIndex = index
    }

})()
