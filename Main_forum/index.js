//------------ANIMATION FOR SEARCH BAR-----------------
const search_create = document.getElementById("search_open");
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
search_create.addEventListener("click", () => {
    if (check_search == false) {
        const search_bar = document.getElementById("searching_form")
        search_bar.style.visibility = "visible"
        // search_bar.style.marginTop = "4%"
        opacity_blur.style.filter = "blur(1em)"
        animated_div.style.animation = "slide4search_ON 2s forwards "
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

// tạo bài viết: FIXME: BUG CHƯA HIỂN THỊ
const open_write_status = document.getElementById("create_status")
const animated_status = document.querySelector(".Pform");
open_write_status.addEventListener("click", () => {
    if (write_status == false) {
        const status_open = document.getElementById("post_form");
        status_open.style.visibility = "visible";
        opacity_blur.style.filter = "blur(1em)";
        write_status = true
    };
});

const status_close = document.getElementById("delete_post");
status_close.addEventListener("click", () => {
    if (write_status == true) {
        const status_open = document.getElementById("post_form");
        status_open.style.visibility = "hidden";
        opacity_blur.style.filter = "none";
        write_status = false
    }
})