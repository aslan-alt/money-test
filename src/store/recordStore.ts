import clone from '@/model/clone'
const localStorageKeyName = 'recordList'


const recordStore = {
    recordList: []as RecordItem[],
    fetchRecords() {
        this.recordList = (JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')) as RecordItem[];
        return this.recordList
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))
    },
    createRecords(record: RecordItem) {
        const value: RecordItem = clone(record)
        value.createdAt = new Date();
        this.recordList && this.recordList.push(value);
        recordStore.saveRecords()
    }
}
export default recordStore