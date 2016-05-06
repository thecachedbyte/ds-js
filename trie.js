class TRIENODE {
    constructor(data = '') {
        this.count = 0;
        this.children = new Map();
        if (data != undefined && data.length > 0) {
            this.insert(data);
        }
    }

    insert(child = '') {
        let targetChild,
            targetLetter;

        child = child.toLowerCase();
        if (child.length > 0) {
            this.count++;
            targetChild = this.children.get(child[0].toUpperCase());
            if (targetChild == undefined) {
                targetChild = this.children.get(child[0]);
                targetLetter = child[0];
            }else{
                targetLetter = child[0].toUpperCase();
            }

            if (targetChild != undefined) {
                targetChild.insert(child.substring(1));
            } else {
                this.children.set(targetLetter, new TRIENODE(child.substring(1)));
            }

            if(targetLetter != undefined && child.length === 1 && targetLetter != targetLetter.toUpperCase()){
                this.children.set(targetLetter.toUpperCase(), this.children.get(targetLetter));
                this.children.delete(targetLetter);
            }
        }
    }

    print(data = '') {
        console.log(data + '->' + this.children.size + '->' + this.count);
        if (this.children.size === 0) {
            console.log(data);
        } else {
            this.children.forEach((value, key) => {
                value.print(data + key);
            })
        }
    }

    search(data) {
        let targetChild = this.children.get(data[0]);

        targetChild = (targetChild == undefined) ? this.children.get(data[0].toUpperCase()) : targetChild;

        if (targetChild != undefined) {
            if (data.length > 1) {
                return targetChild.search(data.substring(1));
            } else {
                return true;
            }
        }
        return false;
    }

    toJSON() {
        let result = {};
        this.children.forEach((value, key) => {
            result[key] = value.toJSON();
        })
        return result;
    }
}

export default TRIENODE
