# **DevLinks** 


## **Objetivo**

DevLink é uma aplicação projetada para fornecer uma experiência de navegação simplificada e eficiente. Seu objetivo principal é direcionar os usuários para links específicos de forma rápida e intuitiva. Veja a aplicação [DevLinks](https://dev-link-blush.vercel.app/)."

---
## **Público-Alvo**
Influenciadores digitais, empreendedores e vendedores online que desejam promover seus produtos, serviços ou conteúdo através das redes sociais e plataformas de venda. Eles buscam uma solução eficaz para compartilhar links de venda, redes sociais e outros conteúdos relevantes com seu público-alvo 


## **Funcionalidades Principais**

### **Páginas e Rotas**


1. **Home:**

   A página home é o ponto de partida para uma experiência de navegação intuitiva. Aqui, os usuários encontrarão uma lista de links organizados e fáceis de acessar, permitindo que eles cliquem e naveguem para a página desejada de forma rápida e eficiente.

    
2. **Pagina de login:**

   A página de login é o ponto de entrada seguro para os administradores da aplicação. Aqui, eles podem inserir suas credenciais de acesso (usuário e senha) para serem autenticados e direcionados à página de administração, que é acessível apenas após login bem-sucedido

3. **Página admin:**
   
  - Na página de admin, o administrador pode cadastrar links específicos, definindo um nome descritivo para o link e fornecendo o endereço URL correspondente 
  - Além de cadastrar links, o administrador também podem personalizar a aparência dos links, definindo a cor do texto do link. Uma pré-visualização interativa permite que os administradores vejam como o link será exibido, incluindo a cor e o layout do botão.
  -Ao clicar no botão "Cadastrar", as informações do link são salvas no banco de dados, incluindo:

     Nome do link, 
     URL do link, 
     Cor do texto do link, 
     Cor de fundo do botão, 
     
  - Em tempo real, a página consome os dados do banco de dados, exibindo uma lista atualizada dos links salvos. Além disso, a página também oferece a funcionalidade de excluir links individuais, permitindo que os administradores gerenciem facilmente o conteúdo.

 4. **Página social**

   - Nesta página, os administrador pode cadastrar suas redes sociais favoritas, Facebook, Instagram e YouTube. Após o cadastro, os ícones das redes sociais ficam visíveis e clicáveis na página inicial, permitindo que os usuários acessem facilmente as páginas oficiais do administrador.


 5. **Pagina de Erro**

   - Caso o usuário tente acessar uma página que não existe, ele será redirecionado para uma página de erro 404 personalizada. Essa página exibe uma mensagem informativa indicando que a página solicitada não foi encontrada e fornece um link de retorno para a página inicial da aplicação, permitindo que o usuário continue navegando sem interrupções.
   ---

   ### **Funcionalidades Específicas**

   1. **Consumir Firibase como banco de dados e sistema de altenticação:**

   - Sistema de altenticação usando email e senha.
   - Salvar dados no firebase 
   2.  **Personalizaçaõ pelo adiministrador**
    
   - Garante que o administrador possa personalizar seus links que tambem sera salvo no banco de dados.

   3.  **notfound:**
    
  - Tratamento de Pesquisas Inválidas: Se você pesquisar por uma página que não existe, nossa aplicação rapidamente detectará o erro e redirecionará você para a página "NotFound".

   4.  **modo de segurança do adiministrador**

  -  Permite que somente podera acessar a pagina admin e a pagina social quando for logado com o email e senha. garantindo a segurança dos links salvos.  

### **Componentes**

- **Header:**
  - Que ficara nas paginas admin e admin/social com os links que diciona para as paginas Home, Links que no caso é a pagina admin e a pagina Redes sociais que no caso é a admin/social
- **input** 
  - Já que teremos vario inputs ná aplicação foi criado um componente input para que seja usado nas paginas.

- **Social**

  - Componente criado para ser usado ná página home para que seja colocado os links e os icones das redes sociais    
- **Rotas:**
  - Definidas usando `react-router-dom`.
  - Rotas principais: `/`, `/admin`,`/admin/social`, `/login` `/*` (página de notfound).
- **Páginas:**
  - Home.
  - Login.
  - admin.
  - networck.
  - error (notfound).


---

## **Tecnologias Utilizadas**

### **Frontend:**
- Vite
- React.js.
- TypeScript
- React Router DOM.
- framework: Tailwind CSS (estilização).



### **Armazenamento Local:**

 - Lcal-storage para que fique salva as informações do login do adiministrador

---

## **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   https://github.com/erick-d-ps/DevLink.git

2. Instale as dependências:
   ```bash
    yarn add
 
    
3. Inicie o servidor de desenvolvimento:
   ```bash
    npm rum dev

---