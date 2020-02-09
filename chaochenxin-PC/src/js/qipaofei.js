function qipao(oc,width,height) {
  var ctx = oc.getContext("2d")
  oc.width = width
  oc.height = height
  var arr = []

//创建数组参数
 window.stimes1 = setInterval(function () {
    var x = Math.floor(Math.random()*oc.width)
    var y = oc.height
    var radius = 10
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var a = 1
    var startX = x
    var startY = y
    var deg = 0
    var degJX = Math.floor(Math.random()*40) + 10
    var degJY = Math.floor(Math.random()*40) + 10

    arr.push({
      x,
      y,
      radius,
      r,
      g,
      b,
      a,
      startX,
      startY,
      deg,
      degJX,
      degJY
    })
  },80)


//绘制圆 拿arr里面的参数
  window.stimes2 = setInterval(function () {
    //覆盖画布
    ctx.clearRect(0,0,oc.width,oc.height);

    //修改圆数组及参数
    arr.forEach(function (item,index) {
      item.a-=0.0001
      item.radius+=.1
      item.deg+=10
      //一个定值加一个路径运动轨迹就是这个路径的运动轨迹
      item.x =  item.startX - (Math.sin( (item.deg*Math.PI)/180 )*item.degJX)
      item.y =  item.startY - ((item.deg*Math.PI)/180*item.degJY)
      if (item.a <= 0) {
        arr.splice(index,1)
      }
    })

    //绘制圆
    arr.forEach(function (item, index) {
      ctx.save()
      ctx.beginPath()

      ctx.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`
      ctx.arc(item.x,item.y,item.radius,0,2*Math.PI)
      ctx.fill()
      ctx.restore()
    })
  },1000/60)
}
