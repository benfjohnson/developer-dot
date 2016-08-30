#!/usr/bin/env bash

IFS=$'\n'       # make newlines the only separator
exit=0
for diff in `diff -rq _expected _site`
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

echo "********************"
echo "********************"

if [[ $exit == 0 ]]; then
    echo "Jekyll site matched _expected site!"
else
    echo "ERROR: Jekyll site did not match _expected site."
fi

echo "********************"
echo "********************"

exit $exit
