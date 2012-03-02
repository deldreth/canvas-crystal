require 'sinatra'
require 'bundler/setup'

get '/' do
	erb :icon	
end

get '/time' do
	"#{Time.now}"
end