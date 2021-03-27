

// navbar effect
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
};

// smooth scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 120,
            },
            1600
        );
    }
});


// Content Display, Add Display classes, click events, toggle, etc. 

// traversing the dom option
const btns = document.querySelectorAll('.full-btn');

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {

        const container = e.currentTarget.parentElement.parentElement
        container.classList.toggle('show-full');
    });
});

// change background hero image continuously
function changeBg() {
    const images = [
        'url("/images/ledzeplive11.jpg")',
        'url("/images/ledzeplive12.jpg")',
        'url("/images/ledzeplive13.jpg")',
        'url("/images/ledzeplive3.jpg")',
        'url("/images/ledzeplive2.jpg")',
        'url("/images/ledzeplive6.jpg")',
        'url("/images/ledzeplive8.jpg")',
        'url("/images/plant7.jpg")',
        'url("/images/page4.jpg")',
        'url("/images/page2.jpg")',
        'url("/images/ledzepposter.jpg")',
        'url("/images/ledzepplane2.jpg")',
        'url("/images/ledzeplive10.jpg")',
        'url("/images/ledzeplive5.jpg")',
        'url("/images/earlyzep10.jpg")'
    ];
    const hero = document.querySelector('.hero');
    const bg = images[Math.floor(Math.random() * images.length)];
    hero.style.backgroundImage = bg;
};

setInterval(changeBg, 6000);

// creating the ULTIMATE LZ Experience - a slideshow of videos, text, highlighting the bands live work/interviews/history

initialModal = document.querySelector('.modal-content');
modalBtn = document.querySelector('.modalBtn');
closeBtn = document.querySelector('.closeBtn')
modalOverlay = document.querySelector('.modalOverlay');
closeModal = document.querySelector('.closeModal');

//this is for the circles
let circles = document.querySelectorAll('.circle')
let circleArray = Array.from(circles);

// this opens and closes the modal, going from ready? to the first slide, and back again with close modal

modalBtn.addEventListener('click', openModal);

function openModal() {
    count = 0;
    modalOverlay.classList.add("openModal");
    initialModal.classList.add("closeModal");
    prevBtn.style.visibility = 'hidden';
    circleArray[count].classList.add("filled-circle");

    iFrame.setAttribute('src', slides[count].video);
    slideTitle.innerHTML = slides[count].title;
    slideText.innerHTML = slides[count].text;
    slide.animate([{ opacity: '0.4' }, { opacity: '1.0' }], { duration: 400, fill: 'forwards' });
}

closeBtn.addEventListener('click', closeIt);

function closeIt() {
    modalOverlay.classList.remove("openModal");
    initialModal.classList.remove("closeModal");
    circleArray[count].classList.remove("filled-circle");

}

setTimeout(closeIt, 3000)


// I want to create an array of slides, that are objects, with template literal strings, where I can hit the Next button, and go to the next object within the array, giving me a new H2 and Iframe file

nextBtn = document.querySelector('.nextBtn');
prevBtn = document.querySelector('.prevBtn');
iFrame = document.querySelector('iframe');
slideTitle = document.querySelector('.slide h3');
slideText = document.querySelector('.slide p');

let slides = [{
    title: 'In The Beginning',
    video: 'https://www.youtube.com/embed/L-fo9bUWwJs',
    text: 'An early, awkward, and RARE interview recorded in 1969. Enjoy this snack, and strap yourself in for the Ultimate Led Zeppelin experience!'
}, {
    title: 'Dazed, Confused, March 25th 1969',
    video: 'https://www.youtube.com/embed/mMCbmkD5xao',
    text: 'A haunting performance of Dazed and Confused. Just listen to the demon-infused Telecaster Page is playing. The beast was awakening. Their debut album was released in the states in January earlier, and released in the UK shortly after this promo performance, on March 31st.'
}, {
    title: 'Bon Soir, Paris 1969',
    video: 'https://www.youtube.com/embed/YP82IO4ahcY',
    text: 'The European promos had begun, this is Led Zeppelin in Paris, France 1969. The French audience appears subdued here, no doubt they are twiddling their baguettes wondering how the gods could have blessed them with such devilish tunage. Voila. '
}, {
    title: 'The Beatles - are out. 1970',
    video: 'https://www.youtube.com/embed/EWkNIK6CNEg',
    text: 'First time on British Television having just been voted #1 Band Worldwide by Melody Maker. They sit down with Bonzo and Plant to ask them really annoying, and stupid questions. Have a listen.'
}, {
    title: 'Page and Plant - 1970',
    video: 'https://www.youtube.com/embed/wtbMPWInLfY',
    text: 'A great interivew from Page and Plant. Strangly enough it was done 30 minutes after Jimi Hendrix was pronounced dead, and they allude to this news at the beginning. They were always so kind, insightful, and intelligent in their interviews. They have this humble sense of artistic integrity. Enjoy!'
}, {
    title: 'Royal Albert Hall 1970',
    video: 'https://www.youtube.com/embed/kJQ_rJR3yCs',
    text: 'White Summer here performed by Page. This RAH show was absolutely phenomenal, and is featured on the Live DVD. This little tune showcases the LZ range, creativity, and as Page puts it, "bits of light, bits of shade". Enjoy.'
},
{
    title: 'Royal Albert Hall 1970 Part II',
    video: 'https://www.youtube.com/embed/00eN1t4iKCo',
    text: 'What Is and What Should Never Be - another Zep classic from this performance. I really think the early years, 69-72 are some of the best live performances. Felt more raw, unrefined, and unchained. I dig it.'
},
{
    title: 'Live at The Garden - 1973',
    video: 'https://www.youtube.com/embed/yKWHLxOU7YU',
    text: 'The Stairway to Heaven performance from Madison Square Garden, New York City 1973. Zep had released LZ IV and Houses of The Holy at this point, they were at their highest peak. Gods amongst men. And this footage quality is sublime. Please enjoy and continuing analyzing the lyrics to this classic.'
}, {
    title: 'Live at The Garden - 1973 Part II',
    video: 'https://www.youtube.com/embed/uHRdRVTDdP0',
    text: 'One of my personal favorite Zep songs, and you will not get a better performance of it than this one here. Another gem from the MSG performance. Let it blow your mind!'
}, {
    title: 'Live at The Garden - 1973 Part III',
    video: 'https://www.youtube.com/embed/Ttch12yHw8w',
    text: 'A little post-show backstage action from this EPIC performance. I need a cigarette!'
}, {
    title: '"Come to see the changes" 1975',
    video: 'https://www.youtube.com/embed/UxKc9kLbTN4',
    text: 'Wonderful little interview from Plant on the Midnight Special 1975. I love that Robert highlights the biggest misconception with LZ, they are not merely hard rock. They are a dynamic, artistic, rock experience. The Next Song will prove my point. '
}, {
    title: 'Live at Earls Court 1975',
    video: 'https://www.youtube.com/embed/HpLe-qUUGIE',
    text: 'First time I heard this song, I had just bought the CD from Best Buy and I was waiting in the parking lot for my Mom. It was RAINING. And this song came on next. There I was, alone in the car, pouring rain outside, listening to this masterpiece of composition. GLORIOUS. One of my all time favs.'
}, {
    title: 'Live at Earls Court 1975 Part II',
    video: 'https://www.youtube.com/embed/Pqi5C4bQSgk',
    text: 'Another great performance from this Earls Court show. For a long time Houses of the Holy was my favorite Zeppelin album, and honestly it may still be, cuz this song is such a classic.  The audio/video quality of this recording is lackluster, but still an enjoyable watch I hope!'
}, {
    title: 'Live at Earls Court 1975 Part III',
    video: 'https://www.youtube.com/embed/rSfpwuUauwI',
    text: 'A lovely performance of Going to California if you ask me. Found some better audio/video quality of this show on the tubes. Led Zeppelin at the top of their game!'
}, {
    title: 'Plant & Grant on the Thames 1976',
    video: 'https://www.youtube.com/embed/12SPH6hDGeE',
    text: 'Interview with Peter Grant (band manager) and Robert Plant. They mostly discuss their upcoming "rock fantasy" film - "If we are going to be self-indulgent, we might as well expand our indulgence".'
}, {
    title: 'The Song Remains The Same 1976',
    video: 'https://www.youtube.com/embed/DKnaFV6EV0s',
    text: 'Here is an excerpt from The Song Remains The Same. This film was made in 1976 while Zeppelin was at the peak of their success (its a 5-6 year peak). The movie centers around a 1973 show at Madison Square Garden in New York, and interlaces scenes of '
}, {
    title: 'The Song Remains The Same 1976 - The Robbery',
    video: 'https://www.youtube.com/embed/m22fvFaFW_U',
    text: 'Famous excerpt from the movie, it shows the real-time reaction to Led Zeppelin being robbed of nearly 200k. Peter Grant speaks at a press conference.'
}, {
    title: 'Jimmy Page Interview 1976',
    video: 'https://www.youtube.com/embed/ORA56fbmB2M',
    text: 'This is a long one, but I think it is important to listen to the creative mind behind the band itself, Mr. James Patrick Page, at length. I love listening to Jimmy softly ramble on about the bands history, and artistic mission. Enjoy this brilliant devilish man, "highly intent on change".'
}, {
    title: 'No Quarter, Seattle 1977',
    video: 'https://www.youtube.com/embed/DP6TDAqWULQ',
    text: 'The audio/video quality from this one is not great but you can use your imagination and realize how incredible this show must have been. Get lost in this 29 minute epic version of this track. Some lovely piano work from Jonesy.'
}, {
    title: '"Fire" Rehearsal, 1978',
    video: 'https://www.youtube.com/embed/FDogYqitoFQ',
    text: 'Are you a true Led Zep superfan? Then surely you will enjoy listening to them rehearse this never before released song called "Fire". Rhythmically, I find it very interesting, they are kind of onto something there...'
}, {
    title: 'Live at Knebworth, 1979',
    video: 'https://www.youtube.com/embed/YWOuzYvksRw',
    text: 'This concert at Knebworth is the last great live footage of Led Zeppelin available. And its sad to say that, but its true. Enjoy this absolutely perfect version of Achilles Last Stand.'
}, {
    title: 'Live at  Knebworth, 1979 Part  II',
    video: 'https://www.youtube.com/embed/o2AEnLAP9XY',
    text: 'One of my all time favorite Zep songs, Ten Years Gone. Plant  wrote the lyrics  to this song after visiting his mother after being on tour for several years. I love my Mom. "As the eagle leaves his nest, its got so far to go."'
}, {
    title: 'Live at  Knebworth, 1979 Part  III',
    video: 'https://www.youtube.com/embed/_vPK8LVdf5I',
    text: 'As a fan, can you imagine what 80s Led Zeppelin would have been like? This song to me always hints at what may have been. The Knebworth show was 200K people on a lawn and it was the bands last show on British soil. They were displeased with the performance, but its still a great show to watch. '
}, {
    title: 'The Last Show Berlin July 7 1980',
    video: 'https://www.youtube.com/embed/l5_CZ7FN4A4',
    text: 'Really soak in this recording, because it is the last live performance that Led Zeppelin ever gave as a full band.'
}, {
    title: 'Bonzo collapses June 27th 1980',
    video: 'https://www.youtube.com/embed/OgfR1GSoBfY',
    text: 'The last video was the last show, the last full show, this is the last time performing, and this show is cut short by John Bonahm collapsing at around the 14:34 mark. Plant says there is a "slight technical difficulty". Bonham was drinking heavily at this time, and even his drumming sounds off here. This is a sad video. The last recording of Bonzo drumming.  '
}, {
    title: 'The Death of John Bonham',
    video: 'https://www.youtube.com/embed/mAgHGKY2Z0Y',
    text: 'This is a touching segment on the death of John Bonham. He was a real family man, and the road took its toll. Alcoholism took its toll. And so we lost another excellent musician on September 25th, 1980. His spirit, his heart & soul, lives on in the music of Led Zeppelin. Rest in peace Bonzo.'
}, {
    title: 'Led Zeppelin in Retrospect',
    video: 'https://www.youtube.com/embed/BFOKcot1NEA',
    text: 'For the record, Robert is the main reason why Led Zeppelin never had a full tour again with Jason on the drums. Thats okay, I dont love it, but I understand Roberts somewhat rigid philosophy on this. That being said, this next concert shows us that this band was absolutely magical, and incredible, and a tour would have been special.'
}, {
    title: 'Swan Song',
    video: 'https://www.youtube.com/embed/zg2njQzgMWg',
    text: 'I hope you have enjoyed this remarkable journey of the greatest rock band of all time. It has been a pleasure for me, as a mega fan, to put all this together in a way that gives you all sides of this marvelous band. As with all good things, there must come an end. The music will live on forever!'
}
]

// last show, then Bonham death, interview, then bonham moby dick, then O2 reunion performance, then end interview

// current slide count 19

// <iframe width="560" height="315" src="https://www.youtube.com/embed/mAgHGKY2Z0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//<iframe width="560" height="315" src="https://www.youtube.com/embed/xTMnOpPNAUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// charlie rose interview <iframe width="560" height="315" src="https://www.youtube.com/embed/BFOKcot1NEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// <iframe width="560" height="315" src="https://www.youtube.com/embed/zg2njQzgMWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

let count = 0;


function nextSlide() {
    count++;
    // this returns the slideshow to the first slide from the last
    console.log(count);

    if (count === slides.length) {
        count = 0;
        circleArray[slides.length - 1].classList.remove("filled-circle");
        prevBtn.style.visibility = 'hidden';
    }

    if (count > 0) {
        prevBtn.style.visibility = 'visible';
    }

    if (count === slides.length - 1) {
        nextBtn.innerHTML = "Finish"
    } else {
        nextBtn.innerHTML = "Next"
    }

    iFrame.setAttribute('src', slides[count].video);
    slideTitle.innerHTML = slides[count].title;
    slideText.innerHTML = slides[count].text;
    circleArray[count].classList.add("filled-circle");
    circleArray[count - 1].classList.remove("filled-circle");

    slide.animate([{ opacity: '0.4' }, { opacity: '1.0' }], { duration: 400, fill: 'forwards' });

}

function prevSlide() {
    count--;
    // this prevents the count from going into the negative
    console.log(count);

    if (count <= 0) {
        count = 0;
        prevBtn.style.visibility = 'hidden';

    }
    iFrame.setAttribute('src', slides[count].video);
    slideTitle.innerHTML = slides[count].title;
    slideText.innerHTML = slides[count].text;
    circleArray[count].classList.add("filled-circle");
    circleArray[count + 1].classList.remove("filled-circle");
}




