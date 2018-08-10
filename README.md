# roboscope
A toy Django project using Markov-generated horoscopes

I made this to acquaint myself with the basics of Django (i.e, there are no sessions, no authentication, no admin, just a couple of views, although I did mix in some Javascript to spruce up a menu). The horoscopes are made using the Markov chain generator that you can find at https://github.com/jsvine/markovify, enhanced to make use of NLTK's part of speech tagging.

Should you actually want to see for yourself, there is a demo up http://ajchristie.pythonanywhere.com. If you want to mess around with it yourself, first make sure you have the base requirements of Python 3 and a current Django release already installed, and then it should be as simple as

    1. Cloning the repository

    2. Creating and activating a virtualenv as you wish

    3. $ pip install -r requirements.txt

    4. Generate a secret key and paste it into SECRET_KEY in roboscopes/settings.py

    5. $ python manage.py runserver

    6. Go to localhost:8000/scoperobit
