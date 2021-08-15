.PHONY: up down build test tdd

debug=none

up:
	docker-compose up {{dashCase name}}-service

down:
	docker-compose down

build:
	docker-compose up --build {{dashCase name}}-service

ci:
	docker-compose up --build {{dashCase name}}-service-test

tdd:
	docker-compose exec -e DEBUG=$(debug) {{dashCase name}}-service npm run test:dev

test:
	docker-compose up {{dashCase name}}-service-test
