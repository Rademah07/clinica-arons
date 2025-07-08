// Banco de dados simples em memória
const DB = {
    animais: [],
    usuarios: [],
  };
  
  // Contadores para IDs automáticos
  let idAnimal = 1;
  let idUsuario = 1;
  
  // Criar um novo animal
  function criarAnimal(nome, raca) {
    const animal = { id: String(idAnimal++), nome, raca };
    DB.animais.push(animal);
    return animal;
  }
  
  // Listar todos os animais
  function listarAnimais() {
    return DB.animais;
  }
  
  // Criar um novo usuário (relacionado a um animal)
  function criarUsuario(nome, email, animalId) {
    const usuario = { id: String(idUsuario++), nome, email, animalId };
    DB.usuarios.push(usuario);
    return usuario;
  }
  
  // Listar todos os usuários
  function listarUsuarios() {
    return DB.usuarios;
  }
  
  // Criar dados de exemplo
  const rex = criarAnimal("Rex", "Labrador");
  const amanda = criarUsuario("Amanda", "amanda@email.com", rex.id);
  
  // Mostrar os dados no console
  console.log("🐶 Animais cadastrados:", listarAnimais());
  console.log("👤 Usuários cadastrados:", listarUsuarios());

  