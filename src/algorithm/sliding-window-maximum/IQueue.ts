interface IQueue {
	q: number[]
	push(num: number): void
	max(): number
	pop(num: number): void
}

export { IQueue }
