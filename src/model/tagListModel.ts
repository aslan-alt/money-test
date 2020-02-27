const localStorageKeyName = 'tagList'
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => string;
    save: () => void;
}
const tagListModel: TagListModel = {
    data:[],
    fetch() {
        this.data = (JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')) 
        console.log(this.data)
        return this.data;
    },
    create(name: string){
        if(this.data.indexOf(name)>=0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export default tagListModel