# gamification-api

## Rotas

|   |  Criar questão  |  Validar resposta  |
| ------------------- | :-------------------: | :-------------------: |
|  Rota |  /question | /question/validate/{:id} |
|  Descrição |  Criar questão com titulo e alternativas | Validar resposta de uma questão, de acordo com o id da questão fornecida |

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
