const resultado = prompt ('Escolha uma alternativa...\n Alternatia A\n Alternatia B\n Alternatia C\n Alternatia D\n')

switch (resultado){
    case "A":
        alert('O Resultado e A')
        break
    case "B":
        alert('O resultado e B')
        break
    case 3:
        alert("O resultado e C")
        break
    case 4:
        alert("O resultado e D")
        break
    default:
        alert('Finalizando...')
}