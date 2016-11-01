<?php
//页面头部
header('Content-Type:text/html;charset=UTF-8');
//头部代码片段
?>
     <div class="container">
       <div class="navbar-header">
         <a href="#" class="navbar-brand">
           <span class="logo"></span>
         </a>
         <a href="#my_nav" class="navbar-toggle" data-toggle="collapse">
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </a>
       </div>
       <div class="navbar-collapse collapse" id="my_nav">
         <ul class="nav navbar-nav">
           <li><a href="#">首页</a></li>
           <li><a href="#">菜谱大全</a></li>
           <li><a href="#">关于我们</a></li>
           <li><a href="#">留言</a></li>
         </ul>
         <a href="#register" data-toggle="modal" class="navbar-link navbar-text navbar-right">注册</a>
         <span class="navbar-text navbar-right">|</span>
         <a href="#login" data-toggle="modal" class="navbar-link navbar-right navbar-text">登录</a>

         <form action="#" class="navbar-form navbar-right">
           <div class="form-group has-feedback">
             <label for="kw" class="sr-only">请输入收索关键字</label>
             <span class="glyphicon glyphicon-search form-control-feedback"></span>
             <input type="text" class="form-control" placeholder="search" id="kw"/>
           </div>
         </form>
       </div>
     </div>





