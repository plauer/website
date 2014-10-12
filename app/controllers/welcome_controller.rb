class WelcomeController < ApplicationController

  def index
    # render :index, layout: "test"
  end

  def show_resume
    render :resume, layout: "test"
  end
end