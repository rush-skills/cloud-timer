require './app'
require './middlewares/timer_backend'

use CloudTimer::TimerBackend

run CloudTimer::App
