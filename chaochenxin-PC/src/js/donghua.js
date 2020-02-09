  //第一屏
  var one = document.querySelector('.pc .pcYem > ul > li:nth-child(1) .pcYem1')
  var oneOl = document.querySelector('.pc .pcYem > ul > li:nth-child(1) ol')

  //第二屏
  var two = document.querySelector('.pc .pcYem > ul > li:nth-child(2) .pcYem2 ul')

  //第三屏
  var three = document.querySelector('.pc .pcYem > ul > li:nth-child(3) .pcYem3 .pcYem3-1')
  var arr = [
    {
      inAn(){
        one.style.top = 0 + 'px'
        oneOl.style.top = 75 + '%'
      },
      outAn(){
        one.style.top = -300 + 'px'
        oneOl.style.top = 90 + '%'
      }
    },
    {
      inAn() {
        two.style.top = 70 + 'px'
      },
      outAn() {
        two.style.top = 200 + 'px'
      }
    },
    {
      inAn() {
        three.style.color = "blue"
      },
      outAn() {
        three.style.color = "white"
      }
    }
  ]
