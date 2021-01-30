exports.calculate = function (co){
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g");
var fnCalls= new Array();
var EE= undefined
function calc(data){    
var c1B11=data['XLEW_1_11_2'];var c1A11=data['XLEW_1_11_1'];var c1B10=data['XLEW_1_10_2'];var c1A10=data['XLEW_1_10_1'];var c1B9=data['XLEW_1_9_2'];var c1A9=data['XLEW_1_9_1'];var c1B8=data['XLEW_1_8_2'];var c1A8=data['XLEW_1_8_1'];var c1B7=data['XLEW_1_7_2'];var c1A7=data['XLEW_1_7_1'];var c1B6=data['XLEW_1_6_2'];var c1A6=data['XLEW_1_6_1'];var c1B5=data['XLEW_1_5_2'];var c1A5=data['XLEW_1_5_1'];var c1B4=data['XLEW_1_4_2'];var c1A4=data['XLEW_1_4_1'];var c1B3=data['XLEW_1_3_2'];var c1A3=data['XLEW_1_3_1'];var c1C3=(((c1B3)*(c1A3)));var c1D3=(((((c1A3)*(2)))+(((c1B3)*(2)))));var c1C4=(((c1B4)*(c1A4)));var c1D4=(((((c1A4)*(2)))+(((c1B4)*(2)))));var c1C5=(((c1B5)*(c1A5)));var c1D5=(((((c1A5)*(2)))+(((c1B5)*(2)))));var c1C6=(((c1B6)*(c1A6)));var c1D6=(((((c1A6)*(2)))+(((c1B6)*(2)))));var c1C7=(((c1B7)*(c1A7)));var c1D7=(((((c1A7)*(2)))+(((c1B7)*(2)))));var c1C8=(((c1B8)*(c1A8)));var c1D8=(((((c1A8)*(2)))+(((c1B8)*(2)))));var c1C9=(((c1B9)*(c1A9)));var c1D9=(((((c1A9)*(2)))+(((c1B9)*(2)))));var c1C10=(((c1B10)*(c1A10)));var c1D10=(((((c1A10)*(2)))+(((c1B10)*(2)))));var c1C11=(((c1B11)*(c1A11)));var c1D11=(((((c1A11)*(2)))+(((c1B11)*(2)))));var c1E3=(Math.pow((c1D3),(3)));var c1F3=(Math.pow((c1C3),(3)));var c1E4=(Math.pow((c1D4),(3)));var c1F4=(Math.pow((c1C4),(3)));var c1E5=(Math.pow((c1D5),(3)));
 var c1F5=(Math.pow((c1C5),(3)));var c1E6=(Math.pow((c1D6),(3)));var c1F6=(Math.pow((c1C6),(3)));var c1E7=(Math.pow((c1D7),(3)));var c1F7=(Math.pow((c1C7),(3)));var c1E8=(Math.pow((c1D8),(3)));var c1F8=(Math.pow((c1C8),(3)));var c1E9=(Math.pow((c1D9),(3)));var c1F9=(Math.pow((c1C9),(3)));var c1E10=(Math.pow((c1D10),(3)));var c1F10=(Math.pow((c1C10),(3)));var c1E11=(Math.pow((c1D11),(3)));var c1F11=(Math.pow((c1C11),(3)));data['XLEW_1_11_6']=c1F11;data['XLEW_1_11_5']=c1E11;data['XLEW_1_11_4']=c1D11;data['XLEW_1_11_3']=c1C11;data['XLEW_1_10_6']=c1F10;data['XLEW_1_10_5']=c1E10;data['XLEW_1_10_4']=c1D10;data['XLEW_1_10_3']=c1C10;data['XLEW_1_9_6']=c1F9;data['XLEW_1_9_5']=c1E9;data['XLEW_1_9_4']=c1D9;data['XLEW_1_9_3']=c1C9;data['XLEW_1_8_6']=c1F8;data['XLEW_1_8_5']=c1E8;data['XLEW_1_8_4']=c1D8;data['XLEW_1_8_3']=c1C8;data['XLEW_1_7_6']=c1F7;data['XLEW_1_7_5']=c1E7;data['XLEW_1_7_4']=c1D7;data['XLEW_1_7_3']=c1C7;data['XLEW_1_6_6']=c1F6;data['XLEW_1_6_5']=c1E6;data['XLEW_1_6_4']=c1D6;data['XLEW_1_6_3']=c1C6;data['XLEW_1_5_6']=c1F5;data['XLEW_1_5_5']=c1E5;data['XLEW_1_5_4']=c1D5;data['XLEW_1_5_3']=c1C5;data['XLEW_1_4_6']=c1F4;data['XLEW_1_4_5']=c1E4;data['XLEW_1_4_4']=c1D4;data['XLEW_1_4_3']=c1C4;data['XLEW_1_3_6']=c1F3;data['XLEW_1_3_5']=c1E3;data['XLEW_1_3_4']=c1D3;
 data['XLEW_1_3_3']=c1C3; data['fnCalls']= fnCalls; if(typeof EE !== 'undefined') { data['EE'] = EE; } return JSON.stringify(data);};
function ssccf1n(op,id,css,data1) {
                                        var op = JSON.stringify(op);		
                                        var id = JSON.stringify(id);
                                        var css = JSON.stringify(css);
                                        var data1 = JSON.stringify(data1);
	                                    fnCalls.push('ssccf1n('+ op + ',' + id + ',' + css + ',' + data1 + ')');	
                                    }
                                    function ssccf4n(op,id,colors,data1,data2,data3,data4){
										var op = JSON.stringify(op);		
                                        var id = JSON.stringify(id);
										var colors = JSON.stringify(colors);                                
                                        var data1 = JSON.stringify(data1);
										var data2 = JSON.stringify(data2);
										var data3 = JSON.stringify(data3);
										var data4 = JSON.stringify(data4);
	                                    fnCalls.push('ssccf4n('+ op + ',' + id + ',' + colors + ',' + data1 + ',' + data2 + ',' + data3 + ',' + data4 + ')');
									}
function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};
return calc(co);
}
