# Cloud Timer

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

This is an application that allows users to create their own cloud-synced countdown timers, that allow you to set the timer on the admin page and then show the timer on the clients. This can be extremely useful in meetings and conferences to show the timer to the speaker without actually handling the display (or the device) and not interrupting the speaker.

Made with [faye-websocket](https://github.com/faye/faye-websocket-ruby), [Puma](https://github.com/puma/puma), and [Sinatra](https://github.com/sinatra/sinatra).

Check out the [live demo](http://meetingtimer.herokuapp.com/).

Code is based on the [ruby websockets chat demo by Heroku](https://github.com/heroku-examples/ruby-websockets-chat-demo).

## Setup
To install all the dependencies, run:

```
bundle install
```

Next the app requires some env vars for configuration. A sample `.env.sample` is provided for running the app locally. You can copy `.env.sample` to `.env` which foreman will pick up.

Using foreman we can boot the application.

```
$ foreman start
```

You can now visit <http://localhost:5000> to see the application.

## License

```
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2016 Ankur Singh <hello@ankursingh.me>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.
 ```
