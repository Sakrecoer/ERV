#!/bin/bash

cd /home/set/git/erv.com/_scripts/insta/

npm run instalib -- liberate https://www.instagram.com/enrenarevardag/ -o instagram.yml
rm -f media/*.jpg
rm -f /home/set/git/erv.com/images/insta/*

npm run instalib mirror instagram.yml 
mogrify -resize 220 /home/set/git/erv.com/_scripts/media/*.jpg

mv /home/set/git/erv.com/_scripts/media/*.jpg /home/set/git/erv.com/images/insta/
mv /home/set/git/erv.com/_scripts/instagram.yml /home/set/git/erv.com/_data/

chmod -x /home/set/git/erv.com/_scripts/instalib.sh

git add .
git commit -m "updating instafeed (instalib)"
git push
