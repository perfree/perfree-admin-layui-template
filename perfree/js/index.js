/** 打开tab选项卡 */
function openTab(icon,menuName,url,tabId) {
	var element = layui.element;
	var eachcount=0;
	var flag= false;
	$(".content-tab-title").find('li').each(function() {
		eachcount++;
		var layId = $(this).attr("lay-id");
		if(tabId == layId){
			flag = true;
		}
		if(eachcount >= $(".content-tab-title").find('li').length){
			if(flag){
				element.tabChange('demo', tabId);
				return;
			}else{
				//添加tab
				element.tabAdd('demo', {
					title: "<i class='fa fa-"+icon+"' style='font-size: 16px;'></i>&nbsp;"+menuName,
					content: "<iframe src='"+url+"' scrolling='auto' width='100%' height='100%' frameborder='0' class='layui-anim layui-anim-upbit'></iframe>", //支持传入html
					id: tabId
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
	$(".nav-menu-a > .menu-text").fadeOut(100);
	$(".nav-menu-a > .layui-nav-more").fadeOut(100);
	$(".left-navbar-menu").animate({width:50}, 300);
	$(".logo-text > .logo-text-value").fadeOut(0);
	$(".layui-logo").animate({width:50}, 300);
	$(".layui-body").animate({left:50}, 300);
	$(".layui-footer").animate({left:50}, 300);
	$(".navbar-header").animate({left:50},300);
	$(".nav-header-right").animate({right:"70px"}, 300);
	$(".child-menu").css("display","none");
}
/** 显示完全菜单导航 */
function showNav(){
	layer.closeAll('tips');
	$(".layui-body").animate({left:"200px"}, 300 );
	$(".layui-footer").animate({left:"200px"}, 300 );
	$(".navbar-header").animate({left:"200px"}, 300 );
	$(".nav-header-right").animate({right:"220px"}, 300 );
	$(".logo-text > .logo-text-value").delay(300).fadeIn(300);
	$(".layui-logo").animate({width:200}, 300 );
	$(".nav-menu-a > .menu-text").delay(300).fadeIn(300);
	$(".nav-menu-a > .layui-nav-more").delay(300).fadeIn(0);
	$(".child-menu").css("display","block");
	$(".left-navbar-menu").animate({width:"200px"},300 );
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
/** 顶部导航鼠标悬浮显示tips */
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
 $('.choose-theme-btn').on('click', function () {
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
});
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