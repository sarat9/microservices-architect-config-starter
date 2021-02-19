from flask import Flask,request
from flask_cors import CORS 
from PIL import Image 
import numpy as np
import base64
import json


app = Flask(__name__)
CORS(app)


@app.route('/', methods = ['GET'])
def hello():
   print('Getting List of WishList Items')
   return 'List of WishList Items'


@app.route('/product/<product>', methods = ['GET', 'POST'])
def product(product):
   if request.method == 'POST':
      print(product)
      return product
   return 'Call from POST'


if __name__ == '__main__':
    app.run(port='1003')
    print('Wishlist Microservice Started...')