const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");
const {spawn} = require("child_process");

async function main(args) {
    const prefix = "src/static/";
    const originalDir = "original";

    const directories = glob.sync(`${prefix}**/`).map(i => i.replace(prefix, ""));
    const files = glob.sync(`${prefix}**/*.{jpg,jpeg,png}`)
        .map(i => i.replace(prefix, ""))
        .filter(f => !fs.existsSync(path.join(process.cwd(), originalDir, f)));

    for (let dir of directories) {
        dir = path.join(originalDir, dir);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }

    const uploaded = await Promise.all(files.map(file => new Promise(res => {
        fs.renameSync(path.join(process.cwd(), prefix, file), path.join(process.cwd(), originalDir, file));
        const child = spawn("curl", [
            "--user",
            `api:${args[2]}`,
            "--data-binary",
            `@${path.join(originalDir, file)}`,
            "-i",
            "https://api.tinify.com/shrink",
        ]);
        let data = '';
        child.stdout.on('data', d => {
            data += d;
        });
        child.on('close', () => {
            const result = JSON.parse(data.split('\r\n\r\n')[1]);
            fetch(result.output.url).then(r =>{
                const dest = fs.createWriteStream(path.join(process.cwd(), prefix, file));
                r.body.pipe(dest);
                res({
                    ratio: result.output.ratio,
                    file
                });
            });
        });
    })));
    let result = '';
    for (const info of uploaded) {
        result += `${info.ratio * 100}%\t'${info.file}'\n`;
    }
    console.log(result);
}

main(process.argv);
