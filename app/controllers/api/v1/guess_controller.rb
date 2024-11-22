class Api::V1::GuessController < ApplicationController
  def create
    render json: { res: true }
  end
end
