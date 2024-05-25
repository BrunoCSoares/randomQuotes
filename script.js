function generate(){
    var quotes = {
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "- Henry David Thoreau" : '"The preachers and lecturers deal with men of straw, as they are men of straw themselves. Why, a free-spoken man, of sound lungs, cannot draw a long breath without causing your rotten institutions to come toppling down by the vacuum he makes. Your church is a baby-house made of blocks, and so of the state. The church, the state, the school, the magazine, think they are liberal and free! It is the freedom of a prison-yard."',
        "- Pierce Brown, Red Rising" : '"Man cannot be freed by the same injustice that enslaved it."',
        "- Jules Renard, The Journal of Jules Renard" : '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "- Lana Del Rey" : '“Who are you? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them? I have. I am fucking crazy. But I am free.”',
        "- Candace Bushnell" : '“Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."'
    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}