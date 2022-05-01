package main

import (
	"embed"
	"fmt"

	"github.com/thedevsaddam/gojsonq/v2"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	jq := gojsonq.New().File("./db/data/ammos.json")
	res := jq.First()
	 fmt.Println(res)
	// // Create an instance of the app structure
	// app := NewApp()

	// // Create application with options
	// err := wails.Run(&options.App{
	// 	Title:  "Elden Ring Overlay",
	// 	Width:  1024,
	// 	Height: 768,
	// 	Assets: assets,
	// 	AlwaysOnTop: true,
	// 	        HideWindowOnClose: false,
    //     RGBA:              &options.RGBA{R: 0, G: 0, B: 0, A: 255},
    //     Frameless:         true,
	// 	Bind: []interface{}{
	// 		app,
	// 	},
	// })

	// if err != nil {
	// 	println("Error:", err)
	// }
}
