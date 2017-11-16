# git

详细资料请参考：[传送门](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 安装

使用Windows系统的童鞋们需要下载git [传送门](https://git-scm.com/download.win)

## 常用命令集合

``` bash
# 查看git版本
git version

# 从服务器上将代码给拉下来
git clone https://github.com/The-Seed/aibo.git 

# 查看当前状态
git status

# 抓取远程仓库所有分支更新并合并到本地
git pull

# 将所有修改过的工作文件提交暂存区
git add .

# 从暂存区恢复到工作文件
git reset -- .

# 添加commit信息
git commit -m "This is the message describing the commit" 

# 提交并且加注释 
git commit -am "init" 

# 将文件给推到服务器上 
git push origin master 

# 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改
git reset --hard

# 查看本地分支
git branch

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a

# 创建本地分支
git branch [name]

# 切换分支
git checkout [name]

# 创建新分支并立即切换到新分支
git checkout -b [name]

# 删除分支
git branch -d [name]

# 彻底删除历史提交记录的方法
git reset --hard commit_hash 
git push origin HEAD --force
```
