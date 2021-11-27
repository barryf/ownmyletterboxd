@app
ownmyletterboxd

@aws
region eu-west-2

@http
get /

@scheduled
fetch rate(10 minutes)

@tables
users
  url *String
