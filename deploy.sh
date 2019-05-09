# delete branch gh-pages
git push --delete origin gh-pages
git branch -d gh-pages

# recreate branch gh-pages
git branch gh-pages HEAD
git filter-branch --subdirectory-filter build -- gh-pages
git push origin gh-pages:master
