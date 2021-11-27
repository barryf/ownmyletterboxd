@app
ownmyletterboxd

@aws
region eu-west-2

@http
get /

@scheduled
process rate(10 minutes)

@tables
users
  url *String
