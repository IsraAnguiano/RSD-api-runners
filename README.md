# RSD-api-runners



Schemas

Runner(matricula,nombre,programa)
Races (codigo,nombre,ruta)

API Definicion

GET /runners
	[{
	    matricula: '35728',
      nombre: 'Israel Magana',
      programa: 'Intermedio'
	}]
POST /runners
	Body
	{
	    matricula: '35728',
      nombre: 'Israel Magana',
      programa: 'Intermedio'
	}
PUT /runner/{matricula}
	body
	{
	    matricula: '35728',
      nombre: 'Israel Magana',
      programa: 'Intermedio'
	}
DELETE /runners/{matricula}
	{
	    matricula: '35728',
      nombre: 'Israel Magana',
      programa: 'Intermedio'
	}

GET /races
	[{
	  codigo : "5k01",
		nombre : "5km Junio Oxxo",
    ruta : "1",
	}]
GET /races/{codigo}
	{
	  codigo : "5k01",
		nombre : "5km Junio Oxxo",
    ruta : "1",
	}
POST /races
	Body
	 {
	  codigo : "5k01",
		nombre : "5km Junio Oxxo",
    ruta : "1",
	 }
PUT /races/{codigo}
	Body
	 {
	  codigo : "5k01",
		nombre : "5km Junio Oxxo",
    ruta : "1",
	  }
DELETE /races/{codigo}
	 {
	  codigo : "5k01",
		nombre : "5km Junio Oxxo",
    ruta : "1",
	  }

