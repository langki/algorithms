// 构造一个节点
class Node {
	constructor(v, next){
		this.value = v;
		this.next = next;
	}
}
	
class LinkList {
	constructor(){
		// 链表的属性，长度和头部
		this.size = 0
		this.head = new Node(null, null)
	}
		
	// 是否为空
	isEmpty() {
		return this.size === 0
	}
	
	// 获取长度
	getSize() {
		return this.size
	}
		
	// 查找
	find(header, index, currentIndex){
		if(index === currentIndex) return header
		return this.find(header.next, index, currentIndex + 1)
	}
		
	// 检查index合法
	checkIndex(index){
		if (index < 0 || index > this.size) throw Error('index error')
	}
		
	// 获取节点
	getNode(index) {
		this.checkIndex(index)
		if (this.isEmpty()) return
		return this.find(this.head, index, 0).next
	}
		
	// 添加节点
	addNode(v, index) {
		this.checkIndex(index)
		// 首先循环到最后一个节点，然后插入节点
		let prev = this.find(this.head, index, 0)
		prev.next = new Node(v, index)
		this.size++
		return prev.next
	}
		
	// 插入节点
	insertNode(v, index){
		this.addNode(v, index)
	}
	// 头部插入节点
	insertToFirst(v, index) {
		this.addNode(v, 0)
	}
	// 尾部插入节点
	insertToLast(v, index) {
		this.addNode(v, this.size)
	}
		
	// 删除一个节点
	removeNode(index, isLast) {
		this.checkIndex(index)
		// isLast是一个布尔值，判断是否最后一个节点
		// 删除index后的节点后，将index后的第二个节点接在index节点后
		index = isLast ? index - 1 : index
		let prev = this.find(this.head, index, 0)
		let node = prev.next
		prev.next = node.next
		node.next = null
		this.size--
		return node
	}
		
	//删除头节点和尾节点
	removeFirst() {
		return this.removeNode(0)
	}
		
	removeLast() {
		return this.removeNode(this.size, true)
	}
}

let lc = new LinkList();

console.log(lc)