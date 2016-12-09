require 'sinatra/base'

module CloudTimer
  class App < Sinatra::Base
  	set :static_cache_control, [:public, max_age: 1]

    get "/" do
      erb :index
    end

    get "/admin" do
    	erb :admin
    end
  end
end
