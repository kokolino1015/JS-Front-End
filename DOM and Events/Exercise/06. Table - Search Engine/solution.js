function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedWord = document.getElementById('searchField');
      const trs = Array.from(document.querySelectorAll('tbody tr'));
      for (const tr of trs) {
         console.log(tr.textContent)
         if(tr.classList.contains("select")){
            tr.classList.remove('select');
         }
         if (tr.textContent.includes(searchedWord.value)){
            tr.classList.add('select')
         }
      }
      searchedWord.value = '';

   }
}