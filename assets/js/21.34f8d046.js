(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{560:function(t,o,e){},659:function(t,o,e){"use strict";e(560)},734:function(t,o,e){"use strict";e.r(o);e(49);var i=e(518),s={props:{chartId:{type:String},total:{type:Number,default:300},currentVal:{type:Number,default:120}},data:function(){return{color1:[{offset:.25,color:"#299DFF"},{offset:.5,color:"#20E3B2"},{offset:.75,color:"#0CEBEB"},{offset:1,color:"#0CEBEB"}],color2:[{offset:.5,color:"#FF8008"},{offset:1,color:"#FFC837"}],color3:[{offset:.5,color:"#2966F1"},{offset:1,color:"#A939FF"}],axisColor1:[[.25,"#299DFF"],[.5,"#20E3B2"],[.75,"#0CEBEB"],[1,"#0CEBEB"]],axisColor2:[[.25,"#FFC837"],[1,"#FF8008"]],axisColor3:[[.5,"#A939FF"],[1,"#2966F1"]]}},mounted:function(){this.getCharts()},methods:{getColor:function(t){return"mcf_gauge1"===t?this.color1:"mcf_gauge2"===t?this.color2:this.color3},getAxisColors:function(t){return"mcf_gauge1"===t?this.axisColor1:"mcf_gauge2"===t?this.axisColor2:this.axisColor3},getCharts:function(){var t,o=document.getElementById(this.chartId),e=i.b(o);(t={series:[{type:"gauge",min:0,max:100,splitNumber:5,center:["50%","50%"],itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:this.getColor(this.chartId)}},title:{show:!0,offsetCenter:[0,"105%"],textStyle:{fontWeight:"400",fontSize:16,color:"auto"}},progress:{show:!0,width:16,roundCap:!0},axisLine:{lineStyle:{color:this.getAxisColors(this.chartId),opacity:0}},axisTick:{show:!0,length:10,distance:-35,splitNumber:10,lineStyle:{color:"auto"}},splitLine:{show:!0,distance:-40,length:15,lineStyle:{width:2,color:"auto"}},axisLabel:{distance:50,color:"auto",fontSize:14},anchor:{show:!0,showAbove:!0,size:15,itemStyle:{borderWidth:0,color:"#21A1E7"}},detail:{show:!0,valueAnimation:!0,fontSize:"22px",color:this.getAxisColors(this.chartId)[0][1],offsetCenter:[0,"55%"],formatter:"".concat(this.currentVal,"\n {time|生产量（公斤）}"),rich:{time:{fontSize:12,color:"#fff"}}},data:[{value:Math.floor(this.currentVal/this.total*100),name:"计划产量："+this.total}]},{type:"gauge",center:["50%","50%"],progress:{show:!1},axisLine:{lineStyle:{width:16,color:[[1,"#14306F"]],opacity:1},roundCap:!0},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},anchor:{show:!1},title:{show:!0}}]})&&e.setOption(t),window.addEventListener("resize",(function(){e.resize()}))}}},r=(e(659),e(3)),l=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main"})}),[],!1,null,"dad63d12",null);o.default=l.exports}}]);