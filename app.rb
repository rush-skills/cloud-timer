require 'sinatra/base'

module CloudTimer
  class App < Sinatra::Base
    get "/" do
      erb :"index.html"
    end

    get "/admin" do
    	erb :"admin.html"
    end
  end
end
