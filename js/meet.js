
let books = [];
let myChart;

function displayBooks() {
  let tableBody = document.getElementById("table-list");
  tableBody.innerHTML = "";

  books.forEach(book => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>
        <button class="btn-edit" data-id="${book.id}">Edit</button>
        <button class="btn-delete" data-id="${book.id}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Add event listeners to edit and delete buttons after displaying the books
  document.querySelectorAll(".btn-edit").forEach(button => {
    button.addEventListener("click", function() {
      let id = this.getAttribute("data-id");
      let book = books.find(book => book.id == id);
      if (book) {
        document.getElementById("title-input").value = book.title;
        document.getElementById("author-input").value = book.author;
        document.getElementById("genre-input").value = book.genre;
        document.getElementById("update-btn").setAttribute("data-id", id);
        document.getElementById("update-btn").style.display = "inline-block"; // Show the update button
      }
    });
  });

  document.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", function() {
      let id = this.getAttribute("data-id");
      deleteBook(id);
    });
  });
}

function addBook(title, author, genre) {
  let id = 1; // Start with ID 1
  if (books.length > 0) {
    id = Math.max(...books.map(book => book.id)) + 1;
  }
  let newBook = { id, title, author, genre };
  books.push(newBook);
  displayBooks();
  updateChart();
}

function updateBook(id, title, author, genre) {
  let index = books.findIndex(book => book.id == id);
  if (index !== -1) {
    books[index].title = title;
    books[index].author = author;
    books[index].genre = genre;
    displayBooks();
    document.getElementById("update-btn").style.display = "none"; 
    updateChart();
  }
}

function deleteBook(id) {
  books = books.filter(book => book.id != id);
  displayBooks();
  updateChart();
}

function countAnimalTypes() {
  let animalCount = {};
  books.forEach(book => {
    if (animalCount[book.title]) {
      animalCount[book.title]++;
    } else {
      animalCount[book.title] = 1;
    }
  });
  return animalCount;
}

function updateChart() {
  let animalCount = countAnimalTypes();
  let animalTypes = Object.keys(animalCount);
  let animalCounts = Object.values(animalCount);

  if (myChart) {
    myChart.data.labels = animalTypes;
    myChart.data.datasets[0].data = animalCounts;
    myChart.update();
  } else {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: animalTypes,
        datasets: [{
          label: 'Animal Types',
          data: animalCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

document.getElementById("crud-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let id = document.getElementById("update-btn").getAttribute("data-id");
  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let genre = document.getElementById("genre-input").value;
  
  if (id) {
    updateBook(id, title, author, genre);
  } else {
    addBook(title, author, genre);
  }

  this.reset();
});

// Initialize the table and chart
displayBooks();
updateChart();
