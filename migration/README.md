### Api v1 to Api v2 migration queries

These queries aim to replicate the REST routes of Api v1 as closely as possible.

__It is highly recommended you do not use theses queries as-is. Instead, modify them for what you need, remove fields you aren't going to use, add fields/arguments you require, and merge queries together where appropriate.__

Filenames are based on v1 route urls, e.g `/api/{anime|manga}/{id}/page` will have the filename `series-id-page` and `/api/character/{id}` will have the filename `character-id`. 