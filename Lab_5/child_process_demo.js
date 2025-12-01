const cp = require('child_process')

// cp.exec('start chrome')
// cp.exec('start https://www.youtube.com/shorts/BV2DFzbFAnM?feature=share')// It is kind of commandline code which you write in linux or you write to open browser,chrom etc.
cp.exec("gcc Hello.c -o a.exe && .\\a.exe", (err, stdout, stderr) => {
    if (err) {
        console.error("ERROR OCCURRED:\n", stderr);   // <-- this shows real compile error
        return;
    }

    console.log("PROGRAM OUTPUT:\n", stdout);
});