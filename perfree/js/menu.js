$(function(){
	for(var i = 0;i < menu.length;i++){
		//这里menu[i].name得到一级菜单名称
		
		//判断是否有子菜单
		if(menu[i].isParent == 0){
			var childs = menu[i].child;
			for(var j = 0;j < childs.length;j++){
				//这里childs[j].name得到子菜单名字
				
			}
		}
	}
});