
<?php
header('Content-Type:text/html;charset=UTF-8');
//登录模态框代码片段
?>

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <span data-dismiss="modal" class="close">&times;</span>
        <h3><a href="#login">登录菜谱网</a></h3>
        <h4>在菜谱网可以查看菜谱，发现美食，结交朋友</h4>
      </div>
      <div class="modal-body">
        <form action="" class="form-horizontal">
          <div class="form-group">
            <div class="col-xs-3 text-right"><label class="control-label">手机号/昵称:</label></div>
            <div class="col-xs-6">
              <label for="userName" class="sr-only">手机号/昵称</label>
              <input type="text" class="form-control" id="userName"/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-3 text-right"><label class="control-label">密码：</label></div>
            <div class="col-xs-6">
              <label for="pwd" class="sr-only">密码</label>
              <input type="password" class="form-control" id="pwd"/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6 text-right">
              <input type="checkbox"/>下次自动登录
            </div>
            <div class="col-xs-6">
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6 text-right">
              <a href="#" class="btn btn-success" data-dismiss="modal">登录</a>
            </div>
            <div class="col-xs-6 r_txt text-center">
              <span>还不是会员</span>
              <a href="#register" data-toggle="modal" data-dismiss="modal">立即注册</a>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
