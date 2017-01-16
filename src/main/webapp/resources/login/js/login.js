/**
 * by yangchd
 * 登录js文件
 */

window.onload = function(){
	
	$('#loginbtn').on('click',function(){
		var logindata = {
				username:$('#username').val(),
				password:$('#password').val()
		}
		$.ajax({
			type:"GET",
			url:getUrl()+"/login/getLogin",
			dataType:"json",
			data:logindata,
			timeout:2000,
			success:function(result){
				alert(JSON.stringify(result.user));
			},
			error:function(msg){
				alert(JSON.stringify(msg));
			}
		});
	})
}