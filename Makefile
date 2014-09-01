.PHONY: server build

server:
		@python -m SimpleHTTPServer 4000

build:
        @npm install
	    @echo
	    @echo   "-- Success To Setup Build Environment --"
	    @echo