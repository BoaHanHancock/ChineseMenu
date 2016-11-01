<?php
header('Content-Type:text/html;charset=UTF-8');
//注册模态框代码片段
?>
 <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <span data-dismiss="modal" class="close">&times;</span>
        <h3>
          <span>注册</span>
          <a href="#login" data-toggle="modal" data-dismiss="modal" class="hasRegister">已有账号</a>
        </h3>
      </div>
      <div class="modal-body">
        <form action="" class="form-horizontal">
          <div class="form-group">
            <div class="col-xs-2 text-right"><label class="control-label">邮箱:</label></div>
            <div class="col-xs-5">
              <label for="email" class="sr-only">请输入你的邮箱:</label>
              <input type="email" class="form-control" id="email" placeholder="请输入你的邮箱" autofocus required/>
            </div>
            <label id="emailTip" class="col-xs-5 label-success">请输入你的电子邮件地址.</label>
          </div>
          <div class="form-group">
            <div class="col-xs-2 text-right"><label class="control-label" for="user_name">昵称:</label></div>
            <div class="col-xs-5">
              <input id="user_name" type="text" class="form-control" placeholder="请输入用户名"
                     required pattern="^[a-zA-Z0-9]{8,16}$">
            </div>
            <label id="usernameTip" class="col-xs-5 hide control-default">请输入4-16位的英文/数字.</label>
          </div>
          <div class="form-group">
            <div class="col-xs-2 text-right"><label class="control-label" for="password">密码:</label></div>
            <div class="col-xs-5">
              <input id="password" type="password" class="form-control" placeholder="请输入密码" required pattern="^[0-9]{6,12}$">
            </div>
            <label id="passwordTip" class="col-xs-5 hide control-default">请输入6至12位的数字.</label>
          </div>
          <div class="form-group">
            <div class="col-xs-2 text-right"><label class="control-label" for="re_pwd">确认密码:</label></div>
            <div class="col-xs-5">
              <label for="re_pwd" class="sr-only">确认密码</label>
              <input type="password" class="form-control" id="re_pwd" required/>
            </div>
            <label id="re_pwdTip" class="col-xs-5 hide control-default">请输入4-16位的英文/数字.</label>
          </div>
          <div class="form-group">
            <div class="col-xs-5 col-xs-offset-2">
              <a href="#" class="btn btn-success btn-block" data-dismiss="modal">注册</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
