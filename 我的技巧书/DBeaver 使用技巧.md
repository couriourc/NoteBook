## DBeaver 使用技巧

dbeaver是免费和开源（GPL）为开发人员和数据库管理员通用数据库工具。

dbeaver是免费和开源（GPL）为开发人员和数据库管理员通用数据库工具。

## 1：数据库的连接

![数据库连接界面](https://i.loli.net/2021/06/14/nkBXoAGSxcYb4e6.png)



## 2 : 清晰的ER图

![image-20210614220121678](https://i.loli.net/2021/06/14/G6PHZYUctRAB1u9.png)



## 3：使用设置

在一般开发的情况下，往往需要查询的数据条数不会那么地多，要求查询速度响应快，为了使Dbeaver查询速度更快，所以可以设置每次查询数据返回的条数，设置20条即可：窗口–首选项

![image-20210614220255592](https://i.loli.net/2021/06/14/3I2iWetJB4XHvMk.png)

## 4：模板功能

为了平时写SQL语句更方便，Dbeaver提供了“模板功能”，该功能可以实现自动生成一些常用的SQL语句块，配置好之后输入名称然后按两下tab键就可以呼出SQL模板：

![image-20210614220422847](https://i.loli.net/2021/06/14/bgwusaS3kjBIfmc.png)

## 5：查询结果转换各种格式

![image-20210614220657046](https://i.loli.net/2021/06/14/y2kQMEmO5h4fRWB.png)

## 6： 快捷键

```txt
ctrl + enter 执行sql
ctrl + alt + ↑ 向上复制一行
ctrl + alt + ↓ 向下复制一行
ctrl + shift + ↑ 向上移动一行
ctrl + shift + ↓ 向下移动一行
ctrl + alt + F 对sql语句进行格式化，对于很长的sql语句很有用
ctrl + d 删除当前行
alt + ↑ 向上选定一条sql语句
alt + ↓ 向下选定一条sql语句
ctrl + / 行注释
ctrl + shift+ / 块注释
ctrl + f 查找、替换
ctrl + space sql提示(如果写了from table后也会自动提示field)
ctrl + shift + E 执行计划
ctrl + shift + U 将选定的sql转换成大写字母
ctrl + shift + L 将选定的sql转换成小写字母
```

