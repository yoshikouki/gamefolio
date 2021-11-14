APP_CONTAINER_NAME=$(shell docker compose ps | grep -oe "gamefolio-app\S*")

setup:
	docker compose build
	docker compose run --rm app npx prisma migrate dev
	@$(MAKE) run

run:
	docker compose up
