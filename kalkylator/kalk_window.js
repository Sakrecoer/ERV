/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/
jQuery(document).ready(function($) {

    if( $(document).width() < 500 ) {
        
        $(".paket-wrapper tr").each(function(){

            /*$(".raknareTitel", $(this) ).append( $(".raknareLasmer", $(this) ).html() )
            $(".raknareTitel", $(this) ).next().append( $(".raknareEller", $(this) ).html() )
            $(".raknareTitel", $(this) ).next().append( '<br>' )
            $(".raknareTitel", $(this) ).next().append( $(".intresse-btn-small", $(this) ).detach().css( 'float', 'none' ) )
            $(this).find("td").eq(3).remove()
            $(this).find("td").eq(3).remove()*/
            // $(this).find("td").eq(3).remove()
            // $(this).find("td").eq(4).remove()
            // debugger

        })

    }

    jQuery("#calculate_price").on("click", function() {

        var room = jQuery("#rok").val(),
            kvm = jQuery("#kvm").val(),
            win = jQuery("#wcheck").val(),
            err = 0;
        if (!$.isNumeric(room) || room < 1) {
            err = 1;
            jQuery(".rok label").text('Ange minst 1 rum').show();
            jQuery(".rok input").val('');
        } else if (room > 11) {
            err = 1;
            jQuery(".rok label").text('Ange max 11 rum').show();
            jQuery(".rok input").val('');
        }/* else if (!$.isNumeric(kvm) || kvm < 10) {
            err = 1;
            jQuery(".kvm label").text('Ange minst 10kvm').show();
            jQuery(".kvm input").val('');
        }*/ else if (kvm > 1000) {
            err = 1;
            jQuery(".kvm label").text('Ange max 1000kvm').show();
            jQuery(".kvm input").val('');
        }
        if (err == 1)
            jQuery("#show_price").hide();
        else {

            set_price(room, kvm, win);


            jQuery("#show_price").show();
        }

        return false;
    });
    jQuery("#rok").on("click", function() {
        jQuery(".rok label").hide();
         });
    jQuery("#rok").on("click", function() {
        jQuery(".rokw label").hide();
    });
    jQuery("#kvm").on("click", function() {
        // jQuery(".kvm label").hide();
        // jQuery(".kvm #kvm").show();
    });

});

// Priser fönsterputs

var room_price = {

    1: {
        2: 270,
        4: 540,
        6: 620
    },
    2: {
        
        2: 300,
        4: 600,
        6: 690
    },
    3: {
        2: 340,
        4: 680,
        6: 810
    },
    4: {
        2: 390,
        4: 780,
        6: 960
    },
    5: {
        2: 450,
        4: 900,
        6: 1140
    },
    6: {
        
        2: 525,
        4: 1050,
        6: 1350
    }
};

function set_price(room, kvm, win) {

        price = jQuery(".price");

        if (room > 6 || kvm > 6 )
            val = 'offert';
        else {
            val = room_price[room][kvm];

            if( win == 1 ) val = val + 250;
          }

          
        price.text(val);

}


