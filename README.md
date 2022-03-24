# README

# angular-rails-project-app
## dependencies
- ruby v2.7.1  
- rails 6.0.4.6  
- (latest yarn, node.js)  
- angular < v13
- webpacker
- middleware using docker(nginx, mysql, redis)

## yarn install
```bash
$ yarn
```

## bundle -> db create and seed
```bash
bundle install
bundle exec rake db:create
```

## docker
```bash
$ cd docker && ./start.sh
```

## webpack dev server + puma
```bash
$ yarn run dev & bundle exec puma
```

## db migration
**using ridgepole**
```bash
bundle exec ridgepole -c '{host: 127.0.0.1, adapter: mysql2, encoding: utf8mb4, pool: 5, username: root, password: test, database: angular_rails_project_app_development}' -E development --apply -f db/Schemafile
```

## sample
**check wiki for updates**
