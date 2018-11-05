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
				  ,content: "<iframe src='"+url+"' scrolling='auto' width='100%' height='100%' frameborder='0' ></iframe>" //支持传入html
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
		var subStr = $(".layui-logo").text();
		var logoText = $(".layui-logo").text();
		$("#navbarMenu").animate({width:0}, 500 );
		$(".layui-body").animate({left:0}, 500 );
		$(".layui-footer").animate({left:0}, 500 );
		$(".menuBtn > i ").remove();
		$(".menuBtn").append("<i class='layui-icon' style='font-size: 18px;''>&#xe66b;</i>");
		$("#lay-header").animate({left:0}, 500 );
		$("#user-header-right").animate({right:"20px"}, 500 );
		flag = 1;
	}else{
		$(".layui-body").animate({left:"200px"}, 500 );
		$(".layui-footer").animate({left:"200px"}, 500 );
		$("#lay-header").animate({left:"200px"}, 500 );
		$("#user-header-right").animate({right:"220px"}, 500 );
		$("#navbarMenu").animate({width:"200px"}, 500 );
		$(".menuBtn > i ").remove();
		$(".menuBtn").append("<i class='layui-icon' style='font-size: 18px;''>&#xe668;</i>");
		flag = 0;
	}
});
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
$(window).on('resize', function () {
    var $content = $('.admin-nav-card .layui-tab-content');
    $content.height($(this).height() - 147);
    $content.find('iframe').each(function () {
        $(this).height($content.height());
    });
}).resize();
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
