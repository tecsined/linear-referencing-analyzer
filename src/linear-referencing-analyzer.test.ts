import { LinearReferencingAnalyzer } from './linear-referencing-analyzer';
import { Measure } from "./Measure";

const allRanges: Measure[] = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 6, to: 7 },
    { from: 7, to: 9 },
    { from: 9, to: 18 },
    { from: 45, to: 78 },
    { from: 123, to: 200 },
    { from: 200, to: 209 },
    { from: 209, to: 400 }];

const rs = new LinearReferencingAnalyzer(allRanges);
console.log(rs.GetRangesExcludingGaps());
console.log(rs.GetRangesExcludingGaps());