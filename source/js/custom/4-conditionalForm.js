/**
 * dependsOn v1.0.1
 * a jQuery plugin to facilitate the handling of form field dependencies.
 *
 * Copyright 2014 David Street
 * Licensed under the MIT license.
 */

(function(c){var d=function(e,f){this.selector=e;this.$dependencyObj=c(e);this.qualifiers=f};d.prototype.enabled=function(e){if(c(this.selector+"[disabled]").length>0){if(e){return false}}else{if(!e){return false}}return true};d.prototype.checked=function(e){if(this.$dependencyObj.attr("type")==="checkbox"){if((!this.$dependencyObj.is(":checked")&&e)||(this.$dependencyObj.is(":checked")&&!e)){return false}}return true};d.prototype.values=function(f){var j=this.$dependencyObj.val(),h=f.length,g=0,e=false;if(this.$dependencyObj.attr("type")==="radio"){j=this.$dependencyObj.filter(":checked").val()}for(g;g<h;g+=1){if(typeof(j)==="array"||typeof(j)==="object"){if(c(this.$dependencyObj.val()).not(c(f[g])).length===0&&c(f[g]).not(c(this.$dependencyObj.val())).length===0){e=true;break}}else{if(f[g]===j){e=true;break}}}return e};d.prototype.not=function(e){var h=this.$dependencyObj.val(),g=e.length,f=0;for(f;f<g;f+=1){if(e[f]===h){return false}}return true};d.prototype.match=function(e){var g=this.$dependencyObj.val(),f=e;return f.test(g)};d.prototype.contains=function(e){var g=this.$dependencyObj.val(),f=0;if(typeof(g)==="array"||typeof(g)==="object"){for(f in e){if(c.inArray(e[f],g)!==-1){return true}}}else{return this.values(e)}return false};d.prototype.email=function(f){var e=/^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/;return(this.match(e)===f)};d.prototype.url=function(e){var f=/(((http|ftp|https):\/\/)|www\.)[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?\^=%&:\/~\+#!]*[\w\-\@?\^=%&\/~\+#])?/g;return(this.match(f)===e)};d.prototype.doesQualify=function(){var e=0;for(e in this.qualifiers){if(d.prototype.hasOwnProperty(e)&&typeof(d.prototype[e])==="function"){if(!this[e](this.qualifiers[e])){return false}}else{if(typeof(this.qualifiers[e]==="function")){return this.qualifiers[e](this.$dependencyObj.val())}}}return true};var a=function(e){var f=0;this.dependencies=[];for(f in e){this.dependencies.push(new d(f,e[f]))}};a.prototype.doesQualify=function(){var f=this.dependencies.length,g=0,e=true;for(g;g<f;g+=1){if(!this.dependencies[g].doesQualify()){e=false;break}}return e};var b=function(e,g,f){this.dependencySets=[];this.$subject=e;this.settings=c.extend({disable:true,hide:true,duration:200,onEnable:function(){},onDisable:function(){}},f);this.enableCallback=function(){};this.disableCallback=function(){};this.init(g)};b.prototype.init=function(e){this.addSet(e);this.check(true)};b.prototype.addSet=function(j){var f=this,e=0,h=0,i=0,g;this.dependencySets.push(new a(j));e=this.dependencySets.length-1;h=this.dependencySets[e].dependencies.length;for(i;i<h;i+=1){g=this.dependencySets[e].dependencies[i];g.$dependencyObj.on("change",function(k){f.triggeredEvent=k;f.triggeredDependency=this;f.check()});if(g.$dependencyObj.attr("type")==="text"){g.$dependencyObj.on("keypress",function(k){if(k.which&&g.$dependencyObj.is(":focus")){if(f.check()){f.triggeredEvent=k;f.triggeredDependency=this;f.check()}}})}}};b.prototype.or=function(e){this.addSet(e);this.check(false);return this};b.prototype.enable=function(e){var h=this.$subject,g=this.$subject.attr("id"),f;if(this.settings.hasOwnProperty("valueTarget")&&this.settings.valueTarget!==undefined){h=c(this.settings.valueTarget)}else{if(this.$subject[0].nodeName.toLowerCase()!=="input"&&this.$subject[0].nodeName.toLowerCase()!=="textarea"&&this.$subject[0].nodeName.toLowerCase()!=="select"){h=this.$subject.find("input, textarea, select")}}if(this.settings.disable){this.$subject.removeAttr("disabled")}if(this.settings.hide){if(this.$subject.parent()[0].nodeName.toLowerCase()==="label"){f=this.$subject.parent()}else{f=this.$subject.add('label[for="'+g+'"]')}if(f.css("display")==="none"){if(e){f.show()}else{f.fadeIn(this.settings.duration)}}}if(this.settings.hasOwnProperty("valueOnEnable")&&this.settings.valueOnEnable!==undefined){h.val(this.settings.valueOnEnable)}if(this.settings.hasOwnProperty("checkOnEnable")){if(this.settings.checkOnEnable){h.attr("checked","checked")}else{h.removeAttr("checked")}}if(this.settings.hasOwnProperty("toggleClass")&&this.settings.toggleClass!==undefined){this.$subject.addClass(this.settings.toggleClass)}this.settings.onEnable.call(this.triggeredDependency,this.triggeredEvent)};b.prototype.disable=function(e){var h=this.$subject,g=this.$subject.attr("id"),f;if(this.settings.hasOwnProperty("valueTarget")&&this.settings.valueTarget!==undefined){h=c(this.settings.valueTarget)}else{if(this.$subject[0].nodeName.toLowerCase()!=="input"&&this.$subject[0].nodeName.toLowerCase()!=="textarea"&&this.$subject[0].nodeName.toLowerCase()!=="select"){h=this.$subject.find("input, textarea, select")}}if(this.settings.disable){this.$subject.attr("disabled","disabled")}if(this.settings.hide){if(this.$subject.parent()[0].nodeName.toLowerCase()==="label"){f=this.$subject.parent()}else{f=this.$subject.add('label[for="'+g+'"]')}if(e){f.css({display:"none"})}else{f.fadeOut(this.settings.duration)}}if(this.settings.hasOwnProperty("valueOnDisable")&&this.settings.valueOnDisable!==undefined){h.val(this.settings.valueOnDisable)}if(this.settings.hasOwnProperty("checkOnDisable")){if(this.settings.checkOnDisable){h.attr("checked","checked")}else{h.removeAttr("checked")}}if(this.settings.hasOwnProperty("toggleClass")&&this.settings.toggleClass!==undefined){this.$subject.removeClass(this.settings.toggleClass)}this.settings.onDisable.call(this.triggeredDependency,this.triggeredEvent)};b.prototype.check=function(h){var g=this.dependencySets.length,f=0,e=false;for(f;f<g;f+=1){if(this.dependencySets[f].doesQualify()){e=true;break}}if(e){this.enable(h);return true}else{this.disable(h);return false}};c.fn.dependsOn=function(g,e){var f=new b(this,g,e);return f}})(jQuery);


function dependsOn() {

  // Group size
  if ($('#groupsize').length) {

    $('#grouplarger').dependsOn({
      '#groupsize': {
        values: ['larger', 'between']
      }
    });

    $('#groupsmaller').dependsOn({
      '#groupsize': {
        values: ['smaller', 'between']
      }
    });

    $('#groupbetween').dependsOn({
      '#groupsize': {
        values: ['between']
      }
    });

  };

  // Creation date
  if ($('#datecreated').length) {

    $('#createdbefore').dependsOn({
      '#datecreated': {
        values: ['before', 'between']
      }
    });

    $('#createdafter').dependsOn({
      '#datecreated': {
        values: ['after', 'between']
      }
    });

    $('#createdbetween').dependsOn({
      '#datecreated': {
        values: ['between']
      }
    });

  };


  // Date of event
  if ($('#dateevent').length) {

    $('#eventbefore').dependsOn({
      '#dateevent': {
        values: ['before', 'between']
      }
    });

    $('#eventafter').dependsOn({
      '#dateevent': {
        values: ['after', 'between']
      }
    });

    $('#eventbetween').dependsOn({
      '#dateevent': {
        values: ['between']
      }
    });

  };

  // Group Skills

    if ($('#group-skills').length) {

      $('#group-skills').dependsOn({
        '#group-type': {
          contains: ['nothing', 'skills-based'],
        }
      }, {
        hide: false,
        onDisable: function() {
          $('#group-skills').trigger('chosen:updated');
        },
        onEnable: function() {
          $('#group-skills').trigger('chosen:updated');
        },
      });
    }


  // Groups is depending on my groups checkbox is false
  if ($('#groups').length) {

    $('#groups').dependsOn({
      '#mygroups': {
        checked: false,
      }
    }, {
      hide: false,
      onDisable: function() {
        $('#groups').trigger('chosen:updated');
      },
      onEnable: function() {
        $('#groups').trigger('chosen:updated');
      },
    });
  }

};
