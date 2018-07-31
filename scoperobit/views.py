from django.shortcuts import render
from django.http import HttpResponse
from .utils.helpers import POSifiedText
from roboscopes.settings import BASE_DIR
from os.path import join
import json


def index(request):
    return render(request, 'scoperobit/index.html')

def result(request):
    filename = request.POST['sign'] + '_model.json'
    with open(join(BASE_DIR, 'scoperobit', 'signmodels/' + filename), 'r') as f:
        data = json.load(f)
    signmodel = POSifiedText.from_json(data)
    scope = ''
    for _ in range(5):
        scope += signmodel.make_sentence(tries=100) + ' '
    return render(request, 'scoperobit/result.html', {'scope': scope})
