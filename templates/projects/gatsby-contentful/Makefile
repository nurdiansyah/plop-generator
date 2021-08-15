.PHONY: build test tdd storybook stop up npmi build-cache-image

up:
	docker-compose up

storybook:
	docker-compose up {{dashCase name}}-storybook

build:
	@echo "\n\n\nYou might want to go get a coffee or snack.\n Yes, Really.\n Gatsby takes FOREVER to install (╯°□°)╯︵ ┻━┻" && \
	docker-compose up --build

test:
	@docker exec {{dashCase name}}-client npm test && \
	docker exec {{dashCase name}}-api npm test

tdd:
	@docker exec {{dashCase name}}-client npm run tdd

stop:
	@docker-compose down

npmi:
	@npm i $(module) && \
	docker exec {{dashCase name}}-client npm install --save $(module)

build-cache-image:
	@docker build -f docker/Dockerfile -t gcr.io/{{dashCase name}}-dev/prenpmi . && \
	docker push gcr.io/{{dashCase name}}-dev/prenpmi
