module.exports = {
  apps: [{
    name: 'express-webpack-boilerplate',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-148-249.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/aws-test.pem',
      ref: 'origin/master',
      repo: 'git@github.com:pixeltight/express-webpack-boilerplate.git',
      path: '/home/ubuntu/express-webpack-boilerplate',
      'post-deploy': 'yarn && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
