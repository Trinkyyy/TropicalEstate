from flask import Flask, jsonify, request
from flask_cors import CORS  # To handle CORS issues

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Product data with detailed descriptions, images, and other attributes
products = [
    {
        "id": 1,
        "name": "Island Paradise",
        "description": "This idyllic island offers serene landscapes, secure access, and ultimate relaxation for your getaway.",
        "image": "./assets/buy1.jpg",
        "category": "buy",
        "price": 10000,
        "agentNumber": "Agent: +91 98765 43210",
        "weatherForecast": "Sunny with clear skies",
        "temperature": "28°C"
    },
    {
        "id": 2,
        "name": "Ocean View Retreat",
        "description": "A tranquil retreat boasting stunning ocean views, reliable access, and forecasts for an unforgettable stay.",
        "image": "./assets/buy2.jpg",
        "category": "buy",
        "price": 15000,
        "agentNumber": "Agent: +91 87654 32109",
        "weatherForecast": "Partly cloudy with a chance of rain",
        "temperature": "26°C"
    },
    {
        "id": 3,
        "name": "Private Island Getaway",
        "description": "Discover your personal paradise with safe access and up-to-date weather details for a delightful experience.",
        "image": "./assets/buy3.jpg",
        "category": "buy",
        "price": 20000,
        "agentNumber": "Agent: +91 76543 21098",
        "weatherForecast": "Mostly sunny",
        "temperature": "30°C"
    },
    {
        "id": 4,
        "name": "Luxury Island Escape",
        "description": "Indulge in luxury with secure access, breathtaking surroundings, and precise forecasts for your vacation.",
        "image": "./assets/buy4.jpg",
        "category": "buy",
        "price": 25000,
        "agentNumber": "Agent: +91 65432 10987",
        "weatherForecast": "Cloudy with occasional showers",
        "temperature": "25°C"
    },
    {
        "id": 5,
        "name": "Tropical Island Resort",
        "description": "Unwind in a tropical paradise with safe agent contact and reliable forecasts for a blissful escape.",
        "image": "./assets/buy5.jpg",
        "category": "buy",
        "price": 30000,
        "agentNumber": "Agent: +91 54321 09876",
        "weatherForecast": "Warm and sunny",
        "temperature": "27°C"
    },
    {
        "id": 6,
        "name": "Secluded Beach Island",
        "description": "Experience seclusion with exclusive agent access and timely weather updates for a perfect retreat.",
        "image": "./assets/buy6.jpg",
        "category": "buy",
        "price": 35000,
        "agentNumber": "Agent: +91 43210 98765",
        "weatherForecast": "Breezy with sunny spells",
        "temperature": "29°C"
    },
    {
        "id": 7,
        "name": "Sunny Beach Villa",
        "description": "This beach villa provides comfortable stay, secure contact, and great service.",
        "image": "./assets/rent1.jpg",
        "category": "rent",
        "price": 5000,
        "agentNumber": "Agent: +91 32109 87654",
        "weatherForecast": "Sunny with mild breezes",
        "temperature": "28°C"
    },
    {
        "id": 8,
        "name": "Cozy Island Hut",
        "description": "A cozy hut for your perfect getaway with all security and weather updates.",
        "image": "./assets/rent2.jpg",
        "category": "rent",
        "price": 6000,
        "agentNumber": "Agent: +91 21098 76543",
        "weatherForecast": "Light showers possible",
        "temperature": "27°C"
    },
    {
        "id": 9,
        "name": "Seaside Cottage",
        "description": "Charming seaside cottage with all amenities and secure agent access for fun.",
        "image": "./assets/rent3.jpg",
        "category": "rent",
        "price": 7000,
        "agentNumber": "Agent: +91 10987 65432",
        "weatherForecast": "Sunny and warm",
        "temperature": "26°C"
    },
    {
        "id": 10,
        "name": "Tropical Getaway",
        "description": "Experience a tropical getaway with a secure environment and forecasts here.",
        "image": "./assets/rent4.jpg",
        "category": "rent",
        "price": 8000,
        "agentNumber": "Agent: +91 09876 54321",
        "weatherForecast": "Sunny with a few clouds",
        "temperature": "29°C"
    },
    {
        "id": 11,
        "name": "Island Retreat",
        "description": "Your ideal retreat awaits with secure features and real-time weather updates.",
        "image": "./assets/rent5.jpg",
        "category": "rent",
        "price": 9000,
        "agentNumber": "Agent: +91 98765 43210",
        "weatherForecast": "Clear skies",
        "temperature": "28°C"
    },
    {
        "id": 12,
        "name": "Luxury Beach House",
        "description": "Luxury living at the beach with complete security and amenities for guests.",
        "image": "./assets/rent6.jpg",
        "category": "rent",
        "price": 10000,
        "agentNumber": "Agent: +91 87654 32109",
        "weatherForecast": "Warm and sunny",
        "temperature": "30°C"
    },
    {
        "id": 13,
        "name": "Cliffside Villa",
        "description": "A stunning cliffside view with secure access and updated weather forecast data.",
        "image": "./assets/rent7.jpg",
        "category": "rent",
        "price": 12000,
        "agentNumber": "Agent: +91 76543 21098",
        "weatherForecast": "Partly cloudy",
        "temperature": "26°C"
    }
]

# Search route
@app.route('/api/search', methods=['GET'])
def search_products():
    query = request.args.get('query', '')
    category = request.args.get('category', '')
    min_price = request.args.get('min_price', type=int)
    max_price = request.args.get('max_price', type=int)

    # Filter products based on query parameters
    filtered_products = products
    if query:
        filtered_products = [
            product for product in filtered_products
            if query.lower() in product['name'].lower() or query.lower() in product['description'].lower()
        ]
    
    if category:
        filtered_products = [
            product for product in filtered_products
            if product['category'] == category
        ]

    if min_price is not None:
        filtered_products = [
            product for product in filtered_products
            if product['price'] >= min_price
        ]

    if max_price is not None:
        filtered_products = [
            product for product in filtered_products
            if product['price'] <= max_price
        ]

    return jsonify(filtered_products)
if __name__ == '__main__':
    app.run(debug=True)