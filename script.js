// Dữ liệu các bài đọc tiếng Anh
const articles = [
    {
        title: "The Benefits of Reading",
        content: "Reading is one of the best habits you can develop. It not only expands your vocabulary and improves your concentration, but it also reduces stress. When you read books, articles, or essays in English regularly, your brain gets used to sentence structures naturally without having to memorize difficult grammar rules. Try to read at least 15 minutes every day to see noticeable improvements in your fluency."
    },
    {
        title: "Habits of Successful People",
        content: "Successful people often share common habits that help them achieve their goals efficiently. First, they wake up early to plan their day ahead. Second, they dedicate time to continuous learning, whether by reading books, listening to podcasts, or acquiring new skills. Finally, they maintain a positive mindset and embrace failures as stepping stones to success rather than reasons to quit."
    },
{
	 title:"The Power of Habit",
	content:"Habits shape our lives more than we think. When we build good daily routines, success becomes a natural result..."
},

];

// Hàm hiển thị bài đọc lên giao diện
function loadArticle(index) {
    const titleElement = document.getElementById("article-title");
    const bodyElement = document.getElementById("article-body");
    const listItems = document.querySelectorAll(".sidebar li");

    // Đổi tiêu đề và nội dung
    titleElement.textContent = articles[index].title;
    bodyElement.textContent = articles[index].content;

    // Cập nhật trạng thái active cho menu
    listItems.forEach((li, i) => {
        if (i === index) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
}

// Khởi chạy mặc định bài đầu tiên khi load trang
window.onload = function() {
    loadArticle(0);
};