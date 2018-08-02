# roboscope
A toy Django project using Markov-generated horoscopes

I made this just to acquaint myself with the very basics of Django (i.e, there're no sessions, no authentication, no admin, just a couple of views).

Should you actually want to see for yourself, first make sure you have the base requirements of Python 3 and a current Django release, and then it should be as simple as

    1. Cloning the repository

    2. Creating and activating a virtualenv as you wish

    3. $ pip install -r requirements.txt

    4. Generate a secret key and paste it into SECRET_KEY in roboscopes/settings.py

    5. $ python manage.py runserver

    6. Go to localhost:8000/scoperobit
