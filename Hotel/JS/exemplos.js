/* Parte 1

    Exemplo 1:
    Programa pergunta   =>  "Qual o valor padrão da diária?"
    Resposta do usuário =>  -12
    Programa exibe         =>   “Valor inválido, {Nome}”

    Exemplo 2:
    Programa pergunta   =>  "Qual o valor padrão da diária?"
    Resposta do usuário =>   55.0
    Programa pergunta   =>  "Quantas diárias serão necessárias?"
    Resposta do usuário =>  10
    Programa exibe         =>  "O valor de 10 dias de hospedagem é de R$550.0"
    Programa pergunta   =>  "Qual o nome do hóspede?"
    Resposta do usuário =>  Carlos Moreira
    Programa pergunta   =>  "Qual o quarto para reserva? (1 - 20)?"
    Resposta do usuário =>  7
    Programa exibe         =>  "Quarto Livre."
    Programa pergunta   =>  "{Nome}, você confirma a hospedagem para Carlos Moreira por 10 dias para o quarto 7 por R$550.0? S/N"
    Resposta do usuário =>  S
    Programa exibe         =>  "{Nome}, reserva efetuada para Carlos Moreira."

    Exemplo 3:
    Programa pergunta   =>  "Qual o valor padrão da diária?"
    Resposta do usuário =>  55.0
    Programa pergunta   =>  "Quantas diárias serão necessárias?"
    Resposta do usuário =>  10
    Programa exibe         =>  "O valor de 10 dias de hospedagem é de R$550.0"
    Programa pergunta   =>  "Qual o nome do hóspede?"
    Resposta do usuário =>  Carlos Moreira
    Programa pergunta   =>  "Qual o quarto para reserva? (1 - 20)?"
    Resposta do usuário =>  2
    Programa exibe         =>  "Quarto está ocupado. Escolha outro."
    Programa pergunta   =>  "Qual o quarto para reserva? (1 - 20)?"
    Resposta do usuário =>  7
    Programa exibe         =>  "Quarto Livre."
    Programa pergunta   =>  "{Nome}, você confirma a hospedagem para Carlos Moreira por 10 dias para o quarto 7 por R$550.0 ? S/N"
    Resposta do usuário =>  S
    Programa exibe         =>  "{Nome}, reserva efetuada para Carlos Moreira.."

*/

/* Parte 2

    Exemplo:
    Programa pergunta   => "Qual o valor padrão da diária?"
    Resposta do usuário => 100

    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Rosani Albuquerque
    Programa pergunta   => "Qual a idade do Hóspede?"
    Resposta do usuário => 25
    Programa exibe         => "Rosani Albuquerque cadastrada(o) com sucesso."

    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Jailson Albuquerque
    Programa pergunta   => "Qual a idade do Hóspede?"
    Resposta do usuário => 6
    Programa exibe          => "Jailson Albuquerque cadastrada(o) com sucesso. Jailson possui gratuidade"

    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Gabriel Albuquerque
    Programa pergunta   => "Qual a idade do Hóspede?"
    Resposta do usuário => 19
    Programa exibe          => "Gabriel Albuquerque cadastrada(o) com sucesso."

    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Wesley Albuquerque
    Programa pergunta   => "Qual a idade do Hóspede?"
    Resposta do usuário => 82
    Programa exibe	      => "Wesley Albuquerque cadastrada(o) com sucesso. Wesley paga meia"

    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => PARE
    Programa exibe          => "{Nome}, o valor total das hospedagens é: R$250; 1 gratuidade(s); 1 meia(s)"

*/

/* Parte 3

    Exemplo 1:
    Programa pergunta   =>  "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"
    Resposta do usuário => 1
    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Rosani Albuquerque
    Programa exibe         => "Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!"
    Programa pergunta   => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"

    Exemplo 2:  
    Programa pergunta   =>  "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"
    Resposta do usuário => 2
    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário => Rosani Albuquerque
    Programa exibe         => "Hóspede Rosani Albuquerque foi encontrada(o)!"
    Programa pergunta  => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"

    Exemplo 3:  
    Programa pergunta   =>  "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"
    Resposta do usuário => 2
    Programa pergunta   => "Qual o nome do Hóspede?"
    Resposta do usuário =>  Eleanor Fernandes
    Programa exibe         => "Hóspede Eleanor Fernandes não foi encontrada(o)!"
    Programa pergunta  => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"

*/

/* Parte 4
    Exemplo completo
    Programa exibe            => Parte 1: Quantidade de Convidados
    Programa pergunta      => "Qual o número de convidados para o seu evento?"
    Resposta do usuário    =>  192
    Programa exibe            => "Use o auditório Laranja (inclua mais 42 cadeiras)"
    Programa exibe            => "Agora vamos ver a agenda do evento."

    Programa exibe            => Parte 2: Agenda
    Programa pergunta     =>  "Qual o dia do evento?"
    Resposta do usuário   =>  segunda
    Programa pergunta     =>  "Qual é a hora do evento?"
    Resposta do usuário   =>  13
    Programa pergunta     =>  "Qual o nome da empresa?"
    Resposta do usuário   =>  Lojas Transilvânia
    Programa exibe           =>  "Auditório reservado para Lojas Transilvânia. Segunda às 13hs."

    Programa exibe           => Parte 3: Agenda
    Programa pergunta     =>  "Qual a duração do evento em horas?"
    Resposta do usuário   =>  8 
    Programa exibe            =>  "São necessários 48 garçons."
    Programa exibe            =>  "Custo: R$ 504.0"
    Programa exibe            =>  "Agora vamos calcular o buffet do hotel para o evento."

    Programa exibe            => Parte 4: Buffet
    Programa exibe            =>  "O evento precisará de 20 litros de café, 50 litros de água, 700 salgados."

    Programa exibe            => Parte 5: Conferência
    Programa exibe            => Evento no Auditório Colorado.
    Programa exibe            => Nome da Empresa: Hotel Transivânia.
    Programa exibe            => Data: Segunda, 13H às 21h.
    Programa exibe            => Duração do evento: 8H.
    Programa exibe            => Quantidade de garçons: 48.
    Programa exibe            => Quantidade de Convidados: 192
    Programa exibe            => Custo do garçons: R$504.00
    Programa exibe            => Custo do Buffet: R$274.00

    Programa exibe            => Valor total do Evento: R$ 778.00

    Programa pergunta    =>  "Gostaria de efetuar a reserva? S/N"
    Resposta do usuário  =>  S
    Programa exibe           =>  "{Nome}, reserva efetuada com sucesso."
*/

/* Parte 5
    Exemplo:
    Programa pergunta   =>  "Qual o valor do álcool no posto Wayne Oil?"
    Resposta do usuário =>  4.20
    Programa pergunta   =>  "Qual o valor da gasolina no posto Wayne Oil?"
    Resposta do usuário =>  5.82
    Programa pergunta   =>  "Qual o valor do álcool no posto Stark Petrol?"
    Resposta do usuário =>  4.35
    Programa pergunta   =>  "Qual o valor da gasolina no posto Stark Petrol?"
    Resposta do usuário =>  6.17
    Programa exibe   	      =>  "{Nome}, é mais barato abastecer com gasolina no posto Wayne Oil".

*/

/* Parte 6
    Exemplo:
    Programa pergunta   =>  "Qual o nome da empresa?"
    Resposta do usuário =>  Empresa 1
    Programa pergunta   =>  "Qual o valor por aparelho?"
    Resposta do usuário =>  100
    Programa pergunta   =>  "Qual a quantidade de aparelhos?"
    Resposta do usuário =>  7
    Programa pergunta   =>  "Qual a porcentagem de desconto?"
    Resposta do usuário =>  12
    Programa pergunta   =>  "Qual o número mínimo de aparelhos para conseguir o desconto?"
    Resposta do usuário =>  3
    Programa exibe          =>  "O serviço de Empresa 1 custará R$ 1350.0"

    Programa pergunta   =>  "Deseja informar novos dados, {Nome}? (S/N)"
    Resposta do usuário =>  S

    Programa pergunta   =>  "Qual o nome da empresa?"
    Resposta do usuário =>  Empresa 2
    Programa pergunta   =>  "Qual o valor por aparelho?"
    Resposta do usuário =>  95
    Programa pergunta   =>  "Qual a quantidade de aparelhos?"
    Resposta do usuário =>  6
    Programa pergunta   =>  "Qual a porcentagem de desconto?" 
    Resposta do usuário =>  9
    Programa pergunta   =>  "Qual o número mínino de aparelhos para conseguir o desconto?"
    Resposta do usuário =>  10
    Programa exibe          =>  "O serviço de Empresa 2 custará R$1480.0"

    Programa pergunta   =>  "Deseja informar novos dados, {Nome}? (S/N)"
    Resposta do usuário =>  N
    Programa exibe          =>  "O orçamento de menor valor é o [Empresa 1 por R$ 1200.0]"
*/
