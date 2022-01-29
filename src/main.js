let html = document.getElementById("html");
let string = `
/*你好,我叫小浩
接下来我要展示我的前端功底
首先我要准备一个div
我要加的样式是*/
#div1{

  width: 200px;
  height: 200px;
}
/* 接下来我要把 div 变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 */
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
 
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**加两个神秘的小球**/
#div1::before {
  width: 100px;
  height: 100px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
console.log(string);
let n = 0;
let style = document.getElementById("style");

/**
 * step函数
 * 1s之后放到html里面,把n的值加1
 * 递归调用 重复执行step
 */
function step() {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    n++;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n < string.length) step();
  }, 50);
}

step();
