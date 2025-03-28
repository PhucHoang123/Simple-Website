const generateQuote = function() {
    const quotes = [
    {
        quote: '"The world is not perfect. But it is there for us, doing the best it can, that is what makes it so damn beautiful."',
        author: '"Roy Mustang (Full Metal Alchemist)"'
    },
    {
        quote: '"Whatever you lose, you will find it again. But what you throw away you will never get back."',
        author: '"Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)"'
    },
    {
        quote: '"Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, it is enough to start war. War will never cease to exist, reasons can be thought up after the fact. Human nature pursues strife."',
        author: '"Paine (Naruto Shippuden)"'
    },
    {
        quote: '"People, who can not throw something important away, can never hope to change anything."',
        author: '"Armin Arlert (Shingeki no Kyojin / Attack on Titan)"'
    },
    {
        quote: '"If you do not take risks, you can not create a future!"',
        author: '"Monkey D. Luffy (One Piece)"'
    },
    {
        quote: '"What good are dreams, if all you do is work? There is more to life than hitting the books, I hope you know."',
        author: '"Tamaki Suou (Ouran Highschool Host Club)"'
    },
    {
        quote: '"To know sorrow is not terrifying. What is terrifying is to know you can not go back to happiness you could have."',
        author: '"Matsumoto Rangiku (Bleach)"'
    },
    {
        quote: '"When you give up, that is when the game ends."',
        author: '"Mitsuyoshi Anzai (Slam Dunk)"'
    },

];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}