@echo off
title Kozimov Muhammadsodiq - Portfolio Sayt
color 0b

echo ========================================================
echo   KOZIMOV MUHAMMADSODIQ - PORTFOLIO SAYTI
echo ========================================================
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [INFO] Mahalliy server ishga tushirilmoqda...
    echo [SAYT] Asosiy sayt:  http://localhost:3000
    echo [ADMIN] Admin panel: http://localhost:3000/admin/
    echo.
    start http://localhost:3000
    python -m http.server 3000
    goto end
)

:: Check if Node / npx is installed
npx --version >nul 2>&1
if %errorlevel% == 0 (
    echo [INFO] Mahalliy server ishga tushirilmoqda...
    echo [SAYT] Asosiy sayt:  http://localhost:3000
    echo [ADMIN] Admin panel: http://localhost:3000/admin/
    echo.
    start http://localhost:3000
    npx serve -l 3000 .
    goto end
)

:: Fallback: Open index.html directly
echo [INFO] Sayt ochilmoqda...
start index.html

:end
pause
