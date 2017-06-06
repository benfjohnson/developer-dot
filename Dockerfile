FROM starefossen/ruby-node

# Create app directory
RUN mkdir app
WORKDIR app

# Install our Ruby dependencies
# Should cache unless Gemfile changes for fast builds
COPY Gemfile* /app/
RUN bundle install

RUN gem install jekyll && \
    gem install s3_website

# Run the jekyll server on port 4000
EXPOSE 4000
