import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

      <div class="row">
        <div class="col-md-6">
          <h1>Hello, Bootstrap!</h1>
          <p>This is a simple example of using Bootstrap.</p>
          <button class="btn btn-primary">Learn More</button>
        </div>
        <div class="col-md-6">
          <img
            src="https://logowik.com/content/uploads/images/react7473.logowik.com.webp"
            alt="..."
            class="img-fluid"
          />
        </div>
      </div>
    </div>

  );
}

export default App;
