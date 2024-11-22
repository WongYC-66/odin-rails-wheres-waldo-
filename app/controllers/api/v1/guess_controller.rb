class Api::V1::GuessController < ApplicationController
  def create
    # bypass temporarily
    # return render json: { res: true }
    val = params[:val]
    x = params[:x]
    y = params[:y]

    solution = {
      1 => [ 0.488, 0.713 ],
      2 => [ 0.853, 0.670 ],
      3 => [ 0.274, 0.600 ],
      4 => [ 0.135, 0.677 ]
    }

    tolerance = 0.03

    solX, solY = solution[val]

    if (x - solX).abs <= tolerance && (y - solY).abs <= tolerance
      render json: { res: true }
    else
      render json: { res: false }
    end
  end
end
