/*
 Highcharts JS v6.1.1-modified (2018-08-21)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(w){"object"===typeof module&&module.exports?module.exports=w:w(Highcharts)})(function(w){var H=function(b){var w=b.each,B=b.extend,E=b.isArray,t=b.isObject,p=b.isNumber,G=b.merge,z=b.pick,l=b.reduce;return{getColor:function(n,m){var q=m.index,f=m.mapOptionsToLevel,l=m.parentColor,y=m.parentColorIndex,F=m.series,d=m.colors,A=m.siblings,r=F.points,x,t,p,C;if(n){r=r[n.i];n=f[n.level]||{};if(x=r&&n.colorByPoint)p=r.index%(d?d.length:F.chart.options.chart.colorCount),t=d&&d[p];d=r&&r.options.color;
x=n&&n.color;if(f=l)f=(f=n&&n.colorVariation)&&"brightness"===f.key?b.color(l).brighten(q/A*f.to).get():l;x=z(d,x,t,f,F.color);C=z(r&&r.options.colorIndex,n&&n.colorIndex,p,y,m.colorIndex)}return{color:x,colorIndex:C}},getLevelOptions:function(b){var m=null,q,f,n,y;if(t(b))for(m={},n=p(b.from)?b.from:1,y=b.levels,f={},q=t(b.defaults)?b.defaults:{},E(y)&&(f=l(y,function(b,d){var f,m;t(d)&&p(d.level)&&(m=G({},d),f="boolean"===typeof m.levelIsConstant?m.levelIsConstant:q.levelIsConstant,delete m.levelIsConstant,
delete m.level,d=d.level+(f?0:n-1),t(b[d])?B(b[d],m):b[d]=m);return b},{})),y=p(b.to)?b.to:1,b=0;b<=y;b++)m[b]=G({},q,t(f[b])?f[b]:{});return m},setTreeValues:function m(b,f){var l=f.before,q=f.idRoot,t=f.mapIdToNode[q],d=f.points[b.i],p=d&&d.options||{},r=0,x=[];B(b,{levelDynamic:b.level-(("boolean"===typeof f.levelIsConstant?f.levelIsConstant:1)?0:t.level),name:z(d&&d.name,""),visible:q===b.id||("boolean"===typeof f.visible?f.visible:!1)});"function"===typeof l&&(b=l(b,f));w(b.children,function(d,
l){var q=B({},f);B(q,{index:l,siblings:b.children.length,visible:b.visible});d=m(d,q);x.push(d);d.visible&&(r+=d.val)});b.visible=0<r||b.visible;l=z(p.value,r);B(b,{children:x,childrenTotal:r,isLeaf:b.visible&&!r,val:l});return b},updateRootId:function(b){var l;t(b)&&(l=t(b.options)?b.options:{},l=z(b.rootNode,l.rootId,""),t(b.userOptions)&&(b.userOptions.rootId=l),b.rootNode=l);return l}}}(w);(function(b,w){var B=b.seriesType,E=b.seriesTypes,t=b.map,p=b.merge,G=b.extend,z=b.noop,l=b.each,n=w.getColor,
m=w.getLevelOptions,q=b.grep,f=b.isArray,H=b.isNumber,y=b.isObject,F=b.isString,d=b.pick,A=b.Series,r=b.stableSort,x=b.Color,J=function(a,c,e){e=e||this;b.objectEach(a,function(b,g){c.call(e,b,g,a)})},I=b.reduce,C=function(a,c,e){e=e||this;a=c.call(e,a);!1!==a&&C(a,c,e)},K=w.updateRootId;B("treemap","scatter",{showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",
pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:E.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:z,parallelArrays:["x",
"y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=f(a)?a:[];var e=f(c)?c:[];c=I(a,function(a,c,e){c=d(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);return a},{"":[]});J(c,function(a,c,h){""!==c&&-1===b.inArray(c,e)&&(l(a,function(a){h[""].push(a)}),delete h[c])});return c},getTree:function(){var a=t(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},
init:function(a,c){var e=b.colorSeriesMixin;b.colorSeriesMixin&&(this.translateColors=e.translateColors,this.colorAttribs=e.colorAttribs,this.axisTypes=e.axisTypes);A.prototype.init.call(this,a,c);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,e,b,g){var h=this,v=[],k=h.points[c],d=0,f;l(b[a]||[],function(c){f=h.buildNode(h.points[c].id,c,e+1,b,a);d=Math.max(f.height+1,d);v.push(f)});c={id:a,i:c,children:v,height:d,level:e,parent:g,visible:!1};
h.nodeMap[c.id]=c;k&&(k.node=c);return c},setTreeValues:function(a){var c=this,e=c.options,b=c.nodeMap[c.rootNode],e="boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0,g=0,h=[],D,k=c.points[a.i];l(a.children,function(a){a=c.setTreeValues(a);h.push(a);a.ignore||(g+=a.val)});r(h,function(a,c){return a.sortIndex-c.sortIndex});D=d(k&&k.options.value,g);k&&(k.value=D);G(a,{children:h,childrenTotal:g,ignore:!(d(k&&k.visible,!0)&&0<D),isLeaf:a.visible&&!g,levelDynamic:a.level-(e?0:b.level),name:d(k&&
k.name,""),sortIndex:d(k&&k.sortIndex,-D),val:D});return a},calculateChildrenAreas:function(a,c){var e=this,b=e.options,g=e.mapOptionsToLevel[a.level+1],h=d(e[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,b.layoutAlgorithm),D=b.alternateStartingDirection,k=[];a=q(a.children,function(a){return!a.ignore});g&&g.layoutStartingDirection&&(c.direction="vertical"===g.layoutStartingDirection?0:1);k=e[h](c,a);l(a,function(a,b){b=k[b];a.values=p(b,{val:a.childrenTotal,direction:D?1-c.direction:c.direction});a.pointValues=
p(b,{x:b.x/e.axisRatio,width:b.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,c=a.xAxis,e=a.yAxis;l(a.points,function(b){var g=b.node,h=g.pointValues,v,k,d;d=(a.pointAttribs(b)["stroke-width"]||0)%2/2;h&&g.visible?(g=Math.round(c.translate(h.x,0,0,0,1))-d,v=Math.round(c.translate(h.x+h.width,0,0,0,1))-d,k=Math.round(e.translate(h.y,0,0,0,1))-d,h=Math.round(e.translate(h.y+h.height,0,0,0,1))-d,b.shapeType="rect",b.shapeArgs={x:Math.min(g,
v),y:Math.min(k,h),width:Math.abs(v-g),height:Math.abs(h-k)},b.plotX=b.shapeArgs.x+b.shapeArgs.width/2,b.plotY=b.shapeArgs.y+b.shapeArgs.height/2):(delete b.plotX,delete b.plotY)})},setColorRecursive:function(a,c,e,b,g){var h=this,d=h&&h.chart,d=d&&d.options&&d.options.colors,k;if(a){k=n(a,{colors:d,index:b,mapOptionsToLevel:h.mapOptionsToLevel,parentColor:c,parentColorIndex:e,series:h,siblings:g});if(c=h.points[a.i])c.color=k.color,c.colorIndex=k.colorIndex;l(a.children||[],function(c,b){h.setColorRecursive(c,
k.color,k.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,c,b,d){this.height=a;this.width=c;this.plot=d;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,
this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,b,d){var e,h,v,k,f=b.lW,m=b.lH,u=b.plot,
n,r=0,t=b.elArr.length-1;c?(f=b.nW,m=b.nH):n=b.elArr[b.elArr.length-1];l(b.elArr,function(a){if(c||r<t)0===b.direction?(e=u.x,h=u.y,v=f,k=a/v):(e=u.x,h=u.y,k=m,v=a/k),d.push({x:e,y:h,width:v,height:k}),0===b.direction?u.y+=k:u.x+=v;r+=1});b.reset();0===b.direction?b.width-=f:b.height-=m;u.y=u.parent.y+(u.parent.height-b.height);u.x=u.parent.x+(u.parent.width-b.width);a&&(b.direction=1-b.direction);c||b.addElement(n)},algorithmLowAspectRatio:function(a,b,e){var c=[],d=this,h,f={x:b.x,y:b.y,parent:b},
k=0,m=e.length-1,n=new this.algorithmGroup(b.height,b.width,b.direction,f);l(e,function(e){h=e.val/b.val*b.height*b.width;n.addElement(h);n.lP.nR>n.lP.lR&&d.algorithmCalcPoints(a,!1,n,c,f);k===m&&d.algorithmCalcPoints(a,!0,n,c,f);k+=1});return c},algorithmFill:function(a,b,e){var c=[],d,h=b.direction,f=b.x,k=b.y,m=b.width,n=b.height,r,t,p,q;l(e,function(e){d=e.val/b.val*b.height*b.width;r=f;t=k;0===h?(q=n,p=d/q,m-=p,f+=p):(p=m,q=d/p,n-=q,k+=q);c.push({x:r,y:t,width:p,height:q});a&&(h=1-h)});return c},
strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,e=K(a),d,g;A.prototype.translate.call(a);g=a.tree=a.getTree();d=a.nodeMap[e];a.mapOptionsToLevel=m({from:d.level+1,levels:b.levels,to:g.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});
""===e||d&&d.children.length||(a.drillToNode("",!1),e=a.rootNode,d=a.nodeMap[e]);C(a.nodeMap[a.rootNode],function(b){var c=!1,e=b.parent;b.visible=!0;if(e||""===e)c=a.nodeMap[e];return c});C(a.nodeMap[a.rootNode].children,function(a){var b=!1;l(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(g);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=e=p(e,{width:e.width*a.axisRatio,
direction:"vertical"===b.layoutStartingDirection?0:1,val:g.val});a.calculateChildrenAreas(g,e);a.colorAxis?a.translateColors():b.colorByPoint||a.setColorRecursive(a.tree);b.allowDrillToNode&&(b=d.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,e=q(a.points,function(a){return a.node.visible}),d,g;l(e,function(c){g=b[c.node.level];d={style:{}};
c.node.isLeaf||(d.enabled=!1);g&&g.dataLabels&&(d=p(d,g.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(d.style.width=c.shapeArgs.width,c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=p(d,c.options.dataLabels)});A.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){E.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var c=y(this.mapOptionsToLevel)?this.mapOptionsToLevel:
{},f=a&&c[a.node.level]||{},c=this.options,g=b&&c.states[b]||{},h=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||f.borderColor||g.borderColor||c.borderColor,"stroke-width":d(a&&a.borderWidth,f.borderWidth,g.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||f.borderDashStyle||g.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==h.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==h.indexOf("highcharts-internal-node-interactive")?(b=d(g.opacity,
c.opacity),a.fill=x(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==h.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=x(a.fill).brighten(g.brightness).get());return a},drawPoints:function(){var a=this,b=q(a.points,function(a){return a.node.visible});l(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});E.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&l(b,function(b){b.graphic&&
(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;F(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},drillUp:function(){var a=this.nodeMap[this.rootNode];
a&&F(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;d(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,f,g;d.text&&(a=d.text);this.drillUpButton?(this.drillUpButton.placed=!1,this.drillUpButton.attr({text:a}).align()):(g=(f=d.theme)&&f.states,
this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},f,g&&g.hover,g&&g.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:z,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){A.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;A.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var a=
{endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};A.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:C,reduce:I}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,e=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||d(e.interactByLeaf,!e.allowDrillToNode)?
this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||H(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:E.pie.prototype.pointClass.prototype.setVisible})})(w,H)});