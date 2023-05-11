// Sample data for books
const books = [
	{ title: 'Book 1', author: 'Author 1', subject: 'Subject 1', publishDate: '2022-01-01' },
	{ title: 'Book 2', author: 'Author 2', subject: 'Subject 2', publishDate: '2022-02-01' },
	{ title: 'Book 3', author: 'Author 3', subject: 'Subject 3', publishDate: '2022-03-01' },
];

const bookList = document.getElementById('bookList');
const loader = document.getElementById('loader');
let visibleBooks = 5;
let loadedBooks = 0;

function displayBooks() {
	for (let i = loadedBooks; i < loadedBooks + visibleBooks && i < books.length; i++) {
		const book = books[i];
		const listItem = document.createElement('li');
		listItem.classList.add('book-item');
		listItem.innerHTML = `
			<h3>${book.title}</h3>
			<p>Author: ${book.author}</p>
			<p>Subject: ${book.subject}</p>
			<p>Publish Date: ${book.publishDate}</p>
		`;
		bookList.appendChild(listItem);
	}
	loadedBooks += visibleBooks;
	if (loadedBooks >= books.length) {
		loader.style.display = 'none';
	} else {
		loader.style.display = 'block';
	}
}

// Function to check if scroll reached the bottom
function isScrollAtBottom() {
	const scrollTop = document.documentElement.scrollTop;
	const windowHeight = window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight;
	return scrollTop + windowHeight >= documentHeight;
}

// Event listener for scroll
window.addEventListener('scroll', function () {
	if (isScrollAtBottom()) {
		displayBooks();
	}
});

// Initial book display
displayBooks();
