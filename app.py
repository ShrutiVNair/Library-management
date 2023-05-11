from flask import Flask, render_template

app = Flask(__name__)

# Route for the library management page
@app.route('/')
def library_management():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)
