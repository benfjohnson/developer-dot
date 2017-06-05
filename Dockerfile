FROM starefossen/ruby-node

# Create app directory
RUN mkdir app
WORKDIR app

# Install our Ruby dependencies
# Should cache unless Gemfile changes for fast builds
COPY Gemfile* /app/
RUN bundle install

# Run the jekyll server on port 4000
EXPOSE 4000
