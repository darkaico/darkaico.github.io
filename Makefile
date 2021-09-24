build:
	yarn

start:
	yarn start

publish:
	yarn run slides:precleanup && yarn run slides:prodbuild && yarn run slides:export && yarn run slides:cleanup