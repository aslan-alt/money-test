const localStorageKeyName = 'tagList'
type tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: tag[];
    fetch: () => tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => 'success' | 'not found';
    save: () => void;

}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = (JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]'))
        return this.data;
    },
    create(name: string) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ id: name, name: name })
        this.save()
        return 'success'
    },
    update(id: string, name: string) {
        const idList = this.data.map(item => item.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                tag.id = name
                this.save()
                return 'success'
            }
        } else {
            return 'not found'
        }
    },
    remove(id: string) {
        // const tag = this.data.filter(item=>item.id===id)[0]
        // this.data.splice(this.data.indexOf(tag),1)
        let index = -1
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i
                break
            }
        }
        if (index >= 0) {
            this.data.splice(index, 1)
            this.save()
            return 'success'
        } else {
            return 'not found'
        }

    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}
export default tagListModel