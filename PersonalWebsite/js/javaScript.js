// text change B/W function

var text = document.getElementById("textBtn");

//var nav2 = document.getElementsByClassName("navbar-custom");
var textWhite = true;   
var allText = document.querySelectorAll("p,li,h1,h2,h3,a");

text.onclick = function(e){
    e.preventDefault();    

    if (textWhite == true) {
        allText = document.querySelectorAll("p,li,h1,h2,h3,a");
        for (x in allText) {
            allText[x].style.color="black";            
        }

        textWhite = false;
        /*
        nav1.setAttribute("style", "backgroundColor:white !important;background:white !important;");
        nav1.style.backgroundColor="white !important";
        nav1.style.background="white !important";*/
/*        nav2.setAttribute("style", "backgroundColor:white !important;background:white !important;");
        nav2.style.backgroundColor="white !important";
        nav2.style.background="white !important";*/
        //event.stopPropagation();
    } else if (textWhite == false) {
        allText = document.querySelectorAll("p,li,h1,h2,h3,a");
        for (x in allText) {
            allText[x].style.color="white";
        }

        textWhite = true;
        //event.stopPropagation();
    }
    
}







// navbar // not working

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        if (textWhite) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");    
            $(".navbar-fixed-top").removeClass("top-nav-collapse2");
            event.stopPropagation();
        } else if (!textWhite) {            
            $(".navbar-fixed-top").addClass("top-nav-collapse2");  
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            event.stopPropagation();
        }
        
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("top-nav-collapse2");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});




// parallax (not used dues to structure of auto colors & backgrounds)

function simpleParallax() {
    var scrolled = $(window).scrollTop() + 1;
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
};
$(window).scroll(function (e) {
    simpleParallax();
});


    






// color functions        
        
// options
var colorizerOptions = {

    width: 960,
    // Colorizer editor width in pixels, min width 640
    // (the palette editor is 420px wide, the rest is for preview)

    height: 500,
    // Colorizer height in pixels, min. height 500

    dark: false,
    // the Colorizer UI style: false = white Colorizer UI, true = dark Colorizer UI

// Preview template

    // --------------------------------------------------- this needs to change -----------------------------//

    templateURL: 'http://josephframpton.com/ColorTest/preview.html',

    //-------------------------------------------------------------------------------------------------------//
    
    // the URL of your preview HTML document.
    // A full URL must be provided, i.e. 'http://example.org/templates/template-01/index.html'

    paletteUID: '53f0j0khpQJ5+ZxchVJlMKhpXBH',
    //paletteUID: string; required; default = '#uid=33L0v0keyTu2M+F9bXYj4N8n5DX'
    // the UID of init palette as provided by the Paletton.com application

    paletteUIDdefault: '53U0j0khpQJ5+ZxchVJlMKhpXBH',
    // the UID of default palette to be used for reset action. If omitted, the init value is used instead.

    colorizeMode: 'class'
    // the colorize mode (see above), possible values = "class" | "less" | "custom"

}

// getting the button and adding the event
 var color = document.getElementById('colorBtn');

color.onclick = function(e){
    e.preventDefault();
    _paletton.open(colorizerOptions, storePalette);
}

// call back function / results
function storePalette(data){
    // data = { colorTable, paletteUID, myData }
    // your code here

    var res = document.getElementById('res'), html = '';


    if (!data) 
    {
        res.innerHTML = 'cancelled, empty object returned';
        return
    }


    colorizerOptions.paletteUID = data.paletteUID;
    /* storing the palette for next time */

    function parse(obj,prefix)
    {
        // a dummy recursive parser just to print out the data
        var k, x, str = '{\n';

        for (k in obj) {                   

/*                    x = obj[k];
            str += prefix + '   ' + k + 'test: ';
            if (typeof x==='undefined' || x===null) str += 'null';
            else if (typeof x==='object') str += parse(x, prefix + '   ');
            else str += x;
            str += '\n';*/

        }
        /*
        color = data.colorTable.byPalette;*/
     /*   
        for (k in color)
        {                        
            for (x in color[k])
            {
                str += "." + k + "-" + x + " " + " { " + x.dtto + " }" + "\n";
            }
            str += "\n\n";
        }

        str += prefix + '   ' + '}';
        return str;*/
    }

/*
    html = parse(data,'');
    res.innerHTML = html;*/


    // setting headings


    //alert(data.colorTable.byLum.pri[0]);


    var h1 = document.getElementById("head1");
    var allh3 = document.getElementsByTagName("h3");

    var first = data.colorTable.byLum.pri[4];
    var second = data.colorTable.byLum.sec1[0];
    var third = data.colorTable.byLum.sec2[0];

    // setting individually 

    h1.style.color=first;            
/*          allh3[0].style.color=second;
    allh3[1].style.color=second;*/

    // setting grouped tags
    for (i = 0; i < allh3.length ; i++) {
        allh3[i].style.color=third;
    }

    // setting up an array for the colors (can use "for in" or for loop)
    var pri = [];
    var sec = [];
    var ter = [];

    for (x in data.colorTable.byLum.pri) {
        pri[x] = data.colorTable.byLum.pri[x];
    }
    for (x in data.colorTable.byLum.sec1) {
        sec[x] = data.colorTable.byLum.sec1[x];
    }
    for (x in data.colorTable.byLum.sec2) {
        ter[x] = data.colorTable.byLum.sec2[x];
    }


/*            for (i = 0 ; i < data.colorTable.byLum.pri.length; i++) {
        pri[i] = data.colorTable.byLum.pri[i];
    }*/


    allh3[0].style.color=pri[4];
    allh3[1].style.color=sec[4];
    h1.style.color=ter[4];

    var allh4 = document.getElementsByTagName("h4");

    for (x in allh4) {
        if (x < 5) {
            allh4[x].style.color=pri[x];
            allh4[x].innerHTML="primary color: luminosity level " + [x];
        } else if (x >= 5 && x < 10) {
            allh4[x].style.color=sec[x-5];
            allh4[x].innerHTML="secondary color: luminosity level " + [x-5];
        } else {
            allh4[x].style.color=ter[x-10];
            allh4[x].innerHTML="tertiary color: luminosity level " + [x-10];
        }
    }
    
    // issues with overriding styles (fonts, colors)
    
    //not working
    
    var head = document.querySelector("p");
    head.style.color("blue");
    //head.setAttribute("style", "color:blue !important");
    
    
    // stack overflow attempt
    
    var css = '#heading-name { color: red; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);

} // callback


