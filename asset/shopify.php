var s=document.createElement("script");s.id="pap_x2s6df8d";s.type="text/javascript";
    	s.src=(("https:" == document.location.protocol)?"https://":"http://")+"comfortzone.postaffiliatepro.com/scripts/6oeu5joy";s.onload = doIfYouCan();
    	document.body.appendChild(s);
function getDiscountRate(ch) {
                var subtotalPrice = Number(ch.subtotal_price.replace(',',''));
                if (subtotalPrice == 0) return 0;
                var totalPrice = 0;
                var i = 0; var di = 0;
                while (typeof ch.line_items[i] != 'undefined') {
                    var itemSubtotal = Number(ch.line_items[i].line_price.replace(',',''));
                    while (typeof ch.line_items[i].applied_discounts[di] !== 'undefined') {
                        itemSubtotal -= Number(ch.line_items[i].applied_discounts[di].amount.replace(',',''));
                        di++;
                    }
                    totalPrice = totalPrice + itemSubtotal;
                    i++;
                }
                var discountAmount = totalPrice - subtotalPrice;
                return 1 - (discountAmount/totalPrice);
              }

              function ts() {
                var discountpercent = 1;var discountcoupon = '';
                if (Shopify.checkout.discount != null && typeof Shopify.checkout.discount.amount !== 'undefined') {
                    discountcoupon = Shopify.checkout.discount.code;
                    if (Shopify.checkout.discount.rate != null && typeof Shopify.checkout.discount.rate !== 'undefined') {
                        discountpercent = 1 - Shopify.checkout.discount.rate;
                    } else {
                        discountpercent = getDiscountRate(Shopify.checkout);
                    }
				}

                var giftcard = 0;
                
                if ((typeof Shopify.checkout.gift_cards !== 'undefined') &&
                    (Shopify.checkout.gift_cards.length > 0)) {
                  for (var i=0; i < Shopify.checkout.gift_cards.length; i++) {
                    if (Shopify.checkout.gift_cards[i].amount_used > 0) {
                        giftcard += Number(Shopify.checkout.gift_cards[i].amount_used);
                    }
                  }
                }
            
            var papPhone = Shopify.checkout.phone;
            if (papPhone == null || papPhone == '') {
                papPhone = Shopify.checkout.billing_address.phone;
            }var subtotal = Shopify.checkout.subtotal_price.replace(',','');
                if (giftcard > 0) {var rest = giftcard - subtotal; subtotal -= giftcard; giftcard = rest;}
                if (giftcard < 0) {giftcard = 0;}
                if (subtotal < 0) {subtotal = 0;}var sale = PostAffTracker.createSale();
sale.setTotalCost(subtotal);

            if (Shopify.checkout.order_id == null) {
                sale.setOrderID('checkout_token_'+Shopify.checkout.token+'(1)');
            } else {
                sale.setOrderID(Shopify.checkout.order_id + '(1)');
            }
            if (typeof Shopify.checkout.presentment_currency !== 'undefined') {
    sale.setCurrency(Shopify.checkout.presentment_currency);
} else {
    sale.setCurrency(Shopify.checkout.currency);
}
var papD1 = (function(){var shopifyOrderId = "", orderIdElement = document.getElementsByClassName("os-order-number");
             if (orderIdElement != "" && orderIdElement[0] != null) {
               var d = orderIdElement[0].innerText,
               l = d.split(" "),
               shopifyOrderId = l[l.length-1];
             }
            return shopifyOrderId})();
if (papD1 != null && typeof papD1 !== 'undefined') {sale.setData1(papD1);}
var papD2 = Shopify.checkout.email;
if (papD2 != null && typeof papD2 !== 'undefined') {sale.setData2(papD2);}
var papD3 = Shopify.checkout.billing_address.first_name + ' ' + Shopify.checkout.billing_address.last_name;
if (papD3 != null && typeof papD3 !== 'undefined') {sale.setData3(papD3);}
sale.setCoupon(discountcoupon);
PostAffTracker.register();}function doIfYouCan() {
    		if (typeof PostAffTracker !== 'undefined') {
                PostAffTracker.setAccountId('default1');
                if (window.location.href.indexOf('/thank_you') > 0) {
                    ts();
                } else {
                    
                    try {
        	    		PostAffTracker.track();
        	    	} catch (err) { }
                }
            }
    		else {
    			setTimeout('doIfYouCan()', 500);
    		}
    	}