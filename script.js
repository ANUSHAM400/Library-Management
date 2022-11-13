const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
const f1=document.getElementById('name');
const f2=document.getElementById('author');
const f4=document.getElementById('date');
var f3=document.getElementById('subject');
var increase=document.getElementById('increase');
var decrease=document.getElementById('decrease');


var count=0;
var c=0
var a=[

  { "id":++c,
    "name":"The C++ Programming Language",
    "author":"Bjarne Stroustrup ",
    "subject":"C++",
    "date":"2000-01-20"
  },
  { "id":++c,
    "name":"The Practice of Programming",
    "author":"Brian Kernighan",
    "subject":"C",
    "date":"2001-01-10"
  },
  { "id":++c,
    "name":"The Art of Computer Programming",
    "author":"Ellen Ullman",
    "subject":"Computer Programming",
    "date":"1999-02-01"
  },
  { "id":++c,
    "name":"Close to the Machine",
    "author":" Ullman",
    "subject":"Computer",
    "date":"1987-01-11"
  },
  {"id":++c,
    "name":"Fundamentals of Computer Algorithms",
    "author":"Eric Raymond ",
    "subject":"Algorithms",
    "date":"2005-12-01"

  },
  {"id":++c,
    "name":"The Psychology of Computer Programming",
    "author":"Gerald M. Weinberg ",
    "subject":"Programming",
    "date":"1991-07-01"

  },
  {"id":++c,
    "name":"The Java Programming Language",
    "author":"James Gosling",
    "subject":"Java",
    "date":"1993-09-05"

  },
  {"id":++c,
    "name":" The Best Software Writing I",
    "author":"Joel Spolsky ",
    "subject":"Software",
    "date":"1979-01-15"

  },
  {"id":++c,
    "name":"Patterns of Software",
    "author":"Richard P. Gabriel",
    "subject":"System Software",
    "date":"2000-12-01"

  },
  {"id":++c,
    "name":" The ABC",
    "author":"John ",
    "subject":"Systyems",
    "date":"1976-08-20"

  },
  {"id":++c,
    "name":" ECDFRG HIJ",
    "author":"Roman Number ",
    "subject":"Website",
    "date":"1999-08-17"

  },
  {"id":++c,
    "name":" Software Equipment",
    "author":"Joe Master",
    "subject":"Software",
    "date":"1964-03-05"

  },
  {"id":++c,
    "name":" The Best Software Writing II",
    "author":"Joel Spolsky ",
    "subject":"Hardware",
    "date":"1968-08-13"

  },
  {"id":++c,
    "name":" The Art of Science",
    "author":"Sir Christon ",
    "subject":"Science",
    "date":"1999-01-07"

  }
];
//document.cookie="bc="+([].concat(a)).toString()



compareObjects=(object1, object2, key)=>{
  const obj1 = object1[key].toUpperCase()
  const obj2 = object2[key].toUpperCase()
  if (obj1 < obj2) {
    return -1
  }
  if (obj1 > obj2) {
    return 1
  }
  return 0
}
async function showPosts() {
  var key=""
  count=0
  if(f1.checked){
   key="name";

  }

  if(f2.checked){

    key="author"}

  if(f3.checked){

    key="subject"}
  if(f4.checked){

    key="date"}

  
  
  if(key.length>1){
    //document.cookie="bc="+([].concat(a)).toString()
 // document.write(bc)
  a.sort((book1, book2) => {
      return compareObjects(book1, book2, key)})
  var b=document.createElement('div');
    count=0
  for(var i=0; i<a.length; i++) {
    var obj = a[i];
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${obj["id"]}</div>
      <div class="post-info">
        <h2 class="post-title">${obj["name"]}</h2>
        <p class="post-body">${obj["subject"]}</p>
        <p class="post-body">${obj["author"]}</p>
        <p>${obj["date"]}</p>
      </div>
    `;

    b.appendChild(postEl);
    count+=1;
  };
  postsContainer.innerHTML=b.innerHTML
  document.getElementById('count').innerHTML=count;
}
else{
  // var aa=document.cookie.split(',')

  // a=aa[1]
  count=0
  for(var i=0; i<a.length; i++) {


    var obj = a[i];
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${obj["id"]}</div>
      <div class="post-info">
        <h2 class="post-title">${obj["name"]}</h2>
        <p class="post-body">${obj["subject"]}</p>
        <p class="post-body">${obj["author"]}</p>
        <p>${obj["date"]}</p>
      </div>
    `;

    postsContainer.appendChild(postEl);
    count+=1;
  };
  document.getElementById('count').innerHTML=count;
}
  //console.log(count)
  // document.getElementById('count').innerHTML=count;
}

// Show loader & fetch more posts
function showLoading() {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');
  count=0
  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
      count+=1;
    } else {
      post.style.display = 'none';
    }
  });
  document.getElementById('count').innerHTML=count;
}


showPosts();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts);
