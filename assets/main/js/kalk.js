/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/
jQuery(document).ready(function($) {


    jQuery("#calculate_price").on("click", function() {
        var room = jQuery("#rok").val(),
            kvm = jQuery("#kvm").val(),
            err = 0;
        if (!$.isNumeric(room) || room < 1) {
            err = 1;
            jQuery(".rok label").text('Ange minst 1 rum').show();
            jQuery(".rok input").val('');
        } else if (room > 1000) {
            err = 1;
            jQuery(".rok label").text('Ange max 11 rum').show();
            jQuery(".rok input").val('');
        } else if (!$.isNumeric(kvm) || kvm < 5) {
            err = 1;
            jQuery(".kvm label").text('Ange minst 5kvm').show();
            jQuery(".kvm input").val('');
        } else if (kvm > 1000) {
            err = 1;
            jQuery(".kvm label").text('Ange max 1000kvm').show();
            jQuery(".kvm input").val('');
        }
        if (err == 1)
            jQuery("#show_price").hide();
        else {
            
            sted_price(room, kvm);
            stedto_price(room, kvm);
            stedfor_price(room, kvm);
            set_price(room, kvm);
            get_price(room, kvm);

            jQuery("#show_price").show();
        }

        return false;
    });
    jQuery("#rok").on("click", function() {
        jQuery(".rok label").hide();
    });
    jQuery("#kvm").on("click", function() {
        jQuery(".kvm label").hide();
    });

});

var room_price = {

    1: {
        1: 460,
        2: 920,
        4: 1840,
        '5': 540
    },
    2: {
        1: 575,
        2: 1150,
        4: 2300,
        '5': 600
    },
    3: {
        1: 690,
        2: 1380,
        4: 2760,
        '5': 680
    },
    4: {
        1: 800,
        2: 1600,
        4: 3200,
        '5': 780
    },
    5: {
        1: 920,
        2: 1840,
        4: 3680,
        '5': 900
    },
    6: {
        1: 'kontakta oss',
        2: 'kontakta oss',
        4: 'kontakta oss',
        '5': 1500
    }
};

// St�dning en g�ng per vecka

function sted_price(room, kvm) {
    jQuery(".price").each(function() {
        price = jQuery(this);
        number = price.data("number");
        if (number == '9') {
            
              if (kvm <= 50)
                val = 590 ;
            else if (kvm <= 60)
                val = 690;
            else if (kvm <= 70)
                val = 790;
            else if (kvm <= 80)
                val = 890;
            else if (kvm <= 100)
                val = 990;
            else if (kvm <= 120)
                val = 1090;
            else if (kvm <= 150)
                val =1190 ;
            else if (kvm <= 200)
                val = 1290;
            else if (kvm <= 201)
                val = 'kontakta oss';
            else
                val = 10 * kvm;
        } else if (room > 6)
            val = 'kontakta oss';
        else
            val = room_price[room][number];

        price.text(val);
    });

}

// St�dning tv� g�nger per vecka

function stedto_price(room, kvm) {
    jQuery(".price").each(function() {
        price = jQuery(this);
        number = price.data("number");
        if (number == '10') {
            
             if (kvm <= 50)
                val = 590 *2;
            else if (kvm <= 60)
                val = 690*2;
            else if (kvm <= 70)
                val = 790*2;
            else if (kvm <= 80)
                val = 890*2;
            else if (kvm <= 100)
                val = 990*2;
            else if (kvm <= 120)
                val = 1090*2;
            else if (kvm <= 150)
                val =1190*2 ;
            else if (kvm <= 200)
                val = 1290*2;
            else if (kvm <= 10000)
                val = 'kontakta oss';
            else
                val = 10 * kvm;
        } else if (room > 6)
            val = 'kontakta oss';
        else
            val = room_price[room][number];

        price.text(val);
    });

}

// St�dning fyra g�nger per vecka

function stedfor_price(room, kvm) {
    jQuery(".price").each(function() {
        price = jQuery(this);
        number = price.data("number");
        if (number == '11') {
            
              if (kvm <= 50)
                val = 590 *4;
            else if (kvm <= 60)
                val = 690*4;
            else if (kvm <= 70)
                val = 790*4;
            else if (kvm <= 80)
                val = 890*4;
            else if (kvm <= 100)
                val = 990*4;
            else if (kvm <= 120)
                val = 1090*4;
            else if (kvm <= 150)
                val =1190*4 ;
            else if (kvm <= 200)
                val = 1290*4;
            else if (kvm <= 10000)
                val = 'kontakta oss';
            else
                val = 10 * kvm;
        } else if (room > 6)
            val = 'kontakta oss';
        else
            val = room_price[room][number];

        price.text(val);
    });

}



 // Storst�dning

function set_price(room, kvm) {
    jQuery(".price").each(function() {
        price = jQuery(this);
        number = price.data("number");
        if (number == '7') {
            
             if (kvm <= 19)
                val = 1300;
            else if (kvm <= 29)
                val = 1400;
            else if (kvm <= 39)
                val = 1500;
            else if (kvm <= 49)
                val = 1600;
            else if (kvm <= 59)
                val = 1700;
            else if (kvm <= 69)
                val = 1850;
            else if (kvm <= 79)
                val = 1900;
            else if (kvm <= 89)
                val = 2100;
            else if (kvm <= 99)
                val = 2400;
            else if (kvm <= 114)
                val = 2585;
                else if (kvm <= 124)
                val = 2752;
            else if (kvm <= 136)
                val = 2985;
                 else if (kvm <= 148)
                val = 3185;
            else if (kvm <= 159)
                val = 3385;
            else if (kvm <= 200)
                val = 3885;
            else if (kvm <= 10000)
                val = 'kontakta oss';
            else
                val = 10 * kvm;
        } else if (room > 6)
            val = 'kontakta oss';
        else
            val = room_price[room][number];

        price.text(val);
    });

}

// Flyttst�dning

function get_price(room, kvm) {
    jQuery(".price").each(function() {
        price = jQuery(this);
        number = price.data("number");
        if (number == '8') {
            if (kvm <= 19)
                val = 1200;
            else if (kvm <= 29)
                val = 1300;
            else if (kvm <= 39)
                val = 1400;
            else if (kvm <= 49)
                val = 1500;
            else if (kvm <= 59)
                val = 1550;
            else if (kvm <= 69)
                val = 1650;
            else if (kvm <= 79)
                val = 1750;
            else if (kvm <= 89)
                val = 1850;
            else if (kvm <= 99)
                val = 1950;
            else if (kvm <= 120)
                val = 2100;
                else if (kvm <= 150)
                val = 2250;
            else if (kvm <= 200)
                val = 2400;
           
            else if (kvm <= 10000)
                val = 'kontakta oss';
            else
                val = 21 * kvm;
        } else if (room > 6)
            val = 'begär offert';
        else
            val = room_price[room][number];

        price.text(val);
    });

}

 
