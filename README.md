# gamification-api

## Rotas

### POST localhost:3000/question

```json
{
   "title": "Title question",
   "alternatives":[
     {
       "text":"Alternative1"
     },
     {
       "text":"Alternative1"
     },
     {
       "text":"Alternative1"
     },
     {
       "text":"Alternative1"
     },
   ]
}
```

### POST localhost:3000/question/validate/{:id}
```json
{
   "choiche":"Alternative1"
}
```
