import clone from './clone'
const localStorageKeyName = 'recordList'


const model = {
    data:[]as RecordItem[],
    create(record: RecordItem){
        const value: RecordItem = clone(record)
        value.createdAt = new Date();
        this.data.push(value);
    },
    fetch() {
        this.data = (JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')) as RecordItem[];
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export default model