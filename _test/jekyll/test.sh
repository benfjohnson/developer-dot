#!/usr/bin/env bash

IFS=$'\n'       # make newlines the only separator
exit=0

echo "********************"
for diff in `diff -rq _test/jekyll/expected _site`
    do
        echo $diff
done
echo "********************"

for diff in `diff -rq _test/jekyll/expected _site`
    do
        exit=1
        if [[ $1 == '-v' ]]; then
            echo "********************"
        fi
        echo $diff
        if [[ $diff == *'Files'* ]]; then
            if [[ $1 == '-v' ]]; then
                echo $diff | sed 's/Files /diff -u /g; s/ and / /g; s/ differ//g;'
                eval "$(echo $diff | sed 's/Files /diff -u /g; s/ and / /g; s/ differ//g;')"
                echo "********************"
                fi
        fi
done

echo ""
echo "********************"
echo "********************"

if [[ $exit == 0 ]]; then
    echo "Jekyll site matched expected site!"
else
    echo "ERROR: Jekyll site did not match expected site:"
    for diff in `diff -rq _test/jekyll/expected _site`
        do
            echo $diff
    done
    echo ""
    echo "If this diff is expected, you can accept it with 'rm -rf _test/jekyll/expected/ && mv _site _test/jekyll/expected/'"
fi

echo "********************"
echo "********************"

exit $exit
