//Ordena��o
var sPag=document.location.href.toUpperCase();
if(sPag.indexOf("/PROD,")==-1){sConcat="&";sCharSep="=";} else {sConcat=",";sCharSep=",";}
if(iQtdProds>2){
sOrdenacao="<table><tr><td>";
  sOrdenacao+="&nbsp;Ordenar por: <select id=OrderProd class=smSelect onchange=NewOrder()>";
  sOrdenacao+="<option value=-1>Selecione</option>";
  sOrdenacao+="<option value=0>Padr�o</option>";
  sOrdenacao+="<option value=1>Lan�amentos</option>";
  sOrdenacao+="<option value=2>Destaques</option>";
  sOrdenacao+="<option value=3>Nomes das categorias</option>";
  sOrdenacao+="<option value=4>Nomes dos produtos</option>";
  sOrdenacao+="<option value=5>Avalia��es dos clientes</option>";
  sOrdenacao+="<option value=6>Pre�os menores</option>";
  sOrdenacao+="<option value=7>Pre�os maiores</option>";
  sOrdenacao+="</select>&nbsp;&nbsp;";
  sOrdenacao+="</td></tr></table>"; 
}

document.getElementById('idPagProdTop').innerHTML="<div id='idDivPagProd'><table width='100%' bgcolor='#f7f7f7' height='30'><tr><td>"+ sOrdenacao +"</td></tr></table></div>";

var oOrder=document.getElementById('OrderProd');
var posOrder=sPag.indexOf("ORDER"+sCharSep);
if(posOrder!=-1){
  var iOrderCurrent=sPag.substr(posOrder+6,1);
  if(!isNaN(iOrderCurrent))if(iOrderCurrent>=0){
    var i=0;
    while(i<oOrder.length && oOrder.options[i].value!=iOrderCurrent)i++;
    if(i<oOrder.length)oOrder.selectedIndex=i;
  }
}

function NewOrder(){
  var iOrder=oOrder.options[oOrder.selectedIndex].value;
  if(iOrder>=0){
    if(posOrder!=-1){ //encontrou order, substitui
      var sLoc=document.location.href.replace(new RegExp('order'+sCharSep+iOrderCurrent),'order'+sCharSep+iOrder);
    }
    else{ //se n�o encontrar
      if(sPag.indexOf("IDLOJA")>0){  //insere via subst idloja com order depois
        var sLoc=document.location.href.replace(new RegExp('idloja'+sCharSep+FC$.IDLoja,'gi'),'idloja'+sCharSep+FC$.IDLoja+sConcat+'order'+sCharSep+iOrder);
      }  
      else{ //n�o tem idloja
        if(sPag.indexOf("?")>0){  //insere via subst idloja com order depois
          var sLoc=document.location.href+sConcat+'order'+sCharSep+iOrder;
        }
        else{
          var sLoc=document.location.href+'?order='+iOrder;
        }
      }
    }
    console.log('loc='+sLoc);
    document.location.href=sLoc;
  }
}