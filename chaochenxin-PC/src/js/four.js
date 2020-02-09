(function () {
  //获取两个框的包裹元素

  var kuangS = document.querySelectorAll('.pc .pcYem > ul > li:nth-child(4) .pcYem4 .aaa > ul')
  var BigKuangS = document.querySelectorAll('.pc .pcYem > ul > li:nth-child(4) .pcYem4 .aaa')

  kuangS.forEach(function (item) {
    for (var i = 0; i < 4; i++){

      var lis = document.createElement("li")
      var imgs = document.createElement("img")
      window.x = item.clientWidth/2
      window.y = item.clientHeight/2

      lis.style.width = window.x + 'px'
      lis.style.height = window.y + 'px'
      item.appendChild(lis)
      lis.appendChild(imgs)
      imgs.src = "static/img/about1.jpg"

      //x 0    -1/2x      0       -1/2x
      //y 0       0     -1/2h     -1/2h

      /*
          var arrLeft=[0,-2,1,-1];
          var arrTop=[1,0,-1,-2];
          0 1 2 3
      */

      imgs.style.left = -(i % 2)* window.x + "px"
      imgs.style.top = -Math.floor(i / 2)* window.y + "px"

    }
  })

  // 鼠标移入事件
  BigKuangS.forEach(function (item) {
    item.addEventListener("mouseover",function () {
      var imgNodes = item.querySelectorAll('.pc .pcYem > ul > li:nth-child(4) .pcYem4 .aaa > ul > li > img')

      imgNodes[0].style.top = window.y + "px"

      imgNodes[1].style.left = -2* window.x + "px"

      imgNodes[2].style.left = window.x + "px"
      imgNodes[2].style.top = -window.y + "px"

      imgNodes[3].style.left = -window.x + "px"
      imgNodes[3].style.top = -2 * window.y + "px"

    })

    item.addEventListener("mouseout",function () {
      var imgNodes = item.querySelectorAll('.pc .pcYem > ul > li:nth-child(4) .pcYem4 .aaa > ul > li > img')

      imgNodes.forEach(function (imgItem,index) {
        imgItem.style.left = -(index % 2)* window.x + "px"
        imgItem.style.top = -Math.floor(index / 2)* window.y + "px"
      })
    })

  })
  
})()
