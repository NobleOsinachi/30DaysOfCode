@echo off

REM Get the current date and time in a format that can be used as a folder name
for /f "delims=" %%a in ('wmic os get LocalDateTime ^| findstr ^^[0-9]') do set "timestamp=%%a"
set "timestamp=%timestamp:~0,14%"

REM Create the folder with the timestamp as its name
mkdir %timestamp%

REM Create the timestamp.txt file inside the folder
echo %timestamp% > %timestamp%\%timestamp%.txt




git commit -m "Created %timestamp%"


