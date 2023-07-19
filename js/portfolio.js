$(document).ready(function(){
	
	//메뉴클릭시 활성상태유지
	$("nav a").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
	});
	
	
	//타이핑효과
	const typing = "Wellcome to\nYoonSeo's Portfolio!";
	//alert(type);
	// console.log(type.length); //output_  22
	let i = 0;
	let txt = "";
	function type(){
		if(i<typing.length){
			txt += typing[i];			
			document.getElementById("typing").innerText= txt;
			i++;
			setTimeout(type , 150);
		}
	}
	type();
	
	
	//스크롤 이벤트
	let t1 = $(window).scrollTop();//스크롤 초기값
	let t2; //내린후의 값
	let t3;  //비교
	// console.log(t1);
	
	//휴대폰화면이 아닐때__ 데스트탑화면: 시작
	if($(window).width()>600){			
		
		$(window).scroll(function(){
			t2 = $(window).scrollTop();
			//console.log(t1);
			t3 = t2 - t1; //비교값
			
			//스크롤탑위치가 "about"오프셋탑위치와 크거나같다면--상단바 유지
			if(  $(window).scrollTop() >=  $("#about").offset().top-5  ) {
				$("nav").addClass("act");
			}
			
			//스크롤탑위치가 "about"오프셋탑위치보다 작다면 -- 상단바 배경투명
			if(  $(window).scrollTop() <  $("#about").offset().top   ) {
				$("nav").removeClass("act");
			}			
			
			//포트폴리오 : 첫번째
			if( $(window).scrollTop() >1600){
				$("#nin").addClass("act");
			}
			if( $(window).scrollTop() >2500){
				$("#burts").addClass("act");
			}
			if( $(window).scrollTop() >3400){
				$("#ym").addClass("act");
			}			
			
		});
	}//////////데스트탑화면: 끝
	
	
	//휴대폰화면: 시작
	else {
		$("nav").addClass("act");
		$("#portfolio>section").addClass("act");
		
		//햄버거(닫기)아이콘 클릭관련
		let n = 0;
		$("nav button").click(function(){
			n++;
			if(n==1){
				$(this).removeClass("fa-bars").addClass("fa-times");
				$("nav.act").css("height","100vh");
				$("nav>div div").show();				
			}else{				
				$(this).addClass("fa-bars").removeClass("fa-times");
				$("nav.act").css("height","initial");
				$("nav>div div").hide();
				n=0;
			}			
		});	
		//메뉴 각항목 클릭: start
		$("nav a").click(function(){
			$("nav button").addClass("fa-bars").removeClass("fa-times");
			$("nav.act").css("height","initial");
			$("nav>div div").hide();
			n=0;
		});/////메뉴 각항목 클릭: end
		
		
		
		
	}////////////휴대폰화면: 끝
	
	
	/////////////////////////////
	//이벤트디자인 썸네일클릭시 팝업(큰이미지)
	$("#event>div>div").click(function(){
			//썸네일이미지에서 주소와 alt를 get
			const src1 = $(this).children("img").attr("src");
			const src2 = src1.replace(".jpg" , "_big.jpg");
			const alt = $(this).children("img").attr("alt");
			$("#popup h3").text(alt);		
			$("#popup img").attr({"src": src2  , "alt": alt });			
			$("#popup").fadeIn();
	});
	//팝업(큰이미지)--닫기	
	$("#popup img").click(function(){
		$("#popup").fadeOut();
	});
	
	
});//////////end
