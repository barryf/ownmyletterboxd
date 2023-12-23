@app
ownmyletterboxd

@aws
region eu-west-2
runtime nodejs18.x

@scheduled
process rate(60 minutes)

@tables
users
  url *String
