# turt1e

i dont know why i named it `this.name` but it's cool 😂


*  so this is a `react` webapp backed by `express.js`;
*  anyone can make a post;
    *   post consist of 3 things:
        1. name
        2. caption
        3. image
*   anyone can also delete post.
*   { images } are stored in `Cloudinary`
*   { name, caption } are stored in `mongodb`

---

#   imp links

*   link to [mongodb collection](https://cloud.mongodb.com/v2/6090eeb50c0db149bafc5508#metrics/replicaSet/60fe92dcb605e117959fe9c0/explorer/React-app-0/posts/find)
*   link to [cloudinary bucket](https://cloudinary.com/console/c-ad683e5b8f8cb3d4b5036e79a830e3/media_library/folders/b067f9db70086538c4d0f079541ca14e)
*   link to [react bootstrap components](https://react-bootstrap.github.io/components/alerts/)

---

#   code

*   `/views` folder is where React / frontend part located.
*   `/` (root) belongs to nodejs / bakend.
*   All API keys and credentials are at `.env` which is at my machine only.
*   All API routes are [here](./controllers/post.js)
    *   Add post is really interesting because, it uploads image to `cloudinary` first and then add data to `mongodb`.
    *   Delete post is also awesome because, it fisrt delete data from `mongodb` and then deletes image from `cloudinary`.
*   all methods to interact with mongodb are [here](./modals/post.js)
    *   it includes add post, get all posts, get post by id, delete post by id.

---

##  screenshots

>   /

![img1](./img/home.png)

>   /post

![img2](./img/post.png)

>   /show

![img3](./img/show_all.png)

>   /show/:id

![img4](./img/show_id.png)




