#!/usr/bin/env
git remote add heroku https://git.heroku.com/seftour.git
git config --global user.email "chaiwutmaneechot@gmail.com"
git config --global user.name "Chaiwut Maneechot"
cat > ~/.netrc << EOF
  machine api.heroku.com
    login $HEROKU_LOGIN
    password $HEROKU_API_KEY
  machine git.heroku.com
    login $HEROKU_LOGIN
    password $HEROKU_API_KEY

EOF
