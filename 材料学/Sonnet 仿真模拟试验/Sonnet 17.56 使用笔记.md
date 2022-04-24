# Sonnet 17.56 使用笔记

## [1.](#install-method) 安装及破解步骤

### 准备材料(#install-materials)

1. 百度网盘地址：https://pan.baidu.com/s/11JG3rV_kXpuBJzSM2m1Pqg 提取码: `yi9v `

### 安装步骤(#install-steps)

1. [将下载的文件解压](#install-steps-1)

    ![image-20220424133501045](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133501045-16507785055021.png)

2. [点击 `setup_sonnet1756.msi` 进入安装](#install-steps-2)

3. [点击`next`](#install-steps-3)

    ![image-20220424133601561](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133601561-16507785641153.png)

4. [点击 `next`](#install-steps-4)

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641024027.jpg)录

5. [选择自己想安装的目录](#install-steps-5)

    ![image-20220424133851127](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424133851127-16507787330647.png)

6. [点击`install`开始安装](#install-steps-6)

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641113811.jpg)

7. [软件正在安装，请耐心等等。](#install-steps-7)

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641155537.jpg)

8. [安装完成，但先不要运行它](#install-steps-8)

    ![img](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/202203131641194116.jpg)

### [破解步骤](#patch-steps)

1. 回到[第一步](#install-steps-1)中的文件夹，将`Sonnet License Gen.rar` 解压缩
    ![image-20220424135258113](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135258113-165077957939515.png)

2. [获取HOSTID](#patch-steps-2)

   2.1 [运行 `Sonnet`](#patch-steps-2-1)

       ![image-20220424135519438](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135519438-165077972163317.png)

   2.2 [点击 `Admin/License`](#patch-steps-2.2)

       ![image-20220424135652503](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135652503.png)

   2.3 [点击 `Imtools`](#patch-steps-2.3)

       ![image-20220424135918760](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135918760-165077996174223.png)

   2.4 [点击 `System Settings`](#patch-steps-2.4)

       ![image-20220424140001093](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140001093-165078000321925.png)

   2.5 [复制 `Ethernet `对应的值: `2cf05de7e2e0`](#patch-steps-2.5)

       ![image-20220424140047869](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140047869-165078004978927.png)

3. [回到刚才解压出来的文件夹中，生成 `License`](#patch-steps-3)

![image-20220424140412900](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140412900-165078025466329.png)

4. [编辑 `sonnetd_nl.src`](#patch-steps-4)

    ![image-20220424140504608](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140504608-165078030746731.png)

4. [将 `000000000000` 替换为刚才复制的 `Ethernet`的值，并保存](#patch-steps-5)

![image-20220424140715668](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140715668.png)

6. [双击运行生成器](#patch-steps-6)

    ![image-20220424140757951](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140757951-165078047972733.png)

7. [ 一闪而过之后得到`sonnet.lic`](#patch-steps-7)

    ![image-20220424140838094](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424140838094.png)

8. [再回到 `Sonnet` 中，点击 `Admin/License`](#patch-steps-8)

![image-20220424135652503](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424135652503.png)

9. [点击 `Install New License File`](#patch-steps-9)

    ![image-20220424141035857](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424141035857-165078063731735.png)

10. [选择你刚才生成的`sonnet.lic`文件](#patch-steps-10)

11. [点击 `Apply`](#patch-steps-11)

     ![image-20220424141159739](Sonnet%2017.56%20%E4%BD%BF%E7%94%A8%E7%AC%94%E8%AE%B0.assets/image-20220424141159739-165078072187537.png)

12. [重启软件即可](#patch-steps-12)