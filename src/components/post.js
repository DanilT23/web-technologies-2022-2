export class Post {
    #el = null;
    #commentsEl = null;
    #post = null;

    #getInfo = null;
    #getComments = null;

    constructor(el, getInfo, getComments, commentsEl) {
        this.#el = el;
        this.#commentsEl = commentsEl;

        this.#getInfo = getInfo;
        this.#getComments = getComments;
    }

    async init () {
        const url = new URL(window.location.href);
        this.#post = +url.searchParams.get('post');
        await this.loadInfo();
        await this.loadComments()
    }

    async loadInfo() {
        try {
            let info = await this.#getInfo(this.#post);
            this.renderPost(info);
        } catch (err) {
            window.location.href = 'error.html';
            console.log(err);
        }
    }

    renderPost (info) {
        this.#el.innerHTML =
            `<p>Post: ${info.title}</p>
            <p>Post Body: ${info.body}</p>`;
    }

    async loadComments() {
        try {
            let comments = await this.#getComments(this.#post);
            this.renderComments(comments);
        } catch (err) {
            window.location.href = 'error.html';
            console.log(err);
        }
    }

    renderComments (comments) {
        for (let i in comments) {
            this.#commentsEl.innerHTML +=
                `<div id="comment">                    
                    <p>postId : ${comments[i].postId}</p>
                    <p>id : ${comments[i].id}</p>
                    <p>name : ${comments[i].name}</p>
                    <p>email : ${comments[i].email}</p>
                    <p>Body : ${comments[i].body}</p>                    
                </div>`
        }

    }
}