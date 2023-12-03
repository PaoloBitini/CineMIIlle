# CineMIlle
The  project consists of a web API that allows for the provision of data related to movies, theaters, and schedules at the multiscreen cinema "Cinemille." The application adheres to the 3-tier architectural model composed of SQL-Server database, .Net backend, and Angular frontend.

## Features

### Movies
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/845cafea-aa4b-42cc-90fc-66b6f5fb3d01)
The application allows users to view movies in the database through appropriate filters. It is possible to filter by release date, end date of availability, and by title.

### Theatre
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/2af6a382-d728-46ad-b802-6bd5a24f0a38)
The application allows obtaining information about the name, capacity, and type of the theaters present in the cinema.

### Schedules
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/05e9874a-d32b-4d3e-b1be-b50e17554415)
The application allows obtaining information related to schedules through filters for the projection date. Specifically, through the frontend, it is possible to access schedules for the current week and the historical schedule.

## Architecture and logical schemes
### Database
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/1a7930a9-5546-47db-8ac0-7b7db3f856af)

### Backend
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/40eb43f4-a506-4240-9907-713d1eb05637)
Entity Framework has being used sinse allows easy manipulation of data in the database. Additionally, a layer was added for separate the logic of the Framework models from the logic of the data to be transferred.

### Frontend
![image](https://github.com/PaoloBitini/CineMIIlle/assets/44835229/0c22a04f-578d-4e0b-ba1e-f43094bb4411)
- Components: Contains the smaller components that will be displayed on various pages.
- Pages: Contains the pages that can be navigated.
- ApiService: Service responsible for making requests to the backend and structuring the received data.
