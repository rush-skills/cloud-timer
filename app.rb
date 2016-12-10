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

    get "/assets/js/application.js" do
      content_type :js
      @scheme = ENV['RACK_ENV'] == "production" ? "wss://" : "ws://"
      erb :"application.js", layout: nil
    end
  end
end
