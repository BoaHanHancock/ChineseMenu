/**
 * Created by Administrator on 2016/10/17.
 */
//异步加载页头页尾
$(function () {
   $('#header').load('data/header.php');
   $('#footer').load('data/footer.php');
   //加载登录模态框
    $('#login').load('data/login.php');
   // $('#register').load('data/register.php');
});


/******用户注册表单验证******/
var email = document.getElementById("email");
var emailTip = document.getElementById("emailTip");
email.onfocus = function(){
    emailTip.className = "col-xs-5 show control-default";
    emailTip.firstChild.nodeValue = "请输入你的电子邮件地址."
}
email.onblur = function(){
    if(email.validity.valid){
        emailTip.className = "col-xs-5 show control-success";
        emailTip.firstChild.nodeValue = "电子邮件正确."
    }else if(email.validity.valueMissing){
        emailTip.className = "col-xs-5 show control-error";
        emailTip.firstChild.nodeValue = "电子邮件不能为空."
    }else if(email.validity.typeMismatch){
        emailTip.className = "col-xs-5 show control-error";
        emailTip.firstChild.nodeValue = "电子邮件输入有误."
    }
}
var user_name = document.getElementById("user_name");
var user_nameTip = document.getElementById("usernameTip");
user_name.onfocus = function(){
    usernameTip.className = "col-xs-5 show control-default";
    usernameTip.firstChild.nodeValue = "请输入4至16位的英文或数字."
}
user_name.onblur = function(){
    if(user_name.validity.valid){
        usernameTip.className = "col-xs-5 show control-success";
        usernameTip.firstChild.nodeValue = "用户名正确."
    }else if(user_name.validity.valueMissing){
        usernameTip.className = "col-xs-5 show control-error";
        usernameTip.firstChild.nodeValue = "用户名不能为空."
    }else if(user_name.validity.patternMismatch){
        usernameTip.className = "col-xs-5 show control-error";
        usernameTip.firstChild.nodeValue = "用户名输入有误."
    }
}
var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
    passwordTip.className = "col-xs-5 show control-default";
    passwordTip.firstChild.nodeValue = "请输入6至12位的数字."
}
password.onblur = function(){
    if(password.validity.valid){
        passwordTip.className = "col-xs-5 show control-success";
        passwordTip.firstChild.nodeValue = "密码正确."
    }else if(password.validity.valueMissing){
        passwordTip.className = "col-xs-5 show control-error";
        passwordTip.firstChild.nodeValue = "密码不能为空."
    }else if(password.validity.patternMismatch){
        passwordTip.className = "col-xs-5 show control-error";
        passwordTip.firstChild.nodeValue = "密码输入有误."
    }
}
var re_pwd = document.getElementById("re_pwd");
var re_pwdTip = document.getElementById("re_pwdTip");
re_pwd.onfocus = function(){
    re_pwdTip.className = "col-xs-5 show control-default";
    re_pwdTip.firstChild.nodeValue = "请再次输入密码"
}
re_pwd.onblur = function(){
    if(re_pwd.validity.valueMissing) {
        re_pwdTip.className = "col-xs-5 show control-error";
        re_pwdTip.firstChild.nodeValue = "密码不能为空.";
    }else if(re_pwd.validity.valid && (password.value != re_pwd.value)){
        re_pwdTip.className = "col-xs-5 show control-error";
        re_pwdTip.firstChild.nodeValue = "前后密码不一致.";
    }else{
        re_pwdTip.className = "col-xs-5 hide control-success";
        re_pwdTip.firstChild.nodeValue = "密码一致";
    }
}
/***为 已有账号绑定点击事件***/
$('.hasRegister').click(function (e) {
    e.preventDefault();
    $('#register').hide();
})

//调用轮播函数
$('.carousel').carousel();

//新秀菜谱
//异步加载页面内容
$(function(){
    loadCP_new();
});
function loadCP_new(){
    $.getJSON('data/cp_new.php',{'type':1},function(data){
        var json = data;
        console.log("获取的数据"+json);
        var html =  '';
        $.each(json, function (i,v) {

            html += `
            <li>
             <a href="#">
                <div class="media">
                    <div class="media-left">
                        <img src="img/${v.n_img}" />
                    </div>
                     <div class="media-body">
                         <h4>${v.n_name}</h4>

                        <p> ${v.detail}</p>
                    </div>
                </div>
            </a>
            </li>`;
        });

        $('#cp_new>ul').html(html);
    });
}

//为a绑定单击事件
$('.menu>h3').on('click','a',function(e){
    //console.log(this);
    e.preventDefault();
    $(this).parent().addClass('current').siblings().removeClass('current');
    var id = $(this).attr('href');
    console.log(id);
    var type = id.slice(id.lastIndexOf('#')+1);
    console.log(type);
    //异步加载数据
    $.getJSON('data/'+type+'.php',{'type':1},function(data){
        var json = data;
        console.log("获取的数据"+json);
        var html =  '';
        $.each(json, function (i,v) {
            html += `
            <li>
                <a href="#">
                <div class="media">
                <div class="media-left">
                <img src="img/${v.n_img}" />
                </div>
                <div class="media-body">
                <h4>${v.n_name}</h4>

                <p> ${v.detail}</p>
                </div>
                </div>
                </a>
            </li>`;
        });

        $('#'+type+'>ul').html(html);

    });

    //console.log("获取id"+id);
    $(id).addClass('show').siblings().removeClass('show');
})

/***时令食材***/
$('.m_list li').on('click','a', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).addClass('show').siblings().removeClass('show');
})

/****美食专题******/
$(".picMarquee-left").slide(
    {
        mainCell:".bd ul",
        autoPlay:true,
        effect:"leftMarquee",
        vis:3,
        interTime:50
    });


