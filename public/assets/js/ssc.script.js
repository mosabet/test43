/* Licensed under the SpreadsheetConverter *//*!
                 * ssc.script.js
                 */
 
var ssc=ssc||{};ssc.pendingUploads=0;ssc.recalcSource='';ssc.APPNAME='test43';ssc.exMsg='The fields with the red border are required or invalid.';ssc.asyncRecalc=true;
        $(function(){
            var calendar_dateFormats = {};
            var defaultDateFmt = 'm/d/yyyy';
ssc.active_sheet_selector = 'div.active > div.container-fluid.ssc-responsive-sheet > div.row > section';

$('a').on('click',function (e) {	
				var href = $(this).attr('href');
				if(href.slice(0,1) == '#'){				
					e.preventDefault();	
                    if(href=='#') return;
					var $target = $(href);
					if($target.length == 0){
						alert('Oops! This link is broken so can not navigate.');
						return;
					}
					focused=false;
					ssc.focusOnElement($target);
				}
			});

                ssc.focusOnElement = function(elem){
                    if(focused) return;
                    focused=true;
                    var tab = elem.parents('.tab-pane');
				    if(!tab.hasClass('active')){
					    $('.nav-tabs a[href="#' + tab.attr('id') + '"]').tab('show');
				    }

				    $('html, body').stop().animate(
				    {
					    'scrollTop': elem.offset().top - 40			
				    }, 
				    900, 
				    'swing', 
				    function () {
					    elem.focus();						
				    });
                }
            recalc_onclick('');
               var focusCtrl=$('input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea,a.ui-state-active');			               
			                                if(focusCtrl!= undefined && focusCtrl.filter(':first').hasClass('form-control')==false){
				                                focusCtrl.filter(':first').focus();
			                                }
        });ssc.Dialog={};ssc.Dialog.BeforeSubmitDesc='The form is being submitted.';ssc.Dialog.OfflineHeading='Save until online';ssc.Dialog.OfflineDesc='You are currently offline and the submit failed. Do you want to save the submit and send it later when you are online.';
                ssc.Dialog.OfflineConfirm='Do you want to save?';ssc.Dialog.OfflineSubmitHeading='Offline forms submit confirmation';ssc.Dialog.OfflineSubmitDesc='There are Offline form(s), which are now ready to submit in server.';ssc.Dialog.OfflineSubmitConfirm='Do you want to submit?';
                ssc.Dialog.FailOfflineHeading='Offline Form submit failed';ssc.Dialog.FailOfflineDesc='Unable to connect to the Internet. Please try submitting the offline forms later in internet connection.';ssc.Dialog.OfflineSubmitWait='It may take sometime to finish all submits depending on the size of offline forms and internet connection.';ssc.Dialog.OfflineSubmitWaitCounter='Left';

ssc.checkIfMSIE = function() {
    var a = window.navigator.userAgent,
        b = a.indexOf('MSIE '),
        c = a.indexOf('.NET CLR');
    return !(-1 === b && -1 === c)
};
    
            $(window).resize(function(){
            <!--To solve bug: On resizing the browser, the message was popping up. -->
                hideValidateMessage();
            });

            function hideValidateMessage(){
            var $msgBoard = $('#messageBoard');
            $msgBoard.css('top',-$msgBoard.outerHeight());           
        }
        function showValidateMessage(message){
            var $msgboard = $('#messageBoard');
			$msgboard.children('span').children('h3').html(message);           			  
			$msgboard.animate({top:'0'}, 500);	
           
        }
function calc(data) {
		var strJson = JSON.stringify(data);
		jQuery.ajax({
			type:'Post',
            async: ssc.asyncRecalc,
			url:  [location.protocol, '//', location.host, location.pathname].join('') + 'calc',
			data:strJson,
			dataType:'json',
            contentType: 'application/json',
			success:function(co){
				populate(co);              
			}
		});
		}
var co = new Object;
function recalc_onclick(ctl) {
  if (true) {
co['XLEW_1_3_1']=eeparseFloat(document.getElementById('XLEW_1_3_1').value);co['XLEW_1_3_2']=eeparseFloat(document.getElementById('XLEW_1_3_2').value);co['XLEW_1_4_1']=eeparseFloat(document.getElementById('XLEW_1_4_1').value);co['XLEW_1_4_2']=eeparseFloat(document.getElementById('XLEW_1_4_2').value);co['XLEW_1_5_1']=eeparseFloat(document.getElementById('XLEW_1_5_1').value);co['XLEW_1_5_2']=eeparseFloat(document.getElementById('XLEW_1_5_2').value);co['XLEW_1_6_1']=eeparseFloat(document.getElementById('XLEW_1_6_1').value);co['XLEW_1_6_2']=eeparseFloat(document.getElementById('XLEW_1_6_2').value);co['XLEW_1_7_1']=eeparseFloat(document.getElementById('XLEW_1_7_1').value);co['XLEW_1_7_2']=eeparseFloat(document.getElementById('XLEW_1_7_2').value);co['XLEW_1_8_1']=eeparseFloat(document.getElementById('XLEW_1_8_1').value);co['XLEW_1_8_2']=eeparseFloat(document.getElementById('XLEW_1_8_2').value);co['XLEW_1_9_1']=eeparseFloat(document.getElementById('XLEW_1_9_1').value);co['XLEW_1_9_2']=eeparseFloat(document.getElementById('XLEW_1_9_2').value);co['XLEW_1_10_1']=eeparseFloat(document.getElementById('XLEW_1_10_1').value);co['XLEW_1_10_2']=eeparseFloat(document.getElementById('XLEW_1_10_2').value);co['XLEW_1_11_1']=eeparseFloat(document.getElementById('XLEW_1_11_1').value);co['XLEW_1_11_2']=eeparseFloat(document.getElementById('XLEW_1_11_2').value);ssc.recalcSource = ctl;calc(co);
};};
function populate(co){if(co['EE'] !== undefined){
                                                var widgets = co['EE'].eeGlobal;if(EE.eeGlobalRevision == 1){EE.eeGlobal = widgets;for(k in widgets){widgets[k].rev = EE.eeGlobalRevision;}}else{for(id in co['EE'].eeGlobal){
                                                    switch(widgets[id].f){case 'dynamicDropdown':  
	                                                EE.sscwidget2d(widgets[id].f, widgets[id].id, widgets[id].n1, widgets[id].n2, widgets[id].n3, widgets[id].n4, widgets[id].s1, widgets[id].s2, widgets[id].s3, widgets[id].s4, 
	                                                widgets[id].na1.arr, widgets[id].na1.from_x, widgets[id].na1.from_y, widgets[id].na1.to_x, widgets[id].na1.to_y,
	                                                widgets[id].na2.arr, widgets[id].na2.from_x, widgets[id].na2.from_y, widgets[id].na2.to_x, widgets[id].na2.to_y,
	                                                widgets[id].na3.arr, widgets[id].na3.from_x, widgets[id].na3.from_y, widgets[id].na3.to_x, widgets[id].na3.to_y,
	                                                widgets[id].sa1.arr, widgets[id].sa1.from_x, widgets[id].sa1.from_y, widgets[id].sa1.to_x, widgets[id].sa1.to_y,
	                                                widgets[id].sa2.arr, widgets[id].sa2.from_x, widgets[id].sa2.from_y, widgets[id].sa2.to_x, widgets[id].sa2.to_y,
	                                                widgets[id].sa3.arr, widgets[id].sa3.from_x, widgets[id].sa3.from_y, widgets[id].sa3.to_x, widgets[id].sa3.to_y);
                                                    break; 
                                                    case 'renderMaps': 
                                                    case 'linkImageCallback':
                                                    case 'barcodeCallback': 
                                                    case 'qrcodeCallback':
                                                    case 'calendarCallback': 
                                                    EE.sscwidget1d(widgets[id].f, widgets[id].id, widgets[id].n1, widgets[id].n2, widgets[id].n3, widgets[id].n4, widgets[id].s1, widgets[id].s2, widgets[id].s3, widgets[id].s4, 
	                                                widgets[id].nv1.arr, widgets[id].nv1.from_, widgets[id].nv1.to_,
                                                    widgets[id].nv2.arr, widgets[id].nv2.from_, widgets[id].nv2.to_, 
	                                                widgets[id].nv3.arr, widgets[id].nv3.from_, widgets[id].nv3.to_, 
	                                                widgets[id].sv1.arr, widgets[id].sv1.from_, widgets[id].sv1.to_, 
	                                                widgets[id].sv2.arr, widgets[id].sv2.from_, widgets[id].sv2.to_,
	                                                widgets[id].sv3.arr, widgets[id].sv3.from_, widgets[id].sv3.to_);
                                                    break;}
                                                }}}document.getElementById('XLEW_1_3_3').value=eedisplayFloat(co['XLEW_1_3_3']);document.getElementById('XLEW_1_3_4').value=eedisplayFloat(co['XLEW_1_3_4']);
document.getElementById('XLEW_1_3_5').value=eedisplayFloatNDTh(co['XLEW_1_3_5'],2);document.getElementById('XLEW_1_3_6').value=eedisplayFloatNDTh(co['XLEW_1_3_6'],2);document.getElementById('XLEW_1_4_3').value=eedisplayFloat(co['XLEW_1_4_3']);document.getElementById('XLEW_1_4_4').value=eedisplayFloat(co['XLEW_1_4_4']);document.getElementById('XLEW_1_4_5').value=eedisplayFloatNDTh(co['XLEW_1_4_5'],2);document.getElementById('XLEW_1_4_6').value=eedisplayFloatNDTh(co['XLEW_1_4_6'],2);document.getElementById('XLEW_1_5_3').value=eedisplayFloat(co['XLEW_1_5_3']);document.getElementById('XLEW_1_5_4').value=eedisplayFloat(co['XLEW_1_5_4']);document.getElementById('XLEW_1_5_5').value=eedisplayFloatNDTh(co['XLEW_1_5_5'],2);document.getElementById('XLEW_1_5_6').value=eedisplayFloatNDTh(co['XLEW_1_5_6'],2);document.getElementById('XLEW_1_6_3').value=eedisplayFloat(co['XLEW_1_6_3']);document.getElementById('XLEW_1_6_4').value=eedisplayFloat(co['XLEW_1_6_4']);document.getElementById('XLEW_1_6_5').value=eedisplayFloatNDTh(co['XLEW_1_6_5'],2);document.getElementById('XLEW_1_6_6').value=eedisplayFloatNDTh(co['XLEW_1_6_6'],2);document.getElementById('XLEW_1_7_3').value=eedisplayFloat(co['XLEW_1_7_3']);document.getElementById('XLEW_1_7_4').value=eedisplayFloat(co['XLEW_1_7_4']);document.getElementById('XLEW_1_7_5').value=eedisplayFloatNDTh(co['XLEW_1_7_5'],2);document.getElementById('XLEW_1_7_6').value=eedisplayFloatNDTh(co['XLEW_1_7_6'],2);document.getElementById('XLEW_1_8_3').value=eedisplayFloat(co['XLEW_1_8_3']);
document.getElementById('XLEW_1_8_4').value=eedisplayFloat(co['XLEW_1_8_4']);document.getElementById('XLEW_1_8_5').value=eedisplayFloatNDTh(co['XLEW_1_8_5'],2);document.getElementById('XLEW_1_8_6').value=eedisplayFloatNDTh(co['XLEW_1_8_6'],2);document.getElementById('XLEW_1_9_3').value=eedisplayFloat(co['XLEW_1_9_3']);document.getElementById('XLEW_1_9_4').value=eedisplayFloat(co['XLEW_1_9_4']);document.getElementById('XLEW_1_9_5').value=eedisplayFloatNDTh(co['XLEW_1_9_5'],2);document.getElementById('XLEW_1_9_6').value=eedisplayFloatNDTh(co['XLEW_1_9_6'],2);document.getElementById('XLEW_1_10_3').value=eedisplayFloat(co['XLEW_1_10_3']);document.getElementById('XLEW_1_10_4').value=eedisplayFloat(co['XLEW_1_10_4']);document.getElementById('XLEW_1_10_5').value=eedisplayFloatNDTh(co['XLEW_1_10_5'],2);document.getElementById('XLEW_1_10_6').value=eedisplayFloatNDTh(co['XLEW_1_10_6'],2);document.getElementById('XLEW_1_11_3').value=eedisplayFloat(co['XLEW_1_11_3']);document.getElementById('XLEW_1_11_4').value=eedisplayFloat(co['XLEW_1_11_4']);document.getElementById('XLEW_1_11_5').value=eedisplayFloatNDTh(co['XLEW_1_11_5'],2);document.getElementById('XLEW_1_11_6').value=eedisplayFloatNDTh(co['XLEW_1_11_6'],2);
    if(co['fnCalls'] !== undefined){
    co['fnCalls'].forEach(function(element,index,array){
	    eval(element);
    });
}
};
function TriggerOnchange(hiddenId)
{
    var e = jQuery.Event('change');
    $('#'+hiddenId).trigger(e);
}
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g");
function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};
function eequerystring(){
    var variable,key,value,ii,querystring,variables;querystring=decodeURI(document.location.search);
    if(querystring.length>0){
        variables=querystring.substring(1).split('&');
        for(ii=0;ii<variables.length;ii++){
            variable=variables[ii].split('=');
            key=variable[0];
            value=variable[1];
            ssc.formBinder.bind(key, value);
        }
    }
}
      function LoadFromQueryString(){
    eequerystring();
    var querystring=document.location.search;if(querystring.length>1){recalc_onclick('');}
    }
function navigate(e){var t=e.keyCode|e.which;if(t!=13&&t!=40&&t!=38)return;var n=$(e.target||e.srcElement);if(n.is("textarea"))return;if(n.is("select")&&(t==38||t==40))return;var r=parseInt(n.attr("data-sheet"),10);var i=parseInt(n.attr("data-row"),10);var s=parseInt(n.attr("data-col"),10);var o=false;var u=$("#sheet-"+r+"");var a='input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';var f=i+1;var l=i-1;var c=f;var h=l;while(t==40&&f<=c||t==38&&l>=h){var p=u.find(a).filter("[data-sheet="+r+"][data-row="+(t==38?l:f)+"][data-col="+s+"]");if(p.length>0){p.focus();if(p.is("input:text, textarea"))p.select();o=true;break}else{var d;if(u.data("col"+s)==undefined){d=u.find(a).filter("[data-sheet="+r+"][data-col="+s+"]").map(function(){return parseInt($(this).attr("data-row"),10)}).toArray();u.data("col"+s,d)}else{d=u.data("col"+s)}c=d[d.length-1];h=d[0];var v="indexOf"in Array.prototype?d.indexOf(i):$.inArray(i,d);if(t==40&&i<c){f=d[v+1]}else if(t==38&&i>h){l=d[v-1]}else{break}}}if(!o){var m;if(t==38)m=parseInt(n.attr("tabindex"),10)-1;else m=parseInt(n.attr("tabindex"),10)+1;var g=u.find(a).filter("[data-sheet][data-row][data-col][tabindex="+m+"]");if(g.length>0){if(g.is(":radio"))g=g.filter(":checked");if(g.length>0){g.focus();if(g.is("input:text, textarea"))g.select()}}else{var y=u.find(a).filter("[data-sheet][data-row][data-col][tabindex]:first");y.focus();if(y.is("input:text, textarea"))y.select()}}e.preventDefault?e.preventDefault():e.returnValue=false}
/* Finds out if the element is hidden by its parent tr */
                    jQuery.expr[':'].hiddenByParent = function(a) {
                        /* Skip the hidden form elements */
                        if(a.id.startsWith('xl_')) return true;
                        var isHiddenByParent=false;        
                        var elem = $(a);
                        if(elem !=undefined)
                        {
                            /* if the row is hidden */
                            isHiddenByParent = elem.closest("tr[class^='_css']").css('display') != 'none';
                        }

                        if(isHiddenByParent == true)
                        {
                            /* if whole tab is hidden */
                            isHiddenByParent = elem.closest('.tab-pane>div').css('display') != 'none';
                        }
                        return isHiddenByParent;                        
                    };var ssccf1n = function(op,id,css,data1){	
	                switch(op)
	                {
                        						case 'image':                               
                            $('#' + id).attr('src',$('#'+data1).attr('src'));
                        break;
      		
	                }
                }; 
                var ssccf4n = function(op,id,colors,data1,data2,data3,data4){
                    switch(op)
                    {
                           
                    }
                };
                    function calendarCallback(data){
                    var calendarType = $('#' + data.id).data('caltype'); 
                    var datepickerId =  calendarType == 'popup' ?  data.id : 'cal_' +  data.id, $datepicker = $('#' + datepickerId); 
                    var calcDate = data.s1;		
					if($datepicker.data('is-dirty') === undefined){ 						
                        if(calcDate != '' && !isNaN(calcDate)) {
						    $datepicker.datepicker('update', new Date(year(calcDate), eemonth(calcDate)-1, eeday(calcDate)));
                            EE.eeRecalcNeeded = true;						    
                        }
					}
               }

