let list = [];

for(let item of document.querySelectorAll('.rc-FormPartsQuestion')){
    let data = {}
    let MCData = [];
    let answers = [];
    quest = item.querySelector('.rc-FormPartsQuestion__contentCell > div > div > p').innerHTML;
    data['question'] = quest;
    for(let bruh of item.querySelectorAll('.rc-Option__option-text')){
        MCData.push(bruh.querySelector('div > div > p').innerHTML);
   }
    
    for( let answer of item.querySelectorAll('.cui-isChecked')){
        answers.push(answer.querySelector('.rc-CML > div > p').innerHTML);
    }
   

   data['choice'] = MCData;
   data['answers'] = answers;
   list.push(data);
}

prompt('Ctrl + C to Copy',JSON.stringify(list));



