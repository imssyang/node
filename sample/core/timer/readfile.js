
// timer to open file and read contents to HTTP response object
function openAndReadFile(filename, res) {
    console.log('opening ' + filename);

    // open and read in file contents
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err)
            res.write('Could not find or open file for reading\n');
        else
            res.write(data);

        // response is done
        res.end();
    });
}

//setTimeout(openAndReadFile, 2000, "timer.js", res);
setTimeout(openAndReadFile, 2000, "readfile.js", "");

