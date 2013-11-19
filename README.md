Tile-map-reader
===============

Example of how to display  maps created with  https://github.com/elias94xx/Online-Tile-Map-Editor in your game

install instructions:
1)instal an webserver (tested with apache)
2)put this files on the server folder (on apache unix: /var/www/<sub folder optinional>) 
note if you use apache make sure you can write on this folder otherwise you will not be able to put this files there.

test instructions:
1)open an web browser

2)browse to 127.0.0.1

3)browse to the folder you created

Know issues:

1)by default elias94xx/Online-Tile-Map-Editor write 0 on an position that you didn't specify which tile should be there.
this is not an big issue if the tile is transparent, but since in this example it's not, this reader 
replace everything with 0 (everything you didn't specify what should be) for the tile X:4 y:12.

2)this example can only read one file, named: mapa-corrigido.xml

3)this example can only read tiles of 32X, 32Y Size and display then on the original proportion.

4)this example can only read maps of the size:  25 tiles horizontal and  19 vertical

5) not sure if this method is an web standard:
context.drawImage(obj,param 1,param 2,param 3,param 4,param 5,param 6,param 7,param 8);

6)some coments (to better understand the code) are in portuguese 
