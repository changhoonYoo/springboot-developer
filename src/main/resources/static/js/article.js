// 삭제기능
const deleteButton = document.getElementById('delete-btn'); // 버튼 ID를 가져옵니다.

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        const id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert(`[${response.status}]: 삭제가 완료되었습니다`);
                location.replace('/articles');
            } else {
                alert(`[${response.status}]: 삭제 실패`);
            }
        });
    });
}

// 수정기능
const modifyButton = document.getElementById('modify-btn');

if (modifyButton) {
    modifyButton.addEventListener('click', event => {
        const params = new URLSearchParams(location.search);
        const id = params.get('id');

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(() => {
            alert('수정이 완료되었습니다.');
            location.replace(`/articles/${id}`);
        });
    });
}

// 생성기능
const createButton = document.getElementById("create-btn");

if (createButton) {
    createButton.addEventListener("click", (event) => {
        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            }),
        }).then(() => {
            alert("등록 완료되었습니다.");
            location.replace("/articles");
        });
    });
}