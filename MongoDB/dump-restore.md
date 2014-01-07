>mongodump -h dbhost -d dbname -o dbdirectory

-h：MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017

-d：需要备份的数据库实例，例如：test

-o：备份的数据存放位置，例如：c:\data\dump，当然该目录需要提前建立，在备份完成后，系统自动在dump目录下建立一个test目录，这个目录里面存放该数据库实例的备份数据。


>mongorestore -h dbhost -d dbname --directoryperdb dbdirectory

-h：MongoDB所在服务器地址

-d：需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2

--directoryperdb：备份数据所在位置，例如：c:\data\dump\test，这里为什么要多加一个test，而不是备份时候的dump，读者自己查看提示吧！

--drop：恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用哦！