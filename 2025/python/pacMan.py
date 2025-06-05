import pygame
import sys

# Inicializar Pygame
pygame.init()

# Configuración de la pantalla
WIDTH, HEIGHT = 600, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Pac-Man")

# Colores
BLACK = (0, 0, 0)
YELLOW = (255, 255, 0)
BLUE = (0, 0, 255)

# Configuración del jugador (Pac-Man)
player_size = 30
player_x = WIDTH // 2
player_y = HEIGHT // 2
player_speed = 5

# Configuración del fantasma
ghost_size = 30
ghost_x = WIDTH // 4
ghost_y = HEIGHT // 4
ghost_speed = 3

# Bucle principal del juego
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Manejo de teclas para mover a Pac-Man
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player_x -= player_speed
    if keys[pygame.K_RIGHT]:
        player_x += player_speed
    if keys[pygame.K_UP]:
        player_y -= player_speed
    if keys[pygame.K_DOWN]:
        player_y += player_speed

    # Movimiento del fantasma
    if ghost_x < player_x:
        ghost_x += ghost_speed
    if ghost_x > player_x:
        ghost_x -= ghost_speed
    if ghost_y < player_y:
        ghost_y += ghost_speed
    if ghost_y > player_y:
        ghost_y -= ghost_speed

    # Dibujar todo en la pantalla
    screen.fill(BLACK)
    pygame.draw.circle(screen, YELLOW, (player_x, player_y), player_size)
    pygame.draw.circle(screen, BLUE, (ghost_x, ghost_y), ghost_size)

    # Actualizar la pantalla
    pygame.display.flip()

# Salir de Pygame
pygame.quit()
sys.exit()
