# 这是第一级标题，也就相当于Word里面的标题

## 这是第二级，然后向下类推



---

三个杠杠表示的是分界线



*一个星号表示的是斜体*

**两个表示加粗**



* 一个星号在前面表示无序列表

1. 表示有序



```三个引号代表的是代码快


```

$$
LaTex公式
1.常用语法
特殊字符	说 明	实例	完整字符串
$	数学公式前后加$是行内公式	数学公式:a=x+y	数学公式:$a=x+y$
$$	数学公式加$$就是读占一行的公式	独占一行:
a=x+y
独占一行:
a=x+y
\	转义字符,特殊字符要显示原意,就在前面加\	$	$\$$
\\	在数学公式中是换行	a=x+yb=y	$a=x+y\\b=y$
_	后跟内容为下标	ai	$a_i$
^	后跟内容为上标	ai	$a^i$
{}	被括号起来的公式是一组内容	x22y(x)xyz	$x_{22}
y^{(x)}
x^{y^z}$
\frac	分数	1a	$\frac{1}{a}$
\sqrt	开根	xy−−√+x−−√a	$\sqrt{xy}+\sqrt[a]{x}$
\ldots	跟文本底线对齐的省略号	i…n	$a_{i\ldots{n}}$
\cdots	跟文本中线对齐的省略号	i⋯n	$i\cdots n$
\left \right	用于自适应匹配分隔符如{,(,|等	dudx∣∣x=0	$\left \frac{du}{dx} \right
\sum	求和	∑nk=1kx	$\sum_{k=1}^nkx $
\int	积分	∫ba	$\int_a^b$
\limits	强制上下限在上下侧	∑k=1nkx	$\sum\limits_{k=1}^nkx $
\nolimits	强制上下限在右侧	∑nk=1kx	$\sum\nolimits_{k=1}^nkx$
\overline	上划线	a+b¯¯¯¯¯¯¯¯¯¯¯	$\overline{a+b}$
\underline	下划线	a+b–––––	$\underline{a+b}$
\overbrace	上花括号	a+b+⋯+nm个	$\overbrace{a+b+\dots+n}^{m个}$|
\underbrace	下花括号	a+b+⋯+nm个	$\underbrace{a+b+\dots+n}_{m个}$
\vec	向量	a⃗ 	$\vec{a}$
2.矩阵的显示
∣∣∣adbecf∣∣∣
其实是上面语法的一个组合, 代码如下:

$\left|                --左边的竖线
\begin{array}{lcr}     --一个array的开始, l/c/r表示列的对齐方式左/中/右
a & b & c \\           --&分隔列 \\换行 
d & e & f 
\end{array}            --一个array的结束
\right|$               --右边的竖线
这里是LaTex的常用语法，不过多介绍
$$

| 名称 | 这里可以成为表格 |
| ---- | ---------------- |
|      |                  |

