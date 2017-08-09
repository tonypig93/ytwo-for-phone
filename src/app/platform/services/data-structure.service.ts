export class DataStructureService <T> {
	private data: T [];
	private currentSortAttr: string;
	private timeStamp: number;
	constructor(sortAttr: string, data: T []) {
		this.currentSortAttr = sortAttr;
		this.data = data;
		this.timeStamp = (new Date()).getTime();
	}
	sort () {
		if (!this.data) {
			return null;
		}
		this.quickSort(this.data, 0, this.data.length - 1, this.currentSortAttr);
	};
	private quickSort(arr: T [], left: number, right: number, attr: string) {
		if (left > right) {
			return;
		}
		let pivot = arr[left],
			i = left,
			j = right;
		while (i !== j) {
			while (arr[j][attr] >= pivot[attr] && i < j) {
				j--;
			}
			while (arr[i][attr] <= pivot[attr] && i < j) {
				i++;
			}
			if (i < j) {
				let tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
			}
		}
		arr[left] = arr[i];
		arr[i] = pivot;
		this.quickSort(arr, left, i - 1, attr);
		this.quickSort(arr, i + 1, right, attr);
	}
	setAttr(attr: string) {
		this.currentSortAttr = attr;
	}
	find(value: any, isIndex = false) {
		if (!this.data) {
			return null;
		}
		const attr = this.currentSortAttr;
		let left = 0,
			right = this.data.length - 1;
		while (left < right) {
			let mid = Math.floor((left + right) / 2);
			if (value > this.data[mid][attr]) {
				left = mid + 1;
			} else if (value < this.data[mid][attr]) {
				right = mid - 1;
			} else {
				return isIndex ? mid : this.data[mid];
			}
		}
		let shot = this.data[left] && (this.data[left][attr] === value); // shot or not shot, not shot will return the nearest index.
		return shot ? (isIndex ? left : this.data[left]) : (isIndex ? -(++left) : null); // in case index 0, cannot tell difference between 0 and -0, so add 1 to `left`;
	}
	findByAttrLinear (attr: string, value: any) {
		if (!this.data) {
			return null;
		}
		let res = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i][attr] === value) {
				res.push(this.data[i]);
			}
		}
		return res.length > 0 ? (res.length > 1 ? res : res[0]) : null;
	}
	delete (value: any) {
		if (!this.data || this.data.length === 0) {
			return null;
		}
		let index;
		index = this.find(value, true);
		if (index !== null) {
			for (let i = index; i < this.data.length - 1; i ++) {
				this.data[i] = this.data[i + 1];
			}
			this.data.length = this.data.length - 1;
		}
		return index;
	}
	insert (item) {
		// this.deleteByAttr(this.currentSortAttr, item[this.currentSortAttr]);
		let nearIndex = <number>this.find(item[this.currentSortAttr], true);
		if (nearIndex >= 0) {
			this.data[nearIndex] = item;
			return this.data.length;
		} else {
			nearIndex = -(nearIndex + 1);
		}
		let destIndex = 0;
		if (this.data[nearIndex]) {
			destIndex = this.data[nearIndex][this.currentSortAttr] > item[this.currentSortAttr] ? nearIndex : nearIndex + 1;
		}
		this.data.push(item);
		for (let i = this.data.length - 2; i >= destIndex; i --) {
			// this.data[i + 1] = this.data[i];
			[this.data[i + 1], this.data[i]] = [this.data[i], this.data[i + 1]];
		}
		this.data[destIndex] = item;
		return this.data.length;
	}
}