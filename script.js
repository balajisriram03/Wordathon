function _(id){
    return document.getElementById(id);
  }
  
  function createBox(n){
    let totalbox="";
    for(let i = 0;i < n;i++){
      totalbox+=`<span class='box' id='b${i}' onclick="placeWord(this)"></span>`;
    }
    _("box-wrapper").innerHTML = totalbox;
  }
  createBox(50);
  
  let newArr = [];
  const WORDS = ["BIRD", "CAKE", "DART", "FISH", "GAME", "HIKE", "JOKE", "LAMP", "MOON", "NOTE", "PARK", "QUIZ", "RING", "STAR", "TIME", "WELL", "ZONE", "ACID", "BOLT", "CUBE", "DRUM", "ECHO", "FARM", "GOLD", "HELP"];
  
  function shuffleWords(){
    for(let i = 0;i < WORDS.length;i++){
      newArr.push(WORDS[i].slice(0,2),WORDS[i].slice(2,4))
    }
  }
  shuffleWords();
  
  function shuffleNewArr(newArr){
    for (let i = 0; i < newArr.length; i++) {
      let r1 = Math.floor(Math.random() * newArr.length);
      let temp = newArr[i];
      newArr[i] = newArr[r1];
      newArr[r1] = temp;
    }
    // return arr;
    console.log(newArr);
    return newArr;
  }
  
  let shuffleArr = shuffleNewArr(newArr);
  
  function addToBox(){
    for(let i = 0;i< newArr.length;i++){
      console.log(_(`b${i}`));
      _(`b${i}`).textContent = shuffleArr[i];
    }
  }
  addToBox();
  
  let word="";
  lst = [];
  let count= 0;
  
  function placeWord(ele) {
    
    _('ress').textContent += ele.textContent;
    lst.push(ele);
  
    word+=ele.textContent;
    console.log(word);
    if(word.length == 4 && WORDS.includes(word)){
      lst[0].style.opacity = "0";
      lst[1].style.opacity = "0";
      word="";
      lst = [];
      count+=1;
      _('score').textContent = count;
      
    }
    if( _('ress').textContent.length >= 4){
       _('ress').textContent ="";
    }
    // count=0
    // _('ress').textContent += ele.textContent;
    // if(_('ress').textContent == 4){
    //   if(WORDS.includes(_('ress').textContent)){
    //     count+=1;
    //     ele.textContent = "";
    //   }
    // if(_('ress').textContent > 4){
    //    _('ress').textContent = "";
    // }
  }
    
    
    // ele.textContent = " ";
    // if(_('ress').textContent.length > 4){
    //    ress.textContent = ress.textContent.slice(-2);
    //   // _('ress').textContent = "";
    //   // ele.textContent = ele.textContent;
    // }
    // let count = 0
    // // console.log(_('ress').textContent.length)
    // if(WORDS.includes(_('ress').textContent)){
    //   count+=1;
    // }
    // console.log(count);
    
  // }
  
  
  