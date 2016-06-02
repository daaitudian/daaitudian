
		window.onload=function(){
			$(".pic ul li").hover(function(){
			$(this).stop(true).animate({width:"890px"},500).siblings().stop(true).animate({width:"60px"},500);
			});	
		
	
				var sa1 =document.getElementById("sA1");
				var sa2 =document.getElementById("sA2");
				var sa3 =document.getElementById("sA3");
				var sdiv2 =document.getElementById("sDiv2");
				var sdiv3 =document.getElementById("sDiv3");
				var sdiv4 =document.getElementById("sDiv4");
				
		/*````````````````````````````````````````````````*/
		
		var timer=null;
		var speed=0;
		var zDiv2=document.getElementById('zDiv2');
		var zUl=zDiv2.getElementsByTagName('ul')[0];
		var zLi=zUl.getElementsByTagName('li');
		var zA=zTable.getElementsByTagName('a');
		var zDiv22=document.getElementById('zDiv22');
		var zImg1=document.getElementById('zImg1');
		
		//********************************************************************************
		//判断浏览器
		var oType=0;
		function getBrowser(){
			
			if(navigator.userAgent.indexOf("MSIE")!=-1){
				oType=1;//IE
			}
			else if(navigator.userAgent.indexOf("Firefox")!=-1){
				oType=2;//FRIEFOX
			}
			return oType;
		}
		if(oType==1){
			speed=860;
		}else{
			speed=870;
		}
		
		zUl.innerHTML=zUl.innerHTML+zUl.innerHTML;
		zUl.style.width=zLi[0].offsetWidth*zLi.length+'px';
		
		clearInterval(timer);
		timer=setInterval(function(){
		if(zUl.offsetLeft>-860){
		zUl.style.left=-zUl.offsetWidth/2+'px';
		}
		zUl.style.left=zUl.offsetLeft+speed+'px';
		
		},1400);
		var zImg=zDiv3.getElementsByTagName('img');
		
		//**********************************************************
		//表格超链接部分。待改代码冗余！！！！！！！！！！！
		var zImg01=document.getElementById('zImg01');
		var zImg02=document.getElementById('zImg02');
		var zImg03=document.getElementById('zImg03');
		var zImg04=document.getElementById('zImg04');
		var zImg05=document.getElementById('zImg05');
		var zImg06=document.getElementById('zImg06');
		
		zA[0].onmouseover=function(){
				//setAlpha(0,100);
				zDiv22.style.display='block';
				zImg1.src='img/1.jpg';
				zImg01.src='img/c1.png';
		};
		zA[0].onmouseout=function(){
				zDiv22.style.display='none';
				//setAlpha(0,50);
				zImg01.src='img/a1.jpg';
				
			};
		zA[1].onmouseover=function(){
				zDiv22.style.display='block';
				zImg1.src='img/2.jpg';
				//setAlpha(1,100);
				zImg02.src='img/c2.png';
		};
		zA[1].onmouseout=function(){
				zDiv22.style.display='none';
				//setAlpha(1,50);
				zImg02.src='img/a2.jpg';
			};
		zA[2].onmouseover=function(){
				zDiv22.style.display='block';
				zImg1.src='img/3.jpg';	
				//setAlpha(2,100);
				zImg03.src='img/c3.png';
		};
		zA[2].onmouseout=function(){
				zDiv22.style.display='none';
				//setAlpha(2,50);
				zImg03.src='img/a3.jpg';
			};
		zA[3].onmouseover=function(){
				zDiv22.style.display='block';
				zImg1.src='img/4.jpg';
				//setAlpha(3,100);
				zImg04.src='img/c4.png';
		};
		zA[3].onmouseout=function(){
				zDiv22.style.display='none';
				//setAlpha(3,50);
				zImg04.src='img/a4.jpg';
			};
		zA[4].onmouseover=function(){
				zDiv22.style.display='block';
				zImg1.src='img/5.jpg';	
				//setAlpha(4,100);
				zImg05.src='img/c5.png';
		};
		zA[4].onmouseout=function(){
				zDiv22.style.display='none';
				//setAlpha(4,50);
				zImg05.src='img/a5.jpg';
			};
		zA[5].onmouseover=function(){
				zDiv22.style.display='block';
				zImg1.src='img/6.jpg';	
				zImg06.src='img/c6.png';
		};
		zA[5].onmouseout=function(){
				zDiv22.style.display='none';
				zImg06.src='img/a6.jpg';
			};
			
	/*```````````smf``````````````````````*/
			sa1.onmouseover=function(){
					sdiv3.style.display='none';
					sdiv4.style.display='none';
					sdiv2.style.display='block';
				};
				sa2.onmouseover=function(){
					sdiv2.style.display='none';
					sdiv4.style.display='none';
					sdiv3.style.display='block';
				};
				sa3.onmouseover=function(){
					sdiv2.style.display='none';
					sdiv3.style.display='none';
					sdiv4.style.display='block';
					
				};
		/*`````````````````````````````````````*/
		/**************************************************播放器*/
		
			var hBackG = document.getElementById("hBackG");
			var hTui = document.getElementById("hTui");
			var hTuiW = document.getElementById("hTuiW");	
			hBackG.onmouseover=function(){
				if(hTui.style.display=='block'){
					
					hTui.style.display='none';
					hTuiW.style.display='block';
				}
			}
			hBackG.onmouseout=function(){
				if(hTui.style.display=='none'){
					hTui.style.display='block';
					hTuiW.style.display='none';
				}
			}
		  
		/**********************************************************/
		
		};
