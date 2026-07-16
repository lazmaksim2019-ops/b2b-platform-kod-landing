.PHONY: dev build start lint typecheck test test-e2e docker-build docker-up clean

dev:
	npm run dev

build:
	npm run build

start:
	npm start

lint:
	npm run lint

typecheck:
	npx tsc --noEmit

test:
	npx vitest run --reporter=verbose

test-watch:
	npx vitest --reporter=verbose

test-coverage:
	npx vitest run --coverage --reporter=verbose

docker-build:
	docker compose build

docker-up:
	docker compose up -d

clean:
	rm -rf .next coverage node_modules || Remove-Item -Recurse -Force ".next", "coverage", "node_modules" -ErrorAction SilentlyContinue
