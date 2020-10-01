let PENDING  =0;
let FULFILLED = 1;
let REJECTED = 2;

function Promise(fn) {
    let state = PENDING;
    let value = null;
    let handlers = [];

    function fulfill(result) {
        state = FULFILLED;
        value = result;
    }

    function reject(error) {
        state= REJECTED;
        value = error;
    }

    function resolve(result) {
        try {
            let then = getThen(result);
            if(then) {
               doResolve(then.bind(result), resolve, reject);
               return
            }
            fulfill(result)
        }catch (e) {
            reject(e);
        }
    }

    function getThen(value) {
        let t = typeof value;
        if (value && (t === 'object' || t=== 'function')) {
            let then = value.then;
            if (typeof then === 'function') {
                return then;
            }
        }
        return null;
    }

    function doResolve(fn, onFulfilled, onRejected) {
        let done = false;
        try {
            fn(function(value){
                if(done) return
                done = true
                onFulfilled(value)
            }, function(reason) {
                if (done) return
                done = true
                onRejected(reason)
            })
        } catch (e) {
            if (done) return
            done =true
            onRejected(e)
        }
    }

   doResolve(fn, resolve, reject);
}

