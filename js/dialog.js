;(function(window){
	function dialog(opt){
		this.config = {
			title:"" || [],
			type:"",//1,2,3,4
			btn:[],
			content:"",
			area:[],
			yes:function(){},
			cancle:function(){},
			success:function(){}
		}
	}
	dialog.prototype.alert = function(config){
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
		panel.setAttribute("style","width:"+defaultW+"px;height:"+defaultH+"px;position:absolute;left:"+left+"px;top:"+top+"px;background:#ff0;box-shadow:0 0 3px #ccc;z-index:1000;")
		var dialog_mask = document.createElement("div");
		dialog_mask.className = "dialog_ui_mask";
		dialog_mask.setAttribute("style","width:100%;height:100%;position: absolute;left:0;top:0;background:rgba(0,0,0,0.3);z-index:999");
		document.body.appendChild(dialog_mask);
		document.body.appendChild(panel);
	}
	/*清除面板*/
	dialog.prototype.removePanel = function(){
		
	}
	/*清除遮罩层*/
	dialog.prototype.removeMask = function(){
		
	}
	window.dialog = new dialog();
	
}(this))
