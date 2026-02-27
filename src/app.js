// Base array
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

// <ul> Where results are shown
const domainList = document.getElementById("domain-list");

// Domain generator
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        let domain = p + a + n + ext;

        // If noun ends same as extension
        if (n.endsWith(ext.replace('.', ''))) {
          domain = p + a + n.replace(ext.replace('.', ''), '') + ext;
        }

        console.log(domain);

        // Show on page
        let li = document.createElement("li");
        li.textContent = domain;
        domainList.appendChild(li);
      }
    }
  }
}