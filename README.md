# roboscope
A toy Django project using Markov-generated horoscopes

Made just to acquaint myself with teh very basics of Django (i.e, there're no sessions, no authentication, just a couple of views).

Should you actually want to see for yourself, first make sure you have the base requirements of Python 3 and a current Django release, 
and then it should be as simple as
    1. Cloning the repository
    2. Creating and activating a virtualenv as you wish
    3. $ pip install -r requirements.txt
    4. Generate a secret key and paste it into SECRET_KET in roboscopes/settings.py (or set it as the DJANGO_KEY environment variable and everything will work as is)
    5. $ python manage.py migrate
    6. $ python manage.py runserver
    7. Go to localhost:8000/scoperobit!
