const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  
  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  console.log('Active Article:',activeArticles);
  
  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  
  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
};

/* Generate title list */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

    titleList.innerHTML = '';

  /* [DONE] for each article */

  const articles = document.querySelectorAll('.post');

  for(let article of articles){
    article.classList.remove('active');
  }

  /* find all the articles and save them to variable: articles */

  let html = '';

  for(let article of articles){

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  console.log(links);
}

generateTitleLinks();

function generateTags(){
  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for(let article of articles){

    /* [DONE] find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('Article Tags:', articleTags);

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('Array Article Tags:', articleTagsArray);

    /* [DONE] START LOOP: for each tag */

    for(let tag of articleTagsArray){

      /* [WAITING FOR CODE-REVIEW] generate HTML of the link */

      const linkTagHTML = '<li><a href="#tag-' + articleTags + '"></a></li>';
      console.log(linkTagHTML);

      /* [WAITING FOR CODE-REVIEW] add generated code to html variable */

      html = html + linkTagHTML;

    /* [WAITING FOR CODE-REVIEW] END LOOP: for each tag */

      }

    /* [WAITING FOR CODE-REVIEW] insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;

  /* [WAITING FOR CODE-REVIEW] END LOOP: for every article: */
    }
}

generateTags();

function tagClickHandler(event){
  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [CODE REVIEW - WHY?] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log(tag);

  /* [CODE REVIEW] find all tag links with class active */

  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [CODE REVIEW] START LOOP: for each active tag link */

  for(let tag of tagLinks); {

    /* [CODE REVIEW] remove class active */

    tag.classList.remove('.active');

  /* END LOOP: for each active tag link */
    }

  /* [CODE REVIEW- WHY] find all tag links with "href" attribute equal to the "href" constant */

  const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');

  /* [CODE REVIEW] START LOOP: for each found tag link */

  for(let tag of tagLinksHref){  

    /* [CODE REVIEW] add class active */

    tagLinksHref.classList.add('.active');

  /* END LOOP: for each found tag link */

    }

  /* [  WHY ON EARTH] execute function "generateTitleLinks" with article selector as argument */
}

generateTitleLinks('[data-tags~="' + tag + '"]');

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();