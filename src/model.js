export class Operator {
	constructor(label, func, accumulate) {
		this.label = label;
		this.func = func;
		this.accumulate = accumulate;
	}
	toString() {
		return "<Operator> " + this.label;
	}
}

export class OperatorState {
	constructor(mem, acc, entry) {
		this.mem = mem;
		this.acc = acc;
		this.entry = entry;
	}
	toString() {
		return "<OperatorState> mem: " + this.mem + " acc: " + this.acc + " entry: " + this.entry;
	}
}

export class AccOperator extends Operator {
	constructor(label, accFunc) {
		super(label,
			(state) => {
				let acc = accFunc(state.acc, state.entry);
				return new OperatorState(
					state.mem,
					acc,
					acc
				);
			},
			true
		)
	}
}

export class EntryOperator extends Operator {
	constructor(label, entryFunc) {
		super(label,
			(state) => {
				return new OperatorState(
					state.mem,
					state.acc,
					entryFunc(state.entry != 0 ? state.entry : state.acc)
				);
			},
			false
		)
	}
}

export class AssignOperator extends AccOperator {
	constructor() {
		super("=",
			(acc, entry) => {
				return entry;
			}
		);
	}
}

export class PlusOperator extends AccOperator {
	constructor() {
		super("+",
			(acc, entry) => {
				return acc + entry;
			}
		);
	}
}

export class MinusOperator extends AccOperator {
	constructor() {
		super("-",
			(acc, entry) => {
				return acc - entry;
			}
		);
	}
}

export class MultiplyOperator extends AccOperator {
	constructor() {
		super("X",
			(acc, entry) => {
				return acc * entry;
			}
		);
	}
}

export class DivideOperator extends AccOperator {
	constructor() {
		super("/",
			(acc, entry) => {
				return acc / entry;
			}
		);
	}
}

export class SqrtOperator extends EntryOperator {
	constructor() {
		super("&radic;",
			(entry) => {
				return Math.sqrt(entry);
			}
		);
	}
}

export class PercentOperator extends EntryOperator {
	constructor() {
		super("%",
			(entry) => {
				return entry / 100.0;
			}
		);
	}
}

export class ToggleSignOperator extends EntryOperator {
	constructor() {
		super("+/-",
			(entry) => {
				return -1 * entry;
			}
		);
	}
}

export class MemRecallOperator extends Operator {
	constructor() {
		super("MR",
			(state) => {
				return new OperatorState(
					state.mem,
					state.acc,
					state.mem
				);
			},
			false
		);
	}
}

export class MemPlusOperator extends Operator {
	constructor() {
		super("M+",
			(state) => {
				return new OperatorState(
					state.mem + state.entry,
					state.acc,
					state.mem + state.entry,
				);
			},
			false
		);
	}
}

export class MemMinusOperator extends Operator {
	constructor() {
		super("M-",
			(state) => {
				return new OperatorState(
					state.mem - state.entry,
					state.acc,
					state.mem - state.entry,
				);
			},
			false
		);
	}
}

export const CalculatorOps = {
	assign: new AssignOperator(),
	plus: new PlusOperator(),
	minus: new MinusOperator(),
	multiply: new MultiplyOperator(),
	divide: new DivideOperator(),
	sqrt: new SqrtOperator(),
	percent: new PercentOperator(),
	toggleSign: new ToggleSignOperator(),
	memRecall: new MemRecallOperator(),
	memPlus: new MemPlusOperator(),
	memMinus: new MemMinusOperator(),
}
