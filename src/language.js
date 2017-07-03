export default class {
  constructor (vuejs) {
    this.vuejs = vuejs
    this.languages = {}
    this.languages.pt_BR = {
      'error.general' : 'Error has ocurred',
      'pages.messages.product.productInserted': 'Produto inserido',
      'pages.messages.product.productUpdated': 'Produto atualizado',
      'pages.messages.credentials.passwordChanged': 'A senha foi alterada com sucesso',
      'pages.messages.showProducts.insertProduct': 'Inserir produto na arvore',
      'pages.messages.showProducts.selectProduct': 'Selecionar produto',
      'pages.messages.showProducts.reloadProducts': 'Recarregar produtos',
      'pages.messages.showProducts.removeProduct': 'Remover produto',
      'pages.messages.showProducts.fields.code': 'Código',
      'pages.messages.showProducts.fields.name': 'Nome',
      'pages.messages.showProducts.fields.family': 'Familia',
      'pages.messages.showProducts.fields.productType': 'Tipo produto',
      'pages.messages.showProducts.fields.amountInStock': 'Quantidade estoque',
      'pages.messages.showProducts.fields.quantityNecessity': 'Quantidade necessaria',
      'pages.messages.showProducts.removeProduct.confirmation': 'Voce deseja realmente excluir o produto',
      'pages.messages.showProducts.productTree': 'Exibir a arvore do produto',
      'pages.messages.product.productRemoved': 'O produto foi removido',
      'pages.messages.product.childrenErrorOcurred': 'Erro ao obter produtos filhos',
      'pages.messages.showProducts.previewTree': 'Pré visualizar arvore',
      'pages.401.unauthorized': 'Você não possui autorização',
      'pages.401.pleaseDoLogin': 'Por favor realizar o login',
      'pages.401.clickHereToLogin': 'Entrar no sistema',
      'pages.403.forbbiden': 'Você não possui permissão',
      'pages.403.contactAdmin': 'Entre em contato com o administrador',
      'pages.403.backToHome': 'Voltar para pagina inicial',
      'pages.404.youAreLost': 'Página não encontrada',
      'pages.404.pageDoesntExist': 'Essa página não existe',
      'pages.404.backToHome': 'Voltar para pagina inicial',
      'pages.500.errorHasOcurred': 'Ocorreu um erro inesperado',
      'pages.500.contactAdmin': 'Entre em contato com o administrador',
      'pages.500.backToHome': 'Voltar para pagina inicial',
      'pages.credentials.header': 'Dados do usuário',
      'pages.credentials.currentPassword': 'Senha antiga',
      'pages.credentials.newPassword': 'Senha nova',
      'pages.credentials.confirmPassword': 'Confirmar nova senha',
      'pages.credentials.saveButton': 'Salvar',
      'pages.logout.header': 'Você saiu do sistema',
      'pages.logout.greeting': 'Até mais',
      'pages.logout.toLogin': 'Clique aqui para realizar login',
      'pages.sidebar.category.principal': 'PRINCIPAL',
      'pages.sidebar.item.dashboard': 'Dashboard',
      'pages.sidebar.category.stock': 'ESTOQUE',
      'pages.sidebar.item.productManagement': 'Gerenciar Produtos',
      'pages.sidebar.item.materialsExplosion': 'Explosão de materiais',
      'pages.sidebar.item.products': 'Produtos',
      'pages.sidebar.category.configuration': 'CONFIGURAÇÃO',
      'pages.sidebar.item.credentials': 'Credenciais',
      'pages.sidebar.category.pcp': 'PROGRAMAÇÃO DE PRODUÇÃO',
      'pages.sidebar.item.necessity': 'Necessidades',
      'pages.sidebar.item.order': 'Ordens de produção',
      'pages.sidebar.item.supply': 'Suprimentos',
      'pages.sidebar.item.logout': 'Sair',
      'pages.products.header': 'Produtos',
      'pages.products.productData': 'Dados do produto',
      'pages.products.button.newProduct': ' Novo produto',
      'pages.products.button.close': ' Fechar',
      'pages.products.label.code': 'Código',
      'pages.products.label.name': 'Nome',
      'pages.products.label.family': 'Familia',
      'pages.products.label.productType': 'Tipo Produto',
      'pages.products.label.productType.bought': 'Comprado',
      'pages.products.label.productType.produced': 'Produzido',
      'pages.products.label.unitType': 'Unidade',
      'pages.products.label.leadTime': 'Tempo de espera',
      'pages.products.label.purchasePrice': 'Preço de compra',
      'pages.products.label.description': 'Descrição',
      'pages.products.button.save': 'Salvar',
      'pages.products.button.close': 'Fechar',
      'pages.structure.header': 'Estrutura do produto',
      'pages.structure.relation.edit.quantity': 'Editar quantidade',
      'pages.structure.relation.message': 'O produto {{this.relationshipData.parent.text}} possui {{this.relationshipData.quantity}} do produto {{this.relationshipData.node.text}}',
      'pages.structure.relation.children.quantity': 'Quantidade de itens filho',
      'pages.structure.relation.header': 'Dados da relação',
      'pages.structure.relation.fathersName': 'Nome do pai',
      'pages.structure.relation.sonName': 'Nome do filho',
      'pages.structure.treeview.general': 'Visualização geral da arvore',
      'pages.structure.relation.': 'Edit quantity',
      'pages.structure.relation.created': 'Produto associado com sucesso',
      'pages.structure.relation.remove': 'Produto dissociado com sucesso',
      'pages.structure.remove': 'Você deseja mesmo remover essa relação?',
      'pages.structure.alert.anotherTree': 'Essa alteração pode afetar outros produtos, tem certeza?',
      'pages.structure.relation.children.error': 'Erro ao obter produtos filhos',
      'pages.necessities.header': 'Necessidades',
      'pages.materialExplosion.header': 'Explosão de materiais',
      'pages.necessity.header': 'Necessidade',
      'pages.necessity.button.newNecessity': 'Nova necessidade',
      'pages.messages.showNecessity.fields.name': 'Nome',
      'pages.messages.showNecessity.fields.description': 'Descrição',
      'pages.messages.showNecessity.fields.items.quantity': 'Quantidade',
      'pages.messages.showNecessity.fields.items.deadLine': 'Prazo',
      'pages.messages.showNecessity.products.all': 'Produtos',
      'pages.messages.showNecessity.fields.sel ected': 'Itens da necessidade',
      'pages.messages.showNecessity.products.choose': 'Selecione os produtos',
      'pages.messages.necessityItem.fields.productName': 'Nome do produto',
      'pages.messages.necessityItem.fields.quantity': 'Quantidade',
      'pages.messages.necessityItem.fields.deadline': 'Prazo',
      'pages.messages.showNecessity.selectNecessity': 'Selecionar necessidade',
      'pages.messages.necessityItem.header': 'Dados do item',
      'pages.messages.necessityItem.inserted': 'Item da necessidade inserido',
      'pages.messages.necessity.removeButton': 'Remover necessidade',
      'pages.messages.necessity.explosionButton': 'Explodir necessidade',
      'pages.messages.necessity.removed': 'Necessidade removida com sucesso',
      'pages.messages.necessity.action.remove': 'Você deseja mesmo remover essa necessidade',
      'pages.messages.necessityItem.removeButton': 'Remover item da necessidade',
      'pages.messages.necessityItem.removed': 'Item da necessidade removido',
      'pages.productionOrders.header': 'Ordens de Produção',
      'pages.productionOrders.button.newProductionOrder': 'Nova Ordem de Produção',
      'pages.products.productionOrderData': 'Dados da Ordem',
      'pages.productionOrders.label.code': 'Código',
      'pages.productionOrders.label.productCode': 'Produto',
      'pages.productionOrders.label.quantity': 'Quantidade',
      'pages.productionOrders.label.originalDeadline': 'Prazo Original',
      'pages.productionOrders.label.revisedDeadline': 'Prazo Reprogramado',
      'pages.productionOrders.label.orderType': 'Tipo',
      'pages.productionOrders.label.orderStatus': 'Status',
      'pages.messages.showProductionOrders.fields.code': 'Código',
      'pages.messages.showProductionOrders.fields.productCode': 'Produto',
      'pages.messages.showProductionOrders.fields.quantity': 'Quantidade',
      'pages.messages.showProductionOrders.fields.originalDeadline': 'Prazo Original',
      'pages.messages.showProductionOrders.fields.revisedDeadline': 'Prazo Reprogramado',
      'pages.messages.showProductionOrders.fields.orderType': 'Tipo',
      'pages.messages.showProductionOrders.fields.orderStatus': 'Status',
      'pages.messages.productionOrder.updated': 'Ordem de Produção Atualizada',
      'pages.messages.productionOrder.inserted': 'Ordem de Produção Inserida',
      'enums.productionOrder.type.1': 'Prevista',
      'enums.productionOrder.type.2': 'Firme',
      'enums.productionOrder.status.1': 'Aberta',
      'enums.productionOrder.status.2': 'Encerrada',
      'enums.productionOrder.status.3': 'Cancelada'
    }
    this.languages.en = {
      'pages.messages.credentials.productInserted': 'Product has been inserted',
      'pages.messages.credentials.productUpdated': 'Product has been updated',
      'pages.messages.credentials.passwordChanged': 'Password has updated',
      'pages.messages.showProducts.insertProduct': 'Insert product in tree',
      'pages.messages.showProducts.selectProduct': 'Select product',
      'pages.messages.showProducts.reloadProducts': 'Reload products',
      'pages.messages.showProducts.removeProduct': 'Remove product',
      'pages.messages.showProducts.removeProduct.confirmation': 'Are you sure to delete Product?',
      'pages.messages.showProducts.productTree': 'Show product tree',
      'pages.messages.showProducts.fields.code': 'Code',
      'pages.messages.showProducts.fields.name': 'Name',
      'pages.messages.showProducts.fields.family': 'Family',
      'pages.messages.showProducts.fields.productType': 'Product type',
      'pages.messages.showProducts.fields.amountInStock': 'Amount in stock',
      'pages.messages.product.productRemoved': 'Product has removed',
      'pages.messages.product.childrenErrorOcurred': 'Erro occured while get childreen',
      'pages.messages.showProducts.previewTree': 'Preview tree',
      'pages.401.unauthorized': 'You don\'t have authorization',
      'pages.401.pleaseDoLogin': 'Please do login',
      'pages.401.clickHereToLogin': 'Click here to login',
      'pages.403.forbbiden': 'You don\'t have permission to access',
      'pages.403.contactAdmin': 'Contact your system administrator',
      'pages.403.backToHome': 'Back to home',
      'pages.404.youAreLost': 'You are lost.',
      'pages.404.pageDoesntExist': 'This page doesn\'t exist.',
      'pages.404.backToHome': 'Back to home',
      'pages.500.errorHasOcurred': 'An error has ocurred',
      'pages.500.contactAdmin': 'Contact your system administrator',
      'pages.500.backToHome': 'Back to home',
      'pages.credentials.header': 'User data',
      'pages.credentials.currentPassword': 'Old password',
      'pages.credentials.newPassword': 'New password',
      'pages.credentials.confirmPassword': 'Confirm new password',
      'pages.credentials.saveButton': 'Save',
      'pages.logout.header': 'Logout successful',
      'pages.logout.greeting': 'See you',
      'pages.logout.toLogin': 'Click here to login',
      'pages.sidebar.category.principal': 'PRINCIPAL',
      'pages.sidebar.item.dashboard': 'Dashboard',
      'pages.sidebar.category.stock': 'STOCK',
      'pages.sidebar.category.pcp': 'Production Planning',
      'pages.sidebar.item.necessity': 'Necessities',
      'pages.sidebar.item.order': 'Order',
      'pages.sidebar.item.supply': 'Supply',
      'pages.sidebar.item.productManagement': 'Product Management',
      'pages.sidebar.item.products': 'Products',
      'pages.sidebar.category.configuration': 'CONFIGURATION',
      'pages.sidebar.item.credentials': 'Credentials',
      'pages.sidebar.item.logout': 'Logout',
      'pages.products.header': 'Products',
      'pages.products.button.newProduct': ' New product',
      'pages.products.label.code': 'Code',
      'pages.products.label.name': 'Name',
      'pages.products.label.family': 'Family',
      'pages.products.label.productType': 'Product Type',
      'pages.products.label.productType.bought': 'Bought',
      'pages.products.label.productType.produced': 'Produced',
      'pages.products.label.unitType': 'Unit',
      'pages.products.label.leadTime': 'Lead time',
      'pages.products.label.purchasePrice': 'Purchase price',
      'pages.products.label.description': 'Description',
      'pages.products.button.save': 'Save',
      'pages.products.button.close': 'Close',
      'pages.structure.header': 'Products structure',
      'pages.structure.relation.edit.quantity': 'Edit quantity',
      'pages.structure.relation.message': 'O produto {{this.relationshipData.parent.text}} possui {{this.relationshipData.quantity}} do produto {{this.relationshipData.node.text}}',
      'pages.structure.relation.children.quantity': 'Children quantity',
      'pages.structure.relation.header': 'Relationship data',
      'pages.structure.relation.fathersName': 'Father\'s name',
      'pages.structure.treeview.general': 'alterar',
      'pages.structure.relation.created': 'Product has been associated',
      'pages.structure.relation.remove': 'Product has been diassociated',
      'pages.structure.relation.children.error': 'Erro occured while get childreen',
      'pages.necessity.header': 'Necessity',
      'pages.messages.necessityItem.fields.productName': '',
      'pages.messages.necessityItem.fields.quantity': '',
      'pages.messages.necessityItem.fields.deadline': ''
    }

    vuejs.locales(this.languages)

  }
}
