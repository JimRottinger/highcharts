/*
  Highcharts JS v6.1.1-modified (2018-08-21)

 Item series type for Highcharts

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?module.exports=b:b(Highcharts)})(function(b){(function(d){var b=d.each,x=d.extend,u=d.pick,q=d.seriesType;q("item","column",{itemPadding:.2,marker:{symbol:"circle",states:{hover:{},select:{}}}},{drawPoints:function(){var c=this,h=c.chart.renderer,k=this.options.marker,l=this.yAxis.transA*c.options.itemPadding,m=this.borderWidth%2?.5:1;b(this.points,function(a){var e,f,b,g,r;e=a.marker||{};var v=e.symbol||k.symbol,q=u(e.radius,k.radius),n,t,w="rect"!==
v,p;a.graphics=b=a.graphics||{};r=a.pointAttr?a.pointAttr[a.selected?"selected":""]||c.pointAttr[""]:c.pointAttribs(a,a.selected&&"select");delete r.r;if(null!==a.y)for(a.graphic||(a.graphic=h.g("point").add(c.group)),g=a.y,t=u(a.stackY,a.y),n=Math.min(a.pointWidth,c.yAxis.transA-l),e=t;e>t-a.y;e--)f=a.barX+(w?a.pointWidth/2-n/2:0),p=c.yAxis.toPixels(e,!0)+l/2,c.options.crisp&&(f=Math.round(f)-m,p=Math.round(p)+m),f={x:f,y:p,width:Math.round(w?n:a.pointWidth),height:Math.round(n),r:q},b[g]?b[g].animate(f):
b[g]=h.symbol(v).attr(x(f,r)).add(a.graphic),b[g].isActive=!0,g--;d.objectEach(b,function(a,b){a.isActive?a.isActive=!1:(a.destroy(),delete a[b])})})}});d.SVGRenderer.prototype.symbols.rect=function(b,h,k,l,m){return d.SVGRenderer.prototype.symbols.callout(b,h,k,l,m)}})(b)});