(function($) {
	/** 创建tab选项卡 */
	function openTab(icon,menuName,url,tabId) {
		var element = layui.element;
		var eachcount=0;
		var flag= false;
		$("#tabTitle").find('li').each(function() {
			eachcount++;
			var layId = $(this).attr("lay-id");
			if(tabId == layId){
				flag = true;
			}
			if(eachcount >= $("#tabTitle").find('li').length){
				if(flag){
					element.tabChange('demo', tabId);
					return;
				}else{
					//添加tab
					element.tabAdd('demo', {
						title: "<i class='layui-icon'>"+icon+"</i> "+menuName
						,content: "<iframe src='"+url+"' scrolling='auto' width='100%' height='100%' frameborder='0' class='layui-anim layui-anim-upbit'></iframe>" //支持传入html
						,id: tabId
					});
					//切换至新添加tab
					element.tabChange('demo', tabId);
				}
			}
		});
	}
	/** 收起侧边栏 */
	var flag = 0;
	$(".menuBtn").on("click",function(){
		if(flag == 0){
			hideNav();
			flag = 1;
		}else{
			showNav();
			flag = 0;
		}
	});
	/** 菜单导航点击事件 */
	$('.nav-menu-a').on('click', function () {
		if(flag == 1){
			showNav();
			flag = 0;
		}
	});
	/** 隐藏导航栏文字,显示图标 */
	function hideNav(){
		$(".nav-menu-a > .menu-text").hide();
		$(".layui-nav-more").hide();
		$("#navbarMenu").animate({width:50}, 0 );
		$(".logo-text > .logo-text-value").hide();
		$(".layui-logo").animate({width:50}, 0 );
		$(".layui-body").animate({left:50}, 0 );
		$(".layui-footer").animate({left:50}, 0 );
		$("#lay-header").animate({left:50}, 0 );
		$("#user-header-right").animate({right:"70px"}, 0 );
		//将二级导航栏隐藏
		$(".child-menu").css("display","none");
	}
	/** 显示完全菜单导航 */
	function showNav(){
		layer.closeAll('tips');
		$(".layui-body").animate({left:"200px"}, 0 );
		$(".layui-footer").animate({left:"200px"}, 0 );
		$("#lay-header").animate({left:"200px"}, 0 );
		$("#user-header-right").animate({right:"220px"}, 0 );
		$(".logo-text > .logo-text-value").show();
		$(".layui-logo").animate({width:200}, 0 );
		$(".nav-menu-a > .menu-text").show();
		$(".layui-nav-more").show();
		$(".child-menu").css("display","block");
		$("#navbarMenu").animate({width:"200px"},0 );
	}
	/** 菜单缩小时提示框 */
	$(".left-menu > .layui-nav-item").hover(
		function(){
			if(flag == 1){
				var tip = $(this).children(".nav-menu-a").children(".menu-text").text();
				var that = this;
				layer.closeAll('tips');
				layer.open({
					type: 4,
					shade: 0,
					isOutAnim: false,
					closeBtn: 0,
					shadeClose: true,
					content: [tip, that] //数组第二项即吸附元素选择器或者DOM
				});
			}
		},
		function(){
			layer.closeAll('tips');
		}
	)
	$(".nav-top-icon").hover(
		function(){
			var tip = $(this).children("a").attr("lay-tips");
			var that = this;
			layer.closeAll('tips');
			layer.open({
				type: 4,
				tips: 3,
				time: 1000,
				shade: 0,
				isOutAnim: false,
				closeBtn: 0,
				shadeClose: true,
				content: [tip, that] //数组第二项即吸附元素选择器或者DOM
			});
		},
		function(){
			layer.closeAll('tips');
		}
	)
	/**更换主题*/
	function chooseTheme() {
		layer.open({
				type: 2,
				title: '更换主题',
				shadeClose: true,
				shade: 0.3,
				anim: 1,
				fixed: true,
				offset: 'r',
				area: ['350px', '90%'],
				content: './theme.html' //iframe的url
			});
	}
	/**全屏*/
	 $('.full-scann').on('click', function () {
		 var docElm = document.documentElement;
		 //W3C
		if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
		}
		//FireFox
		else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
		}
		//Chrome等
		else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
		}
		//IE11
		else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
		layer.msg('按Esc即可退出全屏');
	});
}(window.jQuery));