"use strict";

// Falta R$xxx,xx para frete grátis

  function updateHeaderFreight(){FCLib$.fnAjaxExecFC("/XMLCart.asp","IDLoja="+FC$.IDLoja,false,headerFreight);}

  function headerFreight(oHTTP){
    if(oHTTP.responseXML){
      var oXML=oHTTP.responseXML;
      var oCart=oXML.getElementsByTagName("cart");
      var SubTotalCart;
      try{SubTotalCart=(oCart[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue);}catch(e){SubTotalCart="0"}
      var isSubTotalCart=SubTotalCart;
      var sTotalFree = isSubTotalCart.replace(",",".");
      var priceFixed = 160;
      var totalFree = parseFloat(priceFixed-sTotalFree);
      var totalReplaced = totalFree.toFixed(2);
      if(sTotalFree >= priceFixed){
        document.getElementById("zFTotalFreeFreight").innerHTML="Faltam <b> R$ 0,00</b><br> para ganhar<br> <a href=\"#\" data-toggle=\"modal\" data-target=\"#ModalDetalheFreteGratis\"><img src='"+ FC$.PathImg +"frete-gratis.gif' border=\"0\"></a> p/ Sul e Sudeste. <a href=\"#\" data-toggle=\"modal\" data-target=\"#ModalDetalheFreteGratis\"><b>*Veja sua região</b></a>";
		//document.getElementById("zFTotalFreeFreight").innerHTML="Parabéns! Você ganhou <b>frete grátis</b>. <a href=\"#\" data-toggle=\"modal\" data-target=\"#ModalDetalheFreteGratis\">Confira condições.</a>";
      }
      else if(sTotalFree<priceFixed){
        document.getElementById("zFTotalFreeFreight").innerHTML="Faltam <b> R$ "+totalReplaced.replace(".",",")+"</b><br> para ganhar<br> <a href=\"#\" data-toggle=\"modal\" data-target=\"#ModalDetalheFreteGratis\"><img src='"+ FC$.PathImg +"frete-gratis.gif' border=\"0\"></a> p/ Sul e Sudeste. <a href=\"#\" data-toggle=\"modal\" data-target=\"#ModalDetalheFreteGratis\"><b>*Veja sua região</b></a>";
      }
    }
 }
 
 function pathcart(){
	var urlcarrinho = window.location.pathname;
	if((urlcarrinho == "/addProduto.asp") || (urlcarrinho == "/AddProduto.asp") || (urlcarrinho == "/Checkout.asp") || (urlcarrinho == "/checkout.asp")){	
		setTimeout(function(){
			 jQuery("#badgeFreteGratis").hide();
			 jQuery("#InfoBanners").hide();
		}, 200);
	}
 }
 pathcart();
 
 
// FIM - Falta R$xxx,xx para frete grátis

function ShowCartOnPage(e, t, o, n, i, a) {
    var r = getPos(a);
    if (null == oDivShowCartOnPage) {
        var s = document.createElement("div");
        s.setAttribute("id", "DivShowCartOnPage"), oDivShowCartOnPage = document.body.appendChild(s)
    }
    oDivShowCartOnPage.style.backgroundColor = "#fcfcfc", oDivShowCartOnPage.style.borderColor = "#cdcdcd", oDivShowCartOnPage.style.color = "#555555", oDivShowCartOnPage.style.border = "1px solid #cdcdcd", oDivShowCartOnPage.style.marginTop = "-95px", oDivShowCartOnPage.style.marginLeft = "0px", oDivShowCartOnPage.style.position = "absolute", oDivShowCartOnPage.style.zIndex = "1";
    var c = 238,
        d = 100,
        l = document.getElementById("PosPrice");
    if (l && (c = l.offsetWidth, d = l.offsetHeight), 0 == t) var u = "3187e6",
        g = 45;
    else var u = "949494",
        g = 25;
    var m = "<table id=idTabShowCartOnPageFC width='" + c + "' height='" + d + "' cellpadding=3 cellspacing=3>";
    m += "<tr onclick=window.location.href='/addproduto.asp?idloja=" + e + "'><td id=idTDTitShowCartOnPageFC colspan=2 align=center style='background-color:#" + u + ";color:#ffffff;border-width:1px;border-color:#3b6e22;font-weight:bold;font-size:12px;cursor:pointer'><div style='padding:5px; line-height:" + g + "px;'>" + o + "</div></td></tr>", 0 == t ? (m += "<tr height=45>", m += "<td valign=top align=center style=cursor:pointer onclick=window.location.href='/addproduto.asp?idloja=" + e + "'><a href='addproduto.asp?idloja=" + e + "' style='color:#444444;text-decoration:none;font-size:14px;font-weight:bold;'>Ir para o carrinho</a></td>", m += "<td align=left><img src='" + FC$.PathImg + "iconclose.svg?cccfc=1' width=20 height=20 hspace=5 style='cursor:pointer;margin-top:10px' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>", m += "</tr>", sF$.fnUpdateCart(!0, !1)) : (m += "<tr height=25>", m += "<td colspan=2 align=center><img src='" + FC$.PathImg + "iconclose.svg?cccfc=1' width=20 height=20 hspace=5 style='cursor:pointer;margin:10px;' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>", m += "</tr>"), m += "</table>", oDivShowCartOnPage.style.top = r.y + "px", oDivShowCartOnPage.style.left = r.x + "px", oDivShowCartOnPage.innerHTML = m, oDivShowCartOnPage.style.visibility = "visible", iLastCartOnPage++, setTimeout("if(iLastCartOnPage==" + iLastCartOnPage + ")oDivShowCartOnPage.style.visibility='hidden';", 4e3, updateHeaderFreight())
}

function fnFooter() {

FCLib$.onReady(function(){updateHeaderFreight()});

    if (FCLib$.onReady(sF$.fnCustomizeIconsSocialNetworks(!1)), "Products" == FC$.Page && iQtdProds > 2) {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = FC$.PathHtm + "MbhIncPaginacaoOrder.js?cccfc=1";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }
    jQuery(document).ready(function() {
        FCLib$.xOffsetScreenLimits = 5e3, setTimeout(function() {
            jQuery(".bnr-slick-slide").slick({
                dots: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                autoplay: !0,
                autoplaySpeed: 5e3
            }), jQuery(".bnr-slick-prod").slick({
                dots: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
            })
        }, 100), CartBtnComprar()
    }), sF$.fnLogout(), fnShowYear(), FCLib$.ShowBadgeFC();
    var o = document.querySelector(".ProductList");
    "Products" == FC$.Page && o && document.querySelector("#idFCContent").setAttribute("class", "col-small-12 col-medium-12 col-large-12 col-mlarge-12 col-xlarge-12"), FCLib$.onReady(FCLib$.execWaveInterchange)
}

function fnFooterPed() {
    fnShowYear()
}

function fnShowYear() {
    var e = new Date,
        t = e.getFullYear(),
        o = document.getElementById("FooterFullYear");
    o && (o.innerHTML = t)
}

function ToolbarCartExec() {
    var e = !1;
    jQuery(window).scroll(function() {
        jQuery(window).scrollTop() > 150 && !e ? jQuery(".FCToolBar").fadeIn(300) : jQuery(".FCToolBar").fadeOut(150)
    }), jQuery(".zf-topMainNav ul > li > a").each(function() {
        jQuery(this).hover(function() {
            jQuery(this, "a").css("display", "block").stop().animate({
                marginTop: "-3px"
            }, 100)
        }, function() {
            jQuery(this, "a").stop().animate({
                marginTop: "3px"
            }, 100)
        })
    })
}

function execMixClasses() {
    var e = jQuery(".CatContainerFC");
    jQuery(e).each(function() {
        jQuery(this).addClass("mix")
    }), jQuery(".CatBlockFC").attr("id", "Container"), jQuery(function() {
        jQuery("#Container").mixItUp()
    }), FCLib$.onReady(function() {
        var e = document.querySelectorAll(".FCBtnMixit");
        e[0].setAttribute("class", "FCBtnMixit sort active")
    })
}

function NoCascate(e) {
    bCascate ? bCascate = !1 : (bCascate = !0, location.href = e)
}

function fnMaxInstallmentsGrid(e, t) {
    var o;
    return 1e3 > e ? 100 > e ? 30 > e ? 1 > e || (t = 1) : t = 6 : t = 9 : t = 10, "undefined" != typeof Juros ? 0 == e || 1 == t || 0 == Juros.length ? "" : ((0 == t || t > Juros.length) && (t = Juros.length), o = Juros[t - 1] > 0 ? "" : " sem juros", "<br><span class=EstParc> ou <b>" + t + "x</b>" + o + " de <b class=EstParcPrice>" + FormatPrice(CalculaParcelaJurosCompostos(e, t), FC$.Currency) + "</b></span>") : ""
}

function FormatNumber(e) {
    var e = ("" + e).replace(/\$|\,/g, "");
    isNaN(e) && (e = "0");
    var t = e == (e = Math.abs(e));
    e = Math.floor(100 * e + .50000000001), e = "" + Math.floor(e / 100);
    for (var o = 0; o < Math.floor((e.length - (1 + o)) / 3); o++) e = e.substring(0, e.length - (4 * o + 3)) + "." + e.substring(e.length - (4 * o + 3));
    return (t ? "" : "-") + e
}

function fnShowEconomyGrid(e, t) {
    return e != t && "function" == typeof FormatNumber && "function" == typeof FormatPrice ? "<div class='GlobalSavePrice'>Economize <b>" + FormatPrice(t - e, FC$.Currency) + "</b> (" + FormatNumber((t - e) / t * 100) + "%)</div>" : ""
}

function fnShowCEPGrid(e) {
    if (3 == FC$.TypeFrt) {
        var t = fnGetCookie("CEP" + FC$.IDLoja);
        null == t && (t = "");
        var o = "<div id='idDivCEPFC'>";
        o += "  <div id='idDivTitCEP'><img src='" + FC$.PathImg + "iconziptruck.svg?cccfc=1' width='25' height='25' alt='Zip box' /><span>Simule o valor do frete</span></div>", o += "  <div id='idDivContentCEP'>", o += "<div class='info-frete'>Prazo de separação do seu pedido é de até 3 dias úteis. Confira o prazo dos Correios (dias úteis):</div>", o += "    <div id='idDivContentFieldsCEP'>", o += "      <div id='idDivCEPCalc'>", o += "        <div class='FieldCEP FieldCEPQty'><label>Qtd.</label><input type='number' id='idQtdZip" + e + "' value='1' maxlength='4'></div>", o += "        <div class='FieldCEP FieldCEPNum'><input type='text' placeholder='CEP' id='idZip" + e + "' value='" + t + "' maxlength='8' onkeyup='this.value=this.value.replace(/[^\\d]+/g,\"\");if(this.value.length >= 8)document.getElementById(\"idCEPButton\").click()'></div>", o += "        <img src='" + FC$.PathImg + "iconnewsletter.svg?cccfc=1' height='29px' id='idCEPButton' class='FieldCEPBtn' onclick='fnGetShippingValuesProdGrid(" + e + ")'>", o += "      </div>", o += "    </div>", o += "    <div id='idDivImgLoadingCEPFC'><img src='" + FC$.PathImg + "loadingcep.gif?cccfc=1' vspace=3 style='display:none;' id=ImgLoadingCEP></div>", o += "    <div id='idShippingValues" + e + "'></div></div>", o += "  </div>", o += "</div>";
        var n = document.getElementById("ShowCEP" + e);
        n && (n.innerHTML = o)
    }
}

function fnGetShippingValuesProdGrid(e) {
    var t = document.getElementById("idZip" + e).value;
    if (fnSetCookie("CEP" + FC$.IDLoja, t), "" == t) return void(document.getElementById("idShippingValues" + e).innerHTML = "<span class='freightResult'>Informe o CEP</span>");
    document.getElementById("idShippingValues" + e).innerHTML = "", document.getElementById("ImgLoadingCEP").style.display = "";
    var o = document.getElementById("idQtdZip" + e).value;
    if (e) var n = "&idproduto=" + e;
    else var n = "";
    AjaxExecFC("/XMLShippingCEP.asp", "IDLoja=" + FC$.IDLoja + "&qty=" + o + "&cep=" + t + n, !1, processXMLCEPGrid, e)
}

function processXMLCEPGrid(e, t) {
    var o = "",
        n = document.getElementById("idShippingValues" + t),
        i = ReadXMLNode(e, "err");
    if (null != i) {
        if ("0" != i) return document.getElementById("ImgLoadingCEP").style.display = "none", void(n.innerHTML = "<span class='freightResult'>" + ReadXMLNode(e, "msg") + "</span>");
        n.innerHTML = "";
        var a = ReadXMLNode(e, "UseCart");
        if ("False" == a) {
            ReadXMLNode(e, "ProdName"), ReadXMLNode(e, "ProdRef")
        }
        o += "<div class='ZipOptions'>";
        for (var r = ReadXMLNode(e, "OptQt"), s = 1; r >= s; s++) {
            var c = ReadXMLNode(e, "Opt" + s + "Name"),
                d = (ReadXMLNode(e, "Opt" + s + "Image"), ReadXMLNode(e, "Opt" + s + "Obs"));
            null == d && (d = "");
            var l = ReadXMLNode(e, "Opt" + s + "Value");
            l == FC$.Currency + " 0,00" && (l = "FRETE GRï¿½TIS"), o += "<div class='ZipOption'>", o += "  <div class='ZipNameObs'>", o += "    <div class='ZipName'>" + c + "</div>", o += "    <div class='ZipObsVal'>" + d + "</div>", o += "  </div>", o += "  <div class='ZipValue'>" + l + "</div>", o += "</div>"
        }
        n.innerHTML = o, n.style.display = "block", o += "</div>", document.getElementById("ImgLoadingCEP").style.display = "none"
    }
}

function fnGetCookie(e) {
    for (var t = e + "=", o = t.length, n = document.cookie.length, i = 0; n > i;) {
        var a = i + o;
        if (document.cookie.substring(i, a) == t) return fnGetCookieVal(a);
        if (i = document.cookie.indexOf(" ", i) + 1, 0 == i) break
    }
    return null
}

function fnGetCookieVal(e) {
    var t = document.cookie.indexOf(";", e);
    return -1 == t && (t = document.cookie.length), unescape(document.cookie.substring(e, t))
}

function fnSetCookie(e, t) {
    var o = arguments,
        n = arguments.length,
        i = n > 2 ? o[2] : null,
        a = n > 3 ? o[3] : null,
        r = n > 4 ? o[4] : null,
        s = n > 5 ? o[5] : !1;
    document.cookie = e + "=" + escape(t) + (null == i ? "" : ";expires=" + i.toGMTString()) + (null == a ? "" : ";path=" + a) + (null == r ? "" : ";domain=" + r) + (1 == s ? "; secure" : "")
}

function FuncChkRegisterBegin() {
    FCLib$.showPwdViewer()
}

function fnShowGlobalSignin() {
    var e = sF$.fnGetID("idImgGlobalSignFC");
    if (e) {
        var t = !1,
            o = !1,
            n = "";
        void 0 !== FC$.FacebookSigninID && (n += "<img src='" + FC$.PathImg + "facebooklogin.svg' class='FacebookSigninClass' data-loginsuccess='fnLoginShowUserName'>", t = !0), void 0 !== FC$.GoogleSigninID && (n += "<img src='" + FC$.PathImg + "googleloginmobile.svg' class='GoogleSigninClass' data-loginsuccess='fnLoginShowUserName'>", o = !0), (t || o) && (e.innerHTML = n), t && FCLib$.signinFacebook(), o && FCLib$.signinGoogle()
    }
}

function fnLoginShowUserName(e) {
    sF$.fnLoginUserName(e.fullName, e.pictureURL)
}

function fnProgressBarLoading() {
    NProgress.start(), window.addEventListener("load", function() {
        NProgress.done();
		var urlcarrinho = window.location.pathname;
		if((urlcarrinho == "/addProduto.asp") || (urlcarrinho == "/AddProduto.asp") || (urlcarrinho == "/Checkout.asp") || (urlcarrinho == "/checkout.asp")){	
			jQuery(".zopim").hide();
		}
    })
}

function CartBtnComprar() {
    var e = jQuery("#FCCartButtons .FCCartBuy");
    e.attr("style", "position:fixed;bottom:45px;right:0;z-index:101"), jQuery("#FCCartButtons .FCCartBuy #FCCartBuyBut").html("FINALIZAR COMPRA");
}
var iQtdProds = 0,
    iItensCesta = 0,
    iDescontoAvista = 0;
ImgLoadingFC = FC$.PathImg + "loading.gif?cccfc=1", ImgOnError = FC$.PathImg + "nd";

var sF$ = function() {
        function e(e) {
            return document.getElementById(e)
        }

        function t() {
            var e = document;
            if (e.images) {
                e.MM_p || (e.MM_p = []);
                var o, n = e.MM_p.length,
                    i = t.arguments;
                for (o = 0; o < i.length; o++) 0 != i[o].indexOf("#") && (e.MM_p[n] = new Image, e.MM_p[n++].src = i[o])
            }
        }

        function o(e, t) {
            e != t && document.write("<span class=FCfnShowEconomy>Economize <b>" + FormatPrice(t - e, FC$.Currency) + "</b> (" + n((t - e) / t * 100) + "%)</span>")
        }

        function n(e) {
            e = ("" + e).replace(/\$|\,/g, ""), isNaN(e) && (e = "0");
            var t = e == (e = Math.abs(e));
            e = Math.floor(100 * e + .50000000001), e = "" + Math.floor(e / 100);
            for (var o = 0; o < Math.floor((e.length - (1 + o)) / 3); o++) e = e.substring(0, e.length - (4 * o + 3)) + "." + e.substring(e.length - (4 * o + 3));
            return (t ? "" : "-") + e
        }

        function i() {
            if (0 != FC$.ClientID) {
                var t = e("idLinkLoginFC");
                t && (t.innerHTML = "&bull; Logout", t.href = "/cadastro.asp?idloja=" + FC$.IDLoja + "&logoff=true")
            }
        }

        function a(t, o, i, a, r) {
            E++;
            var s = e("idProdPrice" + r),
                c = "";
            if (0 == t && 0 == o) return void(s && (s.innerHTML = '<div class="prices"><br><div class=price><div class=currency><a href=\'/faleconosco.asp?idloja=' + FC$.IDLoja + "&assunto=Consulta%20sobre%20produto%20(C?digo%20" + i + ")' target='_top' >Consulte-nos</a></div></div></div>"));
            var d = ("" + t).split(".");
            if (2 == d.length) {
                var l = d[0],
                    u = d[1];
                1 == u.length && (u += "0")
            } else var l = d,
                u = "00";
            var g;
            "undefined" != typeof Juros ? ((0 == a || a > Juros.length) && (a = Juros.length), g = Juros[a - 1] > 0 ? "" : " sem juros") : a = 0, t != o ? (c += '<div class="prices">', c += '  <div class="old-price">De&nbsp; <span>' + FormatPrice(o, FC$.Currency) + '</span><div class="por">Por</div></div>', c += '  <div class="price"><span class="currency"><strong>' + FC$.Currency + ' </span><span class="int">' + n(l) + '</span><span class="dec">,' + u + "</span></strong></div>", a > 1 && (c += '  <div class="installments"><strong><span class="installment-count">' + a + '</span>x</strong> de <strong><span class="installment-price">' + FormatPrice(CalculaParcelaJurosCompostos(t, a), FC$.Currency) + "</span></strong>" + g + "</div>"), c += "</div>") : (c += '<div class="prices">', c += '  <div class="old-price"><span>&nbsp;</span><div class="por">Por</div></div>', c += '  <div class="price"><span class="currency"><strong>' + FC$.Currency + ' </span><span class="int">' + n(l) + '</span><span class="dec">,' + u + "</span></strong></div>", a > 1 && (c += '  <div class="installments"><strong><span class="installment-count">' + a + '</span>x</strong> de <strong><span class="installment-price">' + FormatPrice(CalculaParcelaJurosCompostos(t, a), FC$.Currency) + "</span></strong>" + g + "</div>"), c += "</div>"), s && (s.innerHTML = c)
        }

        function r(t, o, n) {
            var i, a = e("idProdParcels" + n),
                r = "";
            "undefined" != typeof Juros ? ((0 == o || o > Juros.length) && (o = Juros.length), i = Juros[o - 1] > 0 ? "" : " sem juros") : o = 0, o > 1 && t >= 1 && (r += '<div class="installments">ou <strong><span class="installment-count">' + o + '</span>x</strong> de <strong><span class="installment-price">' + FormatPrice(CalculaParcelaJurosCompostos(t, o), FC$.Currency) + "</span></strong>" + i + "</div>"), a && (a.innerHTML = r)
        }

        function s(e, t) {
            var o = document.querySelector("#idButtonProd" + t + " img"),
                n = document.querySelector("#idAvisoProd" + t),
                i = '<span class="mntext"><a href="#na" onclick="sF$.fnShowDisp(' + t + ');" title="Clique aqui para ser avisado da disponibilidade deste produto">Avise-me</a> quando estiver dispon?vel.</span>';
            o && (0 == e ? (o.setAttribute("src", "" + FC$.PathImg + "botcarrinhoesgotado.svg?cccfc=1"), n.innerHTML = i) : o.setAttribute("src", "" + FC$.PathImg + "botcarrinho.svg?cccfc=1"))
        }

        function c(e) {
            return popup = window.open("/AvisaDispProduto.asp?IDLoja=" + FC$.IDLoja + "&IDProduto=" + e, "Disp", "top=10,left=10,height=480,width=450,scrollbars=yes"), void popup.focus()
        }

        function d(e) {
            var t = e.Texto;
            if (t) {
                var o = t.value;
                o.length < 2 ? (alert("Preencha a busca corretamente"), t.focus()) : document.TopSearchForm.submit()
            }
        }

        function l(e) {
            var t = e.Texto;
            if (t) {
                var o = t.value;
                o.length < 2 ? (alert("Preencha a busca corretamente"), t.focus()) : document.TopSearchToolbarForm.submit()
            }
        }

        function u(e) {
            if (e) var t = document.getElementById("idShareProd");
            else var t = document.getElementById("idShareHeader");
            if (t) var o = t.getElementsByTagName("img");
            if (o)
                for (var n = 0; n < o.length; n++) "EstImgShareFacebook" == o[n].className ? (o[n].setAttribute("data-src", FC$.PathImg + "iconprodfacebook.svg?cccfc=1"), o[n].src = FC$.PathImg + "iconprodfacebook.svg?cccfc=1") : "EstImgShareTwitter" == o[n].className ? (o[n].setAttribute("data-src", FC$.PathImg + "iconprodtwitter.svg?cccfc=1"), o[n].src = FC$.PathImg + "iconprodtwitter.svg?cccfc=1") : "EstImgShareGooglePlus" == o[n].className ? (o[n].setAttribute("data-src", FC$.PathImg + "iconprodgoogleplus.svg?cccfc=1"), o[n].src = FC$.PathImg + "iconprodgoogleplus.svg?cccfc=1") : "EstImgSharePinterest" == o[n].className && (o[n].setAttribute("data-src", FC$.PathImg + "iconprodpinterest.svg?cccfc=1"), o[n].src = FC$.PathImg + "iconprodpinterest.svg?cccfc=1"), e ? (o[n].style.width = "25px", o[n].style.height = "25px") : (o[n].style.width = "20px", o[n].style.height = "20px")
        }

        function g(e) {
            oTabItensCart = document.getElementById("TabItensCart"), e ? (oTabItensCart.className = "EstTabItensCartOn", document.getElementById("DivItensCart").style.display = "") : (oTabItensCart.className = "EstTabItensCart", document.getElementById("DivItensCart").style.display = "none")
        }

        function m() {
            document.location.href = "/addproduto.asp?idloja=" + FC$.IDLoja
        }
		
		


        function p(e, t) {
            FCLib$.fnAjaxExecFC("/XMLCart.asp", "IDLoja=" + FC$.IDLoja, !1, C, e, t)
        }

        function C(e, t, o) {
            if (e.responseXML) {
                var n = e.responseXML,
                    i = n.getElementsByTagName("cart");
                try {
                    var a = i[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue
                } catch (r) {
                    a = FC$.Currency
                }
                try {
                    var s = i[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue
                } catch (r) {
                    s = "0"
                }
                try {
                    var c = i[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue
                } catch (r) {
                    c = "0,00"
                }
                if (iItensCesta = s, o) {
                    var d = window.parent;
                    try {
                        d.document.getElementById("idCartItemsTop").innerHTML = iItensCesta
                    } catch (r) {}
                    try {
                        d.document.getElementById("idCartItemsToolTop").innerHTML = iItensCesta
                    } catch (r) {}
                    try {
                        d.document.getElementById("idCartTotalTop").innerHTML = FCLib$.FormatPreco(a + " " + c)
                    } catch (r) {}
                    try {
                        d.document.getElementById("idCartTotalToolTop").innerHTML = FCLib$.FormatPreco(a + " " + c)
                    } catch (r) {}
                } else {
                    try {
                        document.getElementById("idCartItemsTop").innerHTML = iItensCesta
                    } catch (r) {}
                    try {
                        document.getElementById("idCartItemsToolTop").innerHTML = iItensCesta
                    } catch (r) {}
                    try {
                        document.getElementById("idCartTotalTop").innerHTML = FCLib$.FormatPreco(a + " " + c)
                    } catch (r) {}
                    try {
                        document.getElementById("idCartTotalToolTop").innerHTML = FCLib$.FormatPreco(a + " " + c)
                    } catch (r) {}
                }
            }
        }

        function v(e, t) {
            var o = document.getElementById("VideoProd" + e);
            o && (o.innerHTML = '<iframe class="VideoProd" src="//www.youtube.com/embed/' + t + '?controls=1&showinfo=0&rel=0&modestbranding=1&theme=light&modestbranding=1" frameborder=0 allowfullscreen></iframe>')
        }

        function f(e, t) {
            var o = document.getElementById("idImgGlobalSignFC");
            "" == e ? (jQuery(".loginInfo").html("<div>Olá, <strong>visitante</strong></div> <div class='HeaderSolcialLoginDoit'>Faça seu <a href='/cadastro.asp?idloja=" + FC$.IDLoja + "&pp=3&passo=1&sit=1'><strong>Login</strong></a></div>"), o && (o.style.display = "")) : (jQuery(".loginInfo").html("<div>Olá, <strong>" + e + "</strong>, <span><a href='#Logout' onclick=FCLib$.fnClientLogout('',sF$.fnCliLogout)><span class='HeaderSocialLoginLogout'>(sair)</span></a></span></div>"), o && (o.style.display = "none"));
            var n = document.getElementById("UserImage");
            n && (n.src = void 0 == t || "" == t ? FC$.PathImg + "iconusermobile.svg" : t)
        }

        function h() {
            sF$.fnLoginUserName("", ""), 0 == FC$.ClientID, fnShowGlobalSignin()
        }

        function y(e) {
            0 != e && 0 != iDescontoAvista && document.write("<p class=PriceAVistaProdLista>ï¿½ vista <b>" + FormatPrice(e * ((100 - iDescontoAvista) / 100), FC$.Currency) + "</b></p>")
        }

        function P(e) {
            0 != e && 0 != iDescontoAvista && document.write("<p class=PriceAVistaProdLista>ï¿½ vista <b>" + FormatPrice(e * ((100 - iDescontoAvista) / 100), FC$.Currency) + "</b></p>")
        }

        function F(e) {
            0 != e && 0 != iDescontoAvista && (document.getElementById("idPriceAVista").innerHTML = "<div id='PriceAVista'><p>Para pagamentos ï¿½ vista ganhe <b>" + iDescontoAvista + "% de desconto</b>.</p><p>Valor com desconto <b>" + FormatPrice(e * ((100 - iDescontoAvista) / 100), FC$.Currency) + "</b></p></div>")
        }

        function b(e, t, o) {
            var n = document.querySelector("#RateProd" + e);
            n.innerHTML = t > 0 ? "<table><tr><td>" + o + "</td><td></td></tr></table>" : "<table><tbody><tr><td><table cellspacing='0' cellpadding='0'><tbody><tr><td class='NotaOpiniaoVazio'></td><td class='NotaOpiniaoVazio'></td><td class='NotaOpiniaoVazio'></td><td class='NotaOpiniaoVazio'></td><td class='NotaOpiniaoVazio'></td></tr></tbody></table></td><td></td></tr></tbody></table>"
        }
        var I = document.location.href.toUpperCase(),
            E = 0;
        return {
            sCurrentPage: I,
            fnGetID: e,
            fnCustomizeIconsSocialNetworks: u,
            fnPreloadImages: t,
            fnShowEconomy: o,
            fnLogout: i,
            fnShowPrice: a,
            fnShowParcels: r,
            fnShowButtonCart: s,
            fnShowDisp: c,
            fnSearchSubmit: d,
            fnSearchToolbarSubmit: l,
            fnFormatNumber: n,
            fnShowCart: g,
            fnGoCart: m,
            fnUpdateCart: p,
            fnInsertVideo: v,
            fnLoginUserName: f,
            fnCliLogout: h,
            reviewProd: b,
            fnMostraDescontoHome: y,
            fnMostraDescontoProdLista: P,
            fnMostraDescontoProdDet: F
        }
    }(),
    oDivShowCartOnPage = null,
    iLastCartOnPage = 0,
    bCascate = !1;
FCLib$.onReady(FCLib$.showPwdViewer), 0 == FC$.ClientID && FCLib$.onReady(fnShowGlobalSignin);


/* Google Suggestions */
function fnCallbackSuggestions(aTerms){
"use strict";
var iTerms=aTerms.length;
if(FC$.Page=="News"){
var sParamName="textobuscanews"
var sIDNotFound="idNotFoundNewsFC";
}
else{
var sParamName="texto"
var sIDNotFound="idTxtCatNotFoundFC";
}
var oNotFound=FCLib$.GetID(sIDNotFound);
if(oNotFound && iTerms>=1){
if(iTerms>10)iTerms=10;
var sTerms="<div id=GoogleTerms><ul>";
var sPlural=(iTerms>1)?"s":"";
sTerms+="<li><b>Busca"+ sPlural +" sugerida"+ sPlural +" pelo Google:</b></li>";
for(var i=0;i<iTerms;i++)sTerms+="<li><a href='"+ FCLib$.fnGetSearchURL(aTerms[i],sParamName) +"'>"+aTerms[i]+"</a></li>";
sTerms+="</ul></div>";
oNotFound.insertAdjacentHTML('afterend',sTerms);
}
}
if(FC$.query!="")FCLib$.onReady(FCLib$.fnGetSuggestions(decodeURIComponent(FC$.query),true,fnCallbackSuggestions));