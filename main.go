package main

import (
	"github.com/astaxie/beego"
	_ "github.com/cjf93/wakr-server/routers"
)

func main() {
	beego.Run()
}
