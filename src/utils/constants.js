const HTTP_ERROR = {
    E0 : 'Erro desconhecido',
    E400 : 'Requisição inválida',
    E401 : 'Requisição necessita de autenticação',
    E403 : 'Acesso negado à requisição',
    E404 : 'URL da requisição não encontrada',
    E405 : 'Método HTTP não suportado',
    E406 : 'Formato de requisição não suportado',
    E415 : 'Formato de mídia não suportado',
    E429 : 'Limite de requisições atingido',
    E500 : 'Erro interno no servidor',
    E503 : 'Serviço indisponível',
};

export { HTTP_ERROR };
