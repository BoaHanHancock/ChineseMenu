SET NAMES UTF8;
DROP DATABASE IF EXISTS caipu;
CREATE DATABASE caipu CHARSET=UTF8;
USE caipu;

CREATE TABLE cp_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(64),
    username VARCHAR(64),
    pwd VARCHAR(64),
    re_pwd VARCHAR(64)
);
INSERT INTO cp_user VALUES(NULL,'123456@qq.com','aa','123','123');

CREATE TABLE cp_new(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    n_name VARCHAR(64),
    n_img VARCHAR(64),
    detail VARCHAR(2048)
);
INSERT INTO cp_new VALUES
   ( NULL,'大蒜烧鳝鱼','j01.jpg','酸豆角炒肉末简直是下饭的良品，加上精心炒制的肉末，一盘香喷喷的下饭菜就做好了.'),
   ( NULL,'川味粉蒸肉','j02.jpg','这道川味粉蒸肉不仅有红薯的甜味，还有辣椒的辣味，这样的甜辣，绝对让你吃到.爽'),
   ( NULL,'生滚鱼片粥','j03.jpg','生滚鱼片粥是最经典的广式早茶，养颜美容对身体也非常好，今天我们也学一下这道粥吧!'),
   ( NULL,'秋葵拌香干','j04.jpg','秋葵拌香干，秋葵含有很多人体所需微量元素 ，对增强人体免疫力有一定帮助， 快来学吧!'),
   ( NULL,'白菜猪肉锅贴','j05.jpg','锅贴是一种特色的小吃，这道白菜猪肉锅贴满满的老上海记忆，再蘸点红油陈醋，味道超级好.'),
   ( NULL,'酸豆角炒肉末','j11.jpg','酸豆角炒肉末简直是下饭的良品，加上精心炒制的肉末，一盘香喷喷的下饭菜就做好了!');

CREATE TABLE cp_hot(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    h_name VARCHAR(64),
    h_img VARCHAR(64),
    h_detail VARCHAR(2048)
);
INSERT INTO cp_hot VALUES
   ( NULL,'大蒜烧鳝鱼','j1.jpg','酸豆角炒肉末简直是下饭的良品，加上精心炒制的肉末，一盘香喷喷的下饭菜就做好了.'),
   ( NULL,'川味粉蒸肉','j2.jpg','这道川味粉蒸肉不仅有红薯的甜味，还有辣椒的辣味，这样的甜辣，绝对让你吃到.爽'),
   ( NULL,'生滚鱼片粥','j3.jpg','生滚鱼片粥是最经典的广式早茶，养颜美容对身体也非常好，今天我们也学一下这道粥吧!'),
   ( NULL,'秋葵拌香干','j4.jpg','秋葵拌香干，秋葵含有很多人体所需微量元素 ，对增强人体免疫力有一定帮助， 快来学吧!'),
   ( NULL,'白菜猪肉锅贴','j5.jpg','锅贴是一种特色的小吃，这道白菜猪肉锅贴满满的老上海记忆，再蘸点红油陈醋，味道超级好.'),
   ( NULL,'鸡肉炖粉条','j12.jpg','大蒜烧鳝鱼，浓郁的蒜香和鳝鱼的软嫩爽口相得益彰，是小酌非常好的选择，快来学习吧！');

CREATE TABLE cp_popular(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    p_name VARCHAR(64),
    p_img VARCHAR(64),
    p_detail VARCHAR(2048)
);
INSERT INTO cp_popular VALUES
   ( NULL,'大蒜烧鳝鱼','j1.jpg','酸豆角炒肉末简直是下饭的良品，加上精心炒制的肉末，一盘香喷喷的下饭菜就做好了.'),
   ( NULL,'川味粉蒸肉','j2.jpg','这道川味粉蒸肉不仅有红薯的甜味，还有辣椒的辣味，这样的甜辣，绝对让你吃到.爽'),
   ( NULL,'生滚鱼片粥','j3.jpg','生滚鱼片粥是最经典的广式早茶，养颜美容对身体也非常好，今天我们也学一下这道粥吧!'),
   ( NULL,'秋葵拌香干','j4.jpg','秋葵拌香干，秋葵含有很多人体所需微量元素 ，对增强人体免疫力有一定帮助， 快来学吧!'),
   ( NULL,'白菜猪肉锅贴','j5.jpg','锅贴是一种特色的小吃，这道白菜猪肉锅贴满满的老上海记忆，再蘸点红油陈醋，味道超级好.'),
   ( NULL,'鸡肉炖粉条','j12.jpg','大蒜烧鳝鱼，浓郁的蒜香和鳝鱼的软嫩爽口相得益彰，是小酌非常好的选择，快来学习吧！');



