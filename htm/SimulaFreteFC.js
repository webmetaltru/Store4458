function ShowCEP(IDProduto){
  sNumCEP=GetCookie('CEP'+IDLojaNum);
  if(sNumCEP==null)sNumCEP="";
  sCEP="<div class='simulacao-frete'>";
  sCEP+="<label class='cep'>";
  sCEP+="Informe seu CEP: ";
  sCEP+="<input type='text' id='idZip"+ IDProduto +"' size='7' value='"+ sNumCEP +"' maxlength='9' class='ZipInputButton'>";
  sCEP+="&nbsp;<input type='button' value='Calcular' id='idBut"+ IDProduto +"' class='ZipSubmitButton' onclick='GetShippingValues("+ IDProduto +","+ IDProduto +")'>";
  sCEP+="</label>";
  sCEP+="<img src='images/loadingCEP.gif' vspace=3 style='display:none;' id=ImgLoadingCEP><div id='idShippingValues"+ IDProduto +"'></div>";
  sCEP+="</div>";
  document.getElementById('ShowCEP'+IDProduto).innerHTML=sCEP;
}

function GetShippingValues(IDZip,IDProd){
  sCEP=document.getElementById("idZip"+ IDZip).value;
  SetCookie('CEP'+IDLojaNum,sCEP);
  if(sCEP==""){document.getElementById("idShippingValues"+IDProd).innerHTML="<span style=color:#990000;>Informe o CEP</span>";return;}
  document.getElementById("idShippingValues"+IDProd).innerHTML="";
  document.getElementById("ImgLoadingCEP").style.display='';
  if(IDProd)var sParamProd="&idproduto="+ IDProd;
  else var sParamProd="";
  AjaxExecFC("/XMLShippingCEP.asp","IDLoja="+ IDLojaNum +"&cep="+ sCEP + sParamProd,false,processXMLCEP,IDZip);
}

function processXMLCEP(obj,IDProd){
  var sShipping="";
  var oShippingValues=document.getElementById("idShippingValues"+IDProd);
  var iErr=ReadXMLNode(obj,"err");if(iErr==null)return;
  if(iErr!="0"){
    document.getElementById("ImgLoadingCEP").style.display='none';
    oShippingValues.innerHTML="<div class='resultado-frete'>"+ ReadXMLNode(obj,"msg") +"</div>";
    return;
  }
  oShippingValues.innerHTML="";
  var UseCart=ReadXMLNode(obj,"UseCart");
  if(UseCart=="False"){
    var ProdName=ReadXMLNode(obj,"ProdName");
    var ProdRef=ReadXMLNode(obj,"ProdRef");  
  }
  var iOpt=ReadXMLNode(obj,"OptQt");
  sValorFrete=ReadXMLNode(obj,"Opt1Value");
  if(sValorFrete=="R$ 0,00")sValorFrete="FRETE GRÁTIS";
  sShipping+="<table cellpadding=3 align=center>";
  sShipping+="<tr><td class='ZipName'>"+ ReadXMLNode(obj,"Opt1Name") +"</td><td class='ZipObsVal'>"+ ReadXMLNode(obj,"Opt1Obs") + " (dias úteis)</td><td class='ZipValue' align='right'>"+ sValorFrete +"</td></tr>";
  sShipping+="</table>";
  oShippingValues.innerHTML=sShipping;
  oShippingValues.style.display="block";
  document.getElementById("ImgLoadingCEP").style.display='none';
}



function GetCookie(name){
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen){
    var j=i+alen;
    if(document.cookie.substring(i,j)==arg)return getCookieVal(j);
    i=document.cookie.indexOf(" ",i)+1;
    if(i==0)break;
  }
  return null;
}

function getCookieVal(offset){
  var endstr=document.cookie.indexOf(";",offset);
  if (endstr==-1)endstr=document.cookie.length;
  return unescape(document.cookie.substring(offset,endstr));
}

function SetCookie(name,value){
  var argv=SetCookie.arguments;
  var argc=SetCookie.arguments.length;
  var expires=(argc>2)?argv[2]:null;
  var path=(argc>3)?argv[3]:null;
  var domain=(argc>4)?argv[4]:null;
  var secure=(argc>5)?argv[5]:false;
  document.cookie=name+"="+escape(value)+((expires==null)?"":(";expires=" + expires.toGMTString()))+((path==null)?"":(";path="+path))+((domain==null)?"":(";domain="+domain))+((secure==true)?"; secure":"");
}