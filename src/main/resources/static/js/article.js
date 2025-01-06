// 삭제기능
const deleteButton = document.getElementById('delete-btn'); // 버튼 ID를 가져옵니다.

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        const id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('삭제가 완료되었습니다');
            location.replace('/articles');
        });
    });
}