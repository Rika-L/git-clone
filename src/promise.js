import impl from './impl.js'

export default function (repo, targetPath, opts) {
    return new Promise((yes, no) => {
        impl(repo, targetPath, opts || {}, yes, no);
    });
}
