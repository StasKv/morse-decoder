const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letterLength = 10;
    let strArray=[];
    let key1=[];
    let key2=[];
    let key3=[];
    let newObj = {};
    let spaceKey = '**********';
    let itog = '';
    
    for (let key in MORSE_TABLE) {
      for (let i = 0; i < key.length; i++) {
         key[i] =='.' ? key1.push('10') : key1.push('11');
        }
        key2.push(key1)
        key1=[]
      }
      
    for (let value of Object.values(MORSE_TABLE)) {
      key3.push(value);
    }
      
    for(let j = 0; j < key2.length; j++) {
      while(key2[j].length != 5) {
        key2[j].unshift('00');
      }
      key2[j] = key2[j].join('');
        newObj[key2[j]] = key3[j];
    }
    
    newObj[spaceKey] = ' ';
    
    for (let i = 0; i < expr.length; i+=letterLength) {
      strArray.push(expr.slice(i, i + letterLength ));
    }
  


    for (let i = 0; i<strArray.length; i++){
      for (let key in newObj) {
        if(strArray[i] == key) {
          itog += newObj[key];
          }
      }
    }
  return itog
}

module.exports = {
    decode
}