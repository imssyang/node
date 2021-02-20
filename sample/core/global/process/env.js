
//
// https://nodejs.org/api/process.html
// node -p process.versions.v8
//

console.log('PROCESS.ARCH: ' + process.arch);
console.log('PROCESS.ARGV: ' + process.argv);
console.log('PROCESS.ARGV0: ' + process.argv0);
console.log('PROCESS.CHANNEL: ' + process.channel);
console.log('PROCESS.CONFIG: ' + JSON.stringify(process.config, null, 4));
console.log('PROCESS.CONNECTED: ' + process.connected);
console.log('PROCESS.CWD(): ' + process.cwd());
console.log('PROCESS.DEBUGPORT: ' + process.debugPort);
console.log('PROCESS.ENV: ' + process.env);
console.log('PROCESS.EXECARGV: ' + process.execArgv);
console.log('PROCESS.EXECPATH: ' + process.execPath);
console.log('PROCESS.EXITCODE: ' + process.exitCode);
console.log('PROCESS.GETEGID(): ' + process.getegid());
console.log('PROCESS.GETEUID(): ' + process.geteuid());
console.log('PROCESS.GETGID(): ' + process.getgid());
console.log('PROCESS.GETGROUPS(): ' + process.getgroups());
console.log('PROCESS.GETUID(): ' + process.getuid());
console.log('PROCESS.MAINMODULE: ' + JSON.stringify(process.mainModule, null, 4));
console.log('PROCESS.MEMORYUSAGE(): ' + JSON.stringify(process.memoryUsage(), null, 4));
console.log('PROCESS.NODEPRECATION: ' + process.noDeprecation);
console.log('PROCESS.PID: ' + process.pid);
console.log('PROCESS.PLATFORM: ' + process.platform);
console.log('PROCESS.PPID: ' + process.ppid);
console.log('PROCESS.RELEASE: ' + JSON.stringify(process.release, null, 4));
console.log('PROCESS.REPORT: ' + JSON.stringify(process.report, null, 4));
console.log('PROCESS.RESOURCEUSAGE(): ' + JSON.stringify(process.resourceUsage(), null, 4));
console.log('PROCESS.UMASK(): ' + process.umask());
console.log('PROCESS.UPTIME(): ' + process.uptime());
console.log('PROCESS.VERSIONS: ' + JSON.stringify(process.versions, null, 4));
console.log('PROCESS.EXIT(0): ' + process.exit(0));

