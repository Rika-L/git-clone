function git(opts) {
    return opts.git || 'git';
}

/**
 * @param {string} repo
 * @param {string} targetPath
 * @param {{git:string,shallow:boolean,checkout:string,args:any[],progress:string}} opts
 * @returns {(*|string[])[]}
 */
function buildCloneCommand(repo, targetPath, opts) {
    let args = ['clone'];
    const userArgs = opts.args || [];

    if (opts.shallow) {
        if (userArgs.indexOf('--depth') >= 0) {
            throw new Error("'--depth' cannot be specified when shallow is set to 'true'");
        }
        args.push('--depth', '1');
    }

    if (opts.progress) {
        args.push('--progress');
    }

    args = args.concat(userArgs);
    args.push('--', repo, targetPath);

    return [git(opts), args];
}

function buildCheckoutCommand(ref, opts) {
    return [git(opts), ['checkout', ref]];
}

export {buildCloneCommand, buildCheckoutCommand}
