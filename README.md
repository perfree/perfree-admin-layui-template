## 基于LayUI开发的一款后台管理模板,开发中......
简单的图片预览如下:

[![Perfree-Admin](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmvv6AI_OwAAG_gSZWiic302.png "Perfree-Admin")](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmvv6AI_OwAAG_gSZWiic302.png "Perfree-Admin")

[![更换主题](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmwUKAHF8EAAHjbWGlC4U338.png "更换主题")](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmwUKAHF8EAAHjbWGlC4U338.png "更换主题")

[![白色](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmwaWAcAVRAAHAV13jgno187.png "白色")](https://www.yinpengfei.com/group1/M00/00/02/rB802lvmwaWAcAVRAAHAV13jgno187.png "白色")

## 菜单
菜单以json格式存在,方便从后端读取,如果不从后端读取,直接修改json文件(在/perfree/js/menu.alue.js)就可以了,如下:
```json
[
	{
		"name": "主页",
		"url": "./main.html",
		"isParent": "1",
		"tabIcon": "home",
		"tabId": "1"
	},
	{
		"name": "LayUI文档",
		"url": "https://www.layui.com/doc/",
		"isParent": "1",
		"tabIcon": "book",
		"tabId": "2"
	},
	{
		"name": "FontAwesome图标",
		"url": "http://fontawesome.dashgame.com/",
		"isParent": "1",
		"tabIcon": "flag",
		"tabId": "3"
	},
	{
		"name": "基础",
		"isParent": "0",
		"icon": "envira",
		"child": [
			{
				"name": "表单",
				"url": "./form.html",
				"tabIcon": "table",
				"tabId": "4"
			},
			{
				"name": "文件上传",
				"url": "./file.html",
				"tabIcon": "file-o",
				"tabId": "5"
			}

		]
	}
]
```
说明:

 1. name:菜单的名称 
 2. url:打开tab的url链接,如不打开或该菜单为父菜单,则无需填写 
 3. isParent:是否是父菜单,0是,1不是
 4. icon:父菜单的icon 
 5. tabIcon:如该菜单需打开tab,则需要给出tab的icon,图标请参考fontawesome
 6. tabId:tab的id,不能重复 
 7. child:子菜单列表
## 主题
目前默认共三套配色,如需自己增加,写好css文件后,可在/perfree/js/theme.js中增加数据,json格式如下:
```json
[
	{"header":"#23262E","menu":"#23262E","border":"#181a1f","url":"../perfree/css/theme/default.css","name":"默认"},
	{"header":"#393D49","menu":"#393D49","border":"#181a1f","url":"../perfree/css/theme/gray.css","name":"深灰"},
	{"header":"#ffffff","menu":"#393D49","border":"#181a1f","url":"../perfree/css/theme/white.css","name":"深灰-白"}
]
```
说明:
1. header:顶部导航颜色
2. menu:侧边菜单导航颜色
3. border:侧边菜单导航与顶部导航分割线
4. url:该主题的css链接
5. name:主题的名字

