@echo off
echo ==============================
echo GoodFilm Git Deploy V2
echo ==============================

REM 初始化仓库
if not exist ".git" (
    echo 初始化 Git 仓库...
    git init
    git branch -M main
)

REM 设置远程（强制覆盖）
git remote remove origin 2>nul
git remote add origin https://github.com/chinaCCTVfilm/v93.git

REM 提交
git add .

git commit -m "deploy %date% %time%" 2>nul

REM 强制推送（🔥关键）
git push -u origin main --force

echo ==============================
echo 🚀 推送完成！
echo ==============================
pause