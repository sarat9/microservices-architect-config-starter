from flask import Flask,request
from flask_cors import CORS 
import json


app = Flask(__name__)
CORS(app)


@app.route('/', methods = ['GET'])
def hello():
   print('Getting List of WishList Items')
   x = {
    "1": "Apple Iphone",
    "2": "MacBook",
    "3": "Your Fav Something else"
   }
   y = json.dumps(x)
   return y


@app.route('/likes', methods = ['GET'])
def likes():
   print('Getting List of WishList Items')
   return 'List of WishList Items'


@app.route('/product/<product>', methods = ['GET', 'POST'])
def product(product):
   if request.method == 'POST':
      print(product)
      return product
   return 'Call from POST'


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    print('Wishlist Microservice Started...')
