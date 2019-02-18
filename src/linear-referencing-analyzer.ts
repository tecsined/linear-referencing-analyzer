import { Stack } from "./stack";
import { Measure } from "./Measure";

export class LinearReferencingAnalyzer {

    private stack: Stack<number>;

    constructor(private allRanges: Measure[]) {
        this.stack = new Stack<number>();
    }

    GetRangesExcludingGaps(): Measure[] {
        this.allRanges.forEach((measure: Measure) => {
            if (this.stack.count === 0) {
                this.addMeasuresToStack(measure);
            } else {
                this.updateStoredToMeasure(measure);
            }
        });

        if (this.stack.count === 0) {
            return [];
        }
        return this.getNewMeasures();
    }

    private updateStoredToMeasure(measure: Measure): void {
        const storedTo = this.stack.peek();
        if (storedTo === measure.from) {
            this.stack.pop();
            this.stack.push(measure.to);
        } else {
            this.addMeasuresToStack(measure);
        }
    }

    private getNewMeasures(): Measure[] {
        const rangesWithoutGaps: Measure[] = [];
        while (this.stack.count != 0) {
            const t = this.stack.pop();
            const f = this.stack.pop();
            rangesWithoutGaps.unshift({ from: f, to: t });
        }
        this.stack.clear();
        return rangesWithoutGaps;

    }

    private addMeasuresToStack(measure: Measure): void {
        this.stack.push(measure.from);
        this.stack.push(measure.to);
    }
}

