

function consultaApi(){
    var consulta  = $("#personaje").val();
    $("#resultado").html("");
    //consulta query
    
    $.ajax({
        url:"https://rickandmortyapi.com/api/character/?name="+consulta,
        type:"get",
        dataType:"json",
        success: function(data){
            console.log(data);
            if(data.results.length > 0){
                let personajes = data.results;
                $.each(personajes, function(i, a){
                    //iterar en los Modal
                    let idModal = 'Modal'+ String(i);
                    $("#resultado").append(

                        `<div class="col d-flex justify-content-start">
        <div class="card" style="width: 18rem;">
  <img src="${a.image}" class="card-img-top" alt="${a.name}">
  <div class="card-body">
    <h5 class="card-title">${a.name}</h5>
    <button type="button" id="detalle" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${idModal}">Detalle</button>
  </div>
</div>
    </div>
                        
                        

<div class="modal fade" id="${idModal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${a.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Nombre:</h5>${a.name}
        <h5>Estado:</h5>${a.status}
        <h5>Especie:</h5>${a.species}
        <h5>Ubicación:</h5>${a.origin.name}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`

                    );
                })
                $("#personaje").val("");
            }
            else{
                $("#resultado").html(
                    '<h1>'+ data.Error +'</h1>'
                )
            }
        }
    })
}


$("#buscar").on("click", consultaApi);