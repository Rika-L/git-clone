import impl from './impl.js'

export function gitClone(repo, targetPath, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = null;
    }

    opts = opts || {};
    cb = cb || function () {
    };

    impl(repo, targetPath, opts, cb, cb);
}

export function gitClonePromise(repo, targetPath, opts) {
    return new Promise((yes, no) => {
        impl(repo, targetPath, opts || {}, yes, no);
    });
}
