(function($){'use strict';$('.mean-menu').meanmenu({meanScreenWidth:"991"});$(window).on('scroll',function(){if($(this).scrollTop()>150){$('.navbar-area').addClass("is-sticky");}
else{$('.navbar-area').removeClass("is-sticky");};var scrolled=$(window).scrollTop();if(scrolled>300)$('.go-top').addClass('active');if(scrolled<300)$('.go-top').removeClass('active');});$(".language-option").each(function(){var each=$(this)
each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());var allOptions=$(".language-dropdown-menu").children('a');each.find(".language-dropdown-menu").on("click","a",function(){allOptions.removeClass('selected');$(this).addClass('selected');$(this).closest(".language-option").find(".lang-name").html($(this).text());});})
$('.hero-slider').owlCarousel({items:1,loop:true,margin:0,nav:true,dots:false,autoHeight:true,autoplay:false,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],});$('.services-slider').owlCarousel({loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:2,},992:{items:3,},1200:{items:3,},},});$('.latest-project-slider').owlCarousel({loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:2,},992:{items:3,},1200:{items:4,},},});$('.latest-project-slider-two').owlCarousel({loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,center:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,center:false,},576:{items:2,center:false,},768:{items:2,center:false,},992:{items:3,},1200:{items:3,},},});$('.latest-project-slider-three').owlCarousel({loop:true,margin:24,nav:false,dots:true,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,center:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:2,},992:{items:3,},1200:{items:4,},},});$('.testimonial-slider').owlCarousel({loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:1,},768:{items:2,},992:{items:2,},1200:{items:2,},},});$('.testimonial-slider-two').owlCarousel({items:1,loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],});$('.blog-slider').owlCarousel({loop:true,margin:24,nav:true,dots:true,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:5,},1500:{items:5,},},});$('.hero-slider-two').owlCarousel({items:1,loop:true,nav:true,autoplay:true,autoplayHoverPause:true,margin:20,center:true,dots:true,smartSpeed:1000,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:1,stagePadding:0,},768:{items:1,stagePadding:0,},992:{items:1,stagePadding:0,},1200:{items:1,stagePadding:60,},1800:{items:1,stagePadding:130,}}});$('.partner-slider').owlCarousel({loop:true,margin:50,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:4,},},});$('.services-slider-two').owlCarousel({loop:true,margin:24,nav:true,dots:false,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:2,},992:{items:2,},1200:{items:2,},},});$('.team-slider').owlCarousel({loop:true,margin:24,nav:false,dots:true,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:4,},},});$('.certified-slider').owlCarousel({loop:true,margin:30,nav:false,dots:true,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:4,},},});$('.products-slider').owlCarousel({loop:true,margin:24,nav:false,dots:true,autoplay:true,smartSpeed:1000,autoplayHoverPause:true,navText:["<i class='ri-arrow-left-line'></i>","<i class='ri-arrow-right-line'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:3,},992:{items:4,},1200:{items:4,},},});$('.go-top').on('click',function(){$("html, body").animate({scrollTop:"0"},50);});function makeTimer(){var endTime=new Date("november  30, 2021 17:00:00 PDT");var endTime=(Date.parse(endTime))/1000;var now=new Date();var now=(Date.parse(now)/1000);var timeLeft=endTime-now;var days=Math.floor(timeLeft/86400);var hours=Math.floor((timeLeft-(days*86400))/3600);var minutes=Math.floor((timeLeft-(days*86400)-(hours*3600))/60);var seconds=Math.floor((timeLeft-(days*86400)-(hours*3600)-(minutes*60)));if(hours<"10"){hours="0"+hours;}
if(minutes<"10"){minutes="0"+minutes;}
if(seconds<"10"){seconds="0"+seconds;}
$("#days").html(days+"<span>Days</span>");$("#hours").html(hours+"<span>Hours</span>");$("#minutes").html(minutes+"<span>Minutes</span>");$("#seconds").html(seconds+"<span>Seconds</span>");}
setInterval(function(){makeTimer();},300);$(window).on('load',function(){$('.preloader').addClass('preloader-deactivate');})
$(".newsletter-form").validator().on("submit",function(event){if(event.isDefaultPrevented()){formErrorSub();submitMSGSub(false,"Please enter your email correctly.");}else{event.preventDefault();}});function callbackFunction(resp){if(resp.result==="success"){formSuccessSub();}
else{formErrorSub();}}
function formSuccessSub(){$(".newsletter-form")[0].reset();submitMSGSub(true,"Thank you for subscribing!");setTimeout(function(){$("#validator-newsletter, #validator-newsletter-2").addClass('hide');},4000)}
function formErrorSub(){$(".newsletter-form").addClass("animated shake");setTimeout(function(){$(".newsletter-form").removeClass("animated shake");},1000)}
function submitMSGSub(valid,msg){if(valid){var msgClasses="validation-success";}else{var msgClasses="validation-danger";}
$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);}
$(".newsletter-form").ajaxChimp({url:"https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",callback:callbackFunction});if($('.wow').length){var wow=new WOW({mobile:false});wow.init();}
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');$('.tab ul.tabs li').on('click',function(g){var tab=$(this).closest('.tab'),index=$(this).closest('li').index();tab.find('ul.tabs > li').removeClass('current');$(this).closest('li').addClass('current');tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq('+index+')').fadeOut();tab.find('.tab_content').find('div.tabs_item:eq('+index+')').fadeIn();g.preventDefault();});$('.popup-youtube, .popup-vimeo').magnificPopup({disableOn:300,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false,});$(".others-option-for-responsive .dot-menu").on("click",function(){$(".others-option-for-responsive .container .container").toggleClass("active");});$('.odometer').appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});});$('.accordion').find('.accordion-title').on('click',function(){$(this).toggleClass('active');$(this).next().slideToggle('fast');$('.accordion-content').not($(this).next()).slideUp('fast');$('.accordion-title').not($(this)).removeClass('active');});$('.input-counter').each(function(){var spinner=jQuery(this),input=spinner.find('input[type="text"]'),btnUp=spinner.find('.plus-btn'),btnDown=spinner.find('.minus-btn'),min=input.attr('min'),max=input.attr('max');btnUp.on('click',function(){var oldValue=parseFloat(input.val());if(oldValue>=max){var newVal=oldValue;}else{var newVal=oldValue+1;}
spinner.find("input").val(newVal);spinner.find("input").trigger("change");});btnDown.on('click',function(){var oldValue=parseFloat(input.val());if(oldValue<=min){var newVal=oldValue;}else{var newVal=oldValue-1;}
spinner.find("input").val(newVal);spinner.find("input").trigger("change");});});})(jQuery);