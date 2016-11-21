@echo off
set /p moduleName1="Module name like Automizy-Email-Editor: "
set /p moduleName2="Module name like AutomizyEmailEditor: "
set /p moduleName3="Module name like automizy-email-editor: "
set /p moduleNameshort="Module name in short like aee: "
set /p moduleVariable="Module showrt variable like $AEE: "
set /p moduleDescription="Module description: "

set isConfirm=y
set /p isConfirm=Please confirm the new module informations [y/n] (default - y)?:

IF NOT "%isConfirm%"=="y" GOTO EXIT0

set fromDir=%cd%\
set target=%cd%\..\generatedModules\%moduleName1%

mkdir %target%
xxcopy /Y /S /Q "%fromDir%" "%target%"
rmdir /S /Q %target%\node_modules
rmdir /S /Q %target%\.bower
rmdir /S /Q %target%\.idea
rmdir /S /Q %target%\src\vendor


fart.exe -r -c -- %target%\src\* Automizy-Status-Bar %moduleName1%
fart.exe -r -c -- %target%\src\* AutomizyStatusBar %moduleName2%
fart.exe -r -c -- %target%\src\* automizy-status-bar %moduleName3%
fart.exe -r -c -- %target%\src\* asb %moduleNameshort%
fart.exe -r -c -- %target%\src\* $ASB %moduleVariable%
fart.exe -r -c -- %target%\src\* AutomizyStatusBarDescription "%moduleDescription%"

fart.exe -c -- %target%\* Automizy-Status-Bar %moduleName1%
fart.exe -c -- %target%\* AutomizyStatusBar %moduleName2%
fart.exe -c -- %target%\* automizy-status-bar %moduleName3%
fart.exe -c -- %target%\* asb %moduleNameshort%
fart.exe -c -- %target%\* $ASB %moduleVariable%
fart.exe -c -- %target%\* AutomizyStatusBarDescription "%moduleDescription%"

ren %target%\src\asb.html %moduleNameshort%.html
ren %target%\src\asb.js %moduleNameshort%.js
ren %target%\src\asb.css %moduleNameshort%.css

cd %~dp0\%target%
call npmBowerGrunt.bat

echo New module created!
pause;

:EXIT0