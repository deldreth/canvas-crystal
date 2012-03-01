require 'sinatra'

get '/' do
	erb :icon	
end

get '/time' do
	"#{Time.now}"
end