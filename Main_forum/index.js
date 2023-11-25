//------------ANIMATION FOR SEARCH BAR-----------------
const search_create = document.querySelectorAll(".search_open");
var check_search = false;
var write_status = false;

const animated_div = document.querySelector(".relative");
const opacity_blur = document.querySelector(".opacity_change");

// const close_search = document.getElementById("off_search")
opacity_blur.addEventListener("click", (turnoff_blur) => {
    if (check_search = true) {
        const search_bar = document.getElementById("searching_form")
        animated_div.style.animation = "slide4search_OFF 2s forwards"
        setTimeout(() => {
            check_search = false;
            search_bar.style.visibility = "hidden"
            opacity_blur.style.filter = "none"
        }, 2000);
    }
})
// điều kiện để đóng mở search bar
search_create.forEach((search) => {
    search.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(check_search);
        if (check_search == false) {
            const search_bar = document.getElementById("searching_form")
            search_bar.style.visibility = "visible"
            // search_bar.style.marginTop = "4%"
            opacity_blur.style.filter = "blur(1em)"
            animated_div.style.animation = "slide4search_ON 2s forwards "
            console.log(animated_div.style);
            check_search = true
        } else {
            const search_bar = document.getElementById("searching_form")
            animated_div.style.animation = "slide4search_OFF 2s forwards"
            setTimeout(() => {
                check_search = false;
                search_bar.style.visibility = "hidden"
                opacity_blur.style.filter = "none"
            }, 2000);
        };
    });
})
// TODO: Xử lý search bar -->> hiển thị bài viết, user khi tìm kiếm 
function renderSearchedPosts(posts) {

}

// TÌM KIẾM
input_searching = document.getElementById("default-search")
input_searching.addEventListener("input", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
    const search_keywords = input_searching.value.trim()
    const search_posts = posts.filter((post) =>{
        return post.name.includes(search_keywords)||post.content.includes(search_keywords)

    })

    renderSearchedPosts(search_posts);
});










// LƯU BÀI - UPDATE STATUS
const up_status_btn = document.querySelector(".Up_status")
up_status_btn.addEventListener("click", () => {
    const content = quill.root.innerHTML;
    const user = JSON.parse(localStorage.getItem("user"));
    const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
    posts.push({
        content,
        name: user.displayName,
        avatar: user.photoURL,
        uid: user.uid,
        time: Date.now()
    });

    localStorage.setItem("posts", JSON.stringify(posts));
    quill.setContents([{ insert: '\n' }]);
    Swal.fire({
        title: 'ĐĂNG BÀI THÀNH CÔNG!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'continue'
    }).then((result) => {
        document.querySelector("#close_status").click();
    });
    renderPosts()
})
// tắt viết bài
const close_status_btn = document.querySelector("#delete_post");
var content_editor = document.querySelector("#editor")
close_status_btn.addEventListener("click", () => {
    const content = quill.root.innerHTML;
    if (content == "<p><br></p>") {
        document.querySelector("#close_status").click();
    }
    else {
        Swal.fire({
            title: "Do you want to delete the changes?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        }).then((result) => {
            quill.setContents([{ insert: '\n' }]);
            document.querySelector("#close_status").click();
        });
    };
});


// ĐĂNG BÀI
function renderPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
    const user = JSON.parse(localStorage.getItem("user"));

    const postsContainer = document.querySelector("#page");
    postsContainer.innerHTML = "";

    posts.forEach((post, index) => {
        postsContainer.insertAdjacentHTML(
            "beforeend",
            `
                <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                            <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            Tutorial
                        </span>
                        <span class="text-sm">
                            ${new Date(post.time).toLocaleDateString()}
                            
                            ${post.uid === user.uid
                ? `| <button class="delete_status text-red-500 text-xs underline" data-id="${index}">Delete</button>`
                : ''
            }
                        </span>
                    </div>

                    <div class="mb-5 font-light text-gray-500 dark:text-gray-400">
                        ${post.content}
                    </div>

                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="${post.avatar}" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                            ${post.name}
                            </span>
                        </div>
                        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-white hover:underline">
                            Read more
                            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </article>
            `
        );
    });

    dropdown_user_in4 = document.getElementById("user-dropdown");
    dropdown_user_in4.insertAdjacentHTML("afterbegin",

        `
        <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">${user.displayName}</span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">${user.email}</span>
        </div>

    `


    )

    //XÓA BÀI
    Array.from(document.getElementsByClassName("delete_status")).forEach((button_btn) => {
        button_btn.addEventListener("click", () => {

            Swal.fire({
                title: "Do you want to delete the changes?",
                showCancelButton: true,
                confirmButtonText: "Delete",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    const id_status = button_btn.dataset.id
                    const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
                    posts.splice(id_status, 1)
                    localStorage.setItem("posts", JSON.stringify(posts));
                    renderPosts();
                }
            });
            // console.log(id_status);
        })
    })
}

// SET AVATAR
const user = JSON.parse(localStorage.getItem("user"));
const Uavatar = document.querySelector(".main_Avatar")
const BG_IMG = document.getElementById("BG_IMG")
Uavatar.src = user.photoURL
const up_img = document.getElementById("up_img");
up_img.addEventListener("change", (e) => {
    const [file] = up_img.files
    if (file) {
        BG_IMG.src = URL.createObjectURL(file)
    }
})






renderPosts();
