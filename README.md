<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. clonar el repositorio

2. Ejecutar comando
```
yarn install
```

3. tener nest CLI
```
npm i -g @nestjs/cli
```

4. levantar la base de datos
```
docker-compose up -d
```
5. clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el 
``` .env```

7. Ejecutar la aplicación en dev
```
yarn start:dev
```

8. Reconstruir la BD con la semilla(seed)
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest
   