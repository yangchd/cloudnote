/**
 * 
 */

function getSession(){
	$.ajax({
		type:"GET",
		url:getUrl()+"/login/getSession",
		dataType:"json",
		timeout:2000,
		success:function(result){
			if(result.retflag==0){
				$('#titleusername').html(result.username+'<span class="caret"></span>');
			}
			if(result.retflag==1){
				window.location.href=getUrl()+"/page/login/login.jsp";
			}
		},
		error:function(msg){
			alertmsg('error');
		}
	});
}

function logout(){
	$.ajax({
		type:"GET",
		url:getUrl()+"/login/logout",
		dataType:"json",
		timeout:2000,
		success:function(result){
			if(result.retflag==0){
				window.location.href=getUrl()+"/page/login/login.jsp";
			}
		},
		error:function(msg){
			alertmsg('error');
		}
	});
}


function homeTitle(){
	//用户信息获取
	getSession();
	
	$('#gotohomepage').on('click',function(){
		window.location.href=getUrl()+"/page/homepage/homePage.jsp";
	})
	$('#gotonotepage').on('click',function(){
		window.location.href=getUrl()+"/page/homepage/notebookPage.jsp";
	})
	$('#gototeampage').on('click',function(){
		window.location.href=getUrl()+"/page/homepage/teamPage.jsp";
	})
	
	//下拉按钮
	$('#logoutbtn').on('click',function(){
		logout();
		window.location.href=getUrl()+"/page/login/login.jsp";
	})
	$('#gotopersonpage').on('click',function(){
		window.location.href=getUrl()+"/page/person/personPage.jsp";
	})
	$('#gotopasswordpage').on('click',function(){
		window.location.href=getUrl()+"/page/person/passwordPage.jsp";
	})
}
