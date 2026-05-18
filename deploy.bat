@echo off
echo.
echo  Deploying Forest Menu...
echo  ========================
echo.

cd /d "C:\Users\karam\OneDrive\Desktop\Forest"

git add .
git commit -m "update: menu and images"
git push

echo.
echo  Done! Your site will be live in ~30 seconds.
echo  https://forest-menu.vercel.app
echo.
pause
