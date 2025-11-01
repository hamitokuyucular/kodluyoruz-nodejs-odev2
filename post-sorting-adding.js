// Post Sıralama ve Post Ekleme

const posts = [
  {title: "First Post", content: "Bu blogdaki ilk postum."},
  {title: "Second Post", content: "Bu blogdaki ikinci post."}
];

const listOfPosts = () => {
  posts.map(post => {
    console.log(`Başlık: ${post.title} ---> İçerik: ${post.content}`);
  });
}

const addPost = (newPost) => {
  const promise = new  Promise ((resolve, reject) => {
  posts.push(newPost);

  resolve(posts)
  reject("BİR HATA OLUŞTU!!!")
  });

  return promise;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function showPosts() {
  try {
    listOfPosts();
    rl.question("\nPost başlığını giriniz: ", (newTitle) => {
      rl.question("Post içeriğini yazınız: ", (newContent) => {
        console.log()
        addPost({title: `${newTitle}`, content: `${newContent}`})
        listOfPosts();
        rl.close();
      })
    })

  } catch (error) {
    console.log(error)
  }
}

showPosts();




