/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [null];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
      this.storage.push(val);
      this.size++;
      return bubbleUp(this.storage.length - 1);
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
      this.size--;
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
      return this.storage[0];
    }
    // Returns the size of the heap
    getSize() {
      return this.size;
    }
    // Returns the storage array
    getStorage() {
      return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
      let currentIndex = index;
      let parentIndex = Math.round((index - 2) / 2);
      const currentValue = this.storage[currentIndex];
      const parentValue = this.storage[parentIndex];
      if (currentValue > parentValue) {
      this.storage[parentIndex] = currentValue;
      this.storage[currentIndex] = parentValue;

      if(index = 0) return;
      return bubbleUp(Math.round((index - 2) / 2));
    }
      
      
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
      
    }
}

module.exports = Heap;
