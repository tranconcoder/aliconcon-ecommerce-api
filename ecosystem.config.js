module.exports = {
    apps: [
        {
            name: 'aliconcon-server',
            script: 'server.ts',
            interpreter: 'bun', // use bun directly
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'production',
                PORT: 4000,
                HOST: '0.0.0.0'
            },
            // Logging
            log_file: './logs/pm2/combined.log',
            out_file: './logs/pm2/out.log',
            error_file: './logs/pm2/error.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

            // Auto restart settings
            watch: false,
            ignore_watch: ['node_modules', 'logs', 'public'],
            max_memory_restart: '800M', // limit memory for restart

            // Restart settings
            restart_delay: 4000,
            max_restarts: 10,
            min_uptime: '10s',

            // Advanced settings
            kill_timeout: 5000,
            wait_ready: true,
            listen_timeout: 8000,

            // Health monitoring
            health_check_grace_period: 3000,

            // Source map support
            source_map_support: true,

            // Merge logs
            merge_logs: true,

            // Time zone
            time: true
        }
    ]
};
