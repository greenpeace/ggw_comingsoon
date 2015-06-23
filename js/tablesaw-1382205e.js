!function($){var div=document.createElement("div"),all=div.getElementsByTagName("i"),$doc=$(document.documentElement);div.innerHTML="<!--[if lte IE 8]><i></i><![endif]-->",all[0]&&$doc.addClass("ie-lte8"),"querySelector"in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini&&($doc.addClass("tablesaw-enhanced"),$(function(){$(document).trigger("enhance.tablesaw")}))}(jQuery),"undefined"==typeof Tablesaw&&(Tablesaw={i18n:{modes:["Stack","Swipe","Toggle"],columns:'Col<span class="a11y-sm">umn</span>s',columnBtnText:"Columns",columnsDialogError:"No eligible columns.",sort:"Sort"}}),Tablesaw.config||(Tablesaw.config={}),function($){var pluginName="table",classes={toolbar:"tablesaw-bar"},events={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh"},defaultMode="stack",initSelector="table[data-tablesaw-mode],table[data-tablesaw-sortable]",Table=function(element){if(!element)throw new Error("Tablesaw requires an element.");this.table=element,this.$table=$(element),this.mode=this.$table.attr("data-tablesaw-mode")||defaultMode,this.init()};Table.prototype.init=function(){this.$table.attr("id")||this.$table.attr("id",pluginName+"-"+Math.round(1e4*Math.random())),this.createToolbar();var colstart=this._initCells();this.$table.trigger(events.create,[this,colstart])},Table.prototype._initCells=function(){var colstart,thrs=this.table.querySelectorAll("thead tr"),self=this;return $(thrs).each(function(){var coltally=0;$(this).children().each(function(){var span=parseInt(this.getAttribute("colspan"),10),sel=":nth-child("+(coltally+1)+")";if(colstart=coltally+1,span)for(var k=0;span-1>k;k++)coltally++,sel+=", :nth-child("+(coltally+1)+")";this.cells=self.$table.find("tr").not($(thrs).eq(0)).not(this).children(sel),coltally++})}),colstart},Table.prototype.refresh=function(){this._initCells(),this.$table.trigger(events.refresh)},Table.prototype.createToolbar=function(){var $toolbar=this.$table.prev("."+classes.toolbar);$toolbar.length||($toolbar=$("<div>").addClass(classes.toolbar).insertBefore(this.$table)),this.$toolbar=$toolbar,this.mode&&this.$toolbar.addClass("mode-"+this.mode)},Table.prototype.destroy=function(){this.$table.prev("."+classes.toolbar).each(function(){this.className=this.className.replace(/\bmode\-\w*\b/gi,"")});var tableId=this.$table.attr("id");$(document).unbind("."+tableId),$(window).unbind("."+tableId),this.$table.trigger(events.destroy,[this]),this.$table.removeAttr("data-tablesaw-mode"),this.$table.removeData(pluginName)},$.fn[pluginName]=function(){return this.each(function(){var $t=$(this);if(!$t.data(pluginName)){var table=new Table(this);$t.data(pluginName,table)}})},$(document).on("enhance.tablesaw",function(e){$(e.target).find(initSelector)[pluginName]()})}(jQuery),function(win,$){var classes={stackTable:"tablesaw-stack",cellLabels:"tablesaw-cell-label",cellContentLabels:"tablesaw-cell-content"},data={obj:"tablesaw-stack"},attrs={labelless:"data-tablesaw-no-labels",hideempty:"data-tablesaw-hide-empty"},Stack=function(element){this.$table=$(element),this.labelless=this.$table.is("["+attrs.labelless+"]"),this.hideempty=this.$table.is("["+attrs.hideempty+"]"),this.labelless||(this.allHeaders=this.$table.find("th")),this.$table.data(data.obj,this)};Stack.prototype.init=function(colstart){if(this.$table.addClass(classes.stackTable),!this.labelless){var reverseHeaders=$(this.allHeaders),hideempty=this.hideempty;reverseHeaders.each(function(){var $t=$(this),$cells=$(this.cells).filter(function(){return!($(this).parent().is("["+attrs.labelless+"]")||hideempty&&$(this).is(":empty"))}),hierarchyClass=$cells.not(this).filter("thead th").length&&" tablesaw-cell-label-top",$sortableButton=$t.find(".tablesaw-sortable-btn"),html=$sortableButton.length?$sortableButton.html():$t.html();if(""!==html)if(hierarchyClass){var iteration=parseInt($(this).attr("colspan"),10),filter="";iteration&&(filter="td:nth-child("+iteration+"n + "+colstart+")"),$cells.filter(filter).prepend("<b class='"+classes.cellLabels+hierarchyClass+"'>"+html+"</b>")}else $cells.wrapInner("<span class='"+classes.cellContentLabels+"'></span>"),$cells.prepend("<b class='"+classes.cellLabels+"'>"+html+"</b>")})}},Stack.prototype.destroy=function(){this.$table.removeClass(classes.stackTable),this.$table.find("."+classes.cellLabels).remove(),this.$table.find("."+classes.cellContentLabels).each(function(){$(this).replaceWith(this.childNodes)})},$(document).on("tablesawcreate",function(e,Tablesaw,colstart){if("stack"===Tablesaw.mode){var table=new Stack(Tablesaw.table);table.init(colstart)}}),$(document).on("tablesawdestroy",function(e,Tablesaw){"stack"===Tablesaw.mode&&$(Tablesaw.table).data(data.obj).destroy()})}(this,jQuery),function($){var pluginName="tablesawbtn",initSelector=".button",methods={_create:function(){return $(this).each(function(){$(this).trigger("beforecreate."+pluginName)[pluginName]("_init").trigger("create."+pluginName)})},_init:function(){var oEl=$(this),sel=this.getElementsByTagName("select")[0];return sel&&$(this).addClass("btn-select")[pluginName]("_select",sel),oEl},_select:function(sel){var update=function(oEl,sel){var label,el,children,opts=$(sel).find("option");if(opts.each(function(){var opt=this;opt.selected&&(label=document.createTextNode(opt.text))}),children=oEl.childNodes,opts.length>0)for(var i=0,l=children.length;l>i;i++)el=children[i],el&&3===el.nodeType&&oEl.replaceChild(label,el)};update(this,sel),$(this).bind("change refresh",function(){update(this,sel)})}};$.fn[pluginName]=function(arrg,a,b,c){return this.each(function(){return arrg&&"string"==typeof arrg?$.fn[pluginName].prototype[arrg].call(this,a,b,c):$(this).data(pluginName+"active")?$(this):($(this).data(pluginName+"active",!0),void $.fn[pluginName].prototype._create.call(this))})},$.extend($.fn[pluginName].prototype,methods),$(document).on("enhance",function(e){$(initSelector,e.target)[pluginName]()})}(jQuery),function(win,$){var ColumnToggle=function(element){this.$table=$(element),this.classes={columnToggleTable:"tablesaw-columntoggle",columnBtnContain:"tablesaw-columntoggle-btnwrap tablesaw-advance",columnBtn:"tablesaw-columntoggle-btn tablesaw-nav-btn down",popup:"tablesaw-columntoggle-popup",priorityPrefix:"tablesaw-priority-",toolbar:"tablesaw-bar"},this.headers=this.$table.find("tr:first > th"),this.$table.data("tablesaw-coltoggle",this)};ColumnToggle.prototype.init=function(){function openPopup(){$btnContain.addClass("visible"),$menuButton.removeClass("down").addClass("up"),$(document).unbind("click."+tableId,closePopup),window.clearTimeout(closeTimeout),closeTimeout=window.setTimeout(function(){$(document).on("click."+tableId,closePopup)},15)}function closePopup(event){event&&$(event.target).closest("."+self.classes.popup).length||($(document).unbind("click."+tableId),$menuButton.removeClass("up").addClass("down"),$btnContain.removeClass("visible"))}var tableId,id,$menuButton,$popup,$menu,$btnContain,self=this;this.$table.addClass(this.classes.columnToggleTable),tableId=this.$table.attr("id"),id=tableId+"-popup",$btnContain=$("<div class='"+this.classes.columnBtnContain+"'></div>"),$menuButton=$("<a href='#"+id+"' class='button "+this.classes.columnBtn+"' data-popup-link><span>"+Tablesaw.i18n.columnBtnText+"</span></a>"),$popup=$("<div class='dialog-table-coltoggle "+this.classes.popup+"' id='"+id+"'></div>"),$menu=$("<div class='checkbox-group'></div>");var hasNonPersistentHeaders=!1;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=$this.add(this.cells);priority&&"persist"!==priority&&($cells.addClass(self.classes.priorityPrefix+priority),$("<label class='option'><input type='checkbox' class='form-checkbox' checked>"+$this.text()+"</label>").appendTo($menu).children(0).data("cells",$cells),hasNonPersistentHeaders=!0)}),hasNonPersistentHeaders||$menu.append("<label>"+Tablesaw.i18n.columnsDialogError+"</label>"),$menu.appendTo($popup),$menu.find('input[type="checkbox"]').on("change",function(e){var checked=e.target.checked;$(e.target).data("cells").toggleClass("tablesaw-cell-hidden",!checked).toggleClass("tablesaw-cell-visible",checked),self.$table.trigger("tablesawcolumns")}),$menuButton.appendTo($btnContain),$btnContain.appendTo(this.$table.prev("."+this.classes.toolbar));var closeTimeout;$menuButton.on("click.tablesaw",function(event){event.preventDefault(),$btnContain.is(".visible")?closePopup():openPopup()}),$popup.appendTo($btnContain),this.$menu=$menu,$(window).on("resize."+tableId,function(){self.refreshToggle()}),this.refreshToggle()},ColumnToggle.prototype.refreshToggle=function(){this.$menu.find("input").each(function(){var $this=$(this);this.checked="table-cell"===$this.data("cells").eq(0).css("display")})},ColumnToggle.prototype.refreshPriority=function(){var self=this;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=$this.add(this.cells);priority&&"persist"!==priority&&$cells.addClass(self.classes.priorityPrefix+priority)})},ColumnToggle.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable),this.$table.find("th, td").each(function(){var $cell=$(this);$cell.removeClass("tablesaw-cell-hidden").removeClass("tablesaw-cell-visible"),this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,"")})},$(document).on("tablesawcreate",function(e,Tablesaw){if("columntoggle"===Tablesaw.mode){var table=new ColumnToggle(Tablesaw.table);table.init()}}),$(document).on("tablesawdestroy",function(e,Tablesaw){"columntoggle"===Tablesaw.mode&&$(Tablesaw.table).data("tablesaw-coltoggle").destroy()})}(this,jQuery),function(win,$){function createSwipeTable($table){function $getCells(headerCell){return $(headerCell.cells).add(headerCell)}function showColumn(headerCell){$getCells(headerCell).removeClass("tablesaw-cell-hidden")}function hideColumn(headerCell){$getCells(headerCell).addClass("tablesaw-cell-hidden")}function persistColumn(headerCell){$getCells(headerCell).addClass("tablesaw-cell-persist")}function isPersistent(headerCell){return $(headerCell).is('[data-tablesaw-priority="persist"]')}function unmaintainWidths(){$table.removeClass(persistWidths),$("#"+tableId+"-persist").remove()}function maintainWidths(){var newHash,prefix="#"+tableId+".tablesaw-swipe ",styles=[],tableWidth=$table.width(),hash=[];$headerCells.each(function(index){var width;isPersistent(this)&&(width=$(this).outerWidth(),.75*tableWidth>width&&(hash.push(index+"-"+width),styles.push(prefix+" .tablesaw-cell-persist:nth-child("+(index+1)+") { width: "+width+"px; }")))}),newHash=hash.join("_"),$table.addClass(persistWidths);var $style=$("#"+tableId+"-persist");$style.length&&$style.data("hash")===newHash||($style.remove(),styles.length&&$("<style>"+styles.join("\n")+"</style>").attr("id",tableId+"-persist").data("hash",newHash).appendTo($head))}function getNext(){var checkFound,next=[];return $headerCellsNoPersist.each(function(i){var $t=$(this),isHidden="none"===$t.css("display")||$t.is(".tablesaw-cell-hidden");if(isHidden||checkFound){if(isHidden&&checkFound)return next[1]=i,!1}else checkFound=!0,next[0]=i}),next}function getPrev(){var next=getNext();return[next[1]-1,next[0]-1]}function nextpair(fwd){return fwd?getNext():getPrev()}function canAdvance(pair){return pair[1]>-1&&pair[1]<$headerCellsNoPersist.length}function matchesMedia(){var matchMedia=$table.attr("data-tablesaw-swipe-media");return!matchMedia||"matchMedia"in win&&win.matchMedia(matchMedia).matches}function fakeBreakpoints(){if(matchesMedia()){var extraPaddingPixels=20,containerWidth=$table.parent().width(),persist=[],sum=0,sums=[],visibleNonPersistantCount=$headerCells.length;$headerCells.each(function(index){var $t=$(this),isPersist=$t.is('[data-tablesaw-priority="persist"]');persist.push(isPersist),sum+=headerWidths[index]+(isPersist?0:extraPaddingPixels),sums.push(sum),(isPersist||sum>containerWidth)&&visibleNonPersistantCount--});var needsNonPersistentColumn=0===visibleNonPersistantCount;$headerCells.each(function(index){return persist[index]?void persistColumn(this):void(sums[index]<=containerWidth||needsNonPersistentColumn?(needsNonPersistentColumn=!1,showColumn(this)):hideColumn(this))}),isIE8||unmaintainWidths(),$table.trigger("tablesawcolumns")}}function advance(fwd){var pair=nextpair(fwd);canAdvance(pair)&&(isNaN(pair[0])&&(pair[0]=fwd?0:$headerCellsNoPersist.length-1),isIE8||maintainWidths(),hideColumn($headerCellsNoPersist.get(pair[0])),showColumn($headerCellsNoPersist.get(pair[1])),$table.trigger("tablesawcolumns"))}function getCoord(event,key){return(event.touches||event.originalEvent.touches)[0][key]}var $btns=$("<div class='tablesaw-advance'></div>"),$prevBtn=$("<a href='#' class='tablesaw-nav-btn button left' title='Previous Column'></a>").appendTo($btns),$nextBtn=$("<a href='#' class='tablesaw-nav-btn button right' title='Next Column'></a>").appendTo($btns),hideBtn="disabled",persistWidths="tablesaw-fix-persist",$headerCells=$table.find("thead th"),$headerCellsNoPersist=$headerCells.not('[data-tablesaw-priority="persist"]'),headerWidths=[],$head=$(document.head||"head"),tableId=$table.attr("id"),isIE8=$("html").is(".ie-lte8");if(!$headerCells.length)throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");$table.css("width","auto"),$headerCells.each(function(){headerWidths.push($(this).outerWidth())}),$table.css("width",""),$btns.appendTo($table.prev(".tablesaw-bar")),$table.addClass("tablesaw-swipe"),tableId||(tableId="tableswipe-"+Math.round(1e4*Math.random()),$table.attr("id",tableId)),$prevBtn.add($nextBtn).click(function(e){advance(!!$(e.target).closest($nextBtn).length),e.preventDefault()}),$table.bind("touchstart.swipetoggle",function(e){var x,y,originX=getCoord(e,"pageX"),originY=getCoord(e,"pageY");$(win).off("resize",fakeBreakpoints),$(this).bind("touchmove",function(e){x=getCoord(e,"pageX"),y=getCoord(e,"pageY");var cfg=Tablesaw.config.swipe;Math.abs(x-originX)>cfg.horizontalThreshold&&Math.abs(y-originY)<cfg.verticalThreshold&&e.preventDefault()}).bind("touchend.swipetoggle",function(){var cfg=Tablesaw.config.swipe;Math.abs(y-originY)<cfg.verticalThreshold&&(x-originX<-1*cfg.horizontalThreshold&&advance(!0),x-originX>cfg.horizontalThreshold&&advance(!1)),window.setTimeout(function(){$(win).on("resize",fakeBreakpoints)},300),$(this).unbind("touchmove touchend")})}).bind("tablesawcolumns.swipetoggle",function(){$prevBtn[canAdvance(getPrev())?"removeClass":"addClass"](hideBtn),$nextBtn[canAdvance(getNext())?"removeClass":"addClass"](hideBtn)}).bind("tablesawnext.swipetoggle",function(){advance(!0)}).bind("tablesawprev.swipetoggle",function(){advance(!1)}).bind("tablesawdestroy.swipetoggle",function(){var $t=$(this);$t.removeClass("tablesaw-swipe"),$t.prev(".tablesaw-bar").find(".tablesaw-advance").remove(),$(win).off("resize",fakeBreakpoints),$t.unbind(".swipetoggle")}),fakeBreakpoints(),$(win).on("resize",fakeBreakpoints)}$.extend(Tablesaw.config,{swipe:{horizontalThreshold:15,verticalThreshold:30}}),$(document).on("tablesawcreate",function(e,Tablesaw){"swipe"===Tablesaw.mode&&createSwipeTable(Tablesaw.$table)})}(this,jQuery),function($){function getSortValue(cell){return $.map(cell.childNodes,function(el){var $el=$(el);if($el.is("input, select"))return $el.val();if(!$el.hasClass("tablesaw-cell-label"))return $.trim($el.text())}).join("")}var pluginName="tablesaw-sortable",initSelector="table[data-"+pluginName+"]",sortableSwitchSelector="[data-"+pluginName+"-switch]",attrs={defaultCol:"data-tablesaw-sortable-default-col"},classes={head:pluginName+"-head",ascend:pluginName+"-ascending",descend:pluginName+"-descending",switcher:pluginName+"-switch",tableToolbar:"tablesaw-toolbar",sortButton:pluginName+"-btn"},methods={_create:function(o){return $(this).each(function(){var init=$(this).data("init"+pluginName);return init?!1:void $(this).data("init"+pluginName,!0).trigger("beforecreate."+pluginName)[pluginName]("_init",o).trigger("create."+pluginName)})},_init:function(){var heads,$switcher,el=$(this),addClassToTable=function(){el.addClass(pluginName)},addClassToHeads=function(h){$.each(h,function(i,v){$(v).addClass(classes.head)})},makeHeadsActionable=function(h,fn){$.each(h,function(i,v){var b=$("<button class='"+classes.sortButton+"'/>");b.bind("click",{col:v},fn),$(v).wrapInner(b)})},clearOthers=function(sibs){$.each(sibs,function(i,v){var col=$(v);col.removeAttr(attrs.defaultCol),col.removeClass(classes.ascend),col.removeClass(classes.descend)})},headsOnAction=function(e){if(!$(e.target).is("a[href]")){e.stopPropagation();var head=$(this).parent(),v=e.data.col,newSortValue=heads.index(head);clearOthers(head.siblings()),head.hasClass(classes.descend)?(el[pluginName]("sortBy",v,!0),newSortValue+="_asc"):(el[pluginName]("sortBy",v),newSortValue+="_desc"),$switcher&&$switcher.find("select").val(newSortValue).trigger("refresh"),e.preventDefault()}},handleDefault=function(heads){$.each(heads,function(idx,el){var $el=$(el);$el.is("["+attrs.defaultCol+"]")&&($el.hasClass(classes.descend)||$el.addClass(classes.ascend))})},addSwitcher=function(heads){$switcher=$("<div>").addClass(classes.switcher).addClass(classes.tableToolbar).html(function(){var html=["<label>"+Tablesaw.i18n.sort+":"];return html.push('<span class="button">&#160;<select>'),heads.each(function(j){var $t=$(this),isDefaultCol=$t.is("["+attrs.defaultCol+"]"),isDescending=$t.hasClass(classes.descend),isNumeric=!1;$(this.cells).slice(0,3).each(function(){return isNaN(parseInt(getSortValue(this),10))?void 0:(isNumeric=!0,!1)}),html.push("<option"+(isDefaultCol&&!isDescending?" selected":"")+' value="'+j+'_asc">'+$t.text()+" "+(isNumeric?"\u2191":"(A-Z)")+"</option>"),html.push("<option"+(isDefaultCol&&isDescending?" selected":"")+' value="'+j+'_desc">'+$t.text()+" "+(isNumeric?"\u2193":"(Z-A)")+"</option>")}),html.push("</select></span></label>"),html.join("")});var $toolbar=el.prev(".tablesaw-bar"),$firstChild=$toolbar.children().eq(0);$firstChild.length?$switcher.insertBefore($firstChild):$switcher.appendTo($toolbar),$switcher.find(".button").tablesawbtn(),$switcher.find("select").on("change",function(){var val=$(this).val().split("_"),head=heads.eq(val[0]);clearOthers(head.siblings()),el[pluginName]("sortBy",head.get(0),"asc"===val[1])})};addClassToTable(),heads=el.find("thead th[data-"+pluginName+"-col]"),addClassToHeads(heads),makeHeadsActionable(heads,headsOnAction),handleDefault(heads),el.is(sortableSwitchSelector)&&addSwitcher(heads,el.find("tbody tr:nth-child(-n+3)"))},getColumnNumber:function(col){return $(col).prevAll().length},getTableRows:function(){return $(this).find("tbody tr")},sortRows:function(rows,colNum,ascending,col){var cells,fn,sorted,getCells=function(rows){var cells=[];return $.each(rows,function(i,r){cells.push({cell:getSortValue($(r).children().get(colNum)),rowNum:i})}),cells},getSortFxn=function(ascending,forceNumeric){var fn,regex=/[^\-\+\d\.]/g;return fn=ascending?function(a,b){return forceNumeric||!isNaN(parseFloat(a.cell))?parseFloat(a.cell.replace(regex,""))-parseFloat(b.cell.replace(regex,"")):a.cell.toLowerCase()>b.cell.toLowerCase()?1:-1}:function(a,b){return forceNumeric||!isNaN(parseFloat(a.cell))?parseFloat(b.cell.replace(regex,""))-parseFloat(a.cell.replace(regex,"")):a.cell.toLowerCase()<b.cell.toLowerCase()?1:-1}},applyToRows=function(sorted,rows){var i,l,cur,newRows=[];for(i=0,l=sorted.length;l>i;i++)cur=sorted[i].rowNum,newRows.push(rows[cur]);return newRows};cells=getCells(rows);var customFn=$(col).data("tablesaw-sort");return fn=(customFn&&"function"==typeof customFn?customFn(ascending):!1)||getSortFxn(ascending,$(col).is("[data-sortable-numeric]")),sorted=cells.sort(fn),rows=applyToRows(sorted,rows)},replaceTableRows:function(rows){var el=$(this),body=el.find("tbody");body.html(rows)},makeColDefault:function(col,a){var c=$(col);c.attr(attrs.defaultCol,"true"),a?(c.removeClass(classes.descend),c.addClass(classes.ascend)):(c.removeClass(classes.ascend),c.addClass(classes.descend))},sortBy:function(col,ascending){var colNum,rows,el=$(this);colNum=el[pluginName]("getColumnNumber",col),rows=el[pluginName]("getTableRows"),rows=el[pluginName]("sortRows",rows,colNum,ascending,col),el[pluginName]("replaceTableRows",rows),el[pluginName]("makeColDefault",col,ascending)}};$.fn[pluginName]=function(arrg){var returnVal,args=Array.prototype.slice.call(arguments,1);return arrg&&"string"==typeof arrg?(returnVal=$.fn[pluginName].prototype[arrg].apply(this[0],args),"undefined"!=typeof returnVal?returnVal:$(this)):($(this).data(pluginName+"data")||($(this).data(pluginName+"active",!0),$.fn[pluginName].prototype._create.call(this,arrg)),$(this))},$.extend($.fn[pluginName].prototype,methods),$(document).on("tablesawcreate",function(e,Tablesaw){Tablesaw.$table.is(initSelector)&&Tablesaw.$table[pluginName]()})}(jQuery),function(win,$){function createMiniMap($table){function showMinimap($table){var mq=$table.attr(MM.attr.init);return!mq||win.matchMedia&&win.matchMedia(mq).matches}function showHideNav(){if(!showMinimap($table))return void $btns.hide();$btns.show();var dots=$dotNav.find("li").removeClass(hideDot);$table.find("thead th").each(function(i){"none"===$(this).css("display")&&dots.eq(i).addClass(hideDot)})}var $btns=$('<div class="tablesaw-advance minimap">'),$dotNav=$('<ul class="tablesaw-advance-dots">').appendTo($btns),hideDot="tablesaw-advance-dots-hide",$headerCells=$table.find("thead th");$headerCells.each(function(){$dotNav.append("<li><i></i></li>")}),$btns.appendTo($table.prev(".tablesaw-bar")),showHideNav(),$(win).on("resize",showHideNav),$table.bind("tablesawcolumns.minimap",function(){showHideNav()}).bind("tablesawdestroy.minimap",function(){var $t=$(this);$t.prev(".tablesaw-bar").find(".tablesaw-advance").remove(),$(win).off("resize",showHideNav),$t.unbind(".minimap")})}var MM={attr:{init:"data-tablesaw-minimap"}};$(document).on("tablesawcreate",function(e,Tablesaw){"swipe"!==Tablesaw.mode&&"columntoggle"!==Tablesaw.mode||!Tablesaw.$table.is("[ "+MM.attr.init+"]")||createMiniMap(Tablesaw.$table)})}(this,jQuery),function(win,$){var S={selectors:{init:"table[data-tablesaw-mode-switch]"},attributes:{excludeMode:"data-tablesaw-mode-exclude"},classes:{main:"tablesaw-modeswitch",toolbar:"tablesaw-toolbar"},modes:["stack","swipe","columntoggle"],init:function(table){var $table=$(table),ignoreMode=$table.attr(S.attributes.excludeMode),$toolbar=$table.prev(".tablesaw-bar"),modeVal="",$switcher=$("<div>").addClass(S.classes.main+" "+S.classes.toolbar).html(function(){var isSelected,html=["<label>"+Tablesaw.i18n.columns],dataMode=$table.attr("data-tablesaw-mode");html.push('<span class="button btn-select">&#160;<select>');for(var j=0,k=S.modes.length;k>j;j++)ignoreMode&&ignoreMode.toLowerCase()===S.modes[j]||(isSelected=dataMode===S.modes[j],isSelected&&(modeVal=S.modes[j]),html.push("<option"+(isSelected?" selected":"")+' value="'+S.modes[j]+'">'+Tablesaw.i18n.modes[j]+"</option>"));return html.push("</select></span></label>"),html.join("")}),$otherToolbarItems=$toolbar.find(".tablesaw-advance").eq(0);$otherToolbarItems.length?$switcher.insertBefore($otherToolbarItems):$switcher.appendTo($toolbar),$switcher.find(".button").tablesawbtn(),$switcher.find("select").bind("change",S.onModeChange)},onModeChange:function(){var $t=$(this),$switcher=$t.closest("."+S.classes.main),$table=$t.closest(".tablesaw-bar").nextUntil($table).eq(0),val=$t.val();$switcher.remove(),$table.data("table").destroy(),$table.attr("data-tablesaw-mode",val),$table.table()}};$(win.document).on("tablesawcreate",function(e,Tablesaw){Tablesaw.$table.is(S.selectors.init)&&S.init(Tablesaw.table)})}(this,jQuery),$(".js-selectall").click(function(){$(this).closest("table").find(".form-checkbox").prop("checked",this.checked)});