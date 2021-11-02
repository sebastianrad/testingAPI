
export const Page = {
    getRequest() {
        return cy.request("/users?page=2")
    },
    getValuesFromTabel(dataT) {
        let obj = dataT.hashes()
        for (let i = 0; i < obj.length; i++) {
            let details = Object.values(obj[i])
            this.test = details[i]
        }
        return this.test;
    },
    getVal(dataTabel) {
        let objs = dataTabel.hashes()
        let newValues = objs.map(val => {
            return (val.keys)
        })
        return newValues
    },
    /**
     * function to check if are duplicates in array and after that return a boolian value
     * @param {} array 
     * @returns boolian
     */
    checkDuplicates(array) {
        let duplicate = array.filter((item, index) =>{
            index !== array.indexOf(item)
        })
        if(duplicate.length > 0){
            console.log('este')
           return true
        }else {
            console.log('nu')
            return false
        }
        
    },
   
}



