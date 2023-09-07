function addbook () {
  console.log("CLICKED00"); 
    const borrowForm = document.getElementById("borrow-form");
    const borrowedBooksContainer = document.getElementById("borrowed-books-container");
    const borrowedBooksTable = document.getElementById("borrowed-books-table").getElementsByTagName('tbody')[0];
  
      // Get input values
      const bookTitle = document.getElementById("book-title").value;
      const borrowerName = document.getElementById("borrower-name").value;
      const returnDate = document.getElementById("return-date").value;
  
      console.log(bookTitle);
      // Create a new table row
      const newRow = borrowedBooksTable.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
  
      // Populate the row with user input values
      cell1.innerHTML = bookTitle;
      cell2.innerHTML = borrowerName;
      cell3.innerHTML = returnDate;
  
      // Clear the form fields
      document.getElementById("book-title").value = "";
      document.getElementById("borrower-name").value = "";
      document.getElementById("return-date").value = "";
  
      // Show the borrowed books table
      borrowedBooksContainer.style.display = "block";
  };
  