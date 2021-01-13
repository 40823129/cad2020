var tipuesearch = {"pages": [{'title': '簡介', 'text': '個人倉儲\xa0\xa0 cad2020 \n 小組網站\xa0\xa0 CAD2020AG1 \n 小組倉儲\xa0\xa0 CAD2020AG1 \n 小組Gitter\xa0 CAD2020G1 \n', 'tags': '', 'url': '簡介.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 40823129 \n', 'tags': '', 'url': 'Develop.html'}, {'title': '課程內容', 'text': 'W15 \n \n', 'tags': '', 'url': '課程內容.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '建立網頁', 'text': '興建網站 \n 1.下載 fall2020_v-1.7z. 壓縮檔並解壓縮至自己的隨身系統(USB) \n 2.下載 Portable git \xa0 解壓縮後\xa0 放到DATA中的PortableGit資料夾裡 \n \n 3.修改Start.bat的路徑 \n \n 儲存後重新啟動 \n 4.在github新建一個資料庫(repository ) \n \n 5. git clone自己倉儲的網址 \n 6.在 cad2020資料夾中創建cmsimde資料夾(小黑) \n git submodule add\xa0 https://github.com /mdecourse/cmsimde.git \n 7.複製cmsimde中up_dir資料夾內容至cad2020，不取代重複檔案 \n 8. 下載網站需要的模組(小黑) \n pip install flask flask_cors lxml bs4 markdown pelican leo\xa0 \n 9. 進入cmsimde，將wsgi.py拉進 (SciTE) 中啟動動態網頁https://localhost:9443/ \n \n \n', 'tags': '', 'url': '建立網頁.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'HW1', 'text': '1: https://cad.onshape.com/documents/8bd574062adc9aa7cce83f9e/w/e94c9df90683992e711a7411/e/0f5f51863a03b4ffed28a79c   2: https://cad.onshape.com/documents/5862ecb97aec81c335cd0c3c/w/bf858dc3da50ac79279f8dca/e/a4707870043e48036c703123   3: https://cad.onshape.com/documents/ac206e993e138573d7bce939/w/addbe6ff5e2538768939fded/e/df1a7b6bfcf678d62366f12b   4: https://cad.onshape.com/documents/1c9a21d4cb419aba3d812df9/w/86be6c681fc8d488fc8749dc/e/9e2292adda684062ef41b60f   5: https://cad.onshape.com/documents/c1fc6ba796eec3b19ff97123/w/e6645ffdb754fbe81320ef5a/e/194d7410d5cb492a92525cf0   6: https://cad.onshape.com/documents/3640d63d36a096bfe19e6e57/w/341d185292deabdee52d252c/e/e986a799d0d1a49ca364784f   7: https://cad.onshape.com/documents/4ab7bab13668ea342aade8b7/w/abfa805bd9f78c8127615aec/e/d2e9705c412b81487567583f   8: https://cad.onshape.com/documents/7892d7fa1e8b68430dbf08d1/w/7238448050d89d2839b26712/e/b6f65f00c71a559db8ec01f0   9: https://cad.onshape.com/documents/8a35e6152cde90604a86a312/w/751e0bb3dfef557b79c16f93/e/224903948ef005626e119ca6   10: https://cad.onshape.com/documents/a535b703bc1b21470e0279e1/w/861a06d6a14760864c2c79a1/e/59618fbc9eccf2e07f3921d6   11: https://cad.onshape.com/documents/4cdd40842fcc1876957dbdc7/w/8eadbf843f18e6ae87e4f50e/e/7896411670ad7cb98a2e462a   12: https://cad.onshape.com/documents/3414f7421e74e8d0f26c3485/w/fa86f65d4c3d2835dd908ac2/e/b4e06821bdfe68c8e7591a16   13: https://cad.onshape.com/documents/53bf8c067204373b088c29c0/w/56a11044d9fb6dbe6d72f184/e/6bd0cda1db65e1d88df446d8   14: https://cad.onshape.com/documents/0bf475ee73acf1aee0c4a330/w/f55f71cea97431d6a29f624b/e/6617bc834a12e819980f1893   15: https://cad.onshape.com/documents/c8b91afc08e04073eb442f4b/w/bede51341a6b5636da915133/e/4965aa747a3102bc2c1e4f76   16: https://cad.onshape.com/documents/1265e29ed5165b7c84f61812/w/2235ca479d797318e56e238c/e/350fd576b6b85fbd1bfb0ca8   17: https://cad.onshape.com/documents/a723533d34a194e88f34ffdf/w/25eb817ce6f81c9738981777/e/16322f89e6ba842b56b909c2 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'PDF1 \n PDF2 \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '如何建立ssh', 'text': '設定 ssh \n', 'tags': '', 'url': '如何建立ssh.html'}, {'title': 'W5', 'text': '', 'tags': '', 'url': 'W5.html'}, {'title': 'API', 'text': '何謂API:當你在搜尋引擎上直接搜尋API的話,你會看到它解釋為應用程式介面,這也許很難理解,簡單的說可以把API解釋為A對B溝通的橋樑,以下舉例:當你進到一間餐廳,想像有一張菜單在你前面,而要如何把餐點送到餐桌上,這時候需要一位服務生,也就是API,建立一個你對廚房(系統)的橋樑,以達成你對系統的要求。 \n', 'tags': '', 'url': 'API.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': '工程師的特質', 'text': '1.創造性(精密的創造性)\xa0 \xa02. 聰明地創造 \n', 'tags': '', 'url': '工程師的特質.html'}, {'title': '利用 SciTE 編輯器類解譯 ANSI C 程式', 'text': '下載\xa0 tcc-0.9.27-win64-bin.zip \n 解壓縮到 y:\\ 根目錄中\xa0 \n 接著必須將 y:\\tcc\\ 放入隨身系統中的 path 命令搜尋路徑中, 一旦啟動後就可以直接執行 tcc.exe, 也就是 start.bat 必須修改如下: \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n \n \n \n set path_portablegit=%Disk%:\\Portablegit\\bin; \n set path_julia=%Disk%:\\julia-1.5.2\\bin; \n set path_tcc=%Disk%:\\tcc\\; \n \xa0 \n path=%Disk%:;%path_python%;%path_portablegit%;%path_julia%;%path_tcc%;%path%; \n \n \n \n \n \n \n 修改完後,利用 stop.bat 關閉隨身系統後, 再使用 start.bat 重新啟動 \n 再使用 start.bat 重新啟動, 並在命令列中輸入 tcc, 若出現 \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n \n \n \n Tiny C Compiler 0.9.27 - Copyright (C) 2001-2006 Fabrice Bellard \n Usage: tcc [options...] [-o outfile] [-c] infile(s)... \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 tcc [options...] -run infile [arguments...] \n General options: \n \xa0\xa0 -c\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 compile only - generate an object file \n \xa0\xa0 -o outfile\xa0 set output filename \n \xa0\xa0 -run\xa0\xa0\xa0\xa0\xa0\xa0\xa0 run compiled source \n \xa0\xa0 -fflag\xa0\xa0\xa0\xa0\xa0 set or reset ( with   \'no-\'   prefix)  \'flag\'   (see tcc -hh) \n \xa0\xa0 -Wwarning\xa0\xa0 set or reset ( with   \'no-\'   prefix)  \'warning\'   (see tcc -hh) \n \xa0\xa0 -w\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 disable all warnings \n \xa0\xa0 -v -vv\xa0\xa0\xa0\xa0\xa0 show version, show search paths or loaded files \n \xa0\xa0 -h -hh\xa0\xa0\xa0\xa0\xa0 show  this , show more help \n \xa0\xa0 -bench\xa0\xa0\xa0\xa0\xa0 show compilation statistics \n \xa0\xa0 -\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 use stdin pipe as infile \n \xa0\xa0 @listfile\xa0\xa0 read arguments from listfile \n Preprocessor options: \n \xa0\xa0 -Idir\xa0\xa0\xa0\xa0\xa0\xa0 add include path  \'dir\' \n \xa0\xa0 -Dsym[=val] define  \'sym\'   with   value  \'val\' \n \xa0\xa0 -Usym\xa0\xa0\xa0\xa0\xa0\xa0 undefine  \'sym\' \n \xa0\xa0 -E\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 preprocess only \n Linker options: \n \xa0\xa0 -Ldir\xa0\xa0\xa0\xa0\xa0\xa0 add library path  \'dir\' \n \xa0\xa0 -llib\xa0\xa0\xa0\xa0\xa0\xa0 link  with   dynamic or static library  \'lib\' \n \xa0\xa0 -r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate (relocatable) object file \n \xa0\xa0 -shared\xa0\xa0\xa0\xa0 generate a shared library/dll \n \xa0\xa0 -rdynamic\xa0\xa0 export all global symbols to dynamic linker \n \xa0\xa0 -soname\xa0\xa0\xa0\xa0 set name  for   shared library to be used at runtime \n \xa0\xa0 -Wl,-opt[=val]\xa0 set linker option (see tcc -hh) \n Debugger options: \n \xa0\xa0 -g\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate runtime debug info \n \xa0\xa0 -b\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 compile  with   built- in   memory and bounds checker (implies -g) \n \xa0\xa0 -bt N\xa0\xa0\xa0\xa0\xa0\xa0 show N callers  in   stack traces \n Misc. options: \n \xa0\xa0 -x[c|a|n]\xa0\xa0 specify type of the next infile \n \xa0\xa0 -nostdinc\xa0\xa0  do   not use standard system include paths \n \xa0\xa0 -nostdlib\xa0\xa0  do   not link  with   standard crt and libraries \n \xa0\xa0 -Bdir\xa0\xa0\xa0\xa0\xa0\xa0 set tcc\'s private include/library dir \n \xa0\xa0 -MD\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 generate dependency file  for   make \n \xa0\xa0 -MF file\xa0\xa0\xa0 specify dependency file name \n \xa0\xa0 -m32/64\xa0\xa0\xa0\xa0 defer to i386/x86_64 cross compiler \n Tools: \n \xa0\xa0 create library\xa0 : tcc -ar [rcsv] lib.a files \n \xa0\xa0 create def file : tcc -impdef lib.dll [-v] [-o lib.def] \n \n \n \n \n \n 表示啟動命令搜尋路徑已經包含 y:\\tcc 目錄 \n 接下來必須修改 SciTE 編輯器中的 cpp.properties, 讓 Tools -> Go 可以呼叫 tcc.exe 類解譯編輯器中副檔名為 .c 的 ANSI C 程式. \n 之後在編輯器中加入 hello.c 並且利用 Tools -> Go 直接執行. \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n int   main() { \n printf ( "Hello, world!\\n" ); \n return   0; \n } \n \n \n \n \n \n 完成上述所有步驟設定後, 可以執行下列 ANSI C 程式: \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n \n \n \n /* Runge Kutta for a set of first order differential equations */ \n \xa0 \xa0 \n #include <stdio.h> \n #include <math.h> \n \xa0 \xa0 \n #define N 2 /* number of first order equations */ \n #define dist 0.1 /* stepsize in t*/ \n #define MAX 30.0 /* max for t */ \n \xa0 \xa0 \n FILE   *output;  /* internal filename */ \n FILE   *output1;  /* internal filename */ \n // 利用 pipe 呼叫 gnuplot 繪圖 \n FILE   *pipe; \n \xa0 \xa0 \n void   runge4( double   x,  double   y[],  double   step);  /* Runge-Kutta function */ \n double   f( double   x,  double   y[],  int   i);  /* function for derivatives */ \n \xa0 \xa0 \n void   main(){ \n \xa0 \xa0 \n \xa0\xa0 double   t, y[N]; \n \xa0\xa0 int   j; \n \xa0 \xa0 \n \xa0\xa0 output= fopen ( "osc.dat" ,  "w" );  /* external filename */ \n \xa0\xa0 output1= fopen ( "osc1.dat" ,  "w" );  /* external filename */ \n \xa0 \xa0 \n \xa0\xa0 y[0]=1.0;  /* initial position */ \n \xa0\xa0 y[1]=0.0;  /* initial velocity */ \n \xa0 \xa0 \n \xa0\xa0 //fprintf(output, "0\\t%f\\n", y[0]); \n \xa0 \xa0 \n \xa0\xa0 for   (j=1; j*dist<=MAX ;j++)  /* time loop */ { \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 t=j*dist; \n \xa0\xa0\xa0\xa0 runge4(t, y, dist); \n \xa0\xa0\xa0\xa0 fprintf (output,  "%f\\t%f\\n" , t, y[0]); \n \xa0\xa0\xa0\xa0 fprintf (output1,  "%f\\t%f\\n" , t, y[1]); \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 fclose (output); \n \xa0\xa0 fclose (output1); \n \xa0 \xa0 \n \xa0\xa0 pipe = popen( "gnuplot -persist" , "w" ); \n \xa0\xa0 //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n"); \n \xa0\xa0 fprintf (pipe, "set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n" ); \n \xa0\xa0 //fprintf(pipe,"set yrange [68:70]\\n"); \n \xa0\xa0 fprintf (pipe, "set output \\"test.png\\"\\n" ); \n \xa0\xa0 fprintf (pipe,  "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n" ); \n \xa0\xa0 fprintf (pipe, "quit\\n" ); \n \xa0 \n \xa0\xa0 fprintf (pipe, "quit\\n" ); \n \xa0\xa0 pclose(pipe); \n } \n \xa0 \xa0 \n void   runge4( double   x,  double   y[],  double   step){ \n \xa0 \xa0 \n \xa0\xa0 double   h=step/2.0,  /* the midpoint */ \n \xa0\xa0 t1[N], t2[N], t3[N],  /* temporary storage arrays */ \n \xa0\xa0 k1[N], k2[N], k3[N],k4[N];  /* for Runge-Kutta */ \n \xa0\xa0 int   i; \n \xa0 \xa0 \n \xa0\xa0 for   (i=0;i<N;i++){ \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i)); \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 for   (i=0;i<N;i++){ \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i)); \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 for   (i=0;i<N;i++){ \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i)); \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 for   (i=0;i<N;i++){ \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 k4[i]= step*f(x+step, t3, i); \n \xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0 for   (i=0;i<N;i++){ \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0; \n \xa0\xa0 } \n } \n \xa0 \xa0 \n double   f( double   x,  double   y[],  int   i){ \n \xa0 \xa0 \n \xa0\xa0 if   (i==0) \n \xa0\xa0\xa0\xa0 x=y[1];  /* derivative of first equation */ \n \xa0\xa0 if   (i==1) \n \xa0\xa0\xa0\xa0 x=-y[0]-0.5*y[1]; \n \xa0\xa0 return   x; \n } \n \n \n \n \n \n \n', 'tags': '', 'url': '利用 SciTE 編輯器類解譯 ANSI C 程式.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '首度開會:了解組員進度與發生的問題狀況 \n 並利用Gitter回報 \n CAD2020G1 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '題目暫定為桌上曲棍球 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '\n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '前往\xa0 a.kmol.info:88 \n 下載 \n \n 到\xa0 data\xa0 裡面 \n 之後確定是否能夠正常開啟 \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '零件繪製 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '繪製零件 \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': 'W17會議內容 \n \n 螺旋遞球裝置 \n \n', 'tags': '', 'url': 'W17.html'}, {'title': 'W18', 'text': '', 'tags': '', 'url': 'W18.html'}, {'title': '期末報告', 'text': '在這次的分組製作中,我負責回球機構設計繪製,在進行零組件組立時,會遇到零件干涉的問題,這時需要重新設計尺寸,在保有機構能正常運作的範圍內,來解決干涉的問題,已達成有效的機構設計。', 'tags': '', 'url': '期末報告.html'}, {'title': '課程筆記', 'text': '', 'tags': '', 'url': '課程筆記.html'}, {'title': '指令', 'text': '上傳內容到github的步驟 \n git\xa0 add\xa0 \xa0. \n git\xa0 commit\xa0 -m"上傳的檔名" \n git\xa0 push \n', 'tags': '', 'url': '指令.html'}, {'title': 'proxy設定', 'text': '連接到\xa0 a.kmol.info:88\xa0 需先設定proxy \n \n \n 密碼與使用者名稱相同\xa0 kmolab \n 進入到以下的網站 \n \n', 'tags': '', 'url': 'proxy設定.html'}]};