migration-show:
	./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:show

migration-run:
	./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run

migration-revert:
	./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:revert
