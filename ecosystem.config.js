module.exports = {
  apps: [{
    name: 'deploy',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-247-15.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/hackermoon_nodejs_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:LeraKruchek/deploy.git',
      path: '/home/ubuntu/deploy',
      'post-deploy': 'npm install && npm run restart'
    }
  }
};