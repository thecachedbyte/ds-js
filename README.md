# ds-js
Data Structure in ES6.


## Trie

```js
import {trie} from 'ds-js';

let trie = new trie('anusheel');
trie.insert('anuj');
trie.insert('ashish');
trie.insert('rishabh')
trie.print();
console.log(trie.search('anusheel'));
console.log(trie.search('aniket'));
```
