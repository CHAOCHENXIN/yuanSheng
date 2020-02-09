(function () {
  var fiveUl = document.querySelector('.pc .pcYem > ul > li:nth-child(5) .pcYem5 .team-3 .list')//ul
  var qipaoOc = document.querySelector('.pc .pcYem > ul > li:nth-child(5) .pcYem5 .team-3 .qipaoOc')//画布
  var fiveLis = document.querySelectorAll('.pc .pcYem > ul > li:nth-child(5) .pcYem5 .team-3 .list .item')//li
  fiveLis.forEach(function (item,index) {
    //设置每个人物的位置
    item.style.backgroundPositionX = -index * (fiveUl.offsetWidth/fiveLis.length) + 'px'

    //鼠标移入事件
    item.onmouseenter = function(){
      //这只是在画布上画东西
      qipaoOc.style.display = "block"
      // 直接操作画布就好了
      qipaoOc.style.left = this.offsetLeft +"px";
      qipao(qipaoOc,fiveLis[0].clientWidth,fiveLis[0].clientHeight)
      console.log(1111)

      //改变图片透明度
      for (let i = 0; i < fiveLis.length; i++) {
        fiveLis[i].style.opacity = .5
      }
      item.style.opacity = 1
    }

    //鼠标移出事件
    qipaoOc.onmouseleave = function(){
      qipaoOc.style.display = "none"
      clearInterval(window.stimes1)
      clearInterval(window.stimes2)
      console.log(2222)
      for (let i = 0; i < fiveLis.length; i++) {
        fiveLis[i].style.opacity = 1
      }
    }

  })

})()
