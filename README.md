# README

# angular-rails-project-app
## dependencies
- ruby v2.7.1  
- rails 6.0.4.6  
- (latest yarn, node.js)  
- angular < v13
- webpacker
- mysql DB

## yarn install
$ yarn

## db create and seed
```bash
bundle exec rake db:create
bundle exec rake db:seed
```

## webpack dev server + puma
$ yarn run dev & bundle exec puma

## db migration
**using ridgepole**
```bash
bundle exec ridgepole -c config/database.yml -E development --apply -f db/Schemafile
```

## sample
**also check wiki for updates**
![Screen Shot 2022-03-07 at 14 53 29](https://user-images.githubusercontent.com/48423778/156976062-25fef772-02db-42cf-9d07-5e81223dad86.png)
