# API FETCH

## Requirements

* UI
* API Fetch from local data (but having in mind external in future)
* Dropdown to chose request format
* No libraries except for syntax highlight
* Performance
* Testable

## To run

```
npm i
npm run serve
```

## Details

* Code has been split in HTTP Request and Request Client as one is in charge of data fetching and could be used elsewwhere and the other one is just the interface
* In selector there's also an 'error' format just to simulate what happens on error
* No RxJS has been used as one of the requirements was to use no libraries
* No final checking has been done on IE9 as I did not have it on my computer


## Improvements

* ~~Use babel to move es6/7 code to es5~~
* Add a minifier to compact the code
* Consider sass if platform gets more styling
* Move index outside of dist
* Move data and highlight to dist
* Consider providing a different approach to make IE9 look like IE11 by removing flexbox and bloating html