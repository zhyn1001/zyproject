;(function(window){
	function dialog(opt){
		this.config = {
			title:"",
			type:"",//1,2,3,4
			btn:[],
			content:"",
			area:[],
			yes:function(){},
			cancle:function(){},
			success:function(){}
		}
	}
	dialog.prototype.open = function(config){
		this.configer(config);
		this.createPanel(this.config);
	}
	
	dialog.prototype.configer = function(opt){
		for(var key in opt){
			this.config[key]=opt[key]
		}
	}
	/*创建面板*/
	dialog.prototype.createPanel = function(config){
		var defaultW = config.area[0]?config.area[0]:"300";
		var defaultH = config.area[1]?config.area[1]:"200";
		var winW = document.documentElement.clientWidth || document.body.clientWidth;
		var winH = document.documentElement.clientHeight || document.body.clientHeight;
		var left = (winW-defaultW)/2;
		var top = (winH-defaultH)/2;
		var panel = document.createElement("div");
		panel.className = "dialog_ui_panel";
		panel.setAttribute("style","width:"+defaultW+"px;height:"+defaultH+"px;position:absolute;left:"+left+"px;top:"+top+"px;background:#ff0;box-shadow:0 0 3px #ccc;z-index:"+dialogId.zIndex+";")
		var dialog_mask = document.createElement("div");
		dialog_mask.className = "dialog_ui_mask";
		dialog_mask.setAttribute("style","width:100%;height:100%;position: absolute;left:0;top:0;background:rgba(0,0,0,0.3);z-index:"+(dialogId.zIndex-1));
		document.body.appendChild(dialog_mask);
		document.body.appendChild(panel);
		
		/*创建title*/
		var dialog_title = document.createElement("div");
		dialog_title.className = "dialog_title";
		if(typeof config.title =="string"){
			dialog_title.innerHTML = "提示";
			dialog_title.setAttribute("style","height:40px;line-height: 40px;background:#cccccc;font-size:13px;color:#444;text-indent: 12px;");
			panel.appendChild(dialog_title);
		}else{
			dialog_title.innerHTML = config.title[0];
			dialog_title.setAttribute("style",config.title[1]);
			panel.appendChild(dialog_title);
		}
		var dialog_content = document.createElement("div");
		dialog_content.className = "dialog_content";
		if(config.area.length>0){
			
		}else{
			
		}
		panel.appendChild(dialog_content);
		
		/*创建按钮*/
		var dialog_btn_box = document.createElement("div");
		dialog_btn_box.className = "dialog_btn_box";
		var dialog_yes = document.createElement("span");
		dialog_yes.className = "dialog_yes";
		dialog_yes.innerHTML = "确定";
		panel.appendChild(dialog_btn_box);
		dialog_btn_box.appendChild(dialog_yes);
	}
	/*清除面板*/
	dialog.prototype.removePanel = function(){
		
	}
	/*清除遮罩层*/
	dialog.prototype.removeMask = function(){
		
	}
	
	/*存储创建的弹框数组*/
	var dialogId = {
		zIndex:999999,
		index:0,
		idList:[],
		getList:function(id){
			this.idList.push(id);
		},
		setList:function(id){
			this.idList.pop(id)
		}
	}
	window.dialog = new dialog();
	
}(this))
