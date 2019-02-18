### Linear Referencing Analyzer

Linear referencing analyzer allows passing a collection of measures to find discontinues or gaps in the data and gets segments ranges with not gaps.

Collection pass to the analyzer must implement the interface Measures which has the properties from and to that represent a segment e.g. {from:1, to: 12} 

# From a collection of measures like this:

``` typescript
const segments :Measures  = [
      {from:1, to: 2},
      {from:3 to: 5},
      {from:5 to: 10},
      {from:20, to: 21},
      {from:21, to: 45}
]
const lra = new LinearReferingAnalyzer (segments);
const rangesWithNotGaps  = (lra.GetRangesExcludingGaps());
```
Where will contain:
```typescript 
   rangesWithNotGaps => [{from:1, to: 2}, {from:3, to: 10}, {from:20, to: 45}]
```
