class PostsController < ApplicationController
  def index
    @products = Product.all
    @images = Image.all
  end
end