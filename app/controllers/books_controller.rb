class BooksController < ApplicationController

  def app
    # render our app with no props, will get the data we need with axios calls
    render component: "App"
   end
   
  def index
     @books = Book.order(title: :desc)
     render json: @books
  end









end
