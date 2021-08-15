.PHONY: up down build test tdd

debug=none

up:
	docker-compose up {{dashCase name}}-graphql

down:
	docker-compose down

build:
	docker-compose up --build {{dashCase name}}-graphql

ci:
	docker-compose up --build {{dashCase name}}-graphql-test

tdd:
	docker-compose exec -e DEBUG=$(debug) {{dashCase name}}-graphql npm run test:dev

test:
	docker-compose up {{dashCase name}}-graphql-test
