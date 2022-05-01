package main

import (
	"context"
	"fmt"

	gojsonq "github.com/thedevsaddam/gojsonq/v2"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}


// Greet returns a greeting for the given name
func (a *App) GetAll() string {
	jq := gojsonq.New().File("./db/data/ammos.json")
	res := jq.First()
	return fmt.Sprintln(res)
}
