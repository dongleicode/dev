create databse egg_article;
use egg_article;
create table article(
    id int(10) not null auto_increment,
    img text default null comment '缩略图'，
    title varchar(80) default null comment '文章标题'，
    summary varchar(300) default null comment '文章简介'，
    content text default null comment '文章内容'，
    createTime timestamp default null comment '发布时间'，
    primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表'；

insert into article(img, title, summary, content, createTime)
values('编程吧必备知识 计算机组成原理+操作系统', 'https://img.php.cn/upload/article/000/000/020/633501a29d313483.png', '介绍编程必备基础知识', '快速、西宫补足必备的计算机系统知识，更贴近工作世界，让你更快的学到满足识记工作的知识。', '2022-11-03 12:17:23')