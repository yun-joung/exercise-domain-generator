window.onload = () => {
    document.querySelector('#start').addEventListener("click", () => {
        document.querySelector('#name').innerHTML = generateDomain();
    });

};
const generateDomain = () => {
    let pronouns = ['the', 'our', 'a', 'your'];
    let adjs = ['great', 'big', 'great', 'friends'];
    let nouns = ['jogger', 'racoon', 'business', 'dog'];
    let dominios = ['.cl', '.com'];
    let final = ""

    pronouns.forEach((pronoun) => {
        adjs.forEach((adj) => {
            nouns.forEach((noun) => {
                dominios.forEach((dominio) => {
                    final += pronoun + adj + noun + dominio + "<br>" ;
                });
            });
        });
    });
    // let pronounindex = Math.floor(Math.random() * pronoun.length);
    // let adjindex = Math.floor(Math.random() * adj.length);
    // let nounindex = Math.floor(Math.random() * noun.length);

    // return ( pronoun[pronounindex] + adj[adjindex] + noun[nounindex] + ".com");

   return (final);
}
