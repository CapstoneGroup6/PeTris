export const Action = {
    Left: "Left",
    Right: "Right",
    Rotate: "Rotate",
    FastDrop: "FastDrop",
    SlowDrop: "SlowDrop",
    Pause: "Pause",
    Quit: "Quit"
}

export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
}

export const actionForKey = keyCode => Key[keyCode];