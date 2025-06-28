const output = document.getElementById('output');

function ejemploSetTimeout() {
    output.innerHTML = 'Inicio setTimeout...';
    setTimeout(() => {
        output.innerHTML += '<br>¡Han pasado 2 segundos!';
    }, 2000);
}

function ejemploPromesa() {
    output.innerHTML = 'Ejecutando promesa...';
    new Promise((resolve) => {
        setTimeout(() => resolve('Promesa resuelta después de 1.5 segundos'), 1500);
    }).then(mensaje => {
        output.innerHTML += `<br>${mensaje}`;
    });
}

function ejemploAsyncAwait() {
    output.innerHTML = 'Esperando resultado async/await...';
    (async () => {
        function tarea() {
            return new Promise(res => setTimeout(() => res('¡Async/Await completado!'), 1000));
        }
        const resultado = await tarea();
        output.innerHTML += `<br>${resultado}`;
    })();
}

function ejemploFetch() {
    output.innerHTML = 'Consultando API de prueba...';
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(usuario => {
            output.innerHTML += `<br>Usuario recibido: <b>${usuario.name}</b>`;
        })
        .catch(err => {
            output.innerHTML += `<br>Error: ${err}`;
        });
}

function ejemploPromiseAll() {
    output.innerHTML = 'Ejecutando Promise.all...';
    const p1 = new Promise(res => setTimeout(() => res('Primera promesa'), 1000));
    const p2 = new Promise(res => setTimeout(() => res('Segunda promesa'), 2000));
    Promise.all([p1, p2]).then(resultados => {
        output.innerHTML += `<br>Resultados: ${resultados.join(' y ')}`;
    });
}
