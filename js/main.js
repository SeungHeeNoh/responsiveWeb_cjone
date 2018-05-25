/*main.js*/
$(function(){
	var $bnnNum=0;
    var $devWidth=$("body").width();
    var $MAXBNNMUM=6;
	var $autoBnn = setInterval(autoBanner, 1500);
	
	//flag
	var $autoBnnFlag = 1;
    var topMenuFlag = 1;
    var slideFlag = 1;
    var srchFlag = 1;
    var mobMenuFlag=  1;
	
	//initial var
    var imgsCard = '';
    var imgsPoint = '';
    var imgsBonus = '';
    var imgsCoupon = '';
    
    initial();//초기화
    
    $(window).resize(function(){
        $devWidth=$("body").width();
        header();
        bannerFun();
		$(".modal").removeClass("on");
    });
	
	function header(){
		if(checkMobile()){
			$(".header_side").removeClass("notMobile");
			$(".header_wrap").css({"height": "56px"});
		}else{
            $(".header_side").addClass("notMobile");
			$(".header_wrap").css({"height": "120px"});
		}
	}
	
	function checkMobile(){
		//모바일일 경우 true 반환
		if($devWidth <=768) return true;
		else return false;
	}
	function bannerFun(){
		 $(".bannerframe").stop().animate({"left":-$devWidth*$bnnNum}, 300, "linear", function(){
				if($(".bannerframe > section").eq($bnnNum).hasClass("white")){
					$(".rollBtn > ul > li").addClass("white");
					$(".arrow").addClass("white");
					$(".rollBtn > p").addClass("white");
					$(".rollBtn > ul > li").removeClass("on");
					$(".rollBtn > ul > li").eq($bnnNum).addClass("on");
				}else{
					$(".rollBtn > p").removeClass("white");
					$(".rollBtn > ul > li").removeClass("white");
					$(".arrow").removeClass("white");
					$(".rollBtn > ul > li").removeClass("on");
					$(".rollBtn > ul > li").eq($bnnNum).addClass("on");
				}
			});
	}
    function autoBanner(){
        $bnnNum++;
        if($bnnNum > $MAXBNNMUM-1) $bnnNum = 0;
        bannerFun();
    }
    
	function open_formWrap(){
		$(".srchIcon").addClass("on");
		$(".formWrap").stop().animate({"height":"153px"}, 300, "linear", function(){
			$(".header_inner form").css("display", "block");
		});
	}
    
	function close_formWrap(){
		$(".srchIcon").removeClass("on");
		$(".formWrap").stop().animate({"height":"0"}, 300, "linear", function(){
			$(".header_inner form").css("display", "none");
		});
	}
    
	function loadImages(){
		/*content1*/
        for(var j=0; j<20; j++){
            if(j<10) j = "0"+j;
			imgsCard += "<img src='img/images/service/quick01_000"+j+".png'/>";
			imgsPoint += "<img src='img/images/service/quick02_000"+j+".png'/>";
			imgsBonus += "<img src='img/images/service/quick03_000"+j+".png'/>";
			imgsCoupon += "<img src='img/images/service/quick04_000"+j+".png'/>";   
        }
	}
    function initial(){
        /*header 초기화*/
        header();
		loadImages();
		//login_ani();
		
        $(".guide article:first-of-type .img").html(imgsCard);
        $(".guide article:nth-of-type(2) .img").html(imgsPoint);
        $(".guide article:nth-of-type(3) .img").html(imgsBonus);
        $(".guide article:nth-of-type(4) .img").html(imgsCoupon);
    }//initial
    
	/*header*/
    $(".topMenu > dd:nth-last-of-type(2) > a").click(function(){
        if(topMenuFlag){
            if(checkMobile()){
                $(this).next().css("display", "block");
                $(this).css("background-position", "95% -31px");
                $(this).parent().next().css("background", "none");
            }else{
                $(this).css("background-position", "80% -16px");
                $(this).parent().css("background", "url(img/bg_gnb_cscenter.png) no-repeat 0 0");
                $(this).next().css("display", "block");
            }
            topMenuFlag = 0;
        }else{
            if(checkMobile()){
                $(this).next().css("display", "none");
                $(this).css("background-position", "95% 15px");
                $(this).parent().next().css("background", "url(img/bg_dotline02.png) repeat-x 0 0");
            }else{
                $(this).css("background-position", "80% 2px");
                $(this).parent().css("background", "none");
                $(this).next().css("display", "none");
            }
            topMenuFlag = 1;
        }
	});
	
    $(".allMenu a").click(function(e){
        if(mobMenuFlag){
            e.preventDefault();
			$(".modal").addClass("on");
            $(".allMenu").animate({"left":"0"}, 200, "linear");
            $(".header_side").animate({"left":"0"}, 200, "linear");
            $(this).css({"right":"-50px", "width":"33px", "height":"31px", "background": "url(img/btn_close.png) no-repeat -30px 0"});    
            mobMenuFlag = 0;
        }else{
            e.preventDefault();
			$(".modal").removeClass("on");
            $(".allMenu").animate({"left":"-280px"}, 200, "linear");
            $(".header_side").animate({"left":"-280px"}, 200, "linear");
            $(this).css({"right":"-41px", "width":"30px", "height":"21px", "background":"url(img/btn_gnb_open.png) no-repeat 0 0"});
            mobMenuFlag = 1;
        }
    });
    
    $("nav > .gnb > li > a").bind("mouseover focus", function(){
		if(checkMobile()) return false;
        if($(".srchIcon").hasClass("on")){
			close_formWrap();
        }
		$(".header_wrap").addClass("on");
        $(".header_wrap").stop().animate({"height": "455px"}, 300, "linear", function(){
			$(".header_wrap").css("overflow","visible");
            $("nav > .gnb").css("height", "330px");
            $(".gnb > li > ul").css("display", "block");
        });    
        
    });
    $("nav").bind("mouseleave blur", function(){
		if(checkMobile()) return false;
		$(".header_wrap").removeClass("on");
        $(".header_wrap").stop().animate({"height":"120px"}, 300, "linear", function(){
			$(".header_wrap").css("overflow","visible");
            $(".gnb > li > ul").css("display", "none");
			$("nav > .gnb").css("height","50px");
        });
    });
    
    $("nav > .gnb > li > a").toggle(function(e){
        if(checkMobile()){
            e.preventDefault();
             $("nav > .gnb > li").children("ul").css("display", "none");
             $("nav > .gnb > li > a").css("background-position", "247px 5px");
             $(this).css("background-position", "247px -42px");
             $(this).next().css("display", "block");
        }
    }, function(e){
        e.preventDefault();
        $(this).css("background-position", "247px 5px");
        $(this).next().css("display", "none");
    });
    
	$(".srchIcon > a").click(function(e){
        if(srchFlag){
            e.preventDefault();
            if($(".header_wrap").hasClass("on")){
                $(this).removeClass("on");
                $(".header_wrap").stop().animate({"height":"120px"}, 300, "linear", function(){
                    $(".gnb > li > ul").css("display", "none");
                    $("nav > .gnb").css("height","50px");
                });    
           }
            open_formWrap();
            srchFlag = 0;
        }else{ 
			close_formWrap();
            srchFlag = 1;
        }  
    });
	
    //mainVisul
	$(".next").click(function(e){
		e.preventDefault();
		if($bnnNum < $MAXBNNMUM-1){
			$bnnNum++;
		}else{
			$bnnNum=0;
		}
        bannerFun();
	});
	$(".prev").click(function(e){
		e.preventDefault();
		if($bnnNum > 0){
			$bnnNum--;
		}else{
            $bnnNum = $MAXBNNMUM-1;
        }
        bannerFun();	
	});
	$(".rollBtn > ul > li").click(function(e){
		e.preventDefault();
		$bnnNum = $(this).text()-1; 
		bannerFun();	
		
	});
	
    //6번에서 1번으로 급격하게 넘어가지 않으려면 clone을 사용하여 작성한다.
	$(".rollBtn > p > a").click(function(e){
        e.preventDefault();
		if($autoBnnFlag){
			clearInterval($autoBnn);
			$(this).addClass("stop");
			$autoBnnFlag=0;
		}else{            
			$autoBnn = setInterval(autoBanner, 1500);
			$(this).removeClass("stop");
			$autoBnnFlag=1;
		}
	});
	
    //content1
    //$("a").hover(function(){마우스 올렸을 때}, function(){마우스 뗐을 때});
    $(".guide > article > a > p.img").hover(function(){
            for(var i=0; i<20; i++){
                $(this).children().eq(i).css("animation", "loop 1s linear "+ (i*0.05) +"s 1 normal");
            }
        }, function(){
            for(var k=0; k<20; k++){
                $(this).children().eq(k).css("animation", "none");
            }
        });
    
    //content3
    $(".brand section h3 > a").click(function(e){
        e.preventDefault();
		$(".brand section h3 > a").removeClass("on");
        $(".brand section > ul").css("display", "none");
		$(this).addClass("on");
        $(this).parent().next().css("display", "block");
    });
	
    //footer
    $(".footerInner > ul:last-of-type > li:last-of-type > a").click(function(e){
        if(slideFlag){
            e.preventDefault();
            $(".slide").show(0, function(){
                $(this).next().css("background", "url(img/ico_family_arrow.png) no-repeat 94% -26px");
            });    
            slideFlag = 0;
        }else{
            e.preventDefault();
            $(".slide").hide(0, function(){
                $(this).next().css("background", "url(img/ico_family_arrow.png) no-repeat 94% 0");    
            });
            slideFlag = 1;
        }
    });
});