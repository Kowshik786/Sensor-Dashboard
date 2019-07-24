(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(47),i=a.n(s),o=(a(57),a(15)),c=a(16),l=a(18),m=a(17),d=a(19),u=(a(58),a(20)),h=(a(153),a(49)),b=a.n(h),p=a(50),g=a.n(p),v=a(51),f=a.n(v),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={sensors:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.timer=null}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){return e.getValues()},1e3)}},{key:"getValues",value:function(){var e=this;fetch("/api/sensors").then(function(e){return e.json()}).then(function(t){return e.setState({sensors:t},function(){console.log("sensors fetched...",t)})})}},{key:"render",value:function(){return r.a.createElement("body",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Sensor Dashboard"),r.a.createElement("div",{className:"card_container topbar"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:b.a,alt:"hot_icon",width:"40vw"})),r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Temperature")),r.a.createElement("div",{className:"value"},r.a.createElement("h2",null,this.state.sensors.map(function(e){return e.temp})[this.state.sensors.length-1]))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:g.a,alt:"hum_icon",width:"40vw"})),r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Humidity")),r.a.createElement("div",{className:"value"},r.a.createElement("h2",null,this.state.sensors.map(function(e){return e.hum})[this.state.sensors.length-1]))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:f.a,alt:"light_icon",width:"40vw"})),r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Ambient Light")),r.a.createElement("div",{className:"value"},r.a.createElement("h2",null,this.state.sensors.map(function(e){return e.light})[this.state.sensors.length-1])))),r.a.createElement("div",{className:"card_container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"chart",height:"600px"},r.a.createElement(u.b,{data:{labels:[1,2,3,4,5,6],datasets:[{label:"Temperature",data:this.state.sensors.map(function(e){return e.temp}),backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]},height:250,options:{responsive:!0,responsiveAnimationDuration:400,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}],yAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}]}}}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"chart"},r.a.createElement(u.a,{data:{labels:[1,2,3,4,5,6],datasets:[{label:"Humidity",data:this.state.sensors.map(function(e){return e.hum}),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},height:250,options:{responsive:!0,responsiveAnimationDuration:400,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}],yAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}]}}}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"chart"},r.a.createElement(u.b,{data:{labels:[1,2,3,4,5,6],datasets:[{label:"Ambient Light",data:this.state.sensors.map(function(e){return e.light}),backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1},{label:"Temperature",data:this.state.sensors.map(function(e){return e.temp}),backgroundColor:"rgba(54, 162, 235, 0.1)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]},height:250,options:{responsive:!0,responsiveAnimationDuration:400,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}],yAxes:[{gridLines:{display:!1,color:"#666"},ticks:{fontColor:"#999"}}]}}}))))),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/atick-faisal/Sensor-Dashboard"},"Documentation"),"\xa0\xa0\xa0.\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/atick-faisal/Sensor-Dashboard/blob/master/api_reference.md"},"Reference"),r.a.createElement("p",null,"\xa9 Atick Faisal, 2019")))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a.p+"static/media/temp.d10d3c5d.svg"},50:function(e,t,a){e.exports=a.p+"static/media/hum.bfed69ce.svg"},51:function(e,t,a){e.exports=a.p+"static/media/light.2d989748.svg"},52:function(e,t,a){e.exports=a(154)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.00482645.chunk.js.map