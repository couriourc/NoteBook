# Sonnet 17.56 使用笔记

## [1.](#install-method) 安装及破解步骤                                                                                                         

### 准备材料                                                                                                  

1. 百度网盘地址：https://pan.baidu.com/s/11JG3rV_kXpuBJzSM2m1Pqg 提取码: `yi9v `   
### 安装步骤                                                                                                             

1. 将下载的文件解压                                        

![image-20220424133501045](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133501045-16507785055021.png)  
    
2. 点击 `setup_sonnet1756.msi` 进入安装                                                                           
3. 点击`next`                                                             
  ![image-20220424133601561](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133601561-16507785641153.png)  
  
4. 点击 `next`                                                                                                       
  ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641024027.jpg)录                                         
  
5. 选择自己想安装的目录

![image-20220424133851127](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133851127-16507787330647.png)  
    
6. 点击`install`开始安装                                                   
  ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641113811.jpg)                                          
  
7. 软件正在安装，请耐心等等。                                                 
  ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641155537.jpg)                                          
  
8. 安装完成，但先不要运行它                                                 
![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641194116.jpg)                                          

### 破解步骤

1. 回到 安装步骤中的第一步中 的文件夹，将`Sonnet License Gen.rar` 解压缩         

![image-20220424135258113](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135258113-165077957939515.png) 
    
2. [获取HOSTID](#patch-steps-2)
2.1 运行 `Sonnet`                                    
![image-20220424135519438](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135519438-165077972163317.png) 

2.2 点击 `Admin/License`                            

![image-20220424135652503](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135652503.png)                 
                                                                                                                                         
2.3 点击 `Imtools`      

![image-20220424135918760](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135918760-165077996174223.png)
                                                                                                                                         
2.4 点击 `System Settings`                                                 

![image-20220424140001093](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140001093-165078000321925.png)                                                                                                                                         
2.5 复制 `Ethernet `对应的值: `2cf05de7e2e0`                                 

![image-20220424140047869](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140047869-165078004978927.png)

3. [回到刚才解压出来的文件夹中，生成 `License`](#patch-steps-3)                   
![image-20220424140412900](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140412900-165078025466329.png) 

4. 编辑 `sonnetd_nl.src`
                                  

![image-20220424140504608](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140504608-165078030746731.png) 
    
4. 将 `000000000000` 替换为刚才复制的 `Ethernet`的值，并保存                   
![image-20220424140715668](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140715668.png)                     

6. 双击运行生成器                                                                                                        
  ![image-20220424140757951](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140757951-165078047972733.png) 
  
7. 一闪而过之后得到`sonnet.lic`                                                                                         
![image-20220424140838094](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140838094.png)                 

8. 再回到 `Sonnet` 中，点击 `Admin/License`   
                              

![image-20220424135652503](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135652503.png)                     
                            
9. 点击 `Install New License File`                                                                                      
![image-20220424141035857](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424141035857-165078063731735.png) 

10. 选择你刚才生成的`sonnet.lic`文件                                                                                         

11. 点击 `Apply`                                                                                             
![image-20220424141159739](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424141159739-165078072187537.png)

12. 重启软件即可                                                                                                  

## 片式微波谐振器的设计—以3.6GHz微带线谐振器为例

1. ### 创建新的工程文件运行Sonnet软件

    点击`Edit Project`→`New Geometry`

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/b1fdf149571761ee242e8fd31153442a2a85977e.png)

2. ### 参数设置调整单位点击

    `Circuit/Settings`→`Units`，设置`Length`为`mm`。

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/05b59aa04a4d3e3f6cfd21e312aab8875866c5b6.png)

    点击`Box`。设置`Cell Size`为 `0.02mm`；`Box Size`中X=4.0，Y=3.0 

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/65a9974ad773d3ef28985337b063cc4edc754015.png)

    

3. ### 厚度及材料特性设置点击

    `Circuit/settings`→`Dielectric Layers`。选中`GND`（基片）一行，点击右侧`Edit`，设置`Mat.Name`为 [待定名] ，
```json
    {
        "Thickness": "1.0mm",
        "Erel": 37.0,
        "Dielectric Loss Tan": 5.0e-4,
    }
```
![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/65a9974ad773d3ef28985337b063cc4edc754015-16520641955037.png)
			同理将“0”（空气)一行中的“Thickness”设置为5.0mm。

​    

4. ### 设置所用金属（[待定]）的电导率

    点击`Circuit/settings`→`Metals/Bricks`→`Add Planar...`，`Name`为 [ 待定 ] ，`Conductivity`=[ 待定 ] S/m，`Thickness`=0.001mm

5. ### 设计电路

    用`insert`中的`rectangle`功能，在基片中间位置画出一个矩形，左右其中一侧与边框重合表示接地；在基片上下两侧绘制2个较小矩形（一侧与边框重合），尺寸相等、位置对称，使用`Tools Box`中的`Add port`功能，在两侧矩形与边框重合处设置`1`、`2`端口。两侧矩形（金属）不能与中心导电带金属相连，形成耦合电容，通过调整耦合电容增大Q值。分别双击3个矩形部分，设置“Metal”为 [ 待定 ] 。

6. ### 分析与调试分析设置

  点击`Circuit/settings`→`Sweeps`，选中`Frequencies/ABS` 移除。

  ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/589c5762113e4cd3924cd8da9f5b67b9f213cdbe.png)

  然后点击“➕”，选择“Linear Sweep”

  ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/617a11a2b97a53e0da746bc42ab22032bd54a584.png)

  输入频率范围

  `Lin`=3.6 - 2 = 1.6 GHz，`To`=3.6+2=5.6 GHz，`Step`=0.1GHz。

  点击 “Ok”

7. ### 运行

    

8. ## 图线分析

    点击“Project”→“View Response”→“New Graph”，生成图线，纵坐标默认“Magnitude（dB）”，横坐标默认“Frequency（GHz）”，不做改动。双击左侧“Left Axis”区域的“DB[S11]”，添加响应“DB[S12]”，选取图线最高点（中心频率）。如显示频率不为5.4GHz，进行后续调试工作。 
