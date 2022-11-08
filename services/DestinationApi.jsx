
const BASE_URL = "http://192.168.1.72:45456/api/";
const API_EP = "Destino";

class DestinationApi {
    
    list() {
        return( 
            fetch(`${BASE_URL}${API_EP}`)
                .then(res => {
                    if(!res.ok && res.status !== 404) throw new Error(`Erro ao tentar realizar a requisição: ${res.status}`);
                    if(res.status === 404) throw new Error("Não foi possível encontrar a rota solicitada");
                    return res.json();
                })
                .catch(error => {
                    throw new Error(`Ocorreu um erro durante a recuperação dos destinos ${error.message}`);
                })
        );
    }

    save(destination) {
        return( 
            fetch(`${BASE_URL}${API_EP}`, {
                method: "POST",
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json;charset=utf-8"
                },
                body: JSON.stringify(destination)
            })
                .then(res => {
                    if(!res.ok && res.status !== 404) throw new Error(`Erro ao tentar salvar o destino: ${res.status}`);
                    if(res.status === 404) throw new Error("Não foi possível encontrar a rota solicitada");
                    return res.json();
                })
                .catch(error => {
                    throw new Error(`Ocorreu um erro durante a recuperação dos destinos ${error.message}`);
                })
        );
    }
}

export default DestinationApi;