watch:
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml up -d

prod:
	docker compose -f docker-compose.prod.yml build
	docker compose -f docker-compose.prod.yml up -d

watch-stop:
	docker compose -f docker-compose.yml stop

prod-stop:
	docker compose -f docker-compose.prod.yml stop