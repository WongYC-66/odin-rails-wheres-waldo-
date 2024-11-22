class Api::V1::ScoreController < ApplicationController
  def index
    @users = User.order("time ASC")
    if @users
      render json: { users: @users }
    else
      render json: { msg: "error" }
    end
  end

  def create
    username = params[:username]
    time = params[:time]

    if User.create(name: username, time: time)
      render json: { msg: "success" }
    else
      puts "submission error"
      render json: { msg: "submission failed" }
    end
  end
end
