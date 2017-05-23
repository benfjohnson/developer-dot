FROM starefossen/ruby-node

# Create app directory
RUN mkdir app
WORKDIR app

# Install our Ruby dependencies
# Should cache unless Gemfile changes for fast builds
COPY Gemfile* /app/
RUN bundle install

# Install our NPM dependencies
# Should cache unless package.json or Gemfile changes
# for fast builds
COPY package.json /app/
RUN npm install --progress=false

# Run the jekyll server on port 80
EXPOSE 4000
