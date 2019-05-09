#!/bin/bash

cd /home/set/git/instalib/

npm run instalib -- liberate https://www.instagram.com/enrenarevardag/ -o instagram.yml
rm -f media/*.jpg
rm -f /home/set/git/erv.com/images/insta/*

npm run instalib mirror instagram.yml 
mogrify -resize 220 /home/set/git/instalib/media/*.jpg

cp /home/set/git/instalib/media/*.jpg /home/set/git/erv.com/images/insta/
cp /home/set/git/instalib/instagram.yml /home/set/git/erv.com/_data/


