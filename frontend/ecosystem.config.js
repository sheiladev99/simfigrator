module.exports = {
    apps: [
        {
            name: 'project_app',
            script: 'yarn',
            args: ['run', 'start:ci'],
            cwd: '/app',
            time: true,
            interpreter: '/bin/sh',
            //error_file: "/var/log/pm2_app_error.log",
            //out_file: "/var/log/pm2_app.log"
        },
    ],
};


