import Matter from "matter-js";

const Bird = () => {
    return()
}

export default (world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x, pos.y, size.width, size.height, {
            label: 'Bird'
        }
    )

    Matter.world.add(world, [initialBird])

    return {
        body: initialBird, 
        color,
        pos,
        renderer: <Bird />
    }
}